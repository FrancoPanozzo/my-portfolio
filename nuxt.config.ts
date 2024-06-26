// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // nitro: {
  //   static: true
  // },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/fonts',
    'shadcn-nuxt'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr', file: 'en.ts' },
      { code: 'fr', iso: 'fr-FR', dir: 'ltr', file: 'fr.ts' },
      { code: 'es', iso: 'es-ES', dir: 'ltr', file: 'es.ts' }
    ],
    // detectBrowserLanguage: false,
    strategy: 'prefix',
    // lazy: true,
    langDir: 'lang',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang_locale',
      redirectOn: 'root' // recommended
    }
  },
  fonts: {
    families: [
      { name: 'Poetsen One', provider: 'google' },
      { name: 'Ubuntu Sans', provider: 'google' }
    ]
  },
  site: {
    url: 'https://example.com',
    name: "Franco Panozzo's Portfolio",
    description: 'Portfolio website of Franco Panozzo, web developer.'
  },
  shadcn: {
    prefix: ''
  }
})
