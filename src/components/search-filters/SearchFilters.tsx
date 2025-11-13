import { SearchFiltersHeader, NameFilter, FilterDropdown } from "..";

const SPECIALITIES = [
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Neurology",
  "Oncology",
];

const GENDERS = ["Male", "Female", "Other"];
const CLINICS = ["Example Clinic", "Example Clinic 1", "Example Clinic 2"];

export const SearchFilters = () => {
  return (
    <section className="w-full mt-22 lg:mt-26 self-stretch px-6 lg:px-44 lg:pt-6 lg:pb-3 py-3 inline-flex flex-col justify-start items-start gap-4 lg:gap-7">
      <SearchFiltersHeader />

      <div className="self-stretch inline-flex flex-col justify-start items-start gap-5">
        <NameFilter />

        <div className="self-stretch inline-flex flex-col lg:flex-row justify-center lg:justify-start items-start gap-3">
          <FilterDropdown
            placeholder="All specialities"
            options={SPECIALITIES}
          />

          <FilterDropdown placeholder="All genders" options={GENDERS} />

          <FilterDropdown placeholder="All clinics" options={CLINICS} />
        </div>
      </div>

      <p className="self-stretch justify-start text-(--text-tertiary) text-base font-medium font-[DM_Sans] leading-6">6 providers found</p>
    </section>
  );
};
