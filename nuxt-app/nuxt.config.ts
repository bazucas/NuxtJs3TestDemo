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
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in"
    },
    layoutTransition: {
      name: "page",
      mode: "out-in"
    }
  //   head: {
  //     charset: "utf-8",
  //     viewport: "width=device.width, initial-scale=2",
  //     title: "NuxtJS App",
  //     meta: [{
  //       name: "description",
  //       content: "Nuxt Demo"
  //     }],
  //     link: [{
  //       rel: "stylesheet",
  //       href: "~/assets/styles/style.css"
  //     }]
  //   }
  }
})