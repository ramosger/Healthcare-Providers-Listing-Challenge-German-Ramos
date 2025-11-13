import type { Provider } from "../domain";

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

export const PROVIDERS: Provider[] = [
  {
    id: "1",
    imageSrc: "/src/assets/providers/provider1.png",
    name: "Dr. Sarah Johnson",
    speciality: "Cardiology",
    primaryLocation: "Metropolitan Medical Center",
    extraLocationsLabel: "+ 1 more location",
  },
  {
    id: "2",
    imageSrc: "/src/assets/providers/provider2.png",
    name: "Dr. Michael Lee",
    speciality: "Neurology",
    primaryLocation: "City Hospital",
    extraLocationsLabel: "+ 2 more location",
  },
  {
    id: "3",
    imageSrc: "/src/assets/providers/provider3.png",
    name: "Dr. Emily Carter",
    speciality: "Pediatrics",
    primaryLocation: "Metropolitan Children's Hospital",
    extraLocationsLabel: "+ 3 more location",
  },
  {
    id: "4",
    imageSrc: "/src/assets/providers/provider4.png",
    name: "Dr. Emily Margaret McAddams",
    speciality: "Pediatrics",
    primaryLocation: "City Children's Hospital",
    extraLocationsLabel: "+ 2 more location",
  },
  {
    id: "5",
    imageSrc: "/src/assets/providers/provider5.png",
    name: "Dr. Michael Smith",
    speciality: "Dermatology",
    primaryLocation: "Harborview Skin Clinic",
    extraLocationsLabel: "+ 1 more location",
  },
  {
    id: "6",
    imageSrc: "/src/assets/providers/no-image.jpg",
    name: "Dr. Lisa Patel",
    speciality: "Neurology",
    primaryLocation: "Westside Brain Institute",
    extraLocationsLabel: "+ 3 more location",
  },
];
