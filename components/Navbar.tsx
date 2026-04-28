import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#featured", label: "Featured" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="page-shell pt-4">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-[rgba(15,23,19,0.62)] px-4 py-3 text-white shadow-[0_18px_45px_rgba(16,24,20,0.24)] backdrop-blur-xl sm:px-6">
          <Link
            href="/"
            className="font-display text-xl tracking-[0.2em] text-beige uppercase"
          >
            NJ Mammals
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-semibold tracking-[0.18em] uppercase text-white/78 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
