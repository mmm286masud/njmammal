import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { imageSources } from "@/data/imageSources";
import {
  getAdjacentMammals,
  getAllMammals,
  getMammalBySlug,
} from "@/lib/mammalUtils";

type MammalPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: MammalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const mammal = getMammalBySlug(slug);

  if (!mammal) {
    return {
      title: "Mammal not found",
    };
  }

  return {
    title: mammal.name,
    description: mammal.shortDescription,
  };
}

export function generateStaticParams() {
  return getAllMammals().map((mammal) => ({
    slug: mammal.slug,
  }));
}

export const dynamicParams = false;

export default async function MammalDetailPage({ params }: MammalPageProps) {
  const { slug } = await params;
  const mammal = getMammalBySlug(slug);

  if (!mammal) {
    notFound();
  }

  const image = imageSources[mammal.imageKey];
  const { previous, next } = getAdjacentMammals(mammal.slug);

  return (
    <main className="flex-1 overflow-x-clip pb-20 pt-24">
      <section className="page-shell">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-line/70 bg-dark text-white shadow-[0_28px_80px_rgba(17,24,20,0.24)]">
          <div className="relative min-h-[70vh]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,15,12,0.12),rgba(9,15,12,0.6)_55%,rgba(9,15,12,0.86)_100%)]" />
            <FadeIn className="relative z-10 flex min-h-[70vh] items-end p-8 sm:p-10 lg:p-14">
              <div className="max-w-3xl">
                <p className="story-kicker text-beige/80">Mammal Detail</p>
                <h1 className="story-balance mt-6 font-display text-5xl leading-none font-semibold sm:text-7xl">
                  {mammal.name}
                </h1>
                <p className="story-pretty mt-5 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                  {mammal.shortDescription}
                </p>
                <p className="mt-8 text-sm uppercase tracking-[0.18em] text-beige/74">
                  Photo by {image.photographer}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="page-shell mt-10 grid gap-6 lg:grid-cols-2">
        <FadeIn className="rounded-[2rem] border border-line/80 bg-[rgba(248,245,234,0.88)] p-8 shadow-[0_22px_50px_rgba(24,32,25,0.08)] backdrop-blur-sm sm:p-10">
          <h2 className="font-display text-3xl font-semibold text-forest-deep">
            Habitat
          </h2>
          <p className="story-pretty mt-4 text-lg leading-8 text-foreground/80">
            {mammal.habitat}
          </p>
        </FadeIn>
        <FadeIn
          delay={0.08}
          className="rounded-[2rem] border border-line/80 bg-[rgba(248,245,234,0.88)] p-8 shadow-[0_22px_50px_rgba(24,32,25,0.08)] backdrop-blur-sm sm:p-10"
        >
          <h2 className="font-display text-3xl font-semibold text-forest-deep">
            Diet
          </h2>
          <p className="story-pretty mt-4 text-lg leading-8 text-foreground/80">
            {mammal.diet}
          </p>
        </FadeIn>
      </section>

      <section className="page-shell mt-6">
        <FadeIn className="rounded-[2rem] border border-line/80 bg-forest p-8 text-beige shadow-[0_22px_50px_rgba(24,32,25,0.14)] sm:p-10">
          <h2 className="font-display text-3xl font-semibold">Fun facts</h2>
          <ul className="mt-5 space-y-4 text-lg leading-8 text-white/86">
            {mammal.funFacts.map((fact) => (
              <li key={fact} className="flex gap-3">
                <span className="mt-3 h-2 w-2 rounded-full bg-beige/80" />
                <span className="story-pretty">{fact}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section className="page-shell mt-8">
        <FadeIn className="rounded-[2rem] border border-line/80 bg-[rgba(248,245,234,0.88)] p-8 shadow-[0_22px_50px_rgba(24,32,25,0.08)] backdrop-blur-sm sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="story-kicker text-forest/76">Keep Exploring</p>
              <h2 className="mt-5 font-display text-3xl font-semibold text-forest-deep">
                Continue through the field guide
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {previous ? (
                <Link
                  href={`/mammals/${previous.slug}`}
                  className="rounded-full border border-line/80 px-5 py-3 text-sm font-semibold tracking-[0.16em] uppercase text-forest transition hover:bg-forest hover:text-beige"
                >
                  Previous: {previous.name}
                </Link>
              ) : null}
              {next ? (
                <Link
                  href={`/mammals/${next.slug}`}
                  className="rounded-full bg-forest px-5 py-3 text-sm font-semibold tracking-[0.16em] uppercase text-beige transition hover:bg-forest-deep"
                >
                  Next: {next.name}
                </Link>
              ) : null}
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
