import { Search } from "../assets/icons";

type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const SearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <div className="self-stretch h-10 bg-background-surface rounded-md outline-1 -outline-offset-1 outline-border-default inline-flex justify-start items-center overflow-hidden">
      <div className="flex-1 flex justify-start items-center overflow-hidden">
        <div className="self-stretch pl-3 flex justify-start items-center gap-2">
          <Search />
        </div>

        <div className="font-light flex-1 self-stretch px-3 py-1.5 flex justify-between items-center">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="placeholder-text-disabled flex-1 justify-start text-text-disabled text-sm font-normal font-default leading-5 line-clamp-1 bg-transparent outline-none"
            aria-label={placeholder}
          />
        </div>
      </div>
    </div>
  );
};
