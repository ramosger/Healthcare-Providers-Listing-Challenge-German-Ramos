import { LocationIcon } from "../../assets/icons";
import type { Provider } from "../../domain";

type ProviderCardProps = {
  provider: Provider;
  onViewDetails?: () => void;
};

export const ProviderCard = ({
  provider,
  onViewDetails,
}: ProviderCardProps) => {
  const { profile_pic, name, specialty, clinics } = provider;

  const primaryClinic = clinics[0];
  const primaryLocation =
    primaryClinic?.name ?? primaryClinic?.address ?? "No main location";

  const extraLocationsCount = clinics.length > 1 ? clinics.length - 1 : 0;
  const extraLocationsLabel =
    extraLocationsCount > 0
      ? `+ ${extraLocationsCount} more ${
          extraLocationsCount === 1 ? "location" : "locations"
        }`
      : null;

  return (
    <div className="self-stretch bg-background-surface rounded-xl outline-1 outline-border-default flex flex-col overflow-hidden">
      <img className="w-full h-56 object-cover" src={profile_pic} alt={name} />

      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-text-primary text-2xl font-semibold">{name}</h2>
            <p className="text-text-secondary text-xl font-medium">
              {specialty.name}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-1">
              <LocationIcon />
              <span className="text-text-secondary text-base font-medium leading-6">
                {primaryLocation}
              </span>
            </div>

            {extraLocationsLabel && (
              <div className="pl-7">
                <span className="text-text-secondary text-base font-medium leading-6">
                  {extraLocationsLabel}
                </span>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={onViewDetails}
          className="w-full py-2 bg-background-brand rounded-md text-text-neutral text-base font-medium leading-6 cursor-pointer"
        >
          View details
        </button>
      </div>
    </div>
  );
};
