import { useState } from "react";
import { ChevronDownIcon } from "../../assets/icons";
import type { DropdownOption } from "../../shared";

type FilterDropdownProps = {
  placeholder: string;
  options: DropdownOption[];
  value: string | null;
  onChange?: (value: string | null) => void;
};

export const FilterDropdown = ({
  placeholder,
  options,
  value,
  onChange,
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption =
    options.find((option) => option.value === value) ?? null;

  const displayText = selectedOption?.label ?? placeholder;

  const handleSelect = (option: DropdownOption | null) => {
    setIsOpen(false);
    onChange?.(option ? option.value : null);
  };

  return (
    <div className="self-stretch lg:w-56 inline-flex flex-col justify-start items-start relative">
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div
          className="self-stretch h-10 bg-background-surface rounded-md outline-1 -outline-offset-1 outline-border-default inline-flex justify-start items-center overflow-hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex-1 flex justify-start items-center overflow-hidden">
            <div className="flex-1 self-stretch px-3 py-1.5 flex justify-between items-center">
              <span className="flex-1 justify-start text-text-primary text-sm font-normal leading-5 line-clamp-1">
                {displayText}
              </span>
            </div>

            <div className="self-stretch pr-3 flex justify-start items-center gap-2">
              <div className="size-4 relative">
                <ChevronDownIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-1 left-0 w-full max-h-60 overflow-y-auto bg-background-surface border border-border-default rounded-md shadow-md z-20">
          <button
            className="w-full text-left px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            onClick={() => handleSelect(null)}
          >
            {placeholder}
          </button>

          {options.map((option) => (
            <button
              key={option.value}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
