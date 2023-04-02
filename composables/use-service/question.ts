import { useQuery } from "@tanstack/vue-query";
import { QuestionWithOptionsDAO } from "~/daos";

export const useQuestionService = () => {
  const client = useSupabaseClient();
  const dao = new QuestionWithOptionsDAO(client);
  const { data, suspense } = useQuery({
    queryKey: ["questions"],
    queryFn: () => dao.fetch(),
  });

  onServerPrefetch(async () => {
    await suspense();
  });

  return { data };
};
