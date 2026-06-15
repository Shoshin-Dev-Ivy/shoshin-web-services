<!-- components/ContactForm.vue -->
<template>
<section class="bg-sky-600 dark:bg-sky-800 mx-auto rounded-2xl w-auto md:w-96 lg:w-96 lg:content-center 2xl:w-96 -mt-4 -my-14 mb-4 pt-4">
<div class="py-8 lg:py-16 px-8">
<h2 class="text-center w-auto mb-4 -mt-6 text-3xl tracking-tight text-white">{{ $t("Echangeons")}}</h2>
<ClientOnly>
<form @submit.prevent="envoyerFormulaire" class="flex flex-col space-y-8">
<div>
<label for="name" name="name" class="text-lg font-medium text-white">{{ $t("Nom") }}</label>
<input v-model="form.name" type="text" id="name" :placeholder="$t('EntrezNom')"
class="mt-4 shadow-sm bg-sky-50 border-gray-300 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/>
</div>
<div>
<label for="email" class="text-lg font-medium text-white">{{ $t("Email") }}</label>
<input v-model="form.email" type="email" id="email" required :placeholder="$t('EntrezEmail')"
class="mt-4 shadow-sm bg-sky-50 border-gray-300 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/>
</div>
<div>
<label for="message" class="text-lg font-medium text-white">{{ $t("Message") }}</label>
<textarea id="message" rows="6" maxlength="250" v-model="form.message" required :placeholder="$t('EntrezMessage')"
class="mt-4 p-2.5 w-full text-base text-gray-900 bg-sky-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
</textarea>
<p class="text-white">{{ form.message.length }} / 250 {{ $t("Caracteres") }}</p>
</div>

<!-- Honeypot bot field -->
<div style="display: none;" aria-hidden="true">
<input v-model="form.botField" type="text" tabindex="-1" autocomplete="off" />
</div>

<button type="submit" :disabled="isSubmitting"
class="m-auto -mb-4 py-3 px-5 text-lg text-center font-black text-orange-400 rounded-lg bg-sky-50 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:bg-sky-900 dark:focus:ring-primary-800">
<span v-if="isSubmitting">Envoi en cours...</span>
<span v-else>{{ $t("Submit") }}</span>
</button>

<p class="my-6 text-center -mb-4 text-white text-lg" v-if="statusMessage" :style="{ color: isSubmitting ? 'blue' : 'white' }">
{{ statusMessage }}
</p>
</form>
</ClientOnly>
</div>
</section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRuntimeConfig, useState } from '#imports'

// Déclaration TypeScript pour window.grecaptcha
declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
      render: (container: string | HTMLElement, parameters: any) => string
      reset: (widgetId?: string) => void
      getResponse: (widgetId?: string) => string
    }
  }
}

const config = useRuntimeConfig()

const form = useState('form', () => ({
  name: '',
  email: '',
  message: '',
  botField: '',
}))

const statusMessage = ref('')
const isSubmitting = ref(false)

/**
 * Validation côté client (complément de la validation serveur)
 */
const validateForm = () => {
  if (!form.value.email || !form.value.message) {
    statusMessage.value = 'Tous les champs sont requis.'
    return false
  }

  // Validation email renforcée
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email)) {
    statusMessage.value = "L'email est invalide."
    return false
  }

  // Validation longueur message
  if (form.value.message.length > 250) {
    statusMessage.value = 'Le message ne peut pas dépasser 250 caractères.'
    return false
  }

  return true
}

/**
 * Envoi du formulaire avec reCAPTCHA
 */
const envoyerFormulaire = async () => {
  // Détection bot via honeypot
  if (form.value.botField !== '') {
    if (import.meta.dev) {
      console.warn('[ContactForm] Bot détecté via honeypot')
    }
    return
  }

  // Validation
  if (!validateForm()) return

  isSubmitting.value = true
  statusMessage.value = ''

  try {
    // Vérification consentement reCAPTCHA
    const consent = JSON.parse(localStorage.getItem('cookieConsent') || '{}')

    if (!consent.recaptcha) {
      statusMessage.value = "Veuillez accepter le cookie reCAPTCHA pour envoyer le message."
      return
    }

    // Vérification disponibilité reCAPTCHA
    if (!window.grecaptcha) {
      statusMessage.value = "Le service reCAPTCHA n'est pas encore prêt."
      return
    }
    
    // Génération token reCAPTCHA
    const token = await window.grecaptcha.execute(config.public.recaptchaSiteKey, { action: 'submit' })
  
    const payload = {
      name: form.value.name || 'Visiteur du site',
      email: form.value.email.trim().toLowerCase(),
      message: form.value.message.trim(),
      recaptchaToken: token,
    }

    // Envoi vers API
    const response = await fetch(`${config.public.apiBaseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    
    const data = await response.json()

    if (response.ok) {
      statusMessage.value = 'Votre message a bien été envoyé ✓'
      // Reset du formulaire
      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
    } else {
      statusMessage.value = data.message || 'Erreur lors de l\'envoi.'
    }
  } catch (error) {
    // Log uniquement en développement
    if (import.meta.dev) {
      console.error('[ContactForm] Erreur:', error)
    }
    
    statusMessage.value = 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  nextTick(() => {
    if (form.value.message === undefined) {
      form.value.message = ''
    }
  })

  // Chargement reCAPTCHA si consentement
  const consent = JSON.parse(localStorage.getItem('cookieConsent') || '{}')

  if (consent.recaptcha && !document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]')) {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${config.public.recaptchaSiteKey}`
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }
})
</script>