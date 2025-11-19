import { useMemo } from "react";
import { SearchFiltersHeader, NameFilter, FilterDropdown } from "..";
import type { Clinic, Provider } from "../../domain";
import { GENDER_OPTIONS } from "../../shared";
import type { DropdownOption } from "../../shared";
import type { ProviderFilters } from "../../services";

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
  onSearchChange
}: SearchFiltersProps) => {
  const { specialtyOptions, clinicOptions } = useMemo(() => {
    const specialtiesMap = new Map<string, { id: string; name: string }>();
    const clinicsMap = new Map<string, { id: string; name: string }>();

    providers.forEach((p: Provider) => {
      if (p.specialty) {
        const id = p.specialty.id;
        const name = p.specialty.name;

        if (!specialtiesMap.has(id)) {
          specialtiesMap.set(id, { id, name });
        }
      }

      p.clinics.forEach((c: Clinic) => {
        const id = c.id;
        const name = c.name;

        if (!clinicsMap.has(id)) {
          clinicsMap.set(id, { id, name });
        }
      });
    });

    const specialtyOptions: DropdownOption[] = Array.from(
      specialtiesMap.values()
    ).map((s) => ({
      label: s.name,
      value: s.id,
    }));

    const clinicOptions: DropdownOption[] = Array.from(clinicsMap.values()).map(
      (c) => ({
        label: c.name,
        value: c.id,
      })
    );

    return { specialtyOptions, clinicOptions };
  }, [providers]);

  const handleSpecialtyChange = (specialtyId: string | null) => {
    onFiltersChange({
      ...filters,
      specialtyId,
    });
  };

  const handleGenderChange = (gender: string | null) => {
    onFiltersChange({
      ...filters,
      gender,
    });
  };

  const handleClinicChange = (clinicId: string | null) => {
    onFiltersChange({
      ...filters,
      clinicId,
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
            onChange={handleSpecialtyChange}
          />

          <FilterDropdown
            placeholder="All genders"
            options={GENDER_OPTIONS}
            value={filters.gender}
            onChange={handleGenderChange}
          />

          <FilterDropdown
            placeholder="All clinics"
            options={clinicOptions}
            value={filters.clinicId}
            onChange={handleClinicChange}
          />
        </div>
      </div>

      <p className="self-stretch justify-start text-text-secondary text-base font-medium leading-6">
        {resultsCount} provider{resultsCount === 1 ? "" : "s"} found
      </p>
    </section>
  );
};
