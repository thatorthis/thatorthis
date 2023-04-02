import { useQuery } from "@tanstack/vue-query";
import { QuestionWithOptionsDAO } from "~/daos";

export const useTrendingQuestions = () => {
  const client = useSupabaseClient();
  const dao = new QuestionWithOptionsDAO(client);
  const { data, suspense } = useQuery({
    queryKey: ["trending-questions"],
    queryFn: () => dao.fetch(),
  });

  onServerPrefetch(async () => {
    await suspense();
  });

  return { data };
};
