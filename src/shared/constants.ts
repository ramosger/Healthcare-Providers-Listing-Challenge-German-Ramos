export const SPECIALITIES = [
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Neurology",
  "Oncology",
];

export const GENDERS = ["Male", "Female", "Other"];

export const CLINICS = [
  "Example Clinic",
  "Example Clinic 1",
  "Example Clinic 2",
];

export const DETAIL_TABS = {
  OVERVIEW: "overview",
  LOCATIONS: "locations",
} as const;

export type DetailTab = (typeof DETAIL_TABS)[keyof typeof DETAIL_TABS];
