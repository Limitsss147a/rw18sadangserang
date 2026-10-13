"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { facilities } from "@/data/facilities";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function FacilityCards() {
  return (
    <section id="fasilitas" className="py-20 md:py-28 bg-white scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#195694] text-sm font-semibold mb-4 border border-blue-100">
            <Sparkles className="w-4 h-4 text-[#195694]" aria-hidden="true" />
            Infrastruktur Berkelanjutan
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight">
            Fasilitas Unggulan RW 18
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Empat pilar fasilitas terpadu yang mewujudkan kelestarian lingkungan,
            kemandirian pangan, dan pengelolaan sampah sirkular di RW 18 Sadang Serang.
          </p>
        </motion.div>

        {/* 4 Cards Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative h-[440px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-slate-900 border border-slate-100 flex flex-col justify-end"
            >
              {/* Facility background image */}
              <Image
                src={facility.heroImage}
                alt={`Foto fasilitas ${facility.name} RW 18`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                priority={facility.id === "taman-dahlia"}
              />

              {/* Dark Gradient Overlay for optimal text readability */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/10 transition-opacity duration-300"
                aria-hidden="true"
              />

              {/* Color Indicator Accent Bar */}
              <div
                className="absolute top-0 inset-x-0 h-1.5 transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: facility.color }}
                aria-hidden="true"
              />

              {/* Card Content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <div className="mt-auto">
                  <span
                    className="inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-md text-white mb-3 backdrop-blur-md"
                    style={{ backgroundColor: `${facility.color}cc` }}
                  >
                    Fasilitas
                  </span>

                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-blue-100 transition-colors">
                    {facility.name}
                  </h3>

                  <p className="mt-2 text-slate-200 text-base line-clamp-3 leading-relaxed">
                    {facility.tagline}
                  </p>

                  <div className="mt-5 pt-3 border-t border-white/15">
                    <Link
                      href={`/fasilitas/${facility.slug}`}
                      className="min-h-[48px] inline-flex items-center gap-2 text-white font-semibold text-base group-hover:text-amber-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg py-2"
                    >
                      <span>Selengkapnya</span>
                      <ArrowRight
                        className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
