import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-28">
      <div className="max-w-xl rounded-[2rem] border border-line/80 bg-[rgba(248,245,234,0.92)] p-10 text-center shadow-[0_22px_50px_rgba(24,32,25,0.08)] backdrop-blur-sm">
        <p className="story-kicker justify-center text-forest/80">Trail Lost</p>
        <h1 className="story-balance mt-6 font-display text-5xl font-semibold text-forest-deep">
          This animal page could not be found.
        </h1>
        <p className="story-pretty mt-5 text-lg leading-8 text-foreground/78">
          Head back to the story and pick up the trail from the featured mammals
          section.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase text-beige transition hover:bg-forest-deep"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
