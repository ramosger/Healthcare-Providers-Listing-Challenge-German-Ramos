import { ProfileMenu } from "..";
import { Logo } from "../../assets/icons";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 lg:gap-4">
          <Logo />

          <div>
            <h2
              className="font-semibold text-lg lg:text-2xl leading-tight text-(--text-default)"
            >
              HealthConnect
            </h2>
            <p
              className="font-light text-xs lg:text-sm leading-tight text-(--text-tertiary)"
            >
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
      </div>
    </header>
  );
}
