"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Layers,
  Sparkles,
  ArrowRight,
  Compass,
  Car,
  Clock,
  Building,
} from "lucide-react";
import { Facility, facilities } from "@/data/facilities";

interface LocationMapProps {
  facility: Facility;
}

export default function LocationMap({ facility }: LocationMapProps) {
  const [mapMode, setMapMode] = useState<"roadmap" | "satellite" | "interactive">("roadmap");
  const [copied, setCopied] = useState(false);

  // Exact coordinates verified for Taman Dahlia RW 18 (same location for all 4 facilities)
  const coordinates = {
    lat: -6.8940265,
    lng: 107.6265568,
    text: "-6.8940265, 107.6265568",
    dms: "6°53'38.5\"S 107°37'35.6\"E",
  };

  const googleMapsUrl = "https://maps.app.goo.gl/MBDpJ1thWyLbS2x16";
  const embedUrl = `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&hl=id&z=18&output=embed`;

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText(coordinates.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Find next facility for quick browsing
  const currentIndex = facilities.findIndex((f) => f.slug === facility.slug);
  const nextFacility = facilities[(currentIndex + 1) % facilities.length];

  return (
    <section className="w-full bg-[#f8f9ff] py-14 md:py-20 border-t border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Kawasan Lingkungan Terpadu RW 18</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#0f355c] tracking-tight">
            Lokasi &amp; Panduan Kunjungan Fasilitas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Seluruh 4 inovasi lingkungan RW 18 (<strong>Taman Dahlia</strong>,{" "}
            <strong>Rumah Maggot BSF</strong>, <strong>Buruan SAE</strong>, dan{" "}
            <strong>Bata Terawang</strong>) berada di dalam satu klaster terpadu
            Kompleks RW 18 Sadang Serang yang berpusat di Taman Dahlia. Anda
            dapat mengunjungi dan mempelajari seluruh fasilitas dalam satu kali
            kunjungan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Detail Info, Coordinates & Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Coordinate & Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col gap-5">
              {/* Highlight Badge */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Nama Titik di Google Maps
                  </span>
                  <h3 className="text-lg font-bold font-heading text-[#003e74]">
                    Taman Dahlia RW 18
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#003e74] flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5" />
                </div>
              </div>

              {/* Coordinates Box */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Titik Koordinat GPS</span>
                  <span className="text-emerald-700 font-bold">Terverifikasi</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-mono text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      {coordinates.text}
                    </p>
                    <p className="text-[11px] text-slate-500 font-mono">
                      {coordinates.dms}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyCoordinates}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors shadow-2xs shrink-0 cursor-pointer"
                    title="Salin titik koordinat"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Address Details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003e74] flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Alamat Lengkap</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Kompleks RW 18 Kelurahan Sadang Serang, Kecamatan Coblong,
                    Kota Bandung, Jawa Barat 40134
                  </p>
                </div>
              </div>

              {/* Access & Transportation Guide */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Akses &amp; Transportasi</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                    Dapat diakses via Jl. Sadang Serang (arah Simpang Dago / Monumen Perjuangan).
                    Tersedia kantong parkir motor dan mobil lingkungan di sekitar area taman.
                  </p>
                </div>
              </div>

              {/* Cluster Facilities List */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1b6d24] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    4 Fasilitas di Kawasan Ini
                  </h4>
                  <ul className="text-xs sm:text-sm text-slate-600 mt-1 space-y-1">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span><strong>Taman Dahlia</strong> (RTH &amp; Gazebo Utama)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      <span><strong>Rumah Maggot BSF</strong> (Biokonversi Sampah Dapur)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                      <span><strong>Buruan SAE</strong> (Kebun Sayur Pekarangan)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                      <span><strong>Bata Terawang</strong> (Komposter Aerobik Berongga)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 rounded-xl bg-[#003e74] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-[#195694] transition-all shadow-sm group"
                >
                  <span>Buka di Aplikasi Google Maps</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <p className="text-center text-[11px] text-slate-500">
                  Klik untuk membuka rute penunjuk arah langsung (turn-by-turn navigation)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Visual & Switcher */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Map Box Card */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-md flex flex-col gap-4">
              {/* Top View Selector Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    Peta Lokasi Resmi Google Maps
                  </span>
                </div>

                {/* Mode Selector Tabs */}
                <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200/80 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setMapMode("roadmap")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      mapMode === "roadmap"
                        ? "bg-white text-[#003e74] shadow-2xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Peta Jalan
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapMode("satellite")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      mapMode === "satellite"
                        ? "bg-white text-[#003e74] shadow-2xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Satelit
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapMode("interactive")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      mapMode === "interactive"
                        ? "bg-white text-[#003e74] shadow-2xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Interaktif
                  </button>
                </div>
              </div>

              {/* Map Canvas / Visual Container */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group">
                {mapMode === "roadmap" && (
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/taman-dahlia-google-maps.png"
                      alt="Peta Google Maps Taman Dahlia RW 18 Sadang Serang"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Centered Pin Indicator */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
                      <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-red-400 opacity-75" />
                      <div className="relative w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                        <MapPin className="w-6 h-6 fill-white" />
                      </div>
                      <div className="mt-1 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-bold shadow-md whitespace-nowrap">
                        Taman Dahlia RW 18
                      </div>
                    </div>
                  </div>
                )}

                {mapMode === "satellite" && (
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/taman-dahlia-satellite.png"
                      alt="Citra Satelit Google Maps Taman Dahlia RW 18 Sadang Serang"
                      fill
                      className="object-cover"
                    />
                    {/* Centered Pin Indicator */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
                      <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-emerald-400 opacity-75" />
                      <div className="relative w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                        <MapPin className="w-6 h-6 fill-white" />
                      </div>
                      <div className="mt-1 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-bold shadow-md whitespace-nowrap">
                        Taman Dahlia RW 18 (Satelit)
                      </div>
                    </div>
                  </div>
                )}

                {mapMode === "interactive" && (
                  <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta Interaktif Google Maps Taman Dahlia RW 18"
                    className="w-full h-full"
                  />
                )}

                {/* Floating Bottom Link overlay on roadmap/satellite */}
                {mapMode !== "interactive" && (
                  <div className="absolute bottom-3 right-3 z-20">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/95 hover:bg-white text-xs font-semibold text-[#003e74] rounded-xl shadow-md border border-slate-200 transition-all backdrop-blur-xs"
                    >
                      <Compass className="w-3.5 h-3.5 text-blue-600" />
                      <span>Buka di Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                )}

                {/* Floating Badge in Top Left */}
                {mapMode !== "interactive" && (
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium">
                      <span>Kordinat: {coordinates.text}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Map Footer Note */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Kawasan Terpadu: 1 Titik Koordinat untuk 4 Fasilitas Lingkungan</span>
                </div>
                <span className="text-slate-400">Google Maps © 2026</span>
              </div>
            </div>

            {/* Next Facility Switcher Card */}
            <div className="rounded-3xl bg-white p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Fasilitas Berikutnya di Kawasan Ini
                </span>
                <h4 className="text-lg font-bold font-heading text-[#0f355c] mt-0.5">
                  {nextFacility.name}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {nextFacility.tagline}
                </p>
              </div>

              <Link
                href={`/fasilitas/${nextFacility.slug}`}
                className="h-11 px-6 rounded-full bg-[#003e74] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#195694] transition-colors shrink-0 shadow-xs"
              >
                <span>Kunjungi {nextFacility.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
