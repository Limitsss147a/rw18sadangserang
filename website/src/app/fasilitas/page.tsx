import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Award } from "lucide-react";
import { facilities } from "@/data/facilities";

export const metadata: Metadata = {
  title: "Fasilitas Lingkungan Terpadu — RW 18 Sadang Serang",
  description:
    "Eksplorasi empat pilar fasilitas lingkungan terpadu RW 18 Kelurahan Sadang Serang: Taman Dahlia, Rumah Maggot, Buruan SAE, dan Bata Terawang.",
};

export default function FasilitasHubPage() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Banner Header */}
      <section className="bg-gradient-to-br from-[#003e74] via-[#14477A] to-[#0E3A6B] text-white py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-blue-100 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
            <Building2 className="w-4 h-4" />
            <span>Infrastruktur Hijau Terpadu</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight max-w-3xl">
            Empat Fasilitas Unggulan Lingkungan RW 18
          </h1>
          <p className="mt-4 text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed">
            Mewujudkan lingkungan perkotaan Sadang Serang yang asri, mandiri
            pangan, dan bebas sampah melalui praktik nyata Tujuan Pembangunan
            Berkelanjutan (SDGs).
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={fac.heroImage}
                  alt={fac.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider shadow-xs"
                    style={{ backgroundColor: fac.color }}
                  >
                    Fasilitas RW 18
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading">
                    {fac.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-300 font-medium mt-1">
                    {fac.tagline}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {fac.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>SDG {fac.sdgs.map((s) => s.number).join(", ")}</span>
                  </div>

                  <Link
                    href={`/fasilitas/${fac.slug}`}
                    className="h-11 px-6 rounded-full bg-[#003e74] text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#195694] transition-colors shadow-xs"
                  >
                    <span>Eksplorasi Fasilitas</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
