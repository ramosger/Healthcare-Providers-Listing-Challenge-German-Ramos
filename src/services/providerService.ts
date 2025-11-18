import axios from "axios";
import type { Provider } from "../domain";

type ProvidersApiResponse = {
  data: Provider[];
  links: unknown;
  meta: unknown;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProviders = async (): Promise<Provider[]> => {
  const response = await axios.get<ProvidersApiResponse>(`${API_BASE_URL}/providers`);
  return response.data.data;
};
