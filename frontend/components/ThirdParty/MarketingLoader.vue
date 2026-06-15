<!-- components/MarketingLoader.vue -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCookieConsent } from '~/composables/useCookieConsent'

const { consent } = useCookieConsent()

onMounted(() => {
  if (!consent.value.marketing) return

  // Vérifie si le script n'est pas déjà présent
  if (document.getElementById('ads-js')) return

  const script = document.createElement('script')
  script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXX' // <-- Remplace par ton ID réel
  script.async = true
  script.id = 'ads-js'
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  gtag('js', new Date())
  gtag('config', 'AW-XXXXXXX') // <-- Idem ici
})
</script>

<template>
  <!-- Ce composant ne rend rien -->
</template>
