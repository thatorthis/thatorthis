import { SupabaseClient } from "@supabase/supabase-js";

export interface Option {
  id: string;
  option: string;
}
export interface QuestionWithOptions {
  id: string;
  question: string;
  options: Option[];
}

interface OptionIdAndVoteCount {
  option_id: string;
  options: { count: number };
}
export interface OptionIdToVoteCount {
  [optionId: string]: number;
}

export class QuestionDAO {
  private _client: SupabaseClient;

  constructor(client: SupabaseClient) {
    this._client = client;
  }

  async fetchTrendingQuestions({
    limit = 10,
  }: {
    limit?: number;
  } = {}): Promise<QuestionWithOptions[]> {
    const { data, error } = await this._client
      .from("trending_questions")
      .select("*")
      .limit(limit);
    if (error) {
      throw error;
    }

    return data as QuestionWithOptions[];
  }

  async fetchVoteCountForOption(
    optionIds: string[]
  ): Promise<OptionIdToVoteCount> {
    const { data, error } = await this._client
      .from("votes")
      .select("option_id, options(count)")
      .in("option_id", optionIds);

    if (error) {
      throw error;
    }

    return (data as OptionIdAndVoteCount[]).reduce(
      (
        acc: OptionIdToVoteCount,
        { option_id, options }: OptionIdAndVoteCount
      ) => {
        acc[option_id] = options.count;
        return acc;
      },
      {}
    );
  }
}
