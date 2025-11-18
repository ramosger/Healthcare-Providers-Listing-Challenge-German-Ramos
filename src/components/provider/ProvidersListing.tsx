import { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { ProviderCard, ProviderDetailsModal } from "..";
import type { Provider } from "../../domain";
import { SearchFilters } from "..";

export const ProvidersListing = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProviderId, setSelectedProviderId] = useState<
    Provider["id"] | null
  >(null);

  const selectedProvider = useMemo(
    () => providers.find((p) => p.id === selectedProviderId) ?? null,
    [providers, selectedProviderId]
  );

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await axios.get("http://localhost/api/providers");
        setProviders(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error loading providers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProviders();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <h1 className="text-lg">Loading providers...</h1>
      </div>
    );
  }

  return (
    <>
      <SearchFilters resultsCount={providers.length} />
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
