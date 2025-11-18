import type { Clinic } from "./Clinic";
import type { Specialty } from "./Specialty";

export type Provider = {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  about: string;
  clinics: Clinic[];
  profile_pic?: string;
  specialty: Specialty;
  languages: string[];
};