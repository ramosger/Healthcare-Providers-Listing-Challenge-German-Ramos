import { useState } from "react";
import { ChevronDown } from "../../assets/icons";

export const SpecialityFilter = () => {
  const [isSelected, setIsSelected] = useState("All specialities");
  const [isOpen, setIsOpen] = useState(false);

  const specialities = [
    "Cardiology",
    "Dermatology",
    "Pediatrics",
    "Neurology",
    "Oncology",
  ];

  return (
    <div className="self-stretch relative flex flex-col justify-start items-start">
      <div
        className="self-stretch h-10 bg-(--background-default-default) rounded-md outline-1 -outline-offset-1 outline-(--border-default) inline-flex justify-start items-center overflow-hidden cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex-1 flex justify-start items-center overflow-hidden">
          <div className="flex-1 self-stretch px-3 py-1.5 flex justify-between items-center">
            <span className="flex-1 justify-start text-(--text-default) text-sm font-normal font-[DM_Sans] leading-5 line-clamp-1">
              {isSelected}
            </span>
          </div>

          <div className="self-stretch pr-3 flex justify-start items-center gap-2">
            <div className="w-4 h-4 relative">
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-(--background-default-default) border border-(--border-default) rounded-md shadow-md z-20">
          <button
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            onClick={() => {
              setIsSelected("All specialities");
              setIsOpen(false);
            }}
          >
            All specialities
          </button>

          {specialities.map((speciality) => (
            <div
              key={speciality}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => {
                setIsSelected(speciality);
                setIsOpen(false);
              }}
            >
              {speciality}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
