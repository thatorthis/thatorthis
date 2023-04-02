export * from "./question";
import { QuestionDAO } from "./question";

export const symbols = Object.freeze({
  question: Symbol("question") as InjectionKey<QuestionDAO>,
});
