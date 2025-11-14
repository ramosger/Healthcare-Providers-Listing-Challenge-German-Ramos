import { useState } from "react";
import { ProviderCard, ProviderDetailsModal } from "..";
import type { Provider } from "../../domain";
import * as Constants from "../../shared";

export const ProvidersListing = () => {
  const [providerSelected, setProviderSelected] = useState<Provider>();

  return (
    <div className="self-stretch w-full px-6 lg:px-44 inline-flex flex-col justify-start items-start gap-3 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
      {Constants.PROVIDERS.map((provider: Provider) => (
        <ProviderCard
          key={provider.id}
          imageSrc={provider.imageSrc}
          name={provider.name}
          speciality={provider.speciality}
          primaryLocation={provider.primaryLocation}
          extraLocationsLabel={provider.extraLocationsLabel}
          onViewDetails={() => setProviderSelected(provider)}
        />
      ))}

      {providerSelected && (
        <ProviderDetailsModal
          isOpen={true}
          onClose={() => setProviderSelected(undefined)}
          imageSrc={providerSelected.imageSrc}
          name={providerSelected.name}
          speciality={providerSelected.speciality}
          about={providerSelected.about}
          phone={providerSelected.phone}
          email={providerSelected.email}
          languages={providerSelected.languages}
        />
      )}
    </div>
  );
};
