import { useEffect, useState } from "react";

type ProfileMenuProps = {
  name: string;
  email: string;
  initials: string;
  onLogout?: () => void;
};

export default function ProfileMenu({
  name,
  email,
  initials,
  onLogout,
}: ProfileMenuProps) {
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
        className="cursor-pointer relative rounded-full overflow-hidden text-white flex items-center justify-center h-8 w-8 lg:h-10 lg:w-10 bg-(--background-default)"
      >
        <span
          aria-hidden="true"
          className="font-light font-[DM_Sans] leading-none text-sm lg:text-base text-(--text-on-brand)"
        >
          {initials}
        </span>
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 13.5C7.5 13.6326 7.44732 13.7598 7.35355 13.8536C7.25979 13.9473 7.13261 14 7 14H3C2.86739 14 2.74021 13.9473 2.64645 13.8536C2.55268 13.7598 2.5 13.6326 2.5 13.5V2.5C2.5 2.36739 2.55268 2.24021 2.64645 2.14645C2.74021 2.05268 2.86739 2 3 2H7C7.13261 2 7.25979 2.05268 7.35355 2.14645C7.44732 2.24021 7.5 2.36739 7.5 2.5C7.5 2.63261 7.44732 2.75979 7.35355 2.85355C7.25979 2.94732 7.13261 3 7 3H3.5V13H7C7.13261 13 7.25979 13.0527 7.35355 13.1464C7.44732 13.2402 7.5 13.3674 7.5 13.5ZM14.3538 7.64625L11.8538 5.14625C11.7599 5.05243 11.6327 4.99972 11.5 4.99972C11.3673 4.99972 11.2401 5.05243 11.1462 5.14625C11.0524 5.24007 10.9997 5.36732 10.9997 5.5C10.9997 5.63268 11.0524 5.75993 11.1462 5.85375L12.7931 7.5H7C6.86739 7.5 6.74021 7.55268 6.64645 7.64645C6.55268 7.74021 6.5 7.86739 6.5 8C6.5 8.13261 6.55268 8.25979 6.64645 8.35355C6.74021 8.44732 6.86739 8.5 7 8.5H12.7931L11.1462 10.1462C11.0524 10.2401 10.9997 10.3673 10.9997 10.5C10.9997 10.6327 11.0524 10.7599 11.1462 10.8538C11.2401 10.9476 11.3673 11.0003 11.5 11.0003C11.6327 11.0003 11.7599 10.9476 11.8538 10.8538L14.3538 8.35375C14.4002 8.30731 14.4371 8.25217 14.4623 8.19147C14.4874 8.13077 14.5004 8.06571 14.5004 8C14.5004 7.93429 14.4874 7.86923 14.4623 7.80853C14.4371 7.74783 14.4002 7.69269 14.3538 7.64625Z"
                fill="#353A4B"
              />
            </svg>

            <p className="self-stretch justify-start text-sm font-normal font-[DM_Sans] leading-5 line-clamp-1 text-(--text-default)">
              Log out
            </p>
          </button>
        </div>
      )}
    </div>
  );
}
