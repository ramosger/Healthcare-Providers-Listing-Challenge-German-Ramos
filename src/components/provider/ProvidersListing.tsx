import { useState, useMemo } from "react";
import { ProviderCard, ProviderDetailsModal } from "..";
import type { Provider } from "../../domain";
import { PROVIDERS } from "../../shared";

export const ProvidersListing = () => {
  const [selectedProviderId, setSelectedProviderId] = useState<
    Provider["id"] | null
  >(null);

  const selectedProvider = useMemo(
    () =>
      PROVIDERS.find((provider) => provider.id === selectedProviderId) ?? null,
    [selectedProviderId]
  );

  return (
    <>
      <div className="w-full px-6 lg:px-44 grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
        {PROVIDERS.map((provider: Provider) => (
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
