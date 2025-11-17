import { Phone, Mail, World } from "../../assets/icons";

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
  );
};
