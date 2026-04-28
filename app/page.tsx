import Link from "next/link";
import { FeaturedScroller } from "@/components/FeaturedScroller";
import { Hero } from "@/components/Hero";
import { ScrollySection } from "@/components/ScrollySection";
import { ScrollProgress } from "@/components/ScrollProgress";
import {
  conservationCopy,
  ctaCopy,
  featuredCopy,
  heroCopy,
  introCopy,
} from "@/content/mammals";
import { imageSources } from "@/data/imageSources";
import { getAllMammals } from "@/lib/mammalUtils";

export default function Home() {
  const mammals = getAllMammals();

  return (
    <>
      <ScrollProgress />
      <main className="flex-1 overflow-x-clip">
        <Hero {...heroCopy} image={imageSources.heroForest} />
        <ScrollySection
          id="story"
          eyebrow={introCopy.eyebrow}
          title={introCopy.title}
          body={introCopy.body}
        />
        <FeaturedScroller
          eyebrow={featuredCopy.eyebrow}
          title={featuredCopy.title}
          body={featuredCopy.body}
          mammals={mammals}
        />
        <ScrollySection
          id="conservation"
          eyebrow={conservationCopy.eyebrow}
          title={conservationCopy.title}
          body={conservationCopy.body}
          theme="dark"
          image={imageSources.conservationBackdrop}
        />
        <ScrollySection
          id="explore"
          eyebrow={ctaCopy.eyebrow}
          title={ctaCopy.title}
          body={ctaCopy.body}
          theme="forest"
          align="center"
        >
          <div className="flex justify-center">
            <Link
              href="/mammals/white-tailed-deer"
              className="inline-flex items-center rounded-full border border-beige/40 bg-beige px-6 py-3 text-sm font-semibold tracking-[0.2em] uppercase text-forest-deep transition hover:-translate-y-0.5 hover:bg-white"
            >
              {ctaCopy.buttonLabel}
            </Link>
          </div>
        </ScrollySection>
      </main>
    </>
  );
}
