"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-obsidian py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1756443773455-22e4f3d8d823?auto=format&fit=crop&w=1200&q=80"
              alt="Mercedes-Benz G63 AMG in the Anchore showroom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-obsidian/70 p-5 backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-anchor">
                Est. 2014
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-white">
                Fagba, Lagos
              </p>
            </div>
          </motion.div>

          <div>
            <SectionTitle
              eyebrow="About Anchore"
              title="A Nigerian dealership built on an uncommon idea: trust"
            />
            <p className="mt-6 font-body text-base leading-relaxed text-platinum/80 md:text-lg">
              Anchore Automobiles was founded on a simple frustration — that
              buying a premium vehicle in Nigeria too often meant gambling on
              condition, paperwork, and promises. We set out to build a
              dealership where every vehicle is inspected before it&apos;s
              listed, every price is honest, and every client is treated like
              the only one that matters.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-platinum/80 md:text-lg">
              Over a decade later, we&apos;ve grown into one of Lagos&apos;s
              most trusted names in certified luxury vehicles — importing,
              inspecting, financing, and delivering across the country.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-anchor">
                  Our Mission
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-steel">
                  To make owning a certified premium vehicle in Nigeria
                  transparent, dependable, and genuinely enjoyable.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-anchor">
                  Our Vision
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-steel">
                  To be West Africa&apos;s most trusted name in luxury
                  automobiles — one certified vehicle at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
