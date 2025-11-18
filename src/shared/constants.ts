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
    about:
      "Dr. Johnson is a board-certified cardiologist with over 12 years of experience in heart health, preventive cardiology, and interventional procedures.",
    phone: "(555) 123-4567",
    email: "sarah.johnson@example.com",
    languages: ["English", "Spanish"],
    locations: [
      {
        id: "metropolitan",
        name: "Metropolitan Medical Center",
        street: "123 Health St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        phone: "(555) 123–4567",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=123+Health+St+New+York+NY+10001",
      },
      {
        id: "green-valley",
        name: "Green Valley Clinic",
        street: "456 Wellness Blvd",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        phone: "(555) 234–5678",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=456+Wellness+Blvd+Los+Angeles+CA+90001",
      },
    ],
  },
  {
    id: "2",
    imageSrc: "/src/assets/providers/provider2.png",
    name: "Dr. Michael Lee",
    speciality: "Neurology",
    primaryLocation: "City Hospital",
    extraLocationsLabel: "+ 2 more location",
    about:
      "Dr. Lee specializes in complex neurological disorders, stroke care, and neurodegenerative disease management.",
    phone: "(555) 222-8899",
    email: "michael.lee@example.com",
    languages: ["English", "Korean"],
    locations: [
      {
        id: "metropolitan",
        name: "Metropolitan Medical Center",
        street: "123 Health St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        phone: "(555) 123–4567",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=123+Health+St+New+York+NY+10001",
      },
      {
        id: "green-valley",
        name: "Green Valley Clinic",
        street: "456 Wellness Blvd",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        phone: "(555) 234–5678",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=456+Wellness+Blvd+Los+Angeles+CA+90001",
      },
    ],
  },
  {
    id: "3",
    imageSrc: "/src/assets/providers/provider3.png",
    name: "Dr. Emily Carter",
    speciality: "Pediatrics",
    primaryLocation: "Metropolitan Children's Hospital",
    extraLocationsLabel: "+ 3 more location",
    about:
      "Dr. Carter is an experienced pediatrician committed to providing warm and attentive care for infants, children, and adolescents.",
    phone: "(555) 987-1234",
    email: "emily.carter@example.com",
    languages: ["English"],
    locations: [
      {
        id: "metropolitan",
        name: "Metropolitan Medical Center",
        street: "123 Health St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        phone: "(555) 123–4567",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=123+Health+St+New+York+NY+10001",
      },
      {
        id: "green-valley",
        name: "Green Valley Clinic",
        street: "456 Wellness Blvd",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        phone: "(555) 234–5678",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=456+Wellness+Blvd+Los+Angeles+CA+90001",
      },
    ],
  },
  {
    id: "4",
    imageSrc: "/src/assets/providers/provider4.png",
    name: "Dr. Emily Margaret McAddams",
    speciality: "Pediatrics",
    primaryLocation: "City Children's Hospital",
    extraLocationsLabel: "+ 2 more location",
    about:
      "Dr. McAddams has over 15 years of experience in childhood development, preventive medicine, and adolescent care.",
    phone: "(555) 444-9034",
    email: "emily.mcaddams@example.com",
    languages: ["English", "French"],
    locations: [
      {
        id: "metropolitan",
        name: "Metropolitan Medical Center",
        street: "123 Health St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        phone: "(555) 123–4567",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=123+Health+St+New+York+NY+10001",
      },
      {
        id: "green-valley",
        name: "Green Valley Clinic",
        street: "456 Wellness Blvd",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        phone: "(555) 234–5678",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=456+Wellness+Blvd+Los+Angeles+CA+90001",
      },
    ],
  },
  {
    id: "5",
    imageSrc: "/src/assets/providers/provider5.png",
    name: "Dr. Michael Smith",
    speciality: "Dermatology",
    primaryLocation: "Harborview Skin Clinic",
    extraLocationsLabel: "+ 1 more location",
    about:
      "Dr. Smith specializes in dermatologic surgery, acne treatment, and chronic skin conditions management.",
    phone: "(555) 721-4432",
    email: "michael.smith@example.com",
    languages: ["English"],
    locations: [
      {
        id: "metropolitan",
        name: "Metropolitan Medical Center",
        street: "123 Health St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        phone: "(555) 123–4567",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=123+Health+St+New+York+NY+10001",
      },
      {
        id: "green-valley",
        name: "Green Valley Clinic",
        street: "456 Wellness Blvd",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        phone: "(555) 234–5678",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=456+Wellness+Blvd+Los+Angeles+CA+90001",
      },
    ],
  },
  {
    id: "6",
    imageSrc: "/src/assets/providers/no-image.jpg",
    name: "Dr. Lisa Patel",
    speciality: "Neurology",
    primaryLocation: "Westside Brain Institute",
    extraLocationsLabel: "+ 3 more location",
    about:
      "Dr. Patel focuses on epilepsy, neuroimaging, and neurological rehabilitation, combining research with clinical practice.",
    phone: "(555) 882-1902",
    email: "lisa.patel@example.com",
    languages: ["English", "Hindi"],
    locations: [
      {
        id: "metropolitan",
        name: "Metropolitan Medical Center",
        street: "123 Health St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        phone: "(555) 123–4567",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=123+Health+St+New+York+NY+10001",
      },
      {
        id: "green-valley",
        name: "Green Valley Clinic",
        street: "456 Wellness Blvd",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        phone: "(555) 234–5678",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=456+Wellness+Blvd+Los+Angeles+CA+90001",
      },
    ],
  },
];

export const DETAIL_TABS = {
  OVERVIEW: "overview",
  LOCATIONS: "locations",
} as const;

export type DetailTab = (typeof DETAIL_TABS)[keyof typeof DETAIL_TABS];
