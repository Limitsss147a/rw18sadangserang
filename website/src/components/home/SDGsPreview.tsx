import Link from "next/link";
import { CheckCircle2, LineChart } from "lucide-react";
import { sdgsData } from "@/data/sdgs";

export default function SDGsPreview() {
  const sdgHighlights: Record<number, { tag: string; detail: string }> = {
    2: {
      tag: "Pangan Mandiri",
      detail:
        "Panen sayur sehat & ikan lele segar Buruan SAE untuk gizi balita & lansia warga.",
    },
    11: {
      tag: "RTH Terawat",
      detail:
        "Kawasan permukiman tertata rapi, asri, dan aman lewat revitalisasi Taman Dahlia & Bata Terawang.",
    },
    12: {
      tag: "Sirkular Ekonomi",
      detail:
        "Siklus organik maggot nir-limbah: sisa makanan diproses 100% jadi pakan & kasgot.",
    },
    13: {
      tag: "Reduksi Emisi",
      detail:
        "Mereduksi emisi gas metana (CH4) akibat timbunan sampah basah membusuk di TPA.",
    },
    15: {
      tag: "Biodiversitas",
      detail:
        "Pelestarian tanaman pekarangan, bunga dahlia, dan perlindungan kesuburan tanah alami.",
    },
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24" id="sdgs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Narrative Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1b6d24]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b6d24]">
              Aksi Lokal, Dampak Global
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0f355c] mt-2">
            Pemetaan Capaian SDGs Tingkat Rukun Warga
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
            Setiap kantong sampah yang terpilah di dapur warga RW 18 langsung
            mengurangi timbulan ke Tempat Pembuangan Akhir (TPA) dan berkontribusi
            langsung pada 5 indikator target global Tujuan Pembangunan
            Berkelanjutan (SDGs).
          </p>
        </div>

        {/* 5 Bento SDGs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {sdgsData.map((sdg) => {
            const extra = sdgHighlights[sdg.number] || {
              tag: "Berkelanjutan",
              detail: sdg.description,
            };

            return (
              <div
                key={sdg.number}
                className="bg-[#eef4ff] rounded-2xl p-5 flex flex-col justify-between hover:bg-[#e4efff] transition-colors shadow-xs border border-slate-200/60"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-xl mb-4 shadow-sm"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.number}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 leading-snug">
                    {sdg.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {extra.detail}
                  </p>
                </div>

                <div className="pt-4 mt-2 font-semibold text-xs text-[#003e74] flex items-center gap-1.5 border-t border-slate-200/60">
                  <span>{extra.tag}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Anchor to Detailed SDGs */}
        <div className="bg-[#e4efff] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-200 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#003e74] flex items-center justify-center text-white shrink-0 shadow-sm">
              <LineChart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                Ingin memeriksa target indikator lengkap RW 18?
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Laporan matriks capaian KKN UNIKOM dan Pemerintah Provinsi Jawa Barat.
              </p>
            </div>
          </div>

          <Link
            href="/sdgs"
            className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-[#003e74] text-white text-sm font-semibold hover:bg-[#195694] transition-colors shrink-0 shadow-sm"
          >
            <span>Buka Laporan Capaian SDGs →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
