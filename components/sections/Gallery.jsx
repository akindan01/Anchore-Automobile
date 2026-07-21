"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const images = [
  {
    src: "https://i.pinimg.com/736x/a3/55/0c/a3550caab6a9d3bf3b0eab449597013a.jpg",
    alt: "Mercedes-AMG GLE 53",
    h: "h-[440px]",
  },
  {
    src: "https://i.pinimg.com/736x/d2/d1/02/d2d102f8c1a3c3c9f224ac07858449bd.jpg",
    alt: "Mercedes-AMG GLE 53-Inner View",
    h: "h-[300px]",
  },
  {
    src: "https://i.pinimg.com/736x/0a/6e/58/0a6e58243aedd7cfec81ad3cd76cda62.jpg",
    alt: "2024 LAND ROVER RANGE ROVER SV",
    h: "h-[360px]",
  },
  {
    src: "https://i.pinimg.com/736x/38/f8/61/38f8618d857f3ec7b86d9481c50e3092.jpg",
    alt: "2024 LAND ROVER RANGE ROVER SV-Inner View",
    h: "h-[480px]",
  },
  {
    src: "https://i.pinimg.com/1200x/97/76/f2/9776f240807c7b9e4c3234d29e1d3099.jpg",
    alt: "LEXUS ES350H",
    h: "h-[320px]",
  },
  {
    src: "https://i.pinimg.com/736x/d7/9f/b6/d79fb63ea17cb23477ea95dac8c2aff0.jpg",
    alt: "LEXUS LS500H",
    h: "h-[400px]",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-obsidian py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="The showroom floor"
          description="A closer look at the vehicles that pass through Anchore — before they find their next owner."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <motion.div
              key={img.src + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative mb-5 block w-full overflow-hidden rounded-2xl border border-white/[0.08] ${img.h}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 right-4 translate-y-2 font-mono text-xs text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
