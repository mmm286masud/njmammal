"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
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

type FeaturedCardLayerProps = {
  mammal: Mammal;
  index: number;
  count: number;
  isActive: boolean;
  progress: MotionValue<number>;
};

function clampIndex(index: number, count: number) {
  return Math.min(count - 1, Math.max(0, index));
}

function FeaturedCardLayer({
  mammal,
  index,
  count,
  isActive,
  progress,
}: FeaturedCardLayerProps) {
  const reverse = index % 2 === 1;
  const step = 1 / count;
  const entry = Math.max(0, index * step - step * 0.22);
  const holdStart = index * step;
  const holdEnd = Math.min(1, (index + 0.58) * step);
  const exit = Math.min(1, (index + 0.98) * step);
  const xOffset = reverse ? 52 : -52;

  const opacity = useTransform(progress, [entry, holdStart, holdEnd, exit], [0, 1, 1, 0]);
  const y = useTransform(progress, [entry, holdStart, holdEnd, exit], [48, 0, 0, -48]);
  const x = useTransform(progress, [entry, holdStart, holdEnd, exit], [xOffset, 0, 0, xOffset * 0.35]);
  const scale = useTransform(progress, [entry, holdStart, holdEnd, exit], [0.96, 1, 1, 0.985]);

  return (
    <motion.div
      className={`absolute inset-0 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      style={{ opacity, y, x, scale }}
      aria-hidden={!isActive}
    >
      <MammalCard
        mammal={mammal}
        image={imageSources[mammal.imageKey]}
        reverse={reverse}
        priority={index === 0}
        animationMode="none"
        interactive={isActive}
        className="h-full"
      />
    </motion.div>
  );
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
      className="relative min-h-[500vh] overflow-clip bg-[linear-gradient(180deg,#ece3cd_0%,#f7f2e8_30%,#efe4cf_62%,#f4efe4_100%)]"
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="page-shell w-full py-16 sm:py-20">
          <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div className="order-2 max-w-xl lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="story-kicker text-forest/80">{eyebrow}</span>
                <h2 className="story-balance mt-6 font-display text-4xl leading-tight font-semibold text-forest-deep sm:text-5xl">
                  {title}
                </h2>
                <p className="story-pretty mt-5 text-lg leading-8 text-foreground/78 sm:text-xl">
                  {body}
                </p>
              </motion.div>

              <div className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:mt-10 lg:block lg:space-y-3 lg:overflow-visible lg:pb-0">
                {mammals.map((mammal, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <Link
                      key={mammal.slug}
                      href={`/mammals/${mammal.slug}`}
                      className={`flex min-w-fit items-center justify-between gap-4 rounded-full border px-4 py-3 text-sm font-semibold tracking-[0.14em] uppercase transition lg:min-w-0 ${
                        isActive
                          ? "border-forest bg-forest text-beige shadow-[0_14px_30px_rgba(47,93,80,0.18)]"
                          : "border-line/80 bg-white/55 text-forest hover:border-forest/45 hover:bg-white/80"
                      }`}
                    >
                      <span>{mammal.name}</span>
                      <span className="text-[0.65rem] opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-forest/62">
                Scroll to switch species
              </p>
            </div>

            <div className="order-1 relative h-[18rem] sm:h-[23rem] md:h-[30rem] lg:order-2 lg:h-[36rem]">
              {mammals.map((mammal, index) => (
                <FeaturedCardLayer
                  key={mammal.slug}
                  mammal={mammal}
                  index={index}
                  count={mammals.length}
                  isActive={index === activeIndex}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
