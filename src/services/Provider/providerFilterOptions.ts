import type { Provider } from "../../domain";
import type { DropdownOption } from "../../shared";

export type ProviderFilterOptions = {
  specialtyOptions: DropdownOption[];
  clinicOptions: DropdownOption[];
};

export const buildProviderFilterOptions = (
  providers: Provider[]
): ProviderFilterOptions => {
  const specialtiesMap = new Map<string, { id: string; name: string }>();
  const clinicsMap = new Map<string, { id: string; name: string }>();

  providers.forEach((p) => {
    if (p.specialty) {
      specialtiesMap.set(p.specialty.id, {
        id: p.specialty.id,
        name: p.specialty.name,
      });
    }

    p.clinics.forEach((c) => {
      clinicsMap.set(c.id, { id: c.id, name: c.name });
    });
  });

  const specialtyOptions: DropdownOption[] = Array.from(
    specialtiesMap.values()
  ).map((s) => ({
    label: s.name,
    value: s.id,
  }));

  const clinicOptions: DropdownOption[] = Array.from(clinicsMap.values()).map(
    (c) => ({
      label: c.name,
      value: c.id,
    })
  );

  return { specialtyOptions, clinicOptions };
};
