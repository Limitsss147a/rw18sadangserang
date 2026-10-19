"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Sprout, Sparkles } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  src: string;
  facility: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Taman Dahlia RW 18",
    subtitle: "Ruang Terbuka Hijau & Interaksi Guyub Komunitas Warga",
    tag: "Konservasi & Edukasi",
    src: "/images/facilities/taman-dahlia-1.jpg",
    facility: "Taman Dahlia",
  },
  {
    id: 2,
    title: "Rumah Maggot BSF",
    subtitle: "Biokonversi Sampah Makanan Dapur 0 Bau & Pupuk Kasgot",
    tag: "Siklus Organik",
    src: "/images/facilities/rumah-maggot-1.jpg",
    facility: "Rumah Maggot",
  },
  {
    id: 3,
    title: "Buruan SAE Mandiri",
    subtitle: "Urban Farming Sayuran Sosin & Pangan Sehat Bebas Kimia",
    tag: "Ketahanan Pangan",
    src: "/images/facilities/buruan-sae-1.jpg",
    facility: "Buruan SAE",
  },
  {
    id: 4,
    title: "Bata Terawang Kompos",
    subtitle: "Pengomposan Aerobik dengan Susunan Bata Berongga Alami",
    tag: "Dekomposisi Alami",
    src: "/images/facilities/bata-terawang-1.jpg",
    facility: "Bata Terawang",
  },
  {
    id: 5,
    title: "Aksi Gotong Royong Warga",
    subtitle: "Sosialisasi & Edukasi Pemilahan Sampah Terpadu 3 Wadah",
    tag: "Gotong Royong",
    src: "/images/facilities/taman-dahlia-2.jpg",
    facility: "Aksi Bersama",
  },
];

export default function HeroPhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance slides every 4.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.5 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const current = slides[currentIndex];

  return (
    <div
      className="relative w-full max-w-xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-4 bg-gradient-to-br from-white via-white/90 to-blue-50/60 border border-slate-200/80 shadow-2xl shadow-blue-900/10 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Aspect container for the photo slider */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[1.15/1] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-slate-900 shadow-inner">
        {/* Animated Image Layer */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={current.src}
              alt={current.title}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              priority={currentIndex === 0}
              className="object-cover"
            />
            {/* Subtle Gradient Overlays for readable badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/35 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Top Floating Badge: Matching Screenshot "🌱 Siklus Nol Residu Organik" */}
        <div className="absolute top-4 left-4 z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e3b1c]/85 backdrop-blur-md text-emerald-200 text-xs font-semibold shadow-md border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Siklus Nol Residu Organik</span>
          </div>
        </div>

        {/* Top-Right Pill: Active Facility Name */}
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1 rounded-full bg-white/85 backdrop-blur-md text-[#003e74] text-[11px] font-bold shadow-xs border border-white/60">
            {current.tag}
          </div>
        </div>

        {/* Navigation Arrow Controls (Visible on hover or tap) */}
        <div className="absolute inset-y-0 inset-x-2 z-20 flex items-center justify-between pointer-events-none">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Foto sebelumnya"
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm pointer-events-auto opacity-80 group-hover:opacity-100 hover:scale-105 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Foto selanjutnya"
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm pointer-events-auto opacity-80 group-hover:opacity-100 hover:scale-105 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-24 inset-x-0 z-20 flex items-center justify-center gap-1.5 pointer-events-auto">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Buka slide ${slide.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-7 bg-emerald-400 shadow-sm"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Bottom Floating Info Card Matching Screenshot: "Dokumentasi Ekosistem Terpadu" */}
        <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 z-20">
          <div className="p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100/90 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs">
              <Sprout className="w-5 h-5 text-emerald-700" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm sm:text-base font-bold font-heading text-[#0f355c] truncate">
                Dokumentasi Ekosistem Terpadu
              </h4>
              <p className="text-xs text-slate-600 truncate mt-0.5">
                💡 Terintegrasi BSF × Buruan SAE × Bata Terawang × Taman Dahlia
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg shrink-0">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>{currentIndex + 1}/{slides.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
