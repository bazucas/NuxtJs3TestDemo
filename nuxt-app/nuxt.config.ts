// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import type { NuxtPage } from '@nuxt/schema'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // vite: {
  //   resolve: {
  //     alias: {
  //       'pages/routeValidation/id.vue': 'pages/routeValidation/id.vue',
  //     },
  //   },
  // },
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
