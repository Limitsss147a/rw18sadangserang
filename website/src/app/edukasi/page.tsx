import type { Metadata } from "next";
import {
  Recycle,
  Check,
  Ban,
  Lightbulb,
  Trash2,
  Package,
  BookOpen,
  PlayCircle,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import BookletViewer from "@/components/education/BookletViewer";
import WasteSortingQuiz from "@/components/education/WasteSortingQuiz";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Pusat Edukasi Pemilahan Sampah — RW 18 Sadang Serang",
  description:
    "Panduan resmi pemilahan 3 jenis sampah warga RW 18 Kelurahan Sadang Serang. Booklet digital, video edukasi, dan kuis interaktif pilah sampah dari rumah.",
};

export default function EdukasiPage() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Header Banner */}
      <ScrollReveal delay={0.1} y={0}>
        <section className="bg-gradient-to-br from-[#1b6d24] via-[#2E7D32] to-[#003e74] text-white py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
            <Recycle className="w-4 h-4 text-emerald-300" />
            <span>Gerakan Kang Pisman RW 18</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight max-w-4xl">
            Pusat Edukasi Pemilahan Sampah Terpadu
          </h1>

          <div className="mt-6 p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
              Pesan Inti DLH Kota Bandung:
            </p>
            <p className="text-lg sm:text-2xl font-bold font-heading text-white leading-snug">
              “Cukup buang sampah secara terpilah sejak dari rumah tangga, bukan
              mengumpulkan sampah tercampur lalu memilahnya kemudian!”
            </p>
          </div>

          <p className="mt-4 text-sm sm:text-base text-emerald-100 max-w-2xl leading-relaxed">
            Mengetahui cara membuang sampah secara terpilah hanya butuh waktu kurang
            dari 5 menit. Pelajari panduan 3 wadah di bawah ini.
          </p>
        </div>
      </section>
      </ScrollReveal>

      {/* 3 Bins Detailed Section */}
      <ScrollReveal delay={0.15}>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Standar Pemilahan 3 Wadah
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#0f355c] mt-3">
            Pilah Menjadi 3 Wadah di Dapur Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Setiap wadah memiliki tujuan dan alur pengolahan yang berbeda di
            fasilitas lingkungan RW 18.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. ORGANIK */}
          <div className="bg-[#f0fdf4] rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/40 shadow-lg flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#2e7d32] text-white text-xs font-bold shadow-xs">
                  WADAH HIJAU
                </span>
                <span className="text-2xl">🍃</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Sampah Organik
                </h3>
                <p className="text-xs font-bold text-emerald-700 mt-1">
                  Alur: Rumah Maggot BSF &amp; Kompos Kasgot
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl p-5 border border-emerald-200/60 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  ✅ Boleh Dimasukkan:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Sisa nasi, lauk pauk, dan sisa makanan dapur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Kulit buah, potongan sayur mentah/matang</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Ampas kopi, serbuk teh, cangkang telur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>Dedaunan kering pekarangan &amp; rumput pangkas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-4 border border-red-200 text-xs text-red-800">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Ban className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Dilarang Keras:</span>
                </div>
                <p>
                  Plastik bungkus makanan, tusuk sate, puntung rokok, atau kawat
                  karena merusak larva maggot.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-200 text-xs text-emerald-800 font-semibold">
              💡 Nilai Manfaat: Diurai dalam 24 jam menjadi pupuk kasgot subur untuk tanaman sayur Buruan SAE
            </div>
          </div>

          {/* 2. ANORGANIK */}
          <div className="bg-[#fffbeb] rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-lg flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#f59e0b] text-[#451a03] text-xs font-bold shadow-xs">
                  WADAH KUNING
                </span>
                <span className="text-2xl">♻️</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Sampah Anorganik
                </h3>
                <p className="text-xs font-bold text-amber-800 mt-1">
                  Alur: Bank Sampah RW 18 &amp; Daur Ulang
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl p-5 border border-amber-200/60 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                  ✅ Boleh Dimasukkan:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Botol, gelas, dan tutup plastik bersih</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Kaleng minuman, seng, dan wadah logam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Kardus, karton kemasan, dan kertas bersih</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>Botol kaca &amp; wadah beling utuh</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-100/70 rounded-2xl p-4 border border-amber-200 text-xs text-amber-950">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Lightbulb className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Tips Terbaik:</span>
                </div>
                <p>
                  Kosongkan sisa cairan, bilas secara ringan, dan lipat/remas kardus
                  serta botol agar hemat ruang wadah.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200 text-xs text-amber-900 font-semibold">
              💡 Nilai Manfaat: Menghasilkan nilai ekonomi tabungan kas melalui Bank Sampah
            </div>
          </div>

          {/* 3. RESIDU */}
          <div className="bg-[#fef2f2] rounded-3xl p-6 sm:p-8 border-2 border-red-500/40 shadow-lg flex flex-col justify-between overflow-hidden">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#d32f2f] text-white text-xs font-bold shadow-xs">
                  WADAH MERAH / ABU
                </span>
                <span className="text-2xl">🗑️</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Sampah Residu
                </h3>
                <p className="text-xs font-bold text-red-700 mt-1">
                  Alur: TPS Resmi Terjadwal Langsung ke TPA
                </p>
              </div>

              <div className="bg-white/95 rounded-2xl p-5 border border-red-200/60 shadow-xs">
                <p className="text-xs font-bold uppercase tracking-wider text-red-900 mb-2">
                  ⚠️ Contoh Sampah Residu:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Popok &amp; pembalut sekali pakai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Tisu bekas pakai basah &amp; kotor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Styrofoam makanan berminyak pekat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span>Puntung rokok, abu dapur, dan debu sapu</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Package className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>Instruksi Pembuangan:</span>
                </div>
                <p>
                  Ikat kantong secara rapat dan buang pada jadwal pengangkutan TPS
                  resmi yang ditentukan pengurus RW.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-200 text-xs text-red-800 font-semibold">
              💡 Nilai Manfaat: Menjaga lingkungan tetap steril dan mencegah pencemaran bau
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Interactive Booklet Viewer Section */}
      <ScrollReveal delay={0.2}>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <BookletViewer />
      </section>
      </ScrollReveal>

      {/* Video Edukasi Bertakarir Section */}
      <ScrollReveal delay={0.25}>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <PlayCircle className="w-4 h-4 text-emerald-600" />
                <span>Media Audio-Visual</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0f355c] mt-2">
                Video Edukasi Pemilahan Sampah Bertakarir
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Dilengkapi teks takarir (subtitles) bahasa Indonesia dan narasi
                yang ramah bagi warga lansia serta tuna rungu.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Embedded Video Box */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200 flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold">
                      Video Resmi Kang Pisman
                    </span>
                    <span className="text-xs bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full font-semibold">
                      Durasi: 3 Menit
                    </span>
                  </div>

                  <div className="text-center my-auto">
                    <div className="w-16 h-16 rounded-full bg-emerald-600/90 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-110 transition-transform cursor-pointer">
                      <PlayCircle className="w-10 h-10" />
                    </div>
                    <p className="mt-3 text-sm font-bold">
                      Praktik Mudah Pemilahan Sampah Rumah Tangga
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Subtitle: Bahasa Indonesia (Aktif)</span>
                    <span>DLH Kota Bandung × KKN UNIKOM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Poin Pembelajaran Video:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-[#003e74]">1.</span>
                  <span>Cara menyediakan wadah sederhana di dapur tanpa biaya tambahan.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-[#003e74]">2.</span>
                  <span>Tips agar sampah organik sisa dapur tidak menimbulkan bau busuk.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-[#003e74]">3.</span>
                  <span>Alur penjemputan sampah organik menuju biopon Rumah Maggot RW 18.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Interactive Sorting Quiz Section */}
      <ScrollReveal delay={0.3}>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <WasteSortingQuiz />
      </section>
      </ScrollReveal>
    </div>
  );
}
