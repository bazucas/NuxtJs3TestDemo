// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss', 
    '~/assets/css/main.css',
    'animate.css'], // Importar o arquivo SCSS principal
  //modules: ['@nuxtjs/tailwindcss'], //another way of importing npm i nuxtjs/tailwindcss
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },
})