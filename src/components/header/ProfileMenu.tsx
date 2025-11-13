import { useEffect, useState } from "react";
import { Logout } from "../../assets/icons";

type ProfileMenuProps = {
  name: string;
  email: string;
  initials: string;
  onLogout?: () => void;
};

export const ProfileMenu = ({
  name,
  email,
  initials,
  onLogout,
}: ProfileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("#profile-menu")) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="size-8 text-white lg:size-12 relative rounded-full overflow-hidden bg-(--background-default)"
      >
        {initials}
      </button>

      {isOpen && (
        <div
          id="profile-menu"
          className="absolute right-0 mt-2 w-56 p-2 rounded-md shadow-[0px_1px_4px_0px_rgba(14,16,23,0.10)] outline-1 -outline-offset-1 outline-(--border-default) inline-flex flex-col justify-start items-start bg-(--background-default-default)"
        >
          <div className="self-stretch p-2 border-b inline-flex flex-col justify-start items-start gap-2.5 border-(--border-default)">
            <p className="self-stretch justify-start text-sm font-medium font-[DM_Sans] leading-5 text-(--text-default)">
              {name}
            </p>
            <p className="self-stretch justify-start text-xs font-normal font-[DM_Sans] leading-4 text-(--text-tertiary)">
              {email}
            </p>
          </div>

          <button
            type="button"
            className="cursor-pointer self-stretch p-2 rounded-lg inline-flex justify-start items-center gap-2"
            onClick={() => {
              setIsOpen(false);
              onLogout?.();
            }}
          >
            <Logout />

            <p className="self-stretch justify-start text-sm font-normal font-[DM_Sans] leading-5 line-clamp-1 text-(--text-default)">
              Log out
            </p>
          </button>
        </div>
      )}
    </div>
  );
};
