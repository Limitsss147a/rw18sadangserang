"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import { sdgs } from "@/data/sdgs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function SDGsPreview() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-sm font-semibold mb-4 border border-emerald-200">
            <Globe className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            Agenda Pembangunan Berkelanjutan
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight">
            Kontribusi Terhadap SDGs
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-slate-600 leading-relaxed">
            Inisiatif fasilitas lingkungan RW 18 terintegrasi secara nyata dengan
            Tujuan Pembangunan Berkelanjutan (Sustainable Development Goals / SDGs)
            Perserikatan Bangsa-Bangsa untuk menciptakan dampak positif bagi warga.
          </p>
        </motion.div>

        {/* SDGs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6"
        >
          {sdgs.map((sdg) => (
            <motion.div
              key={sdg.number}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Link
                href="/sdgs"
                aria-label={`Pelajari kontribusi RW 18 terhadap SDG ${sdg.number}: ${sdg.title}`}
                className="group flex flex-col items-center text-center p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 h-full justify-between focus:outline-none focus:ring-4 focus:ring-blue-200 min-h-[220px]"
              >
                {/* Colored Circle with SDG Number */}
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center text-white font-heading font-black shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 relative"
                  style={{ backgroundColor: sdg.color }}
                >
                  <span className="text-xs uppercase tracking-wider font-semibold opacity-90 -mb-1">
                    SDG
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold leading-none">
                    {sdg.number}
                  </span>
                </div>

                {/* SDG Title */}
                <div className="mt-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#195694] transition-colors leading-snug">
                    {sdg.title}
                  </h3>
                </div>

                {/* Arrow indicator */}
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-[#195694] transition-colors">
                  <span>Detail</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/sdgs"
            className="min-h-[48px] px-8 py-3 rounded-full border-2 border-[#195694] text-[#195694] hover:bg-[#195694] hover:text-white font-semibold text-base inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <span>Lihat Pemetaan Lengkap SDGs RW 18</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
