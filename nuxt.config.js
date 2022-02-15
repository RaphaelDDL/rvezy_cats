export default {
  head: {
    title: 'RVezy Cats',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    CAT_API_URL: process.env.CAT_API_URL || '',
    CAT_API_KEY: process.env.CAT_API_KEY || '',
  },

  css: [{ src: '~/assets/scss/styles.scss', lang: 'sass' }],

  router: {
    // linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  },

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: process.env.CAT_API_URL || '',
    progress: true,
    retry: { retries: 1 },
    debug: false,
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
