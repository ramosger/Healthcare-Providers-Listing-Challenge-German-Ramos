import { ProfileMenu } from "..";
import { Logo } from "../../assets/icons";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-96 p-6 bg-white border-b border-(--border-default) inline-flex justify-between items-center">
      <div className="w-60 h-10 relative">
        <div className="w-10 h-10 p-2 left-0 top-0 absolute bg-Background-Brand-Default rounded-lg inline-flex justify-start items-center gap-2">
          <Logo />
        </div>

        <div className="w-48 h-9 left-[49.96px] top-[1.60px] absolute inline-flex flex-col justify-start items-start gap-2">
          <h2 className="w-36 h-3.5 font-semibold text-lg lg:text-2xl leading-tight text-(--text-default)">
            HealthConnect
          </h2>
          <p className="font-light w-44 h-3 text-xs lg:text-sm leading-tight text-(--text-tertiary)">
            Find your healthcare provider
          </p>
        </div>
      </div>

      <ProfileMenu
        name="Adam Smith"
        email="adamsmith@gmail.com"
        initials="AS"
        onLogout={() => console.log("Log out")}
      />
    </header>
  );
};
