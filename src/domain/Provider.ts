import type { ProviderClinics } from "./ProviderClinics";
import type { Speciality } from "./Speciality";

export type Provider = {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  about: string;
  clinics: ProviderClinics[];
  profile_pic?: string;
  speciality: Speciality;
  languages: string[];
};