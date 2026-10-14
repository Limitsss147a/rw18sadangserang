import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import { Facility } from "@/data/facilities";
import { sdgsData } from "@/data/sdgs";

interface SDGsBadgesProps {
  sdgs: Facility["sdgs"];
  facilityName: string;
}

export default function SDGsBadges({ sdgs, facilityName }: SDGsBadgesProps) {
  const getSdgColor = (num: number) => {
    const found = sdgsData.find((s) => s.number === num);
    return found?.color || "#195694";
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-slate-200/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003e74]">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Target Global PBB</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0f355c] mt-1">
              Kontribusi SDGs {facilityName}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              Fasilitas ini berkontribusi aktif pada pencapaian Tujuan Pembangunan
              Berkelanjutan tingkat komunitas rukun warga:
            </p>
          </div>

          <Link
            href="/sdgs"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#003e74] hover:text-[#195694] group self-start md:self-auto"
          >
            <span>Lihat Seluruh SDGs RW 18</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdgs.map((sdg) => {
            const color = getSdgColor(sdg.number);
            return (
              <div
                key={sdg.number}
                className="bg-[#f8f9ff] rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl text-white font-extrabold text-xl flex items-center justify-center shadow-xs shrink-0"
                      style={{ backgroundColor: color }}
                    >
                      {sdg.number}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Tujuan {sdg.number}
                      </span>
                      <h3 className="text-base font-bold font-heading text-slate-900 leading-snug">
                        {sdg.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sdg.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs font-semibold text-slate-700">
                    Penerapan Nyata Tingkat RW
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
