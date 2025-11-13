import { ProfileMenu } from "..";
import { Logo } from "../../assets/icons";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-96 lg:w-full p-6 lg:px-44 lg:py-6 bg-white border-b border-border-default inline-flex justify-between items-center z-50">
      <div className="w-60 lg:w-72 h-10 lg:h-11 relative">
        <div className="size-10 lg:size-11 p-2 lg:p-2.5 left-0 top-0 absolute rounded-lg lg:rounded-xl inline-flex justify-start items-center gap-2 lg:gap-2.5">
          <div className="flex justify-start items-center gap-2">
            <Logo />
          </div>
        </div>

        <div className="w-48 lg:w-56 h-9 lg:h-10 left-[49.96px] lg:left-[60.14px] top-[1.60px] lg:top-[1.92px] absolute inline-flex flex-col justify-start items-start gap-2 lg:gap-2.5">
          <h2 className="w-36 lg:w-40 h-3.5 lg:h-4 font-semibold text-lg lg:text-2xl leading-tight text-text-default">
            HealthConnect
          </h2>
          <p className="font-light w-44 lg:w-52 h-3 lg:h-3.5 text-xs lg:text-sm leading-tight text-text-tertiary">
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
