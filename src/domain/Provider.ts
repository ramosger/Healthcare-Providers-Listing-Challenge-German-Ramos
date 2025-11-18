import type { ProviderLocation } from "./ProviderLocation";

export type Provider = {
  id: string;
  imageSrc: string;
  name: string;
  speciality: string;
  primaryLocation: string;
  extraLocationsLabel: string;
  about: string;
  phone: string;
  email: string;
  languages: string[];
  locations: ProviderLocation[];
};