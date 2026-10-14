import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { facilities } from "@/data/facilities";

export default function FacilityCards() {
  const facilityMeta: Record<
    string,
    {
      badge: string;
      badgeColor: string;
      tags: string[];
      btnColor: string;
      borderAccent: string;
      btnLabel: string;
    }
  > = {
    "taman-dahlia": {
      badge: "Ruang Terbuka Hijau & Sosial",
      badgeColor: "text-emerald-800 bg-white/95",
      tags: ["Luas RTH: 350 m²", "Dahlia & Rindang"],
      btnColor:
        "bg-emerald-50 text-emerald-800 hover:bg-emerald-700 hover:text-white",
      borderAccent: "border-emerald-200/60",
      btnLabel: "Lihat Detail Fasilitas",
    },
    "rumah-maggot": {
      badge: "Biokonversi Organik Mandiri",
      badgeColor: "text-emerald-800 bg-white/95",
      tags: ["Kapasitas: 150 kg/minggu", "Kasgot 100% Organik"],
      btnColor: "bg-blue-50 text-[#003e74] hover:bg-[#003e74] hover:text-white",
      borderAccent: "border-blue-200/60",
      btnLabel: "Lihat Alur Kerja",
    },
    "buruan-sae": {
      badge: "Ketahanan Pangan Pekarangan",
      badgeColor: "text-amber-900 bg-white/95",
      tags: ["Bioflok Lele Sehat", "Panen Sayur Segar"],
      btnColor:
        "bg-amber-50 text-amber-900 hover:bg-amber-700 hover:text-white",
      borderAccent: "border-amber-200/60",
      btnLabel: "Lihat Kebun Warga",
    },
    "bata-terawang": {
      badge: "Infrastruktur Ramah Lingkungan",
      badgeColor: "text-orange-900 bg-white/95",
      tags: ["Material Daur Ulang", "Sirkulasi Alami"],
      btnColor:
        "bg-orange-50 text-orange-900 hover:bg-orange-700 hover:text-white",
      borderAccent: "border-orange-200/60",
      btnLabel: "Lihat Infrastruktur",
    },
  };

  return (
    <section className="w-full bg-[#f8f9ff] py-16 sm:py-24" id="fasilitas">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300 text-[#1b6d24] text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Sertifikasi RW Ramah Lingkungan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0f355c] mt-1">
              Fasilitas Unggulan RW 18
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              Ruang terbuka dan fasilitas terpadu yang dikelola bersama oleh
              warga, Karang Taruna Unit 18, dan tim pendamping KKN UNIKOM.
            </p>
          </div>
          <div className="hidden md:flex items-center">
            <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#003e74] shadow-xs">
              Coblong Lestari 2025
            </span>
          </div>
        </div>

        {/* Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac) => {
            const meta = facilityMeta[fac.slug] || {
              badge: "Fasilitas RW 18",
              badgeColor: "text-slate-800 bg-white/95",
              tags: ["Berkelanjutan"],
              btnColor: "bg-slate-100 text-slate-800",
              borderAccent: "border-slate-200",
              btnLabel: "Lihat Detail",
            };

            return (
              <div
                key={fac.id}
                className={`bg-white rounded-3xl overflow-hidden border ${meta.borderAccent} shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group`}
              >
                {/* Photo Top Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={fac.heroImage}
                    alt={fac.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div
                    className={`absolute top-4 left-4 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-xs ${meta.badgeColor}`}
                  >
                    {meta.badge}
                  </div>

                  {/* Bottom Tags */}
                  <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center gap-1.5 text-white text-[11px] font-semibold">
                    {meta.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#0f355c]">
                      {fac.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {fac.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 pt-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {fac.sdgs.map((sdg) => (
                        <span
                          key={sdg.number}
                          className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#003e74] text-xs font-bold"
                        >
                          SDG {sdg.number}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/fasilitas/${fac.slug}`}
                      className={`w-full h-11 inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm transition-colors ${meta.btnColor}`}
                    >
                      <span>{meta.btnLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
