<!-- app.vue -->
<template>
  <div class="bg-sky-50 dark:bg-sky-900 mb-0 bg-cover box-shadow font-roboto">
    <ClientOnly>
      <IosBanner />
    </ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

      <!-- Consent Modal -->
      <CookieConsent />

      <!-- Load scripts conditionally -->
      <AnalyticsLoader v-if="consent.analytics" />
      <MarketingLoader v-if="consent.marketing" />
      <FacebookEmbed v-if="consent.marketing" />
      <YouTubeEmbed v-if="consent.youtube" />
      <GoogleMapsEmbed v-if="consent.googlemaps" />

      <Footer class="mt-auto" />
      <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAdminStore } from '~/stores/useAdminStore'
import { useHead, useI18n } from '#imports'
import { useCookieConsent } from '~/composables/useCookieConsent'

// Composants
import Footer from '~/components/layout/Footer.vue'
import ScrollToTop from '~/components/layout/ScrollToTop.vue'
import CookieConsent from '~/components/ui/CookieConsent.vue'
import IosBanner from '~/components/ui/IosBanner.vue'

// Composants tiers
import AnalyticsLoader from '~/components/ThirdParty/AnalyticsLoader.vue'
import MarketingLoader from '~/components/ThirdParty/MarketingLoader.vue'
import FacebookEmbed from '~/components/ThirdParty/FacebookEmbed.vue'
import YouTubeEmbed from '~/components/ThirdParty/YouTubeEmbed.vue'
import GoogleMapsEmbed from '~/components/ThirdParty/GoogleMapsEmbed.vue'

const admin = useAdminStore()

onMounted(async () => {
  // Refresh Pinia (via token)
  await admin.refresh()
})

// Localisation
const { locale } = useI18n()
useHead({ htmlAttrs: { lang: locale } })

// Consentement
const { consent } = useCookieConsent()

import useLanguageWatcher from '~/composables/useLanguageWatcher'

useLanguageWatcher()
</script>

<style>
/* Masquer le badge reCAPTCHA (obligation CNIL d'informer l'utilisateur) */
.grecaptcha-badge {
  visibility: hidden !important;
}
</style>
