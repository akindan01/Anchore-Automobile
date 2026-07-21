"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 1800, suffix: "+", label: "Vehicles Sold" },
  { value: 950, suffix: "+", label: "Satisfied Clients" },
  { value: 70, suffix: "", label: "Cars Available" },
];

const specStrip = [
  "0–100 KM/H — 3.2S",
  "TOP SPEED — 320 KM/H",
  "CERTIFIED INSPECTION — 128 POINTS",
  "SHOWROOM — FAGBA, LAGOS",
  "NATIONWIDE DELIVERY — AVAILABLE",
  "FINANCING — FROM 12 MONTHS",
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden bg-obsidian pt-28">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1731577053683-d5b4156a2d52?auto=format&fit=crop&w=2400&q=80"
          alt="Matte black Mercedes-AMG GT 63 with red accent detailing, rear three-quarter view"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/75 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-container flex-1 flex-col justify-center px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-anchor" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest2 text-anchor">
            Anchore Automobiles — Lagos, Nigeria
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-balance font-display text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tightest text-white"
        >
          Drive Excellence.
          <br />
          <span className="text-anchor">Experience Luxury.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mt-7 max-w-lg text-balance font-body text-base leading-relaxed text-platinum/80 md:text-lg"
        >
          Nigeria&apos;s premium destination for certified luxury vehicles —
          sourced, inspected, and delivered with the standard of care your
          next car deserves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#inventory" variant="primary">
            Browse Inventory
          </Button>
          <Button href="#contact" variant="secondary">
            Book Inspection
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4 md:mt-24"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-semibold text-white md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1.5 font-body text-xs uppercase tracking-wide text-steel md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mt-16 overflow-hidden border-t border-white/10 bg-black/40 py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...specStrip, ...specStrip].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-mono text-xs tracking-wide text-steel"
            >
              {item}
              <span className="text-anchor">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
