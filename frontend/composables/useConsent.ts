// composables/useConsent.ts
import { ref, onMounted } from 'vue'

type Consent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  youtube: boolean
  facebook: boolean
  maps: boolean
}

const storedConsent = ref<Consent>({
  necessary: true,
  analytics: false,
  marketing: false,
  youtube: false,
  facebook: false,
  maps: false,
})

export function useConsent() {
  onMounted(() => {
    try {
      const raw = localStorage.getItem('userConsent')
      if (raw) {
        const parsed = JSON.parse(raw)
        storedConsent.value = parsed.consent || storedConsent.value
      }
    } catch (err) {
      console.warn('Consent parsing error:', err)
    }
  })

  return storedConsent
}
