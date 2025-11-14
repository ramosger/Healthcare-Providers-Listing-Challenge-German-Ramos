import { Location } from "../../assets/icons";

type PatientCardProps = {
  imageSrc: string;
  name: string;
  speciality: string;
  primaryLocation: string;
  extraLocationsLabel?: string;
  onViewDetails?: () => void;
};

export const PatientCard = ({
  imageSrc,
  name,
  speciality,
  primaryLocation,
  extraLocationsLabel,
  onViewDetails,
}: PatientCardProps) => {
  return (
    <div className="self-stretch bg-background-surface rounded-xl outline-1 outline-border-default flex flex-col overflow-hidden">
      <img className="w-full h-56 object-cover" src={imageSrc} alt={name} />

      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-text-primary text-2xl font-semibold font-default">
              {name}
            </h2>
            <p className="text-text-secondary text-xl font-medium font-default">
              {speciality}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-1">
              <Location />
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
          className="w-full py-2 bg-background-brand rounded-md text-text-neutral text-base font-medium font-default leading-6 cursor-pointer"
        >
          View details
        </button>
      </div>
    </div>
  );
};
