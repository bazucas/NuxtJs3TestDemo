// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import type { Plugin } from 'vite'

function customOutputPlugin(): Plugin {
  return {
    name: 'custom-css-plugin',
    enforce: 'post',
    generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.endsWith('.css')) {
          bundle['custom.css'] = { ...bundle[fileName], fileName: 'custom.css' }
          delete bundle[fileName]
        }
      }
    }
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/css/tailwind.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },
  vite: {
    plugins: [customOutputPlugin()]
  }
})