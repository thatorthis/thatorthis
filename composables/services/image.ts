import { inject, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { symbols, UnsplashDAO } from "~/daos";

export const useSearchImages = (keyword: Ref<string>) => {
  const config = useRuntimeConfig();
  const dao = inject(
    symbols.image,
    new UnsplashDAO(config.public.unsplashClientId)
  );

  const { data: images } = useQuery({
    queryKey: ["search-image", keyword],
    queryFn: async () => {
      if (!keyword.value) {
        return [];
      }
      return await dao.searchImages(keyword.value);
    },
    placeholderData: [],
    cacheTime: 0,
  });

  return { images };
};
