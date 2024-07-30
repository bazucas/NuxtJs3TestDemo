// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss', // SCSS principal onde os estilos são importados
    '~/assets/css/tailwind.css' // Arquivo CSS do Tailwind
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";'
        }
      }
    }
  }
})