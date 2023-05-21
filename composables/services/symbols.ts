import { InjectionKey } from "vue";
import { useAuth } from "./auth";
import { useTrendingQuestions, useVote } from "./question";
import { useSearchImages } from "./image";

export const symbols = Object.freeze({
  authSvc: Symbol("authSvc") as InjectionKey<ReturnType<typeof useAuth>>,
  trendingQuestionsSvc: Symbol("trendingQuestionsSvc") as InjectionKey<
    ReturnType<typeof useTrendingQuestions>
  >,
  voteSvc: Symbol("voteSvc") as InjectionKey<ReturnType<typeof useVote>>,
  searchImagesSvc: Symbol("searchImagesSvc") as InjectionKey<
    ReturnType<typeof useSearchImages>
  >,
});
