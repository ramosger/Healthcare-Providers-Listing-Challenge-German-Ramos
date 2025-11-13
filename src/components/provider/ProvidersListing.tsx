import { PatientCard } from "..";
import type { Provider } from "../../domain";
import * as Constants from '../../shared';

export const ProvidersListing = () => {
  return (
    <div className="self-stretch w-full px-6 lg:px-44 inline-flex flex-col justify-start items-start gap-3 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
      {Constants.PROVIDERS.map((provider: Provider) => (
        <PatientCard
          key={provider.id}
          imageSrc={provider.imageSrc}
          name={provider.name}
          speciality={provider.speciality}
          primaryLocation={provider.primaryLocation}
          extraLocationsLabel={provider.extraLocationsLabel}
        />
      ))}
    </div>
  );
};
