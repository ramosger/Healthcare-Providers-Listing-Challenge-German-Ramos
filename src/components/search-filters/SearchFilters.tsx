import {
  SearchFiltersHeader,
  NameFilter,
  SpecialityFilter,
  GenderFilter,
} from "..";

export function SearchFilters() {
  return (
    <section className="fixed top-0 left-0 w-full max-w-4xl mt-16 mx-auto self-stretch px-6 py-3 inline-flex flex-col justify-start items-start gap-4">
      <SearchFiltersHeader />

      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        <NameFilter />

        <div className="self-stretch inline-flex flex-col justify-center items-start gap-3">
          <SpecialityFilter />

          <GenderFilter />

          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>All clinics</option>
          </select>
        </div>
      </div>
    </section>
  );
}
