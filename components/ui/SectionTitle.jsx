"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-5 flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-anchor" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest2 text-anchor">
            {eyebrow}
          </span>
        </motion.div>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`text-balance font-display text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest ${
            light ? "text-obsidian" : "text-white"
          }`}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`mt-5 text-balance font-body text-base leading-relaxed md:text-lg ${
            light ? "text-smoke" : "text-steel"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
