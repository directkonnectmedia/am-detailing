"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
    alt: "Luxury sedan exterior detail",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    alt: "Sports car front detail",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
    alt: "Classic car paint correction",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80",
    alt: "Interior leather conditioning",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80",
    alt: "Foam wash exterior",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    alt: "Wheel and rim detail",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&q=80",
    alt: "Dark luxury vehicle",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    alt: "BMW detail finish",
    span: false,
  },
];

export default function GalleryPreview() {
  return (
    <section className="relative py-[var(--section-padding)] px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="flex items-end justify-between mb-12"
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

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: i * 0.08,
              }}
              className="break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  item.span ? "aspect-[4/5]" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-white font-light">{item.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden text-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-light tracking-wider uppercase text-white/50 hover:text-white transition-colors"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
