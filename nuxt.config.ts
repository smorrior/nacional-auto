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
        '/nacional-auto/o-nama',
        '/nacional-auto/servis-japanskih-vozila',
        '/nacional-auto/servis-japanskih-vozila/daihatsu',
        '/nacional-auto/servis-japanskih-vozila/honda',
        '/nacional-auto/servis-japanskih-vozila/isuzu',
        '/nacional-auto/servis-japanskih-vozila/mazda',
        '/nacional-auto/servis-japanskih-vozila/mitsubishi',
        '/nacional-auto/servis-japanskih-vozila/nissan',
        '/nacional-auto/servis-japanskih-vozila/subaru',
        '/nacional-auto/servis-japanskih-vozila/suzuki',
        '/nacional-auto/servis-japanskih-vozila/toyota',
        '/nacional-auto/servis-korejskih-vozila',
        '/nacional-auto/servis-korejskih-vozila/kia',
        '/nacional-auto/servis-korejskih-vozila/hyundai',
        '/nacional-auto/servis-korejskih-vozila/chevrolet',
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