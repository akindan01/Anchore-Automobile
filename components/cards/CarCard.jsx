"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gauge, Fuel, Cog, Zap, MessageCircle, Phone } from "lucide-react";

export default function CarCard({ vehicle, index = 0 }) {
  const whatsappUrl = `https://wa.me/2347065629472?text=${encodeURIComponent(
    `Hello Anchore Autos, I am inquiring about the ${vehicle.name} (${vehicle.price}) listed on your website.`
  )}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface transition-all duration-300 hover:border-anchor/40 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)]"
    >
      {/* Clean, Elegant Image Presentation */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} — ${vehicle.category}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-60" />

        {/* Minimalist Category Tag */}
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-obsidian/75 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-platinum backdrop-blur-md">
          {vehicle.category}
        </span>
      </div>

      {/* Vehicle Info & Details */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold leading-snug text-white">
              {vehicle.name}
            </h3>
            <p className="mt-1 font-display text-lg font-bold tracking-tight text-anchor">
              {vehicle.price}
            </p>
          </div>
        </div>

        {/* Minimalist Specs Row */}
        <div className="mt-5 grid grid-cols-2 gap-y-3 border-t border-white/[0.08] pt-4">
          <SpecItem icon={Gauge} label={vehicle.mileage} />
          <SpecItem icon={Cog} label={vehicle.transmission} />
          <SpecItem icon={Fuel} label={vehicle.fuel} />
          <SpecItem icon={Zap} label={vehicle.horsepower} />
        </div>

        {/* Direct Contact Anchore Action (WhatsApp / Call) */}
        <div className="mt-6 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-anchor px-5 py-3 font-body text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_4px_16px_rgba(179,0,0,0.35)] transition-all duration-300 hover:bg-anchor-light hover:shadow-[0_6px_22px_rgba(217,30,30,0.55)] active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Contact Anchore</span>
          </a>
        </div>
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
