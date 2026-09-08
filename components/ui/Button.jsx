"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
    "bg-anchor text-white hover:bg-anchor-light shadow-[0_8px_30px_-8px_rgba(179,0,0,0.55)]",
  secondary:
    "bg-transparent text-white border border-white/25 hover:border-white/70 hover:bg-white/5",
  light:
    "bg-white text-obsidian hover:bg-platinum",
  ghost: "bg-transparent text-white/80 hover:text-white",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon = true,
  className = "",
  type = "button",
  target,
  rel,
  ...props
}) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y, size }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
    if (onClick) onClick(e);
  };

  const classes = `group relative isolate overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      onClick={createRipple}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight
          className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.25}
        />
      )}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/25"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            animation: "ripple 650ms ease-out forwards",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(1);
            opacity: 0;
          }
          from {
            transform: scale(0);
            opacity: 1;
          }
        }
      `}</style>
    </motion.span>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={typeof children === "string" ? children : undefined}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      aria-label={typeof children === "string" ? children : undefined}
      {...props}
    >
      {content}
    </button>
  );
}
