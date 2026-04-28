"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ImageSource } from "@/data/imageSources";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: ImageSource;
};

export function Hero({ eyebrow, title, subtitle, image }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden pt-24">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,13,0.18),rgba(10,16,13,0.58)_48%,rgba(10,16,13,0.9)_100%)]" />
      <motion.div
        className="page-shell relative z-10 w-full pb-18 sm:pb-24"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-[rgba(16,25,20,0.34)] p-8 text-beige shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-10">
          <span className="story-kicker text-beige/85">{eyebrow}</span>
          <h1 className="story-balance mt-6 font-display text-5xl leading-none font-semibold sm:text-7xl md:text-[5.6rem]">
            {title}
          </h1>
          <p className="story-pretty mt-5 max-w-2xl text-lg text-white/82 sm:text-2xl">
            {subtitle}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
