import axios from "axios";
import type { Provider } from "../../domain";
import type { GetProvidersResponse } from "../../models";
import type { ProviderFilters } from "./providerFilters";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getAllProviders(): Promise<Provider[]> {
  const response = await axios.get<GetProvidersResponse>(
    `${API_BASE_URL}/providers`
  );

  return response.data.data;
}

export async function getFilteredProviders(
  filters: ProviderFilters
): Promise<Provider[]> {
  const { specialtyId, clinicId, gender } = filters;

  const params = {
    ...(specialtyId && { "filter[specialty_id]": specialtyId }),
    ...(clinicId && { "filter[clinic_id]": clinicId }),
    ...(gender && { "filter[gender]": gender }),
  };

  const response = await axios.get<GetProvidersResponse>(
    `${API_BASE_URL}/providers`,
    { params }
  );

  return response.data.data;
}
