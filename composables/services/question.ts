import { useQuery, useMutation } from "@tanstack/vue-query";
import { symbols, QuestionDAO, VoteBody } from "~/daos";

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

export const useVote = () => {
  const client = useSupabaseClient();
  const dao = inject(symbols.question, new QuestionDAO(client));
  const { isLoading, mutateAsync: vote } = useMutation({
    mutationFn: (data: VoteBody) => dao.vote(data),
  });

  return {
    isLoading,
    vote,
  };
};
