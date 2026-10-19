import type { Metadata } from "next";
import { Camera } from "lucide-react";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Galeri Dokumentasi & Aksi Lingkungan — RW 18 Sadang Serang",
  description:
    "Dokumentasi visual fasilitas lingkungan, penarikan sampah organik, kebun pangan Buruan SAE, dan kegiatan sosial warga RW 18 Kelurahan Sadang Serang.",
};

export default function GaleriPage() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Banner Header */}
      <ScrollReveal delay={0.1} y={0}>
        <section className="bg-gradient-to-br from-[#003e74] via-[#14477A] to-[#0E3A6B] text-white py-16 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
            aria-hidden="true"
          />
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-blue-100 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
              <Camera className="w-4 h-4 text-emerald-400" />
              <span>Dokumentasi Kegiatan &amp; Lingkungan</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight max-w-3xl">
              Galeri Dokumentasi RW 18
            </h1>

            <p className="mt-4 text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed">
              Arsip visual fasilitas inovasi lingkungan terpadu, aksi penarikan
              sampah organik rumah tangga, budidaya kebun Buruan SAE, hingga
              kegiatan sosial gotong royong warga RW 18 Sadang Serang.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Main Gallery Grid Section */}
      <ScrollReveal delay={0.15}>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <GalleryGrid />
        </section>
      </ScrollReveal>
    </div>
  );
}
