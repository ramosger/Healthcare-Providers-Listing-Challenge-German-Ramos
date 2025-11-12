export function SearchFilters() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 mt-18">
      <div className="text-left mb-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Healthcare Providers
        </h1>
        <p className="text-gray-500 mt-1 text-md">
          Find and connect with healthcare professionals in your area
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="relative">
          <svg
            width="16"
            height="16"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3536 13.6461L11.2243 10.5174C12.1313 9.42846 12.5836 8.03177 12.487 6.61786C12.3905 5.20395 11.7526 3.88168 10.706 2.92613C9.65938 1.97058 8.28468 1.45531 6.86784 1.48751C5.451 1.51971 4.10112 2.0969 3.09901 3.09901C2.0969 4.10112 1.51971 5.451 1.48751 6.86784C1.45531 8.28468 1.97058 9.65938 2.92613 10.706C3.88168 11.7526 5.20395 12.3905 6.61786 12.487C8.03177 12.5836 9.42846 12.1313 10.5174 11.2243L13.6461 14.3536C13.6926 14.4001 13.7478 14.437 13.8085 14.4621C13.8691 14.4872 13.9342 14.5002 13.9999 14.5002C14.0656 14.5002 14.1307 14.4872 14.1913 14.4621C14.252 14.437 14.3072 14.4001 14.3536 14.3536C14.4001 14.3072 14.437 14.252 14.4621 14.1913C14.4872 14.1307 14.5002 14.0656 14.5002 13.9999C14.5002 13.9342 14.4872 13.8691 14.4621 13.8085C14.437 13.7478 14.4001 13.6926 14.3536 13.6461ZM2.4999 6.9999C2.4999 6.10988 2.76382 5.23985 3.25829 4.49983C3.75275 3.75981 4.45556 3.18303 5.27782 2.84244C6.10009 2.50185 7.00489 2.41273 7.8778 2.58636C8.75072 2.76 9.55254 3.18858 10.1819 3.81792C10.8112 4.44725 11.2398 5.24908 11.4134 6.12199C11.5871 6.99491 11.498 7.89971 11.1574 8.72197C10.8168 9.54424 10.24 10.247 9.49996 10.7415C8.75994 11.236 7.88991 11.4999 6.9999 11.4999C5.80683 11.4986 4.66301 11.024 3.81938 10.1804C2.97575 9.33679 2.50122 8.19297 2.4999 6.9999Z"
              fill="#1C202E"
            />
          </svg>

          <input
            type="text"
            placeholder="Search providers by name..."
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            aria-label="Search providers by name"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>All specialties</option>
          </select>

          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>All genders</option>
          </select>

          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>All clinics</option>
          </select>
        </div>
      </div>
    </section>
  );
}
