"use client";

import Link from "next/link";
import { ArrowDown, BookOpen, Building2, RotateCcw, Globe } from "lucide-react";
import HeroPhotoSlider from "./HeroPhotoSlider";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#eef4ff] via-[#eef4ff]/70 to-[#f8f9ff] overflow-hidden border-b border-slate-200/60 pt-2 pb-12 sm:pb-16 lg:pb-20">
      {/* Subtle Ambient Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs Matching Screenshot */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-xs text-[#003e74] text-xs sm:text-sm font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span>
                Program Kolaborasi KKN UNIKOM × Pemprov Jabar × Warga RW 18
              </span>
            </div>

            {/* Main Heading with Underline on Berkelanjutan */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0f355c] tracking-tight leading-[1.18]">
              Membangun Kawasan Mandiri, Bersih, dan{" "}
              <span className="relative inline-block text-emerald-700 underline underline-offset-8 decoration-emerald-600 decoration-4">
                Berkelanjutan
              </span>{" "}
              Berbasis Warga.
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Pusat profil fasilitas ramah lingkungan RW 18 (Taman Dahlia, Rumah
              Maggot, Buruan SAE, Bata Terawang) dan pusat edukasi gerakan pilah
              sampah langsung dari sumber rumah tangga. Dipahami dalam waktu
              kurang dari 2 menit.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#fasilitas"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 h-13 sm:h-14 rounded-full bg-[#003e74] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-900/20 hover:bg-[#195694] hover:shadow-xl transition-all"
              >
                <span>Jelajahi Fasilitas RW</span>
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#edukasi-sampah"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 h-13 sm:h-14 rounded-full bg-[#1b6d24] text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-900/20 hover:bg-emerald-800 transition-all"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Panduan Pilah Sampah</span>
              </a>
            </div>

            {/* Stats Pill Bar Matching Screenshot */}
            <div className="mt-2 p-2 sm:p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs inline-flex flex-wrap items-center gap-2 sm:gap-4 self-start">
              <div className="flex items-center gap-2.5 px-3 py-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#003e74] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-bold font-heading text-[#0f355c]">
                  4 Fasilitas
                </span>
              </div>

              <div className="flex items-center gap-2.5 px-3 py-1.5 border-l border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-bold font-heading text-emerald-800">
                  100% Pilah
                </span>
              </div>

              <div className="flex items-center gap-2.5 px-3 py-1.5 border-l border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-bold font-heading text-amber-900">
                  5 Pilar SDGS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Photo Slider */}
          <div className="lg:col-span-5 relative">
            <HeroPhotoSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
