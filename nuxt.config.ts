// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr:true,

  nitro: {
    baseURL: "/",
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/o-nama',
        '/servis-japanskih-vozila',
        '/servis-japanskih-vozila/daihatsu',
        '/servis-japanskih-vozila/honda',
        '/servis-japanskih-vozila/isuzu',
        '/servis-japanskih-vozila/mazda',
        '/servis-japanskih-vozila/mitsubishi',
        '/servis-japanskih-vozila/nissan',
        '/servis-japanskih-vozila/subaru',
        '/servis-japanskih-vozila/suzuki',
        '/servis-japanskih-vozila/toyota',
        '/servis-korejskih-vozila',
        '/servis-korejskih-vozila/kia',
        '/servis-korejskih-vozila/hyundai',
        '/servis-korejskih-vozila/chevrolet',
      ]
    }
  },

  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
      }
    ]
  },
})