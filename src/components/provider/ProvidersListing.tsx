import { useState, useMemo, useEffect } from "react";
import { ProviderCard, ProviderDetailsModal } from "..";
import type { Provider } from "../../domain";
import { SearchFilters } from "..";
import { getProviders } from "../../services";
import { ErrorComponent, Spinner } from "../../shared";

export const ProvidersListing = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProviderId, setSelectedProviderId] = useState<
    Provider["id"] | null
  >(null);

  const selectedProvider = useMemo(
    () => providers.find((p) => p.id === selectedProviderId) ?? null,
    [providers, selectedProviderId]
  );

  const fetchData = async () => {
    try {
      const providersData = await getProviders();
      setProviders(providersData);
    } catch (err) {
      console.error("Error loading providers:", err);
      setError("There was a problem loading providers. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <SearchFilters resultsCount={providers.length} providers={providers} />
      <div className="w-full px-6 lg:px-44 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
        {providers.map((provider) => (
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
