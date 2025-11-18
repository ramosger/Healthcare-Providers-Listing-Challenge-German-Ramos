import { useState, useEffect } from "react";
import { SearchFiltersHeader, NameFilter, FilterDropdown } from "..";
import type { Clinic, Specialty } from "../../domain";
import * as Constants from "../../shared";
import { getSpecialties } from "../../services";

type SearchFiltersProps = {
  resultsCount: number;
};

export const SearchFilters = ({ resultsCount }: SearchFiltersProps) => {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [isSpecialtiesLoading, setIsSpecialtiesLoading] = useState(true);
  const [specialtiesError, setSpecialtiesError] = useState<string | null>(null);
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [isClinicsLoading, setIsClinicsLoading] = useState(true);
  const [clinicsError, setClinicsError] = useState<string | null>(null);

  const fetchSpecialtiesData = async () => {
      try {
        const specialtiesData = await getSpecialties();
        setSpecialties(specialtiesData);
      } catch (err) {
        console.error("Error loading specialties:", err);
        setSpecialtiesError("There was a problem loading specialties. Please try again.");
      } finally {
        setIsSpecialtiesLoading(false);
      }
    };

  const fetchClinicsData = async () => {
      try {
        const clinicsData = await getClinics();
        setClinics(clinicsData);
      } catch (err) {
        console.error("Error loading clinics:", err);
        setClinicsError("There was a problem loading clinics. Please try again.");
      } finally {
        setIsClinicsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchSpecialtiesData();
      fetchClinicsData();
    }, []);

  return (
    <section className="w-full mt-22 self-stretch px-6 lg:px-44 lg:pt-6 lg:pb-3 py-3 inline-flex flex-col justify-start items-start gap-4 lg:gap-7">
      <SearchFiltersHeader />

      <div className="self-stretch inline-flex flex-col justify-start items-start gap-5">
        <NameFilter />

        <div className="self-stretch inline-flex flex-col lg:flex-row justify-center lg:justify-start items-start gap-3">
          <FilterDropdown
            placeholder="All specialities"
            options={specialties}
          />

          <FilterDropdown
            placeholder="All genders"
            options={Constants.GENDERS}
          />

          <FilterDropdown
            placeholder="All clinics"
            options={clinics}
          />
        </div>
      </div>

      <p className="self-stretch justify-start text-text-secondary text-base font-medium leading-6">
        {resultsCount} provider{resultsCount === 1 ? "" : "s"} found
      </p>
    </section>
  );
};
