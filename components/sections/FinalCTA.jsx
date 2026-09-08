"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-obsidian py-28 md:py-36">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1753634349909-bdaee29607cb?auto=format&fit=crop&w=2400&q=80"
          alt="Certified vehicles lined up in the Anchore showroom"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/85 to-obsidian" />
      </div>

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex w-fit items-center gap-3"
        >
          <span className="h-px w-8 bg-anchor" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest2 text-anchor">
            Anchore Automobiles
          </span>
          <span className="h-px w-8 bg-anchor" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-balance font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[1.05] tracking-tightest text-white"
        >
          Ready to own your dream vehicle?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-5 max-w-lg text-balance font-body text-base leading-relaxed text-steel md:text-lg"
        >
          Schedule a visit to our Fagba, Lagos showroom today, and let our
          team match you with the right vehicle — and the right plan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Button href="https://wa.me/2347065629472?text=Hello%20Anchore%20Autos%2C%20I%20would%20like%20to%20inquire%20about%20your%20full%20inventory%20and%20upcoming%20vehicles."
            variant="primary">
            Contact Anchore
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
