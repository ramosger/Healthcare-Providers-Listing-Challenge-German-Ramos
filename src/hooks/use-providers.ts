import { useState, useEffect, useCallback } from "react";
import type { Provider } from "../domain";
import type { ProviderFilters } from "../services";
import {
  getAllProviders,
  getFilteredProviders,
  hasActiveProviderFilters,
} from "../services";

export const useProviders = (filters: ProviderFilters) => {
  const [allProviders, setAllProviders] = useState<Provider[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProviders = useCallback(async () => {
    try {
      setIsLoading(true);

      const hasFilters = hasActiveProviderFilters(filters);

      if (!hasFilters) {
        const data = await getAllProviders();
        setAllProviders(data);
        setFilteredProviders(data);
      } else {
        const data = await getFilteredProviders(filters);
        setFilteredProviders(data);
      }

      setError(null);
    } catch (err) {
      setError(`There was a problem loading providers. Please try again. - (${err})`);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    loadProviders();
  }, [loadProviders]);

  return {
    allProviders,
    filteredProviders,
    isLoading,
    error,
    refetch: loadProviders,
  };
};
