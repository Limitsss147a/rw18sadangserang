import { Megaphone } from "lucide-react";

export default function OfficialBannerSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#003e74] via-[#195694] to-[#0f355c] p-6 sm:p-10 lg:p-12 text-white shadow-xl">
          {/* Architectural background gridlines */}
          <div
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 flex justify-start lg:justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-inner">
                <Megaphone className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300" />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-[#001c39] text-xs font-extrabold uppercase tracking-wide shadow-xs">
                  Himbauan Resmi DLH Kota Bandung
                </span>
                <span className="text-white/80 text-xs sm:text-sm font-medium">
                  • Sukseskan Kang Pisman
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-snug mt-1">
                “Kunci Kebersihan: Cukup Buang Sampah Terpilah dari Rumah, Bukan Dipilah Setelah Bercampur!”
              </h2>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed mt-2">
                Pemilahan sejak dari dapur menentukan kualitas pakan Rumah Maggot BSF dan kesuburan pupuk kasgot di kebun Buruan SAE. Jika sampah sudah tercampur di gerobak sampah, nilai ekonomis dan efektivitas pengolahannya turun hingga 80%.
              </p>
            </div>

            <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-start">
              <div className="w-full bg-white/95 text-slate-900 rounded-2xl p-5 text-center shadow-lg border border-amber-300/40">
                <span className="block text-3xl sm:text-4xl font-extrabold text-[#2e7d32] font-heading">
                  0 Jam
                </span>
                <span className="block text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Waktu tunggu pilah ulang jika tertib dari rumah
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
