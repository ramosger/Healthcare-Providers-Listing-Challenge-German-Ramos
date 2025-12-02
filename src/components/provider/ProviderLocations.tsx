import type { Clinic } from "../../domain";
import { LocationPinIcon } from "@assets/icons";
import { buildMapsUrl, buildFullAddress } from "@utils/maps";

type ProviderLocationsProps = {
  locations: Clinic[];
};

export const ProviderLocations = ({ locations }: ProviderLocationsProps) => {
  return (
    <div className="pt-6 space-y-3">
      <h3 className="text-lg font-medium text-text-primary">Locations</h3>

      <ul className="space-y-3">
        {locations.map((location) => {
          const fullAddress = buildFullAddress(location);
          const mapsUrl = buildMapsUrl(fullAddress);

          return (
            <li
              key={location.id}
              className="border border-border-default rounded-xl p-5 space-y-3"
            >
              <h4 className="text-md font-medium text-text-primary">
                {location.name}
              </h4>

              <div className="text-text-secondary font-light space-y-1 leading-6">
                <p>{location.address}</p>
                <p>
                  {location.city}, {location.state} {location.zip_code}
                </p>
                <p>{location.phone}</p>
              </div>

              {mapsUrl && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full cursor-pointer border border-border-default rounded-lg py-2.5 inline-flex items-center justify-center gap-2 text-text-primary font-medium"
                >
                  <LocationPinIcon />
                  View on Google Maps
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
