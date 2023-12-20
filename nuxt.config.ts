// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: [
  //   '@nuxtjs/style-resources',
  // ],
  css: ["@/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  modules: [
    'nuxt-swiper'
  ],
  // runtimeConfig: {
  //   newsApi: 'NEWS_API'
  // }
})
