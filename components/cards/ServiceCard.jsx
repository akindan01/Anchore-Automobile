"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function ServiceCard({ icon, title, description, index = 0 }) {
  const Icon = Icons[icon] || Icons.Car;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -5 }}
      className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-charcoal p-7 transition-colors duration-300 hover:border-anchor/50"
    >
      <div>
        <Icon
          className="h-7 w-7 text-anchor transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.75}
        />
        <h3 className="mt-5 font-display text-base font-semibold text-white">{title}</h3>
        <p className="mt-2.5 font-body text-sm leading-relaxed text-steel">{description}</p>
      </div>
    </motion.div>
  );
}
