// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
// import { defineNuxtModule } from 'nuxt'
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: 'upgrade-insecure-requests',
        }
      ],
    }
  },

  plugins: [
    { src: '~/plugins/map', mode: 'client' },
  ],

  modules: [
    '@primevue/nuxt-module',
    'nuxt-swiper',
    '@pinia/nuxt'
  ],


  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },

  swiper: {
    // Swiper options
    //----------------------
    prefix: 'Swiper',
    styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },


  css: ['~/assets/css/main.css', 'primeicons/primeicons.css']
})


