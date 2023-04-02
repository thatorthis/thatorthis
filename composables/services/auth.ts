import { SignInWithOAuthCredentials } from "@supabase/supabase-js";

export const useAuthService = () => {
  const client = useSupabaseAuthClient();

  async function signInWithOAuth(credentials: SignInWithOAuthCredentials) {
    return await client.auth.signInWithOAuth(credentials);
  }

  async function signOut() {
    return await client.auth.signOut();
  }

  return { signInWithOAuth, signOut };
};
