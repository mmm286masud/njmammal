"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ImageSource } from "@/data/imageSources";

type ScrollySectionProps = {
  eyebrow: string;
  title: string;
  body: string;
  theme?: "light" | "forest" | "dark";
  id?: string;
  align?: "left" | "center";
  image?: ImageSource;
  children?: ReactNode;
};

const themeClasses = {
  light:
    "bg-[linear-gradient(180deg,rgba(248,245,234,0.96),rgba(239,231,211,0.92))] text-foreground",
  forest:
    "bg-[linear-gradient(180deg,rgba(47,93,80,0.96),rgba(28,50,43,0.98))] text-white",
  dark:
    "bg-[linear-gradient(180deg,rgba(12,18,16,0.92),rgba(26,26,26,0.98))] text-white",
} as const;

export function ScrollySection({
  eyebrow,
  title,
  body,
  theme = "light",
  id,
  align = "left",
  image,
  children,
}: ScrollySectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-36, 36],
  );
  const isCentered = align === "center";

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative overflow-hidden py-24 sm:py-32 ${themeClasses[theme]}`}
    >
      {image ? (
        <>
          <motion.div className="absolute inset-0" style={{ y }}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover object-center opacity-28"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,17,15,0.4),rgba(11,17,15,0.72))]" />
        </>
      ) : null}
      <motion.div
        className="page-shell relative z-10"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div
          className={`max-w-3xl ${isCentered ? "mx-auto text-center" : "text-left"}`}
        >
          <span
            className={`story-kicker ${
              theme === "light" ? "text-forest/80" : "text-beige/82"
            }`}
          >
            {eyebrow}
          </span>
          <h2 className="story-balance mt-6 font-display text-4xl leading-tight font-semibold sm:text-5xl">
            {title}
          </h2>
          <p
            className={`story-pretty mt-5 text-lg leading-8 sm:text-xl ${
              theme === "light" ? "text-foreground/78" : "text-white/82"
            }`}
          >
            {body}
          </p>
        </div>
        {children ? (
          <div className={`${isCentered ? "mx-auto max-w-3xl" : "max-w-4xl"} mt-10`}>
            {children}
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
