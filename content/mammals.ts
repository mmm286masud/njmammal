export type MammalSlug =
  | "white-tailed-deer"
  | "red-fox"
  | "eastern-gray-squirrel"
  | "raccoon"
  | "black-bear";

export type Mammal = {
  slug: MammalSlug;
  name: string;
  shortDescription: string;
  habitat: string;
  diet: string;
  funFacts: string[];
  imageKey: MammalSlug;
};

export type StoryCopy = {
  eyebrow: string;
  title: string;
  body: string;
};

export type CtaCopy = StoryCopy & {
  buttonLabel: string;
};

export type AboutCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  missionParagraphs: string[];
  ethicsTitle: string;
  ethicsPoints: string[];
  creditsTitle: string;
  creditsBody: string;
};

export const heroCopy = {
  eyebrow: "Scrollytelling Field Guide",
  title: "Mammals of New Jersey",
  subtitle: "Discover the wildlife around you",
} as const;

export const introCopy: StoryCopy = {
  eyebrow: "Chapter One",
  title: "Wildlife woven into daily life",
  body:
    "New Jersey's mammals move through pine barrens, suburban edges, river corridors, and hardwood forests with remarkable ease. This story follows five familiar species whose tracks, habits, and resilience help explain the living landscape around us.",
};

export const featuredCopy: StoryCopy = {
  eyebrow: "Chapter Two",
  title: "Five mammals, five ways of seeing the state",
  body:
    "Some thrive beside highways and backyards, others remain symbols of larger wild spaces. Together they reveal how New Jersey balances density, habitat, and biodiversity in a surprisingly dynamic ecosystem.",
};

export const conservationCopy: StoryCopy = {
  eyebrow: "Chapter Three",
  title: "Conservation starts with attention",
  body:
    "Healthy habitat depends on connected forests, clean water, and room for wildlife to move safely. Paying attention to crossings, seasonal food sources, and quiet observation helps people share the state with the animals that already call it home.",
};

export const ctaCopy: CtaCopy = {
  eyebrow: "Chapter Four",
  title: "Explore More Wildlife",
  body:
    "Begin with the species most New Jerseyans recognize, then keep following the trail. Each page expands the story with habitat notes, diet clues, and memorable facts that make the state's wildlife feel closer.",
  buttonLabel: "Start with White-tailed Deer",
};

export const aboutCopy: AboutCopy = {
  eyebrow: "About the Project",
  title: "A field guide built for curious scrolling",
  lead:
    "Mammals of New Jersey is a small experiment in turning a species list into a guided digital story.",
  missionParagraphs: [
    "The homepage is designed like a sequence of chapters: a landscape, a bit of context, five featured mammals, a conservation reminder, and a final invitation to keep exploring.",
    "The goal is not encyclopedic coverage. It is to make nearby wildlife feel vivid, legible, and worth protecting through a cleaner, more immersive reading experience.",
  ],
  ethicsTitle: "Observe responsibly",
  ethicsPoints: [
    "Watch from a distance and avoid feeding wild mammals.",
    "Stay on marked trails when possible to reduce habitat disturbance.",
    "Treat dens, nests, and nighttime activity as signs to slow down and give animals more space.",
  ],
  creditsTitle: "Image credits and sourcing",
  creditsBody:
    "All photography used in this project comes from Unsplash. Attribution details and the search terms used to source each image are listed below.",
};

export const mammals: Mammal[] = [
  {
    slug: "white-tailed-deer",
    name: "White-tailed Deer",
    shortDescription:
      "A quiet, adaptable browser that connects deep woods, meadow edges, and suburban clearings across the state.",
    habitat:
      "Mixed forests, wetland margins, overgrown fields, and neighborhood greenbelts where cover and forage overlap.",
    diet:
      "Leaves, acorns, buds, grasses, berries, and other soft vegetation that changes with the season.",
    funFacts: [
      "The bright underside of the tail flashes like a warning signal when a deer bolts.",
      "White-tailed deer are strongest at dawn and dusk, when cooler temperatures make feeding easier.",
      "A deer's diet shifts constantly through the year, which is part of why the species adapts so well to changing landscapes.",
    ],
    imageKey: "white-tailed-deer",
  },
  {
    slug: "red-fox",
    name: "Red Fox",
    shortDescription:
      "Lean, alert, and surprisingly urban-savvy, the red fox slips between farms, parks, and woodland edges with ease.",
    habitat:
      "Field borders, brushy openings, tidal marsh edges, golf courses, and fragmented woodlands with hunting cover nearby.",
    diet:
      "Small mammals, birds, insects, fruit, and whatever seasonal food is easiest to catch or gather.",
    funFacts: [
      "Foxes use an astonishing range of sounds, from sharp barks to eerie nighttime screams.",
      "Their upright ears can triangulate movement under leaves or snow before they pounce.",
      "The species often benefits from edge habitat, where open ground and shelter sit close together.",
    ],
    imageKey: "red-fox",
  },
  {
    slug: "eastern-gray-squirrel",
    name: "Eastern Gray Squirrel",
    shortDescription:
      "One of the state's most visible mammals, this quick tree-dweller is both a backyard regular and a skilled forest seed scatterer.",
    habitat:
      "Mature hardwood forests, college quads, suburban parks, and neighborhoods with broad-canopy trees.",
    diet:
      "Acorns, hickory nuts, seeds, buds, fungi, and occasional fruits or garden scraps.",
    funFacts: [
      "Gray squirrels bury more nuts than they recover, which helps regenerate woodland areas.",
      "Their tails act as balance tools, parachutes, and cold-weather blankets all at once.",
      "A squirrel's irregular zigzag sprint is a predator-avoidance tactic, not just nervous energy.",
    ],
    imageKey: "eastern-gray-squirrel",
  },
  {
    slug: "raccoon",
    name: "Raccoon",
    shortDescription:
      "Resourceful and nocturnal, raccoons thrive where water, cover, and easy-to-open food sources meet.",
    habitat:
      "Riparian woods, marsh edges, stormwater corridors, attics, and tree cavities near both wild and developed spaces.",
    diet:
      "Crayfish, insects, eggs, fruit, frogs, nuts, and opportunistic scraps from human environments.",
    funFacts: [
      "Raccoons rely on sensitive front paws to investigate objects almost like a second pair of eyes.",
      "Their dark face mask may help reduce glare and sharpen contrast in low light.",
      "Excellent climbers and swimmers, raccoons move through three-dimensional habitat with surprising confidence.",
    ],
    imageKey: "raccoon",
  },
  {
    slug: "black-bear",
    name: "Black Bear",
    shortDescription:
      "New Jersey's largest land mammal, the black bear represents the scale of habitat still needed for wider-ranging wildlife.",
    habitat:
      "Large forest tracts, mountain ridges, swamps, and food-rich corridors, especially in the northwestern part of the state.",
    diet:
      "Mostly plant matter such as berries, mast, shoots, and grasses, with insects and carrion added when available.",
    funFacts: [
      "Despite their size, black bears can climb trees quickly and move with surprising agility.",
      "Seasonal food availability shapes bear movement, especially in late summer and autumn.",
      "Most bear encounters can be reduced through secure trash storage and calm, respectful distance.",
    ],
    imageKey: "black-bear",
  },
];
