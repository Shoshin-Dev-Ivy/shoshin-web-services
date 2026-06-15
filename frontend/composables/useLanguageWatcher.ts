// composables/useLanguageWatcher.ts
import { useCookie } from '#app'
import { useI18n } from 'vue-i18n'

export default function useLanguageWatcher(): void {
  const { locale } = useI18n()
  const redirectedCookie = useCookie<string>('i18n_redirected')

  watch(locale, (newLocale) => {
    redirectedCookie.value = newLocale
  }, { immediate: true })
}

