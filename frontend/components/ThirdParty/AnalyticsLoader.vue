<!-- components/AnalyticsLoader.vue -->
 <template>
  <!-- Ce composant ne rend rien -->
 </template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCookieConsent } from '~/composables/useCookieConsent'

const { consent } = useCookieConsent()

onMounted(() => {
  if (!consent.value.analytics) return

  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  const script = document.createElement('script')
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'
  script.async = true
  script.onload = () => {
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXX')
  }

  document.head.appendChild(script)
})
</script>
