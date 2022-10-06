import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    'nuxt-schema-org',
  ],

  schemaOrg: {
    meta: {
      host: 'https://timbenniks.dev',
    }
  },
})