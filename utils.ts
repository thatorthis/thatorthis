import { symbols, QuestionDAO } from "~/daos";

export function provideDaos() {
  const client = useSupabaseClient();
  provide(symbols.question, new QuestionDAO(client));
}
