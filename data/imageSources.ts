import type { MammalSlug } from "@/content/mammals";

export type ImageKey = "heroForest" | "conservationBackdrop" | MammalSlug;

export type ImageSource = {
  src: string;
  alt: string;
  width: number;
  height: number;
  photographer: string;
  sourceUrl: string;
  searchTerm: string;
};

const buildUnsplashSrc = (photoPath: string, width: number, height: number) =>
  `https://images.unsplash.com/${photoPath}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;

export const imageSources: Record<ImageKey, ImageSource> = {
  heroForest: {
    src: buildUnsplashSrc("photo-1743878206228-5f36b5f5c830", 2200, 1467),
    alt: "Sunlit forest trail with layered green foliage and tall trees.",
    width: 2200,
    height: 1467,
    photographer: "Sarlote Laura Jevdokimova",
    sourceUrl: "https://unsplash.com/photos/Y5p_0LW1xQg",
    searchTerm: "new jersey forest",
  },
  conservationBackdrop: {
    src: buildUnsplashSrc("photo-1764111812995-b73ff58fc7d7", 2200, 1400),
    alt: "Dark forest canopy with misty light filtering through the trees.",
    width: 2200,
    height: 1400,
    photographer: "Dmitry Spravko",
    sourceUrl: "https://unsplash.com/photos/7fP8ONsZcyw",
    searchTerm: "dark forest fog",
  },
  "white-tailed-deer": {
    src: buildUnsplashSrc("photo-1768841977110-19eb2337ea86", 1600, 1067),
    alt: "White-tailed deer standing alert among woodland brush.",
    width: 1600,
    height: 1067,
    photographer: "Dmytro Koplyk",
    sourceUrl: "https://unsplash.com/photos/UE8-R7qO2O4",
    searchTerm: "white tailed deer forest",
  },
  "red-fox": {
    src: buildUnsplashSrc("photo-1541749504779-0e668281c3a6", 1600, 1067),
    alt: "Red fox standing in a green field and looking toward the camera.",
    width: 1600,
    height: 1067,
    photographer: "Evgeni Evgeniev",
    sourceUrl: "https://unsplash.com/photos/16EFEq4gphQ",
    searchTerm: "red fox wildlife",
  },
  "eastern-gray-squirrel": {
    src: buildUnsplashSrc("photo-1683199217530-da17c09a977c", 1600, 1067),
    alt: "Gray squirrel perched on a tree trunk with moss and bark texture.",
    width: 1600,
    height: 1067,
    photographer: "Boys in Bristol Photography",
    sourceUrl: "https://unsplash.com/photos/cD1-BJH3to0",
    searchTerm: "gray squirrel tree",
  },
  raccoon: {
    src: buildUnsplashSrc("photo-1749745698566-6608ee25cbba", 1600, 1067),
    alt: "Raccoon climbing a branch in low, moody light.",
    width: 1600,
    height: 1067,
    photographer: "Joseph Corl",
    sourceUrl: "https://unsplash.com/photos/ZkqbTeXxyGo",
    searchTerm: "raccoon night",
  },
  "black-bear": {
    src: buildUnsplashSrc("photo-1758678283024-ed25413e3714", 1600, 1067),
    alt: "Black bear moving through a forest clearing.",
    width: 1600,
    height: 1067,
    photographer: "Dmytro Koplyk",
    sourceUrl: "https://unsplash.com/photos/5kfrZSnXQVw",
    searchTerm: "black bear forest",
  },
};
