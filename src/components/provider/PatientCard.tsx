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
    <div className="self-stretch relative bg-background-default-default rounded-xl outline-1 outline-border-default flex flex-col justify-start items-start overflow-hidden">
      <img className="self-stretch h-56" src={imageSrc} alt={name} />

      <div className="self-stretch p-5 flex flex-col justify-center items-start gap-5">
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <h2 className="self-stretch justify-start text-text-default text-2xl font-semibold font-default">
              {name}
            </h2>
            <p className="self-stretch justify-start text-text-tertiary text-xl font-medium font-default">
              {speciality}
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-3">
            <div className="w-80 flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-start items-center gap-1">
                  <Location />
                  <div className="justify-start text-text-tertiary text-base font-medium font-default leading-6">
                    {primaryLocation}
                  </div>
                </div>

                {extraLocationsLabel && (
                  <div className="self-stretch pl-7 inline-flex justify-start items-center gap-1">
                    <div className="flex-1 justify-start text-text-tertiary text-base font-medium font-default leading-6">
                      {extraLocationsLabel}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full inline-flex flex-col justify-end items-center">
          <div className="w-full flex-1 inline-flex justify-start items-start">
            <div className="flex-1 px-3 py-2 bg-background-default rounded-md flex justify-center items-center gap-1.5 overflow-hidden">
              <button
                type="button"
                onClick={onViewDetails}
                className="justify-start text-text-neutral text-base font-medium font-default leading-6"
              >
                View details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
