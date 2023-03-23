import { provide, inject } from "vue";
import { InjectionKey } from "vue";
import { useAuthService } from "./auth";

export const symbols = Object.freeze({
  auth: Symbol("auth") as InjectionKey<typeof useAuthService>,
});

const serviceFuncMap: Map<InjectionKey<any>, (...args: any[]) => any> = new Map(
  [[symbols.auth, useAuthService]]
);

export function useService<T extends (...args: any[]) => any>(
  symbol: InjectionKey<T>,
  ...args: Parameters<T>
): T {
  let service = inject(symbol, null);
  if (!service) {
    service = pickService(symbol, ...args) as T;
    provide(symbol, service);
  }
  return service;
}

function pickService<T extends (...args: any[]) => any>(
  symbol: InjectionKey<T>,
  ...args: Parameters<T>
): T {
  const serviceFunc = serviceFuncMap.get(symbol);

  if (!serviceFunc) {
    throw new Error("Unknown service");
  }

  return serviceFunc(...args);
}
