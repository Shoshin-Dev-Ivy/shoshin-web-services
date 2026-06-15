/* backend/src/routes/admin.ts */
import { Router, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router = Router()

// Variables d'environnement
const ADMIN_KEY_HASH = process.env.ADMIN_KEY_HASH
const JWT_SECRET = process.env.JWT_SECRET

if (!ADMIN_KEY_HASH || !JWT_SECRET) {
  console.error('❌ ADMIN_KEY_HASH ou JWT_SECRET manquant')
  process.exit(1)
}

// Middleware de vérification JWT
export const verifyAdmin = (req: Request, res: Response, next: any) => {
  const token = req.cookies.admin_token

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  try {
    jwt.verify(token, JWT_SECRET!)
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}

// Login avec bcrypt + JWT + cookie HttpOnly
router.post('/login', async (req: Request, res: Response) => {
  const { key } = req.body

  if (!key) {
    return res.status(400).json({ error: 'Key required' })
  }

  try {
    // Vérification avec bcrypt
    const isValid = await bcrypt.compare(key, ADMIN_KEY_HASH!)

    if (!isValid) {
      // Délai anti-bruteforce
      await new Promise(resolve => setTimeout(resolve, 1000))
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Génération JWT
    const token = jwt.sign(
      { role: 'admin', timestamp: Date.now() },
      JWT_SECRET!,
      { expiresIn: '1h' }
    )

    // Cookie HttpOnly + Secure + SameSite
    res.cookie('admin_token', token, {
      httpOnly: true,      // Inaccessible via JavaScript
      secure: process.env.NODE_ENV === 'production', // HTTPS only en prod
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',  // 'none' en prod pour cross-domain
       maxAge: 3600000,
      path: '/',
      domain: process.env.NODE_ENV === 'production' 
        ? '.shoshin-web-services.com'  // Domaine partagé frontend/backend
        : undefined
    })

    return res.json({ success: true })
  } catch (error) {
    console.error('[admin:login] Erreur:', error)
    return res.status(500).json({ error: 'Authentication error' })
  }
})

// Check avec middleware
router.get('/check', verifyAdmin, (_req: Request, res: Response) => {
  return res.json({ authenticated: true })
})

// Logout - supprime le cookie
router.post('/logout', (_req: Request, res: Response) => {
  res.clearCookie('admin_token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',  // Pareil que login
    path: '/',
    domain: process.env.NODE_ENV === 'production' 
      ? '.shoshin-web-services.com' 
      : undefined
  })

  return res.json({ success: true })
})

export default router

