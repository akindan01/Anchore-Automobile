"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, CreditCard, KeyRound } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse",
    description: "Explore our certified inventory online or visit the Lagos showroom in person.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Inspect",
    description: "Review the full 128-point inspection report and take your vehicle for a test drive.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Purchase",
    description: "Pay outright or apply for financing structured around your budget and timeline.",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Drive Away",
    description: "Documentation handled, plates arranged — you leave with the keys, not the paperwork.",
  },
];

export default function Process() {
  return (
    <section className="bg-obsidian py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Process"
          title="From browsing to driving, in four steps"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-y-14 md:grid-cols-4 md:gap-x-8">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-6 hidden h-px bg-anchor md:block"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-anchor bg-obsidian font-mono text-sm font-bold text-anchor">
                {step.number}
              </div>
              <step.icon className="mt-6 h-6 w-6 text-white/70" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 max-w-[220px] font-body text-sm leading-relaxed text-steel">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
