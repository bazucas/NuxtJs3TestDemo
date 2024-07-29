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
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         // Adicione aqui quaisquer importações globais que você queira em todos os arquivos SCSS.
  //         // Exemplo: variáveis, mixins, etc.
  //         additionalData: `@import "@/assets/scss/_variables.scss";`
  //       },
  //     },
  //   },
  // },
  // O restante da configuração permanece o mesmo
  // hooks: {
  //   'pages:extend'(routes: NuxtPage[]) {
  //     routes.push({
  //       name: 'validation',
  //       path: '/validation/:id?',
  //       file: 'pages/routeValidation/id.vue'
  //     });
  //   }
  // }
})