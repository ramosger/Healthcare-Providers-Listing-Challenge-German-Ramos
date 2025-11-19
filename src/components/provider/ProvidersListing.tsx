import { useState, useMemo, useEffect, useCallback } from "react";
import { ProviderCard, ProviderDetailsModal } from "..";
import type { Provider } from "../../domain";
import { SearchFilters } from "..";
import {
  getAllProviders,
  getFilteredProviders,
  type ProviderFilters,
} from "../../services";
import { ErrorComponent, Spinner } from "../../shared";

export const ProvidersListing = () => {
  const [allProviders, setAllProviders] = useState<Provider[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [filters, setFilters] = useState<ProviderFilters>({
    specialtyId: null,
    clinicId: null,
    gender: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProviderId, setSelectedProviderId] = useState<
    Provider["id"] | null
  >(null);
  const [searchTerm, setSearchTerm] = useState("");

  const visibleProviders = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return filteredProviders;

    return filteredProviders.filter((p) => p.name.toLowerCase().includes(term));
  }, [filteredProviders, searchTerm]);

  const selectedProvider = useMemo(
    () => filteredProviders.find((p) => p.id === selectedProviderId) ?? null,
    [filteredProviders, selectedProviderId]
  );

  const handleFiltersChange = (next: ProviderFilters) => {
    setFilters(next);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      const hasFilters =
        filters.specialtyId !== null ||
        filters.clinicId !== null ||
        filters.gender !== null;

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
      console.error("Error loading providers:", err);
      setError("There was a problem loading providers. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-110">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorComponent error={error} fetchData={fetchData} />;
  }

  return (
    <>
      <SearchFilters
        resultsCount={visibleProviders.length}
        providers={allProviders.length ? allProviders : filteredProviders}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <div className="w-full px-6 lg:px-44 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
        {visibleProviders.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
            onViewDetails={() => setSelectedProviderId(provider.id)}
          />
        ))}
      </div>

      {selectedProvider && (
        <ProviderDetailsModal
          isOpen={true}
          onClose={() => setSelectedProviderId(null)}
          provider={selectedProvider}
        />
      )}
    </>
  );
};
