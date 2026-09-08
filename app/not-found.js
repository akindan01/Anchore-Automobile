import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-obsidian px-6 text-center text-platinum">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-anchor">
        404 — Page Not Found
      </div>
      <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
        Lost in the Showroom
      </h1>
      <p className="mt-4 max-w-md font-body text-sm text-steel md:text-base">
        The vehicle or page you are looking for has been moved, sold, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-anchor px-7 py-3 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-anchor-light shadow-[0_8px_30px_-8px_rgba(179,0,0,0.55)]"
      >
        Return to Home
      </Link>
    </div>
  );
}
