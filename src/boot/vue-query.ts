// vue-query.js
import {
  VueQueryPlugin,
  QueryClient,
  hydrate,
  dehydrate,
} from '@tanstack/vue-query';

import { App } from 'vue';
import { SSRContext } from 'vue/server-renderer';

export default ({ app, ssrContext }: { app: App; ssrContext?: SSRContext }) => {
  // Create a fresh VueQuery client
  const queryClient = new QueryClient();

  // Sync initialState with the client state
  if (ssrContext) {
    // Dehydrate the client state during SSR and attach it to the ssrContext
    console.log(dehydrate(queryClient));
    ssrContext.vueQueryState = dehydrate(queryClient);
  } else {
    // Rehydrate the client state in the browser
    if (window.__VUE_QUERY_CONTEXT__ && window.__VUE_QUERY_CONTEXT__) {
      hydrate(queryClient, window.__VUE_QUERY_CONTEXT__);
    }
  }

  // Mount and provide the client to the app components
  app.use(VueQueryPlugin, { queryClient });
};

export { VueQueryPlugin };
