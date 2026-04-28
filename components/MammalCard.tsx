"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Mammal } from "@/content/mammals";
import type { ImageSource } from "@/data/imageSources";

type MammalCardProps = {
  mammal: Mammal;
  image: ImageSource;
  reverse?: boolean;
  priority?: boolean;
  animationMode?: "inView" | "none";
  interactive?: boolean;
  className?: string;
};

export function MammalCard({
  mammal,
  image,
  reverse = false,
  priority = false,
  animationMode = "inView",
  interactive = true,
  className = "",
}: MammalCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const useInViewAnimation = animationMode === "inView" && !prefersReducedMotion;
  const linkProps = interactive
    ? {}
    : {
        tabIndex: -1,
        "aria-hidden": true,
      };

  return (
    <motion.article
      className={`overflow-hidden rounded-[2rem] border border-line/80 bg-[rgba(248,245,234,0.86)] shadow-[0_26px_60px_rgba(31,44,36,0.12)] backdrop-blur-sm ${className}`}
      initial={useInViewAnimation ? { opacity: 0, x: reverse ? 44 : -44 } : false}
      whileInView={useInViewAnimation ? { opacity: 1, x: 0 } : undefined}
      viewport={useInViewAnimation ? { once: true, amount: 0.2 } : undefined}
      transition={useInViewAnimation ? { duration: 0.72, ease: "easeOut" } : undefined}
    >
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="group relative min-h-[18rem] flex-1 overflow-hidden md:min-h-[26rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 768px) 56vw, 100vw"
            className="object-cover object-center transition duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,16,0.06),rgba(12,18,16,0.38))]" />
        </div>
        <div className="flex w-full flex-col justify-center gap-5 p-7 md:w-[24rem] md:p-10">
          <span className="story-kicker text-forest/76">Featured Mammal</span>
          <h3 className="font-display text-4xl leading-tight font-semibold text-forest-deep">
            <Link
              href={`/mammals/${mammal.slug}`}
              className="transition hover:text-forest"
              {...linkProps}
            >
              {mammal.name}
            </Link>
          </h3>
          <p className="story-pretty text-lg leading-8 text-foreground/76">
            {mammal.shortDescription}
          </p>
          <div className="pt-2">
            <Link
              href={`/mammals/${mammal.slug}`}
              className="inline-flex items-center rounded-full bg-forest px-5 py-3 text-sm font-semibold tracking-[0.18em] uppercase text-beige transition hover:bg-forest-deep"
              {...linkProps}
            >
              View Detail Page
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
