import { ChevronDown } from "../../assets/icons";

export function SpecialityFilter() {
  return (
    <div className="self-stretch flex flex-col justify-start items-start">
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch h-10 bg-(--background-default-default) rounded-md outline-1 -outline-offset-1 outline-(--border-default) inline-flex justify-start items-center overflow-hidden">
          <div className="flex-1 flex justify-start items-center overflow-hidden">
            <div className="flex-1 self-stretch px-3 py-1.5 flex justify-between items-center">
              <option className="flex-1 justify-start text-(--text-default) text-sm font-normal font-[DM_Sans] leading-5 line-clamp-1">
                All Specialities
              </option>
            </div>
            <div className="self-stretch pr-3 flex justify-start items-center gap-2">
              <div className="w-4 h-4 relative">
                <ChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
