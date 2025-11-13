import { Search } from "../../assets/icons";

export const NameFilter = () => {
  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
      <div className="self-stretch inline-flex flex-col justify-start items-start">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="self-stretch h-10 bg-(--background-default-default) rounded-md outline-1 -outline-offset-1 outline-(--border-default) inline-flex justify-start items-center overflow-hidden">
            <div className="flex-1 flex justify-start items-center overflow-hidden">
              <div className="self-stretch pl-3 flex justify-start items-center gap-2">
                <Search />
              </div>
              <div className="font-light flex-1 self-stretch px-3 py-1.5 flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Search providers by name..."
                  className="placeholder-(--text-disabled-default) flex-1 justify-start text-(--text-disabled-default) text-sm font-normal font-[DM_Sans] leading-5 line-clamp-1"
                  aria-label="Search providers by name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
