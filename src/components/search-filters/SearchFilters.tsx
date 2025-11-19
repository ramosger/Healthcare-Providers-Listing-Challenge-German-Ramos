import { useMemo } from "react";
import { SearchFiltersHeader, NameFilter, FilterDropdown } from "..";
import type { Provider } from "../../domain";
import { GENDER_OPTIONS, PROVIDER_FILTER_KEYS } from "../../shared";
import {
  buildProviderFilterOptions,
  type ProviderFilters,
} from "../../services";

type SearchFiltersProps = {
  resultsCount: number;
  providers: Provider[];
  filters: ProviderFilters;
  onFiltersChange: (f: ProviderFilters) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

export const SearchFilters = ({
  resultsCount,
  providers,
  filters,
  onFiltersChange,
  searchTerm,
  onSearchChange,
}: SearchFiltersProps) => {
  const { specialtyOptions, clinicOptions } = useMemo(
    () => buildProviderFilterOptions(providers),
    [providers]
  );

  const createFilterChangeHandler =
    (key: keyof ProviderFilters) => (value: string | null) => {
      onFiltersChange({
        ...filters,
        [key]: value,
      });
    };

  return (
    <section className="w-full mt-22 self-stretch px-6 lg:px-44 lg:pt-6 lg:pb-3 py-3 inline-flex flex-col justify-start items-start gap-4 lg:gap-7">
      <SearchFiltersHeader />

      <div className="self-stretch inline-flex flex-col justify-start items-start gap-5">
        <NameFilter value={searchTerm} onChange={onSearchChange} />

        <div className="self-stretch inline-flex flex-col lg:flex-row justify-center lg:justify-start items-start gap-3">
          <FilterDropdown
            placeholder="All specialities"
            options={specialtyOptions}
            value={filters.specialtyId}
            onChange={createFilterChangeHandler(PROVIDER_FILTER_KEYS.SPECIALTY)}
          />

          <FilterDropdown
            placeholder="All genders"
            options={GENDER_OPTIONS}
            value={filters.gender}
            onChange={createFilterChangeHandler(PROVIDER_FILTER_KEYS.GENDER)}
          />

          <FilterDropdown
            placeholder="All clinics"
            options={clinicOptions}
            value={filters.clinicId}
            onChange={createFilterChangeHandler(PROVIDER_FILTER_KEYS.CLINIC)}
          />
        </div>
      </div>

      <p className="self-stretch justify-start text-text-secondary text-base font-medium leading-6">
        {resultsCount} provider{resultsCount === 1 ? "" : "s"} found
      </p>
    </section>
  );
};
