import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/sjquant/dev/thatorthis/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}