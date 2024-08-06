export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  devtools: { enabled: true },

  runtimeConfig: {
    apiNinjaKey: process.env.apiNinjaKey
  }
})
function defineNuxtConfig(arg0: {
  // https://github.com/nuxt-themes/docus
  extends: string[]; devtools: { enabled: boolean; }; runtimeConfig: { apiNinjaKey: string; };
}) {
  throw new Error("Function not implemented.");
}

