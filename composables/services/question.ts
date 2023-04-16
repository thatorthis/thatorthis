import { useQuery } from "@tanstack/vue-query";
import { symbols, QuestionDAO } from "~/daos";

export const useTrendingQuestions = () => {
  const client = useSupabaseClient();
  const dao = inject(symbols.question, new QuestionDAO(client));
  const { data, suspense } = useQuery({
    queryKey: ["trending-questions"],
    queryFn: () => dao.fetchTrendingQuestions(),
    placeholderData: [],
  });

  onServerPrefetch(async () => {
    await suspense();
  });

  return { data };
};
