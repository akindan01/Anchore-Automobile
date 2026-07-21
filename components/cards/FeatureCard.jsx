"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function FeatureCard({ icon, title, description, index = 0 }) {
  const Icon = Icons[icon] || Icons.BadgeCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface p-8 transition-colors duration-300 hover:border-anchor/50"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-anchor/10 text-anchor transition-colors duration-300 group-hover:bg-anchor group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-steel">{description}</p>
      <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-anchor/0 blur-2xl transition-colors duration-500 group-hover:bg-anchor/20" />
    </motion.div>
  );
}
