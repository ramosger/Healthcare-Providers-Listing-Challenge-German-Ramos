import type { Provider } from "../../domain";

export type ProviderFilters = {
  specialtyId: string | null;
  clinicId: string | null;
  gender: string | null;
};

export const initialProviderFilters: ProviderFilters = {
  specialtyId: null,
  clinicId: null,
  gender: null,
};

export const hasActiveProviderFilters = (filters: ProviderFilters): boolean =>
  filters.specialtyId !== null ||
  filters.clinicId !== null ||
  filters.gender !== null;

export function getVisibleProviders(
  filteredProviders: Provider[],
  searchTerm: string
) {
  const term = searchTerm.trim().toLowerCase();
  if (!term) return filteredProviders;

  return filteredProviders.filter((p) => p.name.toLowerCase().includes(term));
}
