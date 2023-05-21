import { SupabaseClient } from "@supabase/supabase-js";

export interface Option {
  userId: string;
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

export interface VoteBody {
  userId: string;
  questionId: string;
  optionId: string;
  reason?: string;
}

export class QuestionClient {
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

  async vote({
    userId,
    questionId,
    optionId,
    reason = "",
  }: VoteBody): Promise<void> {
    const { error } = await this._client.from("votes").insert({
      question_id: questionId,
      option_id: optionId,
      reason: reason,
      user_id: userId,
    });
    if (error) {
      throw error;
    }
  }
}
