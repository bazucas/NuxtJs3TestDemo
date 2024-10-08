export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],

  devtools: { enabled: true },

  runtimeConfig: {
    apiNinjaKey: process.env.apiNinjaKey
  },

  compatibilityDate: '2024-08-06'
})