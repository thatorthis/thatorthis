// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase"],
  css: ["@/assets/css/base.scss", "vue-final-modal/style.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/css/global.scss";`,
        },
      },
    },
  },
  supabase: {
    // Options
  },
});
