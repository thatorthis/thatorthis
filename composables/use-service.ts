import { provide, inject } from "vue";
import { InjectionKey } from "vue";
import { useAuthService, useTrendingQuestions } from "./services";

type ArgsType<T> = T extends (...args: infer A) => any ? A : never;
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;
type CallableTypeOf<T> = (...args: ArgsType<T>) => ReturnTypeOf<T>;

export const symbols = Object.freeze({
  auth: Symbol("auth") as InjectionKey<ReturnTypeOf<typeof useAuthService>>,
  trendingQuestions: Symbol("trendingQuestions") as InjectionKey<
    ReturnTypeOf<typeof useTrendingQuestions>
  >,
});

const serviceFuncMap: Record<symbol, (...args: any[]) => any> = {
  [symbols.auth as symbol]: useAuthService,
  [symbols.trendingQuestions as symbol]: useTrendingQuestions,
};

export function useService<U>(
  symbol: InjectionKey<U>,
  ...args: Parameters<CallableTypeOf<U>>
): U {
  let service = inject(symbol, null);
  if (!service) {
    const service = pickService(symbol)(...args) as U;
    provide(symbol, service);
    return service;
  }
  return service;
}

function pickService<U>(symbol: InjectionKey<U>): CallableTypeOf<U> {
  const serviceFunc = serviceFuncMap[symbol as symbol];

  if (!serviceFunc) {
    throw new Error("Unknown service");
  }
  return serviceFunc;
}
