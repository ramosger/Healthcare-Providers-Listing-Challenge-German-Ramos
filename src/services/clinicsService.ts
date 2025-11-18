import type { Clinic } from "../domain";
import { getProviders } from "./providerService"

export async function getClinics(): Promise<Clinic[]> {
  const providers = await getProviders();

  const map = new Map<string, Clinic>();

  providers.forEach((provider) => {
    const clinic = provider.specialty;

    if (specialty) {
      map.set(specialty.id, specialty);
    }
  });

  return Array.from(map.values());
}
