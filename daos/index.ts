export * from "./image";
export * from "./question";
import { UnsplashDAO } from "./image";
import { QuestionDAO } from "./question";

export const symbols = Object.freeze({
  question: Symbol("question") as InjectionKey<QuestionDAO>,
  image: Symbol("image") as InjectionKey<UnsplashDAO>,
});
