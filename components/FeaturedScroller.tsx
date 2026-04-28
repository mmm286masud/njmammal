"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import type { Mammal } from "@/content/mammals";
import { imageSources } from "@/data/imageSources";
import { MammalCard } from "@/components/MammalCard";

type FeaturedScrollerProps = {
  eyebrow: string;
  title: string;
  body: string;
  mammals: Mammal[];
};

function clampIndex(index: number, count: number) {
  return Math.min(count - 1, Math.max(0, index));
}

export function FeaturedScroller({
  eyebrow,
  title,
  body,
  mammals,
}: FeaturedScrollerProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const activeMammal = mammals[activeIndex];
  const activeImage = imageSources[activeMammal.imageKey];

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = clampIndex(Math.floor(value * mammals.length), mammals.length);
    setActiveIndex((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex,
    );
  });

  if (prefersReducedMotion) {
    return (
      <section
        id="featured"
        className="bg-[linear-gradient(180deg,rgba(239,231,211,0.84),rgba(244,240,232,1))] py-24 sm:py-32"
      >
        <div className="page-shell">
          <div className="max-w-3xl">
            <span className="story-kicker text-forest/80">{eyebrow}</span>
            <h2 className="story-balance mt-6 font-display text-4xl leading-tight font-semibold text-forest-deep sm:text-5xl">
              {title}
            </h2>
            <p className="story-pretty mt-5 text-lg leading-8 text-foreground/78 sm:text-xl">
              {body}
            </p>
          </div>
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
    );
  }

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="relative min-h-[500vh] overflow-clip bg-[linear-gradient(180deg,#ece3cd_0%,#f7f2e8_26%,#efe4cf_60%,#f4efe4_100%)]"
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="page-shell w-full py-10 sm:py-14">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="story-kicker justify-center text-forest/80">
              {eyebrow}
            </span>
            <h2 className="story-balance mt-6 font-display text-4xl leading-tight font-semibold text-forest-deep sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="story-pretty mx-auto mt-5 max-w-3xl text-lg leading-8 text-foreground/78 sm:text-xl">
              {body}
            </p>
          </motion.div>

          <div className="mt-8 sm:mt-10">
            <motion.article
              key={activeMammal.slug}
              initial={{ opacity: 0, y: 26, scale: 0.992 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="overflow-hidden rounded-[2rem] border border-line/70 bg-[rgba(248,245,234,0.94)] shadow-[0_34px_90px_rgba(35,45,38,0.14)] backdrop-blur-sm"
            >
              <div className="grid min-h-[70vh] lg:grid-cols-[1.35fr_0.85fr]">
                <div className="relative min-h-[22rem] lg:min-h-full">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    priority={activeIndex < 2}
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,23,19,0.08),rgba(14,23,19,0.24)_60%,rgba(14,23,19,0.52)_100%)]" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-7">
                    <span className="rounded-full border border-white/24 bg-[rgba(255,255,255,0.14)] px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white uppercase backdrop-blur-md">
                      Featured Mammal
                    </span>
                    <span className="rounded-full border border-white/18 bg-[rgba(12,18,16,0.18)] px-3 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-md">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(mammals.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <p className="max-w-md text-sm font-semibold tracking-[0.18em] text-white/76 uppercase">
                      Photo by {activeImage.photographer}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex items-center gap-4 text-forest/68">
                      <span className="h-px w-12 bg-current opacity-50" />
                      <span className="text-xs font-semibold tracking-[0.24em] uppercase">
                        {activeMammal.name}
                      </span>
                    </div>
                    <h3 className="story-balance mt-5 font-display text-4xl leading-tight font-semibold text-forest-deep sm:text-5xl lg:text-[3.6rem]">
                      <Link
                        href={`/mammals/${activeMammal.slug}`}
                        className="transition hover:text-forest"
                      >
                        {activeMammal.name}
                      </Link>
                    </h3>
                    <p className="story-pretty mt-5 max-w-xl text-lg leading-8 text-foreground/80 sm:text-xl">
                      {activeMammal.shortDescription}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.6rem] border border-line/70 bg-white/52 p-5">
                      <p className="text-xs font-semibold tracking-[0.2em] text-forest/68 uppercase">
                        Habitat
                      </p>
                      <p className="story-pretty mt-3 text-base leading-7 text-foreground/78">
                        {activeMammal.habitat}
                      </p>
                    </div>
                    <div className="rounded-[1.6rem] border border-line/70 bg-[rgba(47,93,80,0.08)] p-5">
                      <p className="text-xs font-semibold tracking-[0.2em] text-forest/68 uppercase">
                        Diet
                      </p>
                      <p className="story-pretty mt-3 text-base leading-7 text-foreground/78">
                        {activeMammal.diet}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 border-t border-line/70 pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex gap-2" aria-hidden="true">
                      {mammals.map((mammal, index) => (
                        <span
                          key={mammal.slug}
                          className={`h-1.5 rounded-full transition-all ${
                            index === activeIndex
                              ? "w-12 bg-forest"
                              : "w-5 bg-forest/18"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-sm font-semibold tracking-[0.18em] text-forest/62 uppercase">
                        Scroll to switch species
                      </p>
                      <Link
                        href={`/mammals/${activeMammal.slug}`}
                        className="inline-flex items-center rounded-full bg-forest px-5 py-3 text-sm font-semibold tracking-[0.18em] uppercase text-beige transition hover:bg-forest-deep"
                      >
                        View Detail Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
