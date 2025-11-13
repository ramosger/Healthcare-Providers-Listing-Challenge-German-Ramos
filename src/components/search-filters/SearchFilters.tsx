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
    <section className="fixed top-0 left-0 w-full max-w-4xl mt-16 mx-auto self-stretch px-6 py-3 inline-flex flex-col justify-start items-start gap-4">
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
