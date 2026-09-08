"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const EASE = [0.16, 1, 0.3, 1];

const stats = [
  { value: 1000, suffix: "+", label: "Vehicles Sold" },
  { value: 10, suffix: "+", label: "Years in Business" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-between bg-obsidian overflow-hidden pt-24 md:pt-28">
      {/* AMBIENT GLOW ACCENT */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-anchor/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-anchor/10 blur-[140px]" />

      {/* MAIN HERO STAGE */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 py-8 md:px-12 lg:px-16 lg:py-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="z-10 max-w-xl lg:col-span-6"
          >
            {/* Headline */}
            <h1 className="font-serif text-[clamp(2.9rem,5.6vw,5.4rem)] font-normal leading-[1.04] tracking-[-0.03em] text-white">
              Drive Excellence
              <br />
              Experience
              <br />
              Luxury.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-steel md:text-base">
              Nigeria&apos;s premium destination for certified luxury vehicles — sourced, inspected, and delivered with the standard of care your next car deserves.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href="#inventory"
                className="inline-flex items-center justify-center rounded-[2px] bg-anchor px-7 py-3.5 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_6px_20px_-6px_rgba(179,0,0,0.5)] transition-all duration-200 hover:bg-anchor-light active:scale-95"
              >
                EXPLORE INVENTORY
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 font-body text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-anchor"
              >
                <span>BOOK INSPECTION</span>
                <span className="text-[9px] text-white transition-transform group-hover:translate-x-0.5 group-hover:text-anchor">
                  ▶
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: LUXURY VEHICLE SEAMLESSLY BLENDED INTO OBSIDIAN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
            className="relative lg:col-span-6 flex items-center justify-center"
          >
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="/hero-car-dark.jpg"
                alt="Anchore Elite Luxury Performance Vehicle"
                width={1200}
                height={675}
                priority
                quality={95}
                className="h-auto w-full object-cover brightness-[0.95] contrast-[1.05]"
              />
              {/* Seamless gradient fade blending into obsidian */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian/30" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Minimalist Center Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center pt-8 pb-2">
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.38em] text-steel">
            SCROLL
          </span>
        </div>
      </div>

      {/* STATISTICS BAR ATTACHED IMMEDIATELY UNDER HERO (EXACTLY FROM STATISTICS.JSX) */}
      <div className="relative z-20 w-full border-t border-white/[0.08] bg-obsidian py-12 md:py-14 text-white">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="relative text-left border-l border-white/10 pl-6 first:border-l-0">
                <div className="font-display text-[clamp(2.4rem,4.5vw,3.6rem)] font-bold leading-none tracking-tight text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-3 h-[2px] w-8 bg-anchor" />
                <div className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
