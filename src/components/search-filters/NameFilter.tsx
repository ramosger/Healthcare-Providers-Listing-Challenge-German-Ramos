import type { ComponentProps } from "react";
import { SearchInput } from "../../shared";

type NameFilterProps = ComponentProps<typeof SearchInput>;

export const NameFilter = (props: NameFilterProps) => {
  return (
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-2.5">
      <SearchInput {...props} />
    </div>
  );
};
