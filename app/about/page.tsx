import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { aboutCopy } from "@/content/mammals";
import { imageSources } from "@/data/imageSources";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the mission, conservation focus, and Unsplash image credits behind Mammals of New Jersey.",
};

export default function AboutPage() {
  const credits = Object.entries(imageSources);

  return (
    <main className="flex-1 pb-20 pt-28">
      <section className="page-shell">
        <FadeIn className="max-w-3xl">
          <span className="story-kicker text-forest/80">{aboutCopy.eyebrow}</span>
          <h1 className="story-balance mt-6 font-display text-5xl leading-tight font-semibold text-forest-deep sm:text-6xl">
            {aboutCopy.title}
          </h1>
          <p className="story-pretty mt-5 text-xl leading-8 text-foreground/78">
            {aboutCopy.lead}
          </p>
        </FadeIn>
      </section>

      <section className="page-shell mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <FadeIn className="rounded-[2rem] border border-line/80 bg-[rgba(248,245,234,0.88)] p-8 shadow-[0_22px_50px_rgba(24,32,25,0.08)] backdrop-blur-sm sm:p-10">
          <div className="space-y-5 text-lg leading-8 text-foreground/80">
            {aboutCopy.missionParagraphs.map((paragraph) => (
              <p key={paragraph} className="story-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
        <FadeIn
          delay={0.08}
          className="rounded-[2rem] border border-line/80 bg-forest p-8 text-beige shadow-[0_22px_50px_rgba(24,32,25,0.14)] sm:p-10"
        >
          <h2 className="font-display text-3xl font-semibold">
            {aboutCopy.ethicsTitle}
          </h2>
          <ul className="mt-5 space-y-4 text-base leading-7 text-white/84">
            {aboutCopy.ethicsPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-beige/80" />
                <span className="story-pretty">{point}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section className="page-shell mt-12">
        <FadeIn className="rounded-[2rem] border border-line/80 bg-[rgba(248,245,234,0.88)] p-8 shadow-[0_22px_50px_rgba(24,32,25,0.08)] backdrop-blur-sm sm:p-10">
          <h2 className="font-display text-3xl font-semibold text-forest-deep">
            {aboutCopy.creditsTitle}
          </h2>
          <p className="story-pretty mt-4 max-w-3xl text-lg leading-8 text-foreground/78">
            {aboutCopy.creditsBody}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {credits.map(([key, image]) => (
              <article
                key={key}
                className="rounded-[1.5rem] border border-line/80 bg-white/60 p-5"
              >
                <h3 className="font-display text-2xl font-semibold text-forest-deep">
                  {key}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-forest/76">
                  Search term: {image.searchTerm}
                </p>
                <p className="mt-3 text-base text-foreground/78">
                  Photo by {image.photographer}
                </p>
                <a
                  href={image.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-forest hover:text-forest-deep"
                >
                  View on Unsplash
                </a>
              </article>
            ))}
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
