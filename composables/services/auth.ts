import { SignInWithOAuthCredentials } from "@supabase/supabase-js";
import { useQuery, useMutation, useQueryClient } from "@tanstack/vue-query";

export const useAuthService = () => {
  const client = useSupabaseAuthClient();
  const queryClient = useQueryClient();
  const {
    data: user,
    isLoading,
    suspense,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const {
        data: { user },
      } = await client.auth.getUser();
      return user;
    },
  });

  onServerPrefetch(async () => {
    await suspense();
  });

  const signInStatus = computed(() => {
    if (isLoading.value) return "IN_PROGRESS";
    if (user.value) return "SIGNED_IN";
    return "SIGNED_OUT";
  });

  const { mutateAsync: signInWithOAuth } = useMutation({
    mutationFn: (credentials: SignInWithOAuthCredentials) =>
      client.auth.signInWithOAuth(credentials),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  const { mutateAsync: signOut } = useMutation({
    mutationFn: () => client.auth.signOut(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });

  return { user, signInStatus, refetchUser, signInWithOAuth, signOut };
};
