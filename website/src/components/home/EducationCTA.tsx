import Link from "next/link";
import Image from "next/image";
import {
  Recycle,
  Trash2,
  Check,
  Ban,
  Lightbulb,
  Package,
  BookOpen,
  Download,
  PlayCircle,
  Sparkles,
} from "lucide-react";

export default function EducationCTA() {
  return (
    <section className="w-full bg-[#f8f9ff] py-16 sm:py-24" id="edukasi-sampah">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <Recycle className="w-4 h-4" />
            <span>Panduan Praktis Kang Pisman</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0f355c]">
            Panduan Mudah 3 Jenis Sampah Warga
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Sediakan tiga kantong di rumah kita. Pilah sampah sejak awal agar
            tidak membusuk dan memudahkan proses daur ulang lingkungan RW 18.
          </p>

          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
            ✨ Tugas warga hanya memilah di rumah, sisanya mesin alam yang bekerja!
          </div>
        </div>

        {/* 3 Realistic Tactile Bin Cards with Lid Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CARD 1: ORGANIK (HIJAU TACTILE BIN) */}
          <div className="relative bg-[#f0fdf4] rounded-3xl p-6 sm:p-8 shadow-lg border-2 border-emerald-500/30 flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all">
            {/* Top Lid Highlight */}
            <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600" />

            <div className="flex flex-col gap-5 pt-2">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2e7d32] text-white text-xs font-bold shadow-xs">
                  <span>WADAH HIJAU</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#2e7d32] font-bold text-lg">
                  🍃
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Sampah Organik
                </h3>
                <p className="text-xs font-bold text-emerald-700 mt-1">
                  Alur: Rumah Maggot &amp; Kompos RW
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl p-5 flex flex-col gap-2 shadow-xs border border-emerald-200/50">
                <p className="text-xs uppercase tracking-wider text-emerald-800 font-bold">
                  Contoh yang Boleh Masuk:
                </p>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#2e7d32] flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Sisa nasi &amp; lauk pauk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#2e7d32] flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Kulit buah &amp; potongan sayur</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#2e7d32] flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Daun kering pekarangan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#2e7d32] flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Ampas kopi &amp; teh basah</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-dashed border-emerald-300/60">
              <div className="flex items-center justify-center gap-1.5 text-xs text-red-700 font-semibold bg-red-50/90 px-3 py-2 rounded-xl border border-red-200/50">
                <Ban className="w-4 h-4 shrink-0" />
                <span>Dilarang: Plastik kemasan, kawat, pecahan kaca</span>
              </div>
            </div>
          </div>

          {/* CARD 2: ANORGANIK (KUNING TACTILE BIN) */}
          <div className="relative bg-[#fffbeb] rounded-3xl p-6 sm:p-8 shadow-lg border-2 border-amber-500/30 flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all">
            {/* Top Lid Highlight */}
            <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />

            <div className="flex flex-col gap-5 pt-2">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b] text-[#451a03] text-xs font-bold shadow-xs">
                  <span>WADAH KUNING</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
                  <Recycle className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Sampah Anorganik
                </h3>
                <p className="text-xs font-bold text-amber-800 mt-1">
                  Alur: Bank Sampah &amp; Pengepul Daur Ulang
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl p-5 flex flex-col gap-2 shadow-xs border border-amber-200/50">
                <p className="text-xs uppercase tracking-wider text-amber-900 font-bold">
                  Contoh yang Boleh Masuk:
                </p>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Botol &amp; gelas plastik bersih</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Kaleng minuman &amp; wadah seng</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Kardus lipat &amp; kertas bersih</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Botol kaca &amp; wadah beling</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-dashed border-amber-300/60">
              <div className="flex items-center justify-center gap-1.5 text-xs text-amber-900 font-semibold bg-amber-100/70 px-3 py-2 rounded-xl border border-amber-200">
                <Lightbulb className="w-4 h-4 shrink-0 text-amber-600" />
                <span>Tips: Kosongkan cairan dan bilas sebelum dikumpulkan</span>
              </div>
            </div>
          </div>

          {/* CARD 3: RESIDU (MERAH/ABU TACTILE BIN) */}
          <div className="relative bg-[#fef2f2] rounded-3xl p-6 sm:p-8 shadow-lg border-2 border-red-500/30 flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all">
            {/* Top Lid Highlight */}
            <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

            <div className="flex flex-col gap-5 pt-2">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d32f2f] text-white text-xs font-bold shadow-xs">
                  <span>WADAH MERAH / ABU</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700">
                  <Trash2 className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Sampah Residu
                </h3>
                <p className="text-xs font-bold text-red-700 mt-1">
                  Alur: TPS Resmi Terjadwal ke TPA
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl p-5 flex flex-col gap-2 shadow-xs border border-red-200/50">
                <p className="text-xs uppercase tracking-wider text-red-900 font-bold">
                  Contoh Sampah Residu:
                </p>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Popok &amp; pembalut sekali pakai</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Tisu bekas pakai kotor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Styrofoam makanan berlemak</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>Puntung rokok &amp; debu sapu</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-dashed border-red-300/60">
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 font-semibold bg-white/80 px-3 py-2 rounded-xl border border-red-200/50">
                <Package className="w-4 h-4 shrink-0 text-slate-500" />
                <span>Dibuang secara rapi dan diikat erat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booklet & Media Preview Section with 3D Tilt Cover */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Booklet Cover Preview with Real Asset from public/booklet/1.png */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border-2 border-slate-200 bg-white group hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[2000/1414] w-full overflow-hidden bg-slate-50">
                  <Image
                    src="/booklet/1.png"
                    alt="Buku Saku Pemilahan Sampah RW 18 Sadang Serang"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-xs font-semibold px-2.5 py-1.5 bg-black/50 backdrop-blur-md rounded-xl">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Halaman 1 — Panduan
                    </span>
                    <span className="text-[11px] text-emerald-200 font-medium">Buku Saku Resmi RW 18</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-[#003e74]">2 Halaman Lengkap</span>
                <span>•</span>
                <span>Flipbook Interaktif &amp; PDF Siap Cetak</span>
              </div>
            </div>

            {/* Booklet Description, Feature Checklist & Actions */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1 rounded-full bg-blue-100 text-[#003e74] text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Buku Saku Warga</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0f355c]">
                Buku Saku Digital: Panduan Pemilahan Sampah Terpadu RW 18
              </h3>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Disusun khusus berdasarkan booklet edukasi resmi RW 18 Sadang Serang. 
                Memuat infografis 3 wadah pemilahan, tips pengelolaan sampah dapur, serta jadwal pengangkutan 
                lingkungan. Dapat dibaca langsung via flipbook digital atau diunduh gratis dalam format PDF.
              </p>

              {/* Quick Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="px-3 py-2 rounded-xl bg-[#eef4ff] border border-blue-200 text-xs font-semibold text-[#003e74] flex items-center gap-2">
                  <span>✅</span>
                  <span>Font ramah lansia (18px+)</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#eef4ff] border border-blue-200 text-xs font-semibold text-[#003e74] flex items-center gap-2">
                  <span>✅</span>
                  <span>Infografis asli RW 18</span>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#eef4ff] border border-blue-200 text-xs font-semibold text-[#003e74] flex items-center gap-2">
                  <span>✅</span>
                  <span>Flipbook &amp; PDF Resmi</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/edukasi#booklet"
                  className="h-14 px-8 rounded-full bg-[#003e74] text-white font-semibold text-base inline-flex items-center justify-center gap-2 hover:bg-[#195694] shadow-sm transition-all"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Buka Booklet Digital (Flipbook)</span>
                </Link>

                <a
                  href="/booklet/png2pdf.pdf"
                  download="Buku_Saku_Pilah_Sampah_RW18.pdf"
                  className="h-14 px-8 rounded-full bg-[#e4efff] text-slate-900 font-semibold text-base inline-flex items-center justify-center gap-2 hover:bg-[#dbe9ff] transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Unduh PDF (Gratis)</span>
                </a>
              </div>

              {/* Video Teaser Notice */}
              <div className="mt-2 p-4 rounded-2xl bg-[#eef4ff] border border-emerald-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1b6d24] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 font-heading">
                    Tersedia Video Edukasi Bertakarir (Subtitles)
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Video penjelasan interaktif 3 menit, ramah tuna rungu dan
                    lansia dengan narasi bahasa Sunda dan Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
