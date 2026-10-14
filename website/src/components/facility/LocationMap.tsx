import Link from "next/link";
import { MapPin, Navigation, ExternalLink, Calendar, Users, ArrowRight } from "lucide-react";
import { Facility, facilities } from "@/data/facilities";

interface LocationMapProps {
  facility: Facility;
}

export default function LocationMap({ facility }: LocationMapProps) {
  // Find next facility for quick browsing
  const currentIndex = facilities.findIndex((f) => f.slug === facility.slug);
  const nextFacility = facilities[(currentIndex + 1) % facilities.length];

  return (
    <section className="w-full bg-[#f8f9ff] py-14 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Location & Visit Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003e74]">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Petunjuk Lokasi</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0f355c] mt-1">
                Kunjungi {facility.name}
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Fasilitas ini berlokasi di kawasan permukiman RW 18 Kelurahan
                Sadang Serang. Terbuka untuk kunjungan warga, edukasi pelajar,
                dan studi banding komunitas lingkungan.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003e74] flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Alamat Kawasan</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Kompleks RW 18 Kelurahan Sadang Serang, Kecamatan Coblong,
                    Kota Bandung, Jawa Barat 40134
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1b6d24] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Pengelola Fasilitas</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Pengurus RW 18 &amp; Karang Taruna Unit 18 Sadang Serang
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Etika Kunjungan</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Disarankan menghubungi pengurus RW terlebih dahulu untuk rombongan studi banding.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Sadang+Serang+Coblong+Bandung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 rounded-xl bg-[#003e74] text-white font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-[#195694] transition-colors shadow-xs"
                >
                  <span>Buka Petunjuk Arah di Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Box & Next Facility Switcher */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Map Preview Box */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 shadow-md">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-center p-6 group">
                {/* Styled Map Background */}
                <div
                  className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                  aria-hidden="true"
                  style={{
                    backgroundImage: `
                      radial-gradient(#003e74 1.5px, transparent 1.5px),
                      linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px, 48px 48px, 48px 48px",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-blue-400 opacity-75" />
                    <div
                      className="relative w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg border-2 border-white"
                      style={{ backgroundColor: facility.color }}
                    >
                      <MapPin className="w-7 h-7" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold font-heading text-slate-900">
                    Titik Lokasi: {facility.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 max-w-sm">
                    Kawasan Terpadu Sadang Serang, Coblong, Kota Bandung
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Sadang+Serang+Coblong+Bandung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-4 py-2 bg-white/95 hover:bg-white text-xs font-semibold text-[#003e74] rounded-xl shadow-md border border-slate-200 transition-all"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Next Facility Switcher Card */}
            <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Fasilitas Berikutnya
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
                className="h-11 px-5 rounded-full bg-[#003e74] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#195694] transition-colors shrink-0 shadow-xs"
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
