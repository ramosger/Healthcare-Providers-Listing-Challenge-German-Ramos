import { useState, useEffect, useCallback, useMemo } from "react";
import type { Provider } from "../domain";
import type { ProviderFilters } from "../services";
import {
  getAllProviders,
  getFilteredProviders,
  hasActiveProviderFilters,
  getVisibleProviders,
} from "../services";

export const useProviders = (filters: ProviderFilters, searchTerm: string) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProviders = useCallback(async () => {
    try {
      setIsLoading(true);

      const hasFilters = hasActiveProviderFilters(filters);

      const data = hasFilters
        ? await getFilteredProviders(filters)
        : await getAllProviders();

      setProviders(data);
      setError(null);
    } catch (err) {
      setError(
        `There was a problem loading providers. Please try again. - (${err})`
      );
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    loadProviders();
  }, [loadProviders]);

  const visibleProviders = useMemo(
    () => getVisibleProviders(providers, searchTerm),
    [providers, searchTerm]
  );

  return {
    providers,
    visibleProviders,
    isLoading,
    error,
    refetch: loadProviders,
  };
};
