import type { ProviderClinics, Specialty } from "@domain";

export type Provider = {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  about: string;
  clinics: ProviderClinics[];
  profile_pic?: string;
  specialty: Specialty;
  languages: string[];
};