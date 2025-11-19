export const GENDERS = ["Male", "Female", "Other"] as const;

export const GENDER_OPTIONS = GENDERS.map((g) => ({
  label: g,
  value: g,
}));

export const DETAIL_TABS = {
  OVERVIEW: "overview",
  LOCATIONS: "locations",
} as const;

export type DetailTab = (typeof DETAIL_TABS)[keyof typeof DETAIL_TABS];
