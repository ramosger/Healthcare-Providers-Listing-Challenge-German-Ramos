import { SearchInput } from "../../shared";

type NameFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export const NameFilter = ({ value, onChange }: NameFilterProps) => {
  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-2.5">
      <SearchInput
        placeholder="Search providers by name..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
