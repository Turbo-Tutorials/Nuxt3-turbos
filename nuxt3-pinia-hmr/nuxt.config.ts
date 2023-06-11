export default defineNuxtConfig({
  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
  ]],
  imports: {
    dirs: ['stores'],
  },
})
