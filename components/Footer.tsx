import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-[rgba(248,245,234,0.88)] py-8">
      <div className="page-shell flex flex-col gap-4 text-sm text-forest sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl story-pretty">
          Mammals of New Jersey is a scrollytelling field guide built with
          Next.js, Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/about" className="font-semibold hover:text-forest-deep">
            About
          </Link>
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:text-forest-deep"
          >
            Unsplash Credits
          </a>
        </div>
      </div>
    </footer>
  );
}
