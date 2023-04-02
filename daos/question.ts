import { SupabaseClient } from "@supabase/supabase-js";

export interface Option {
  id: string;
  option: string;
}
export interface QuestionWithOptions {
  id: string;
  question: string;
  options: {
    id: string;
    option: string;
  }[];
}

export class QuestionDAO {
  private _client: SupabaseClient;

  constructor(client: SupabaseClient) {
    this._client = client;
  }

  async fetchQuestionsWithOptions({
    limit = 10,
  }: {
    limit?: number;
  } = {}): Promise<QuestionWithOptions[]> {
    const { data, error } = await this._client
      .from("questions")
      .select(
        `
        id,
        question,
        options (
          id,
          option
        )`
      )
      .limit(limit);
    if (error) {
      throw error;
    }
    // @ts-ignore
    return data;
  }
}
