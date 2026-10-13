"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Users,
  TreePine,
  Award,
  ExternalLink,
} from "lucide-react";

export default function ProfilePreview() {
  return (
    <section className="py-20 md:py-28 bg-[#F0F4F8] relative overflow-hidden">
      {/* Decorative background elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-[#195694] text-sm font-semibold mb-4 border border-blue-200">
              <Users className="w-4 h-4 text-[#195694]" aria-hidden="true" />
              Komunitas & Wilayah
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
              Tentang RW 18 Sadang Serang
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-slate-700 leading-relaxed">
              RW 18 Kelurahan Sadang Serang, Kecamatan Coblong, Kota Bandung merupakan komunitas warga yang aktif menerapkan pembangunan berkelanjutan secara nyata dan gotong royong. Melalui empat fasilitas unggulan—Taman Dahlia, Rumah Maggot, Buruan SAE, dan Bata Terawang—RW 18 menghadirkan ruang publik hijau, pemilahan sampah organik berbasis biokonversi, dan kemandirian pangan tingkat rukun warga.
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Inisiatif ini terwujud berkat kolaborasi erat antara warga, pengurus RT/RW, Karang Taruna Unit 18, dan dukungan akademisi dalam merealisasikan lingkungan perkotaan yang sehat, bersih, dan berketahanan iklim.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-200/60">
                <div className="flex items-center gap-2.5 text-[#195694] font-bold text-lg font-heading">
                  <TreePine className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                  <span>4 Fasilitas</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">Terpadu & aktif beroperasi</p>
              </div>

              <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-200/60">
                <div className="flex items-center gap-2.5 text-[#195694] font-bold text-lg font-heading">
                  <Award className="w-5 h-5 text-amber-500" aria-hidden="true" />
                  <span>5 Target SDGs</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">Kontribusi nyata lokal</p>
              </div>

              <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-200/60">
                <div className="flex items-center gap-2.5 text-[#195694] font-bold text-lg font-heading">
                  <Users className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  <span>Warga Berdaya</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">Gotong royong mandiri</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/profil"
                className="min-h-[48px] px-8 py-3.5 rounded-full bg-[#195694] text-white font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-md hover:bg-[#0E3A6B] transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <span>Selengkapnya</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Decorative Location & Map Embed Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 md:p-8 relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#195694] bg-blue-50 px-2.5 py-1 rounded-md">
                    Lokasi Wilayah
                  </span>
                  <h3 className="text-xl font-bold font-heading text-slate-900 mt-2">
                    Sadang Serang, Coblong
                  </h3>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Kota Bandung, Jawa Barat 40133
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#195694]">
                  <MapPin className="w-5 h-5 text-[#195694]" aria-hidden="true" />
                </div>
              </div>

              {/* Styled interactive map preview box */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100 flex flex-col items-center justify-center text-center p-6 group">
                {/* Visual map backdrop design with streets & green patches */}
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                  aria-hidden="true"
                  style={{
                    backgroundImage: `
                      radial-gradient(#195694 1px, transparent 1px),
                      linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px, 48px 48px, 48px 48px",
                  }}
                />

                {/* Decorative Map Point */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-blue-400 opacity-75" />
                    <div className="relative w-12 h-12 rounded-full bg-[#195694] text-white flex items-center justify-center shadow-lg border-2 border-white">
                      <MapPin className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                  <span className="mt-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-800 shadow-sm border border-slate-200">
                    Kawasan Terpadu RW 18
                  </span>
                  <p className="mt-2 text-xs text-slate-500 max-w-xs">
                    Taman Dahlia, Rumah Maggot, Buruan SAE, Bata Terawang
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Sadang+Serang+Coblong+Bandung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white text-xs font-semibold text-[#195694] rounded-lg shadow-sm border border-slate-200 transition-colors"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              {/* Information list */}
              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Kelurahan:</span>
                  <span className="font-semibold text-slate-800">Sadang Serang</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Kecamatan:</span>
                  <span className="font-semibold text-slate-800">Coblong</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Kota:</span>
                  <span className="font-semibold text-slate-800">Bandung, Jawa Barat</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
