import { LocationPin } from "../../assets/icons";
import type { ProviderLocation } from "../../domain";

type ProviderLocationsProps = {
  locations: ProviderLocation[];
};

export const ProviderLocations = ({
  locations,
}: ProviderLocationsProps) => {
  if (!locations?.length) return null;

  return (
    <div className="pt-6 space-y-3">
      <h3 className="text-lg font-medium font-default text-text-primary">
        Locations
      </h3>

      {locations.map((location) => (
        <div
          key={location.id}
          className="border border-border-default rounded-xl p-5 space-y-3"
        >
          <h4 className="text-md font-medium font-default text-text-primary">
            {location.name}
          </h4>

          <div className="text-text-secondary font-default font-light space-y-1 leading-6">
            <p>{location.street}</p>
            <p>
              {location.city}, {location.state} {location.zipCode}
            </p>
            <p>{location.phone}</p>
          </div>

          {location.mapsUrl && (
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full cursor-pointer border border-border-default rounded-lg py-2.5 inline-flex items-center justify-center gap-2 text-text-primary font-default font-medium"
            >
              <LocationPin />
              View on Google Maps
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
