import { describe, expect, it } from "vitest";
import { mammals } from "@/content/mammals";
import { imageSources } from "@/data/imageSources";

describe("mammal content", () => {
  it("includes the five featured mammals with unique slugs", () => {
    expect(mammals).toHaveLength(5);
    expect(new Set(mammals.map((mammal) => mammal.slug)).size).toBe(5);
  });

  it("provides complete copy for every mammal", () => {
    for (const mammal of mammals) {
      expect(mammal.name).toBeTruthy();
      expect(mammal.shortDescription).toBeTruthy();
      expect(mammal.habitat).toBeTruthy();
      expect(mammal.diet).toBeTruthy();
      expect(mammal.funFacts.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("maps every mammal to an Unsplash image record", () => {
    for (const mammal of mammals) {
      const image = imageSources[mammal.imageKey];
      expect(image).toBeDefined();
      expect(image.src).toContain("images.unsplash.com");
      expect(image.sourceUrl).toContain("unsplash.com/photos/");
      expect(image.searchTerm).toBeTruthy();
    }
  });
});
