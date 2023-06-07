import { useQuery, useMutation } from "@tanstack/vue-query";
import { QuestionClient, VoteBody } from "~~/apis";

export const useTrendingQuestions = () => {
  const supabase = useSupabaseClient();
  const client = new QuestionClient(supabase);
  const { data, suspense } = useQuery({
    queryKey: ["trending-questions"],
    queryFn: () => client.fetchTrendingQuestions(),
    placeholderData: [],
  });

  onServerPrefetch(async () => {
    await suspense();
  });

  return { data };
};

export const useVote = () => {
  const supabase = useSupabaseClient();
  const client = new QuestionClient(supabase);
  const { isLoading, mutateAsync: vote } = useMutation({
    mutationFn: (data: VoteBody) => client.vote(data),
  });

  return {
    isLoading,
    vote,
  };
};
