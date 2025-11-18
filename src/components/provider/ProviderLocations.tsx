import { LocationPinIcon } from "../../assets/icons";
import type { ProviderLocation } from "../../domain";

type ProviderLocationsProps = {
  locations: ProviderLocation[];
};

export const ProviderLocations = ({ locations }: ProviderLocationsProps) => {
  if (!locations?.length) return null;

  return (
    <div className="pt-6 space-y-3">
      <h3 className="text-lg font-medium text-text-primary">Locations</h3>

      <ul className="space-y-3">
        {locations.map(({ id, name, street, city, state, zipCode, phone, mapsUrl }) => (
          <li
            key={id}
            className="border border-border-default rounded-xl p-5 space-y-3"
          >
            <h4 className="text-md font-medium text-text-primary">
              {name}
            </h4>

            <div className="text-text-secondary font-light space-y-1 leading-6">
              <p>{street}</p>
              <p>
                {city}, {state} {zipCode}
              </p>
              <p>{phone}</p>
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
        ))}
      </ul>
    </div>
  );
};
