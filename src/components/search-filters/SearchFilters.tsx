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
    <section className="w-full mt-16 self-stretch px-6 lg:px-44 lg:pt-6 lg:pb-3 py-3 inline-flex flex-col justify-start items-start gap-4 lg:gap-7">
      <SearchFiltersHeader />

      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        <NameFilter />

        <div className="self-stretch inline-flex flex-col justify-center items-start gap-3">
          <FilterDropdown
            placeholder="All specialities"
            options={SPECIALITIES}
          />

          <FilterDropdown placeholder="All genders" options={GENDERS} />

          <FilterDropdown placeholder="All clinics" options={CLINICS} />
        </div>
      </div>
    </section>
  );
};
