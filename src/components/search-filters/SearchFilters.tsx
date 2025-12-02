import {
  SearchFiltersHeader,
  NameFilter,
  FilterDropdown,
} from "@components/search-filters";
import * as Constants from "@shared";

type SearchFiltersProps = {
  resultsCount: number;
};

export const SearchFilters = ({ resultsCount }: SearchFiltersProps) => {
  const providerLabel = resultsCount === 1 ? "provider" : "providers";

  return (
    <section className="w-full mt-22 self-stretch px-6 lg:px-44 lg:pt-6 lg:pb-3 py-3 inline-flex flex-col justify-start items-start gap-4 lg:gap-7">
      <SearchFiltersHeader />

      <div className="self-stretch inline-flex flex-col justify-start items-start gap-5">
        <NameFilter />

        <div className="self-stretch inline-flex flex-col lg:flex-row justify-center lg:justify-start items-start gap-3">
          <FilterDropdown
            placeholder="All specialities"
            options={Constants.SPECIALITIES}
          />

          <FilterDropdown
            placeholder="All genders"
            options={Constants.GENDERS}
          />

          <FilterDropdown
            placeholder="All clinics"
            options={Constants.CLINICS}
          />
        </div>
      </div>

      <p className="self-stretch justify-start text-text-secondary text-base font-medium leading-6">
        {resultsCount} {providerLabel} found
      </p>
    </section>
  );
};
