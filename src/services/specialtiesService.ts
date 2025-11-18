import type { Specialty } from "../domain";
import { getProviders } from "./providerService"

export async function getSpecialties(): Promise<Specialty[]> {
  const providers = await getProviders();

  const map = new Map<string, Specialty>();

  providers.forEach((provider) => {
    const specialty = provider.specialty;

    if (specialty) {
      map.set(specialty.id, specialty);
    }
  });

  return Array.from(map.values());
}
