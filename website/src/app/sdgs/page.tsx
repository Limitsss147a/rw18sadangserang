import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Globe2,
  TreePine,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Leaf,
  Recycle,
  Sparkles,
} from "lucide-react";
import { sdgsData, sdgFacilityMapping } from "@/data/sdgs";
import { facilities } from "@/data/facilities";

export const metadata: Metadata = {
  title: "Pemetaan Capaian SDGs — RW 18 Kelurahan Sadang Serang",
  description:
    "Dokumentasi dan pemetaan keterkaitan fasilitas lingkungan RW 18 (Taman Dahlia, Rumah Maggot, Buruan SAE, Bata Terawang) dengan Tujuan Pembangunan Berkelanjutan (SDGs).",
};

export default function SDGsPage() {
  const facilityRows = [
    {
      facility: "Taman Dahlia",
      slug: "taman-dahlia",
      color: "#2E7D32",
      sdgs: [11, 15],
      alasan:
        "Penyediaan ruang terbuka hijau inklusif, penyerapan air tanah alami, serta pelestarian flora bunga dahlia dan pepohonan peneduh perkotaan.",
      dampak: "350 m² RTH terlindungi, ruang interaksi warga lansia & anak-anak",
    },
    {
      facility: "Rumah Maggot BSF",
      slug: "rumah-maggot",
      color: "#795548",
      sdgs: [11, 12, 13],
      alasan:
        "Pengolahan sampah organik sisa makanan berbasis biokonversi BSF untuk meniadakan emisi gas metana di TPA serta menghasilkan kasgot alami.",
      dampak: "150+ kg sampah organik tereduksi/minggu, pupuk kasgot bermutu tinggi",
    },
    {
      facility: "Buruan SAE",
      slug: "buruan-sae",
      color: "#388E3C",
      sdgs: [2, 11, 12],
      alasan:
        "Pemanfaatan pekarangan dan lorong untuk budidaya aneka tanaman sayur seperti sosin, pakcoy, kangkung, dan cabai yang disuburkan pupuk kasgot dan kompos.",
      dampak: "Pasokan sayuran segar bergizi bebas pestisida untuk keluarga & posyandu warga",
    },
    {
      facility: "Bata Terawang",
      slug: "bata-terawang",
      color: "#795548",
      sdgs: [11, 12, 13],
      alasan:
        "Pengomposan sampah organik aerobik menggunakan susunan bata berongga untuk sirkulasi udara alami tanpa bau serta menekan pembentukan gas metana.",
      dampak: "Kompos berkualitas mandiri, volume sampah basah ke TPA berkurang signifikan",
    },
  ];

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Banner Header */}
      <section className="bg-gradient-to-br from-[#003e74] via-[#14477A] to-[#0E3A6B] text-white py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-blue-100 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
            <Globe2 className="w-4 h-4 text-emerald-400" />
            <span>Agenda PBB di Tingkat Rukun Warga</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight max-w-4xl">
            Aksi Nyata SDGs RW 18 Kelurahan Sadang Serang
          </h1>

          <p className="mt-6 text-base sm:text-lg text-blue-100/90 max-w-3xl leading-relaxed">
            Menyelaraskan inisiatif gotong royong warga Sadang Serang dengan 17
            Tujuan Pembangunan Berkelanjutan (SDGs). Fokus pada penanganan sampah
            dari sumber, ketahanan pangan lokal, dan ruang publik hijau.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-bold font-heading text-white">
                5 Target
              </span>
              <span className="text-xs text-blue-200">SDGs Terpetakan</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-bold font-heading text-emerald-300">
                4 Fasilitas
              </span>
              <span className="text-xs text-blue-200">Terintegrasi Nyata</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-bold font-heading text-amber-300">
                150+ kg
              </span>
              <span className="text-xs text-blue-200">Organik/Minggu Terolah</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-bold font-heading text-white">
                100%
              </span>
              <span className="text-xs text-blue-200">Inisiatif Mandiri Warga</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main SDGs Cards Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#003e74] bg-[#eef4ff] px-3.5 py-1.5 rounded-full border border-blue-200">
            Indikator Global
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#0f355c] mt-3">
            5 Pilar SDGs yang Diterapkan di RW 18
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Setiap pilar memiliki kontribusi langsung melalui fasilitas dan
            kebiasaan memilah sampah yang dilakukan warga setiap hari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdgsData.map((sdg) => {
            const mappedFacs = sdgFacilityMapping[sdg.number] || [];
            return (
              <div
                key={sdg.number}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl text-white font-extrabold text-2xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {sdg.number}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                      Tujuan #{sdg.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 leading-snug">
                    {sdg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {sdg.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Fasilitas Terkait:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {mappedFacs.map((facSlug) => {
                      const fac = facilities.find((f) => f.slug === facSlug);
                      return (
                        <Link
                          key={facSlug}
                          href={`/fasilitas/${facSlug}`}
                          className="px-2.5 py-1 rounded-lg bg-[#eef4ff] text-[#003e74] text-xs font-semibold hover:bg-[#dbe9ff] transition-colors"
                        >
                          {fac ? fac.name : facSlug}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Matrix Table Section */}
      <section className="bg-white py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              Matriks Keterkaitan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0f355c] mt-2">
              Tabel Pemetaan Fasilitas RW 18 ke SDGs
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Rujukan resmi capaian kolaborasi program KKN Tematik UNIKOM dan
              Pemerintah Kelurahan Sadang Serang.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm divide-y divide-slate-200">
              <thead className="bg-[#f8f9ff] text-slate-700 font-semibold">
                <tr>
                  <th className="py-4 px-6">Fasilitas Lingkungan</th>
                  <th className="py-4 px-6">Tujuan SDGs Terkait</th>
                  <th className="py-4 px-6">Alasan &amp; Penerapan Nyata</th>
                  <th className="py-4 px-6">Dampak Terukur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {facilityRows.map((row) => (
                  <tr key={row.facility} className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-slate-900 whitespace-nowrap">
                      <Link
                        href={`/fasilitas/${row.slug}`}
                        className="hover:text-[#003e74] flex items-center gap-2"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: row.color }}
                        />
                        <span>{row.facility}</span>
                      </Link>
                    </td>

                    <td className="py-5 px-6">
                      <div className="flex flex-wrap gap-1.5">
                        {row.sdgs.map((sdgNum) => (
                          <span
                            key={sdgNum}
                            className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#003e74] text-xs font-bold"
                          >
                            SDG {sdgNum}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-5 px-6 text-slate-600 max-w-md leading-relaxed text-xs sm:text-sm">
                      {row.alasan}
                    </td>

                    <td className="py-5 px-6 text-slate-800 font-medium text-xs sm:text-sm max-w-xs leading-relaxed">
                      {row.dampak}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA to Edukasi Sampah */}
      <section className="py-16 md:py-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#003e74] via-[#195694] to-[#1b6d24] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Aksi Nyata Dari Rumah</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">
              Capaian SDGs Dimulai Dari Tempat Sampah Kita
            </h3>
            <p className="mt-2 text-sm sm:text-base text-blue-100 leading-relaxed">
              Tugas warga sangat sederhana: pisahkan sisa makanan dapur ke wadah
              hijau, anorganik ke wadah kuning, dan residu ke wadah merah. Sisanya
              ekosistem fasilitas RW 18 yang mengolah.
            </p>
          </div>

          <Link
            href="/edukasi"
            className="h-14 px-8 rounded-full bg-white text-[#003e74] font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shrink-0 shadow-lg"
          >
            <span>Pelajari Panduan 3 Wadah</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
