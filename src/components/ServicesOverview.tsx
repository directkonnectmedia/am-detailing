"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Droplets,
  Car,
  Sparkles,
  Shield,
  CircleDot,
  Paintbrush,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash",
    description:
      "Hand wash, foam bath, clay bar treatment, and premium drying for a spotless finish.",
    href: "/services#exterior",
  },
  {
    icon: Car,
    title: "Interior Detail",
    description:
      "Deep vacuum, leather conditioning, dashboard care, and complete interior restoration.",
    href: "/services#interior",
  },
  {
    icon: Sparkles,
    title: "Full Detail",
    description:
      "Complete interior and exterior transformation — our most comprehensive service.",
    href: "/services#packages",
  },
  {
    icon: Paintbrush,
    title: "Paint Correction",
    description:
      "Swirl removal, scratch repair, and multi-stage polish for showroom-quality paint.",
    href: "/services#paint-correction",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description:
      "Long-lasting paint protection with hydrophobic ceramic sealant technology.",
    href: "/services#ceramic",
  },
  {
    icon: CircleDot,
    title: "Tires & Rims",
    description:
      "Deep clean, degrease, and dress your wheels and tires to look brand new.",
    href: "/services#tires",
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative py-[var(--section-padding)] px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Premium Services
          </h2>
          <p className="text-white/40 font-light max-w-md mx-auto">
            Every detail matters. From a quick refresh to a full restoration, we
            treat every vehicle like our own.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
            >
              <Link
                href={service.href}
                className="group block p-8 rounded-xl border border-white/5 hover:border-white/10 bg-[var(--color-charcoal-light)]/50 hover:bg-[var(--color-charcoal-light)] transition-all duration-500"
              >
                <service.icon className="w-8 h-8 text-[var(--color-red)] mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-medium text-white mb-2 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40 font-light leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block px-8 py-3 text-sm font-light tracking-[0.2em] uppercase text-white/60 border border-white/10 hover:border-white/20 hover:text-white rounded-lg transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
