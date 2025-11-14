import { useState } from "react";
import {
  Close,
  User,
  LocationPin,
  Phone,
  Mail,
  World,
} from "../../assets/icons";

type ProviderDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  name: string;
  speciality: string;
  about: string;
  phone: string;
  email: string;
  languages: string[];
};

export const ProviderDetailsModal = ({
  isOpen,
  onClose,
  imageSrc,
  name,
  speciality,
  about,
  phone,
  email,
  languages,
}: ProviderDetailsModalProps) => {
  const [tab, setTab] = useState<"overview" | "locations">("overview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-50 bg-background-surface rounded-2xl w-[90%] max-w-lg p-6 shadow-xl border border-border-default max-h-[624px] overflow-hidden">
        <Close onClose={onClose} />

        <div className="flex items-center gap-4 mb-6">
          <img
            src={imageSrc}
            alt={name}
            className="size-20 rounded-lg object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold font-default text-text-primary">
              {name}
            </h2>
            <p className="text-xl text-text-secondary font-medium font-default">
              {speciality}
            </p>
          </div>
        </div>

        <div className="bg-background-tertiary rounded-full">
          <div className="flex bg-background-default rounded-full p-1">
            <button
              onClick={() => setTab("overview")}
              className={`flex-1 py-2 font-default rounded-full inline-flex items-center justify-center gap-2 transition ${
                tab === "overview"
                  ? "bg-background-brand text-white"
                  : "bg-background-tertiary text-text-primary"
              }`}
            >
              <User />
              Overview
            </button>

            <button
              onClick={() => setTab("locations")}
              className={`flex-1 py-2 rounded-full inline-flex items-center justify-center gap-2 transition ${
                tab === "locations"
                  ? "bg-background-brand text-white"
                  : "bg-background-tertiary text-text-primary"
              }`}
            >
              <LocationPin />
              Locations
            </button>
          </div>
        </div>

        {tab === "overview" && (
          <div className="pt-6 space-y-3">
            <div>
              <h3 className="text-lg font-medium font-default text-text-primary">
                About
              </h3>
              <p className="text-text-default-secondary font-default font-light pt-2">
                {about}
              </p>
            </div>

            <hr className="border-border-default" />

            <div>
              <h3 className="text-lg font-medium font-default text-text-primary">
                Contact information
              </h3>

              <div className="pt-1 flex flex-col gap-1">
                <div className="inline-flex items-center gap-2">
                  <Phone />
                  <p className="text-text-default-secondary font-default font-light">
                    {phone}
                  </p>
                </div>

                <div className="pt-1 inline-flex items-center gap-2">
                  <Mail />
                  <p className="text-text-default-secondary font-default font-light">
                    {email}
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-border-default" />

            <div>
              <h3 className="text-lg font-medium font-default text-text-primary">
                Languages
              </h3>

              <div className="inline-flex items-center gap-2 mt-2">
                <World />
                <p className="text-text-default-secondary font-default font-light">
                  {languages.join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "locations" && (
          <div className="space-y-4">
            <p className="text-text-secondary leading-6">pending</p>
          </div>
        )}
      </div>
    </div>
  );
};
