"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const filters = ["All", "Exterior", "Interior", "Trucks & SUVs", "Specialty"];

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
    alt: "Luxury sedan full detail",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    alt: "Sports car front detail",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    alt: "Classic car paint correction",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
    alt: "Interior leather detail",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
    alt: "Foam wash process",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    alt: "Wheel and rim restoration",
    category: "Specialty",
  },
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&q=80",
    alt: "Dark luxury vehicle finish",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    alt: "BMW ceramic coating",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    alt: "Red sports car detail",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
    alt: "SUV interior deep clean",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    alt: "Corvette exterior polish",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    alt: "Truck detail finish",
    category: "Trucks & SUVs",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="text-center mb-12"
        >
          <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Gallery
          </h1>
          <p className="text-white/40 font-light max-w-md mx-auto">
            Browse our recent projects and see the A.M. Detailing difference.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[var(--color-red)] text-white"
                  : "bg-white/5 border border-white/10 text-white/50 hover:border-white/20 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: i * 0.05,
              }}
              className="break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-white font-light">{item.alt}</p>
                  <p className="text-xs text-[var(--color-red)] mt-1">
                    {item.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
