/* nuxt.config.ts */
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Shoshin Web Services',
      meta: [
        { property: 'og:title', content: 'Shoshin Web Services' },
        { property: 'og:description', content: 'Des services web de qualité avec des solutions évolutives.' },
        { property: 'og:image', content: 'https://www.shoshin-web-services.com/images/HomeSWS.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://www.shoshin-web-services.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Shoshin Web Services' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Shoshin Web Services' },
        { name: 'twitter:description', content: 'Des services web de qualité avec des solutions évolutives.' },
        { name: 'twitter:image', content: 'https://www.shoshin-web-services.com/images/HomeSWS.webp' },
        { name: 'twitter:url', content: 'https://www.shoshin-web-services.com' },
        
        {
          'http-equiv': 'Content-Security-Policy',
          content: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https:",
            "font-src 'self'",
            `connect-src 'self' ${process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:4000'} ws://localhost:4001`,
            "frame-src https://www.google.com https://calendly.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'"
          ].join('; ')
        }
      ]
    },
  },

  css: [
    'swiper/css',
    'swiper/css/effect-coverflow',
    'swiper/css/navigation',
    'swiper/css/pagination',
    '~/assets/css/main.css',
  ],

  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    'nuxt-headlessui',
    'nuxt-anchorscroll',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'fr', language: 'fr-FR' },
      { code: 'en', language: 'en-US' },
      { code: 'ja', language: 'ja-JP' },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  colorMode: {
    preference: 'light',
  },

  runtimeConfig: {
    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:4000',
    },
  },
})