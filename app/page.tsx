import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { MammalCard } from "@/components/MammalCard";
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
        <section
          id="featured"
          className="bg-[linear-gradient(180deg,rgba(239,231,211,0.84),rgba(244,240,232,1))] py-24 sm:py-32"
        >
          <div className="page-shell">
            <FadeIn className="max-w-3xl">
              <span className="story-kicker text-forest/80">
                {featuredCopy.eyebrow}
              </span>
              <h2 className="story-balance mt-6 font-display text-4xl leading-tight font-semibold text-forest-deep sm:text-5xl">
                {featuredCopy.title}
              </h2>
              <p className="story-pretty mt-5 text-lg leading-8 text-foreground/78 sm:text-xl">
                {featuredCopy.body}
              </p>
            </FadeIn>
            <div className="mt-14 space-y-8">
              {mammals.map((mammal, index) => (
                <MammalCard
                  key={mammal.slug}
                  mammal={mammal}
                  image={imageSources[mammal.imageKey]}
                  reverse={index % 2 === 1}
                  priority={index < 2}
                />
              ))}
            </div>
          </div>
        </section>
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
