"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#195694] via-[#14477A] to-[#0E3A6B] text-white">
      {/* Subtle geometric pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Decorative SVG organic shapes and blurred glows */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <svg
        className="absolute top-1/4 left-8 w-64 h-64 text-white/5 pointer-events-none"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.6,81.2,29.1,72.4,41.4C63.6,53.7,51.8,63.7,38.3,71.2C24.8,78.7,9.6,83.7,-5.7,81.4C-20.9,79.1,-36.2,69.5,-49.2,59C-62.2,48.5,-73,37,-78.9,23C-84.8,9,-85.7,-7.6,-81.4,-22.7C-77.1,-37.8,-67.5,-51.5,-54.7,-59.1C-41.9,-66.6,-25.9,-68,-10.8,-71.4C4.3,-74.8,30.6,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>
      <svg
        className="absolute bottom-16 right-8 w-80 h-80 text-white/5 pointer-events-none"
        viewBox="0 0 200 200"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" fill="none" />
      </svg>

      {/* Main hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm sm:text-base font-medium bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-300" aria-hidden="true" />
              Kelurahan Sadang Serang · Kota Bandung
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl font-heading leading-tight"
          >
            RW 18 Kelurahan Sadang Serang
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-blue-100 max-w-3xl leading-relaxed"
          >
            Membangun Lingkungan Berkelanjutan Melalui Aksi Nyata
          </motion.p>

          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="mt-4 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <p className="text-base sm:text-lg md:text-xl text-blue-200 font-medium tracking-wide">
              Taman Dahlia <span className="text-amber-300 mx-1">·</span> Rumah Maggot <span className="text-amber-300 mx-1">·</span> Buruan SAE <span className="text-amber-300 mx-1">·</span> Bata Terawang
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/fasilitas/taman-dahlia"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-white text-[#195694] font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-lg hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              <span>Jelajahi Fasilitas</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>

            <Link
              href="/edukasi"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-transparent text-white border-2 border-white/80 font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-white/15 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              <span>Cara Buang Sampah</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <a
          href="#fasilitas"
          aria-label="Gulir ke fasilitas unggulan RW 18"
          className="flex flex-col items-center text-blue-200 hover:text-white transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-white/40 rounded-full p-2"
        >
          <span className="text-xs uppercase tracking-widest font-medium mb-1 opacity-80 group-hover:opacity-100">
            Gulir ke Bawah
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6" aria-hidden="true" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
