import { SearchInput } from "@shared";

export const NameFilter = () => {
  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-2.5">
      <SearchInput placeholder="Search providers by name..." />
    </div>
  );
};
