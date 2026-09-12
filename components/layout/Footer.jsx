"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube, ArrowRight, Check, MapPin, Mail, Phone, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Inventory", href: "#inventory" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Vehicle Sales", href: "#services" },
  { label: "Vehicle Importation", href: "#services" },
  { label: "Car Financing", href: "#services" },
  { label: "Trade-In", href: "#services" },
  { label: "After Sales Support", href: "#services" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="border-t border-white/[0.08] bg-obsidian pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1.2fr]">
          {/* Brand & Overview */}
          <div>
            <a href="#home" className="inline-flex items-center text-white">
              <Logo />
            </a>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-steel">
              Nigeria&apos;s premium destination for certified luxury
              vehicles — sourced, inspected, financed, and delivered with
              genuine care.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors duration-300 hover:border-anchor hover:bg-anchor hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-anchor">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-steel transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-anchor">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-steel transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom & Contact Info */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-anchor">
              Showroom & Contact
            </p>
            <ul className="mt-5 space-y-3.5 text-steel font-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-anchor mt-1" />
                <a
                  href="https://maps.google.com/?q=175+Iju+Road+by+Fagba+Junction+opp+Savoury+Ifako+Ijaye+Lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  175 Iju Road by Fagba Junction opp Savoury Ifako Ijaye Lagos
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-anchor" />
                <a
                  href="mailto:anchor_autos@yahoo.com"
                  className="hover:text-white transition-colors"
                >
                  anchor_autos@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-anchor" />
                <a
                  href="tel:+2349119977999"
                  className="hover:text-white transition-colors"
                >
                  +234 911 997 7999, +234 706 562 9472 (Call & WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs font-mono text-smoke">
                <Clock className="h-4 w-4 shrink-0 text-anchor" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6 pt-6 border-t border-white/[0.08]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-smoke">
                Newsletter Updates
              </p>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 flex items-center gap-2 font-mono text-xs text-anchor"
                >
                  <Check className="h-4 w-4" /> You&apos;re subscribed
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-full border border-white/15 bg-surface px-4 py-2 font-body text-xs text-white placeholder:text-smoke focus:border-white/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-anchor text-white transition-colors hover:bg-anchor-light"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] py-8 sm:flex-row">
          <p className="font-mono text-xs text-smoke">
            © {new Date().getFullYear()} Anchore Automobiles. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-xs text-smoke transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="font-mono text-xs text-smoke transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
