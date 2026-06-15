// composables/useConsentScripts.ts
import { loadScript } from '~/utils/loadScript'

export const useConsentScripts = () => {
  const loadAnalytics = async () => {
    await loadScript('https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX')
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', 'G-XXXXXXX')
  }

  const loadYouTube = () => {
    // Rien à charger ici, YouTube est intégré via iframe
    // L’iframe doit être inséré uniquement après consentement (voir étape 4)
  }

  const loadFacebook = async () => {
    await loadScript('https://connect.facebook.net/fr_FR/sdk.js')
    // Configuration Facebook Pixel si nécessaire
  }

  const loadMaps = async () => {
    await loadScript(
      'https://maps.googleapis.com/maps/api/js?key=TA_CLE_API&libraries=places'
    )
  }

  return {
    loadAnalytics,
    loadYouTube,
    loadFacebook,
    loadMaps,
  }
}
