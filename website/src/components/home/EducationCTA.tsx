"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Recycle, Trash2, ArrowRight } from "lucide-react";

export default function EducationCTA() {
  const categories = [
    {
      name: "Organik",
      desc: "Sisa makanan, sayur & dedaunan",
      circleBg: "bg-[#4CAF50]",
      iconColor: "text-white",
      Icon: Leaf,
    },
    {
      name: "Anorganik",
      desc: "Plastik, botol, kertas & kaleng",
      circleBg: "bg-[#FFC107]",
      iconColor: "text-slate-900",
      Icon: Recycle,
    },
    {
      name: "Residu",
      desc: "Tisu kotor, popok & sisa lainnya",
      circleBg: "bg-[#757575]",
      iconColor: "text-white",
      Icon: Trash2,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#2E7D32] via-[#246B2A] to-[#1B5E20] text-white">
      {/* Decorative patterns and ambient lighting */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute top-1/2 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-white/15 text-emerald-100 border border-white/20 backdrop-blur-md mb-5">
            Gerakan Pemilahan Sampah Terpadu
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-tight">
            Buang Sampah Terpilah Dari Rumah!
          </h2>

          <p className="mt-5 text-lg sm:text-xl md:text-2xl text-emerald-100 font-medium leading-relaxed">
            Cukup pisahkan sampah menjadi 3 jenis: organik, anorganik, dan residu
          </p>
        </motion.div>

        {/* Three Category Icon Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {categories.map((category) => {
            const { Icon } = category;
            return (
              <div
                key={category.name}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:bg-white/15 transition-all duration-200 transform hover:-translate-y-1"
              >
                {/* Circle Icon */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md ${category.circleBg} ${category.iconColor}`}
                >
                  <Icon className="w-8 h-8" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-xl font-bold font-heading text-white">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-emerald-100 leading-relaxed">
                  {category.desc}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Link
            href="/edukasi"
            className="min-h-[48px] px-9 py-4 rounded-full bg-white text-[#2E7D32] hover:bg-emerald-50 font-bold text-lg inline-flex items-center justify-center gap-3 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            <span>Pelajari Caranya</span>
            <ArrowRight className="w-5 h-5 text-[#2E7D32]" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
