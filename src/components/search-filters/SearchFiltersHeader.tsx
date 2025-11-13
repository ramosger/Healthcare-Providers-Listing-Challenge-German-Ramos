export const SearchFiltersHeader = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <h1 className="w-80 justify-center text-(--text-default) text-2xl font-semibold font-[DM_Sans]">
        Healthcare Providers
      </h1>
      <p className="w-80 justify-center text-(--text-tertiary) text-base font-normal font-[DM_Sans] leading-6">
        Find and connect with healthcare professionals in your area
      </p>
    </div>
  );
}
