"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  { src: "/videos/detailing-1.mp4", type: "video" as const, alt: "Exterior detailing" },
  { src: "/videos/detailing-2.mp4", type: "video" as const, alt: "Interior detailing" },
  { src: "/videos/detailing-3.mp4", type: "video" as const, alt: "Paint correction" },
  { src: "/videos/detailing-4.mp4", type: "video" as const, alt: "Full detail" },
];

export default function GalleryPreview() {
  return (
    <section className="relative py-[var(--section-padding)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
              Our Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:flex items-center gap-2 text-sm font-light tracking-wider uppercase text-white/50 hover:text-white transition-colors duration-300"
          >
            View Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar pb-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.1,
            }}
            className="flex-shrink-0 w-[350px] sm:w-[450px] aspect-[16/10] rounded-xl overflow-hidden relative group cursor-pointer"
          >
            <video
              src={item.src}
              muted
              loop
              playsInline
              autoPlay
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm text-white font-light">{item.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="sm:hidden text-center mt-8 px-6">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-light tracking-wider uppercase text-white/50 hover:text-white transition-colors"
        >
          View Full Gallery
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
