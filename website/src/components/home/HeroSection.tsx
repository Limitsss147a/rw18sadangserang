"use client";

import Link from "next/link";
import { ArrowDown, BookOpen, Building2, RotateCcw, Globe } from "lucide-react";
import Diorama3D from "./Diorama3D";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#eef4ff] via-[#eef4ff]/70 to-[#f8f9ff] overflow-hidden border-b border-slate-200/60">
      {/* Subtle Ambient Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Elevated Editorial Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Asymmetrical Tag Pill */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-xs text-[#003e74] text-xs sm:text-sm font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping mr-0.5" />
              <span className="font-bold tracking-tight">
                Program Kolaborasi KKN UNIKOM × Pemprov Jabar × Warga RW 18
              </span>
            </div>

            {/* Main Heading with Organic Highlight */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0f355c] tracking-tight leading-[1.15]">
              Membangun Kawasan Mandiri, Bersih, dan{" "}
              <span className="relative inline-block text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
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
                className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full bg-[#003e74] text-white font-semibold text-base shadow-lg shadow-blue-900/20 hover:bg-[#195694] hover:shadow-xl transition-all"
              >
                <span>Jelajahi Fasilitas RW</span>
                <ArrowDown className="w-5 h-5" />
              </a>
              <a
                href="#edukasi-sampah"
                className="inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full bg-[#2e7d32] text-white font-semibold text-base shadow-lg shadow-emerald-900/20 hover:bg-emerald-800 transition-all"
              >
                <BookOpen className="w-5 h-5" />
                <span>Panduan Pilah Sampah</span>
              </a>
            </div>

            {/* Floating Glassmorphic Stats Pill Bar */}
            <div className="mt-2 p-3 rounded-2xl bg-white/85 backdrop-blur-md border border-white/80 shadow-md">
              <div className="grid grid-cols-3 divide-x divide-slate-200">
                <div className="px-3 sm:px-4 py-1 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#003e74] shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg text-[#0f355c] font-bold leading-tight font-heading">
                      4 Fasilitas
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                      Taman Dahlia, Rumah Maggot, Buruan SAE, Bata Terawang
                    </div>
                  </div>
                </div>

                <div className="px-3 sm:px-4 py-1 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg text-emerald-700 font-bold leading-tight font-heading">
                      100% Pilah
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                      Dari Dapur Rumah
                    </div>
                  </div>
                </div>

                <div className="px-3 sm:px-4 py-1 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg text-amber-800 font-bold leading-tight font-heading">
                      5 Pilar
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                      SDGs Berkelanjutan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Diorama Scene */}
          <div className="lg:col-span-5 relative">
            <Diorama3D />
          </div>
        </div>
      </div>
    </section>
  );
}
