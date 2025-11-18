import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CloseIconButton, UserIcon, LocationPinIcon } from "../../assets/icons";
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
  const baseTabClasses =
    "flex-1 cursor-pointer py-2 text-sm font-light rounded-full inline-flex items-center justify-center gap-2 transition";

  const { profile_pic, name, specialty, about, phone, email, languages } =
    provider;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-50 bg-background-surface rounded-2xl w-[90%] lg:w-full max-w-lg lg:max-w-xl max-h-[624px] lg:max-h-[546px] p-6 shadow-xl border border-border-default flex flex-col">
        <div className="cursor-pointer">
          <CloseIconButton onClose={onClose} />
        </div>

        <div className="flex items-center gap-4 pb-4">
          <img
            src={profile_pic}
            alt={name}
            className="size-20 rounded-lg object-cover"
          />

          <div>
            <h2 className="text-2xl font-semibold text-text-primary">{name}</h2>
            <p className="text-xl text-text-secondary font-medium">
              {specialty.name}
            </p>
          </div>
        </div>

        <div className="bg-background-tertiary rounded-full">
          <div className="flex bg-background-default rounded-full p-1">
            <button
              onClick={() => setTab(DETAIL_TABS.OVERVIEW)}
              className={twMerge(
                baseTabClasses,
                tab === DETAIL_TABS.OVERVIEW
                  ? "bg-background-brand text-white"
                  : "bg-background-tertiary text-text-primary"
              )}
            >
              <UserIcon />
              Overview
            </button>

            <button
              onClick={() => setTab(DETAIL_TABS.LOCATIONS)}
              className={twMerge(
                baseTabClasses,
                tab === DETAIL_TABS.LOCATIONS
                  ? "bg-background-brand text-white"
                  : "bg-background-tertiary text-text-primary"
              )}
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
            <ProviderLocations locations={provider.clinics} />
          )}
        </div>
      </div>
    </div>
  );
};
