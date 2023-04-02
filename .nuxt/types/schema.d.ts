import { NuxtModule } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["supabase"]?: typeof import("@nuxtjs/supabase").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pwa"]?: typeof import("@kevinmarrec/nuxt-pwa").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ionic"]?: typeof import("@nuxtjs/ionic").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/supabase", Exclude<NuxtConfig["supabase"], boolean>] | ["@kevinmarrec/nuxt-pwa", Exclude<NuxtConfig["pwa"], boolean>] | ["@nuxtjs/ionic", Exclude<NuxtConfig["ionic"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   supabase: {
      serviceKey: any,
   },
  }
  interface PublicRuntimeConfig {
   supabase: {
      url: string,

      key: string,

      client: any,

      redirect: boolean,

      cookies: {
         name: string,

         lifetime: number,

         domain: string,

         path: string,

         sameSite: string,
      },
   },

   pwaManifest: {
      name: string,

      short_name: string,

      description: string,

      lang: string,

      start_url: string,

      display: string,

      background_color: string,

      theme_color: string,

      icons: Array<any>,
   },
  }
}