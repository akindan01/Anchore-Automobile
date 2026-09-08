"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const links = [
  { label: "VISION", href: "#about" },
  { label: "PERFORMANCE", href: "#performance" },
  { label: "INVENTORY", href: "#inventory" },
  { label: "SERVICES", href: "#services" },
  { label: "GALLERY", href: "#gallery" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-obsidian/95 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl"
        : "bg-transparent py-5"
        }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-16"
      >
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center leading-none tracking-tight">
          <Logo className="text-white transition-transform duration-300 group-hover:scale-[1.02]" />
        </a>

        {/* Center links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-body text-[11px] font-semibold tracking-[0.22em] uppercase text-white/75 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-anchor after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[2px] bg-anchor px-6 py-2.5 font-body text-[11px] font-bold tracking-[0.2em] uppercase text-white shadow-[0_4px_16px_rgba(179,0,0,0.35)] transition-all duration-200 hover:bg-anchor-light hover:shadow-[0_6px_20px_rgba(217,30,30,0.5)] active:scale-95"
          >
            INQUIRE
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-obsidian p-6 backdrop-blur-3xl lg:hidden"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <Logo className="text-white" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.ul
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                }}
                className="mt-8 flex flex-col gap-2"
              >
                {links.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      closed: { opacity: 0, x: -12 },
                      open: { opacity: 1, x: 0 },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/[0.06] py-3.5 font-display text-xl font-medium tracking-wide text-white transition-colors hover:text-anchor"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="mt-8 pb-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-anchor py-3.5 text-center font-body text-xs font-bold tracking-[0.2em] uppercase text-white shadow-lg transition-colors hover:bg-anchor-light"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
