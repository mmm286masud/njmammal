import { describe, expect, it } from "vitest";
import { mammals } from "@/content/mammals";
import {
  getAdjacentMammals,
  getAllMammals,
  getMammalBySlug,
} from "@/lib/mammalUtils";

describe("mammalUtils", () => {
  it("returns the mammals in their declared story order", () => {
    expect(getAllMammals()).toEqual(mammals);
  });

  it("finds a mammal by slug", () => {
    expect(getMammalBySlug("red-fox")?.name).toBe("Red Fox");
    expect(getMammalBySlug("missing-slug")).toBeUndefined();
  });

  it("returns adjacent mammals for detail page navigation", () => {
    expect(getAdjacentMammals("white-tailed-deer")).toEqual({
      previous: null,
      next: mammals[1],
    });

    expect(getAdjacentMammals("eastern-gray-squirrel")).toEqual({
      previous: mammals[1],
      next: mammals[3],
    });

    expect(getAdjacentMammals("black-bear")).toEqual({
      previous: mammals[3],
      next: null,
    });
  });
});
