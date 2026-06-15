/* backend/src/controllers/contact.controller.ts */
import { Request, Response } from 'express'
import nodemailer from 'nodemailer'
import sanitizeHtml from 'sanitize-html'
import fetch from 'node-fetch'

interface ContactBody {
  name: string
  email: string
  message: string
  recaptchaToken: string
}

interface RecaptchaResponse {
  success: boolean
  score?: number
  action?: string
  challenge_ts?: string
  hostname?: string
  'error-codes'?: string[]
}

const contactHandler = async (req: Request, res: Response) => {
  const { name, email, message, recaptchaToken } = req.body as ContactBody

  // Validation des champs requis
  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({
      message: 'Données manquantes : Veuillez remplir tous les champs.'
    })
  }

  // Validation du format email côté serveur
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Format d\'email invalide.'
    })
  }

  // Validation longueur message
  if (message.length > 250) {
    return res.status(400).json({
      message: 'Le message ne peut pas dépasser 250 caractères.'
    })
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY

  if (!recaptchaSecret) {
    return res.status(500).json({
      message: 'Clé reCAPTCHA manquante côté serveur.'
    })
  }

  // Timeout reCAPTCHA (3 secondes)
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)

  let recaptchaRes

  try {
    recaptchaRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: recaptchaToken
        }),
        signal: controller.signal
      }
    )
  } catch (error: any) {
    clearTimeout(timeout)
    
    if (error.name === 'AbortError') {
      return res.status(504).json({
        message: 'reCAPTCHA timeout : Google n\'a pas répondu.'
      })
    }

    return res.status(500).json({
      message: 'Erreur lors de la vérification reCAPTCHA.'
    })
  } finally {
    clearTimeout(timeout)
  }

  const recaptchaData = (await recaptchaRes.json()) as RecaptchaResponse

  if (!recaptchaData.success) {
    return res.status(400).json({
      message: `Échec de la vérification reCAPTCHA : ${
        recaptchaData['error-codes']?.join(', ') ?? 'unknown error'
      }`
    })
  }

  // Vérification du hostname (accepte localhost avec ou sans port)
  const allowedHostnames = [
    'shoshin-web-services.com',
    'www.shoshin-web-services.com',
    'localhost',
    'localhost:3000'
  ]

  const hostname = recaptchaData.hostname ?? ''
  const isHostnameValid = allowedHostnames.some(allowed => 
    hostname === allowed || hostname.startsWith(allowed)
  )

  if (!isHostnameValid) {
    // Log sécurisé (hash du hostname)
    const crypto = await import('crypto')
    const hostnameHash = crypto.createHash('sha256').update(hostname).digest('hex').substring(0, 8)
    console.error('[contact] Hostname invalide (hash):', hostnameHash)
    
    return res.status(403).json({
      message: 'reCAPTCHA hostname invalide.'
    })
  }

  // Vérification du score + action
  if (
    typeof recaptchaData.score !== 'number' ||
    recaptchaData.score < 0.5 ||
    recaptchaData.action !== 'submit'
  ) {
    console.error('[contact] Score ou action invalide:', {
      score: recaptchaData.score,
      action: recaptchaData.action
    })
    
    return res.status(403).json({
      message: 'reCAPTCHA rejeté (score insuffisant ou action invalide).'
    })
  }

  // Sanitization des données
  const cleanName = sanitizeHtml(name.trim())
  const cleanEmail = email.trim().toLowerCase()
  const cleanMessage = sanitizeHtml(message.trim())

  // Vérification configuration email
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
    return res.status(500).json({
      message: 'Configuration email serveur incomplète.'
    })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    // Email vers l'administrateur
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'Nouveau message de contact',
      html: `
        <p><strong>Nom:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage}</p>
      `
    })

    // Email de confirmation vers l'utilisateur
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: cleanEmail,
      ...(process.env.BCC_EMAIL ? { bcc: process.env.BCC_EMAIL } : {}),
      subject: 'Confirmation de votre message à Shoshin Web Services',
      html: `
        <p>Bonjour ${cleanName},</p>
        <p>Merci pour votre message ! Nous l'avons bien reçu, et vous répondrons rapidement.</p>
        <blockquote>${cleanMessage}</blockquote>
        <p>Cordialement,<br>Pierre Tinard<br><strong>Shoshin Web Services</strong></p>
      `
    })

    return res.json({
      success: true,
      message: 'Formulaire envoyé avec succès.'
    })
  } catch (error) {
    console.error('[contact] Erreur nodemailer:', error)
    return res.status(500).json({
      message: 'Une erreur est survenue lors de l\'envoi de l\'email.'
    })
  }
}

export default contactHandler
