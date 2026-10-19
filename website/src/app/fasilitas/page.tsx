import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Award, MapPin, ExternalLink, Compass } from "lucide-react";
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

      {/* Cluster Map Section */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f8f9ff] to-[#edf2ff] rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold w-fit">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Satu Lokasi Terpadu</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0f355c]">
                  Kunjungi Seluruh Fasilitas di Taman Dahlia RW 18
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Keempat fasilitas lingkungan (Taman Dahlia, Rumah Maggot BSF, Buruan SAE, dan Komposter Bata Terawang) berada di dalam satu kawasan yang sama di Kompleks RW 18 Sadang Serang.
                </p>

                <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span>Koordinat Google Maps</span>
                    <span className="text-emerald-700 font-bold">-6.8940265, 107.6265568</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Komp. RW 18, Kel. Sadang Serang, Kec. Coblong, Kota Bandung 40134
                  </p>
                </div>

                <div>
                  <a
                    href="https://maps.app.goo.gl/MBDpJ1thWyLbS2x16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-[#003e74] hover:bg-[#195694] text-white text-sm font-semibold transition-colors shadow-xs"
                  >
                    <Compass className="w-4 h-4 text-blue-200" />
                    <span>Petunjuk Arah Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Map Preview Image */}
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-white shadow-md group">
                  <Image
                    src="/images/taman-dahlia-google-maps.png"
                    alt="Peta Google Maps Taman Dahlia RW 18"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  {/* Pin overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
                    <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-red-400 opacity-75" />
                    <div className="relative w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                      <MapPin className="w-5 h-5 fill-white" />
                    </div>
                    <span className="mt-1 px-2.5 py-0.5 rounded-full bg-slate-900/90 text-white text-[10px] font-bold shadow-md">
                      Taman Dahlia RW 18
                    </span>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/MBDpJ1thWyLbS2x16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white text-xs font-semibold text-[#003e74] rounded-lg shadow-md border border-slate-200 transition-all"
                  >
                    <span>Buka Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
