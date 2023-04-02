import { SupabaseClient } from "@supabase/supabase-js";

export interface QuestionWithOptions {
  id: string;
  question: string;
  options: {
    id: string;
    option: string;
  }[];
}

export class QuestionWithOptionsDAO {
  private _client: SupabaseClient;

  constructor(client: SupabaseClient) {
    this._client = client;
  }

  async fetch({
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
