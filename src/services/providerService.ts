import axios from "axios";
import type { Provider } from "../domain";
import type { GetProvidersResponse } from "../models";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getProviders(): Promise<Provider[]> {
  const response = await axios.get<GetProvidersResponse>(
    `${API_BASE_URL}/providers`
  );
  return response.data.data;
}
