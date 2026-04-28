import { mammals, type Mammal, type MammalSlug } from "@/content/mammals";

export function getAllMammals(): Mammal[] {
  return mammals;
}

export function getMammalBySlug(slug: string): Mammal | undefined {
  return mammals.find((mammal) => mammal.slug === slug);
}

export function getAdjacentMammals(slug: MammalSlug): {
  previous: Mammal | null;
  next: Mammal | null;
} {
  const index = mammals.findIndex((mammal) => mammal.slug === slug);

  if (index === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: mammals[index - 1] ?? null,
    next: mammals[index + 1] ?? null,
  };
}
