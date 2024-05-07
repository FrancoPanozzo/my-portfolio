// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/seo",
  ],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang_locale",
      redirectOn: "root", // recommended
    },
  },
});
