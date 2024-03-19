// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    defaultLocale: 'gb',
    strategy: 'no_prefix',
    langDir: 'locales',
    lazy: true,
    locales: [
      {
        code: 'gb',
        iso: 'en-GB',
        file: 'en-GB.json',
        name: 'English (GB)',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja-JP.json',
        name: 'Japanese',
      },
    ],
  },
})
