export const SearchFiltersHeader = () => {
  return (
    <div className="inline-flex flex-col justify-start items-start gap-1 lg:gap-2 lg:w-[510px]">
      <h1 className="w-80 lg:self-stretch justify-center text-(--text-default) text-2xl lg:text-3xl font-semibold font-[DM_Sans]">
        Healthcare Providers
      </h1>
      <p className="w-80 lg:w-full lg:self-stretch justify-center text-(--text-tertiary) text-base lg:text-lg font-normal lg:font-medium font-[DM_Sans] leading-6">
        Find and connect with healthcare professionals in your area
      </p>
    </div>
  );
}
