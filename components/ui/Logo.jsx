import Image from "next/image";

/**
 * Anchore Autos Limited official brand lockup.
 * Uses the official circular emblem with red vehicle silhouette and typography.
 */
export default function Logo({ className = "", showText = true, size = "default" }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10 md:h-11 md:w-11",
    lg: "h-14 w-14 md:h-16 md:w-16",
  }[size] || "h-10 w-10 md:h-11 md:w-11";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official circular emblem badge */}
      <div className={`relative ${sizeClasses} shrink-0 overflow-hidden rounded-full border border-white/20 bg-white shadow-[0_4px_16px_rgba(179,0,0,0.25)] ring-1 ring-white/10 transition-transform duration-300 hover:scale-105`}>
        <Image
          src="/anchore-logo.png"
          alt="Anchore Autos Limited Logo"
          fill
          sizes="64px"
          className="object-contain p-[1px]"
          priority
        />
      </div>

      {/* Wordmark */}
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="flex items-center gap-1.5">
            <span className="font-display text-base font-bold tracking-[0.18em] text-current md:text-lg">
              ANCHORE
            </span>
          </span>
          <span className="mt-1 font-mono text-[8px] font-semibold uppercase tracking-[0.34em] text-current opacity-70">
            AUTOS LIMITED
          </span>
        </span>
      )}
    </span>
  );
}