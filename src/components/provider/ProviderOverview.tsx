import { PhoneIcon, MailIcon, WorldIcon } from "../../assets/icons";
import { ProviderContactRow } from "./ProviderContactRow";
import { ProviderOverviewSection } from "./ProviderOverviewSection";

type ProviderOverviewProps = {
  about: string;
  phone: string;
  email: string;
  languages: string[];
};

export const ProviderOverview = ({
  about,
  phone,
  email,
  languages,
}: ProviderOverviewProps) => {
  return (
    <div className="pt-6 space-y-4">
      <ProviderOverviewSection title="About">
        <p className="text-text-default-secondary font-light">{about}</p>
      </ProviderOverviewSection>

      <ProviderOverviewSection title="Contact information">
        <div className="pt-1 flex flex-col gap-1">
          <ProviderContactRow icon={<PhoneIcon />} text={phone} />
          <ProviderContactRow icon={<MailIcon />} text={email} />
        </div>
      </ProviderOverviewSection>

      <ProviderOverviewSection title="Languages" withDivider={false}>
        {languages.length > 0 ? (
          <div className="inline-flex items-center gap-2 pt-2">
            <WorldIcon />
            <p className="text-text-default-secondary font-light">
              {languages.join(", ")}
            </p>
          </div>
        ) : (
          <p className="text-text-default-secondary font-light pt-2">
            No language information available
          </p>
        )}
      </ProviderOverviewSection>
    </div>
  );
};
