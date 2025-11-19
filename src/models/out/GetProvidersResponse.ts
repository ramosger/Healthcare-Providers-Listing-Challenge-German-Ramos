import type { Provider } from "@domain";

export type GetProvidersResponse = {
  data: Provider[];
  links: unknown;
  meta: unknown;
};