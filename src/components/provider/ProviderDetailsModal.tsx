import { useState } from "react";

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
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative z-50 bg-background-surface rounded-2xl w-[90%] max-w-lg p-6 shadow-xl border border-border-default overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-text-secondary text-2xl leading-none"
        >
          ✕
        </button>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={imageSrc}
            alt={name}
            className="w-20 h-20 rounded-lg object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold text-text-primary">{name}</h2>
            <p className="text-xl text-text-secondary font-medium">
              {speciality}
            </p>
          </div>
        </div>

        <div className="flex bg-background-default rounded-full p-1 mb-6">
          <button
            onClick={() => setTab("overview")}
            className={`flex-1 py-2 rounded-full inline-flex items-center justify-center gap-2 transition ${
              tab === "overview"
                ? "bg-background-brand text-white"
                : "text-text-secondary"
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => setTab("locations")}
            className={`flex-1 py-2 rounded-full inline-flex items-center justify-center gap-2 transition ${
              tab === "locations"
                ? "bg-background-brand text-white"
                : "text-text-secondary"
            }`}
          >
            Locations
          </button>
        </div>

        {tab === "overview" && (
          <div className="space-y-6">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary">About</h3>
              <p className="text-text-secondary leading-6 mt-1">{about}</p>
            </div>

            <hr className="border-border-default" />

            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                Contact information
              </h3>

              <div className="mt-3 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2">
                  <span className="text-text-secondary">{phone}</span>
                </div>

                <div className="inline-flex items-center gap-2">
                  <span className="text-text-secondary">{email}</span>
                </div>
              </div>
            </div>

            <hr className="border-border-default" />

            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                Languages
              </h3>

              <div className="inline-flex items-center gap-2 mt-2">
                <span className="text-text-secondary">
                  {languages.join(", ")}
                </span>
              </div>
            </div>
          </div>
        )}

        {tab === "locations" && (
          <div className="space-y-4">
            <p className="text-text-secondary leading-6">
              pending
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
