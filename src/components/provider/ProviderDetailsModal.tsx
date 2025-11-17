import { useState } from "react";
import { CloseIcon, UserIcon, LocationPinIcon } from "../../assets/icons";
import type { Provider } from "../../domain";
import { ProviderLocations } from "./ProviderLocations";
import { ProviderOverview } from "./ProviderOverview";
import { DETAIL_TABS, type DetailTab } from "../../shared";

type ProviderDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  provider: Provider;
};

export const ProviderDetailsModal = ({
  isOpen,
  onClose,
  provider,
}: ProviderDetailsModalProps) => {
  const [tab, setTab] = useState<DetailTab>(DETAIL_TABS.OVERVIEW);

  const { imageSrc, name, speciality, about, phone, email, languages } =
    provider;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-50 bg-background-surface rounded-2xl w-[90%] lg:w-full max-w-lg lg:max-w-xl max-h-[624px] lg:max-h-[546px] p-6 shadow-xl border border-border-default flex flex-col">
        <div className="cursor-pointer">
          <CloseIcon onClose={onClose} />
        </div>

        <div className="flex items-center gap-4 pb-4">
          <img
            src={imageSrc}
            alt={name}
            className="size-20 rounded-lg object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold text-text-primary">{name}</h2>
            <p className="text-xl text-text-secondary font-medium">
              {speciality}
            </p>
          </div>
        </div>

        <div className="bg-background-tertiary rounded-full">
          <div className="flex bg-background-default rounded-full p-1">
            <button
              onClick={() => setTab(DETAIL_TABS.OVERVIEW)}
              className={`flex-1 cursor-pointer py-2 text-sm font-light rounded-full inline-flex items-center justify-center gap-2 transition ${
                tab === DETAIL_TABS.OVERVIEW
                  ? "bg-background-brand text-white"
                  : "bg-background-tertiary text-text-primary"
              }`}
            >
              <UserIcon />
              Overview
            </button>

            <button
              onClick={() => setTab(DETAIL_TABS.LOCATIONS)}
              className={`flex-1 cursor-pointer py-2 rounded-full text-sm font-light inline-flex items-center justify-center gap-2 transition ${
                tab === DETAIL_TABS.LOCATIONS
                  ? "bg-background-brand text-white"
                  : "bg-background-tertiary text-text-primary"
              }`}
            >
              <LocationPinIcon />
              Locations
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          {tab === DETAIL_TABS.OVERVIEW && (
            <ProviderOverview
              about={about}
              phone={phone}
              email={email}
              languages={languages}
            />
          )}

          {tab === DETAIL_TABS.LOCATIONS && (
            <ProviderLocations locations={provider.locations} />
          )}
        </div>
      </div>
    </div>
  );
};
