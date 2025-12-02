import type { Provider } from "@domain";
import { type ProviderFilters, initialProviderFilters } from "@services";
import { ErrorComponent, Spinner } from "@shared";
import { useProviders } from "../../hooks";
import { useMemo, useState } from "react";
import { SearchFilters } from "@components/search-filters";
import { ProviderCard, ProviderDetailsModal } from "..";

export const ProvidersListing = () => {
  const [filters, setFilters] = useState<ProviderFilters>(
    initialProviderFilters
  );
  const [selectedProviderId, setSelectedProviderId] = useState<
    Provider["id"] | null
  >(null);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    providers,
    visibleProviders,
    isLoading,
    error,
    refetch,
  } = useProviders(filters, searchTerm);

  const selectedProvider = useMemo(
    () => visibleProviders.find(({ id }) => id === selectedProviderId) ?? null,
    [visibleProviders, selectedProviderId]
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-110">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorComponent error={error} fetchData={refetch} />;
  }

  return (
    <>
      <SearchFilters
        resultsCount={visibleProviders.length}
        providers={providers}
        filters={filters}
        onFiltersChange={setFilters}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
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
          isOpen
          onClose={() => setSelectedProviderId(null)}
          provider={selectedProvider}
        />
      )}
    </>
  );
};
