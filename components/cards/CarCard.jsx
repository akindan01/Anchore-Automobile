"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gauge, Fuel, Cog, Zap, ArrowRight } from "lucide-react";

export default function CarCard({ vehicle, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface transition-colors duration-300 hover:border-anchor/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name}, ${vehicle.year} — ${vehicle.category}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-obsidian/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-platinum backdrop-blur-sm">
          {vehicle.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-anchor px-3 py-1 font-mono text-[10px] font-semibold text-white">
          {vehicle.year}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold leading-snug text-white">
            {vehicle.name}
          </h3>
        </div>
        <p className="mt-1.5 font-mono text-lg font-semibold text-anchor">
          {vehicle.price}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-y-3 border-t border-white/[0.08] pt-5">
          <SpecItem icon={Gauge} label={vehicle.mileage} />
          <SpecItem icon={Cog} label={vehicle.transmission} />
          <SpecItem icon={Fuel} label={vehicle.fuel} />
          <SpecItem icon={Zap} label={vehicle.horsepower} />
        </div>

        <button className="mt-6 flex w-full items-center justify-between rounded-full border border-white/15 px-5 py-3 font-body text-sm font-medium text-white transition-colors duration-300 group-hover:border-anchor group-hover:bg-anchor">
          View Details
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}

function SpecItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs text-steel">
      <Icon className="h-3.5 w-3.5 text-anchor/80" strokeWidth={2} />
      {label}
    </div>
  );
}
