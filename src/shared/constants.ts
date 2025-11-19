export const GENDERS = ["male", "female", "other"] as const;

export const GENDER_OPTIONS = GENDERS.map((g) => ({
  label: g.charAt(0).toUpperCase() + g.slice(1),
  value: g,
}));

export const DETAIL_TABS = {
  OVERVIEW: "overview",
  LOCATIONS: "locations",
} as const;

export type DetailTab = (typeof DETAIL_TABS)[keyof typeof DETAIL_TABS];
