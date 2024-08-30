// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {

    head: {
      title: 'A Better Nuxt 3 Starter',
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.svg' }],
      script: [
        {
          src: '/js/flexible.js',
        },
      ]
    }

  },

  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['last 5 version', '>1%', 'ie >=8'],
      },
      'postcss-pxtorem': {
        rootValue: 100,
        propList: ['*'],
        mediaQuery: true,
        exclude: /(node_modules)/,
        replace: true,
        minPixelValue: 1,
        unitPrecision: 6,

      },
    },
  },

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/style-resources',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  styleResources: {
    less: [
      '~/assets/less/global.less'
    ]
  },
  css: ['~/assets/less/global.less'],
  nitro: {
    prerender: {

    }

  },
  generate: {

  },
  router: {

  },
  runtimeConfig: {
    // Private keys are only available on the server
    // apiSecret: '123',
    // Public keys that are exposed to the client

    public: {
      apiBaseURL: process.env.NUXT_PUBLIC_API_BASE
    }
  },

  pinia: {
    autoImports: ['defineStore']
  },

  piniaPersistedstate: {
    storage: 'sessionStorage'
  },

  imports: {
    dirs: ['store/**', 'apis/**']
  },

  vite: {
    plugins: [
    ]
  },

  compatibilityDate: '2024-08-28'
})