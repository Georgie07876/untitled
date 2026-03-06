export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', '@nuxt/eslint'],

  googleFonts: {
    families: {
      'JetBrains+Mono': [400, 700]
    },
    display: 'swap'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },

  future: {
    compatibilityVersion: 4
  },

  css: ['~/assets/scss/main.scss'],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
