import { Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { UnsplashClient } from "~~/apis";

export const useSearchImages = (keyword: Ref<string>) => {
  const config = useRuntimeConfig();
  const client = new UnsplashClient(config.public.unsplashClientId);

  const { data: images } = useQuery({
    queryKey: ["search-images", keyword],
    queryFn: async () => {
      if (!keyword.value) {
        return [];
      }
      return await client.searchImages(keyword.value);
    },
    placeholderData: [],
    cacheTime: 0,
  });

  return { images };
};
