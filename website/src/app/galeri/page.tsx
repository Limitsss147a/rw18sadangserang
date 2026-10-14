import type { Metadata } from "next";
import { Camera, Users, Sparkles, MapPin, ExternalLink } from "lucide-react";
import { Instagram } from "@/components/icons/InstagramIcon";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeri Dokumentasi & Kegiatan Warga — RW 18 Sadang Serang",
  description:
    "Dokumentasi visual gotong royong, pembangunan fasilitas lingkungan, dan kegiatan edukasi warga RW 18 Kelurahan Sadang Serang.",
};

export default function GaleriPage() {
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
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>Dokumentasi Gotong Royong</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight max-w-3xl">
            Galeri Aksi Nyata Lingkungan RW 18
          </h1>

          <p className="mt-4 text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed">
            Rekam jejak sinergi warga, Karang Taruna Unit 18, dan mahasiswa KKN
            Tematik UNIKOM dalam merawat fasilitas lingkungan dan mengedukasi
            pemilahan sampah dari rumah.
          </p>
        </div>
      </section>

      {/* Main Gallery Grid Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <GalleryGrid />
      </section>

      {/* Social Media & Study Visit Section */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Instagram Communities */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#003e74]">
                Kanal Dokumentasi Terkini
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0f355c]">
                Ikuti Kegiatan Harian di Instagram
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dokumentasi video reels, agenda kerja bakti rutin, dan jadwal
                panen sayuran Buruan SAE dibagikan secara berkala melalui media
                sosial resmi.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://instagram.com/kartaunit18_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#f8f9ff] border border-slate-200 hover:border-[#003e74] hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-[#003e74]">
                        @kartaunit18_
                      </p>
                      <p className="text-xs text-slate-500">
                        Karang Taruna Unit 18
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#003e74]" />
                </a>

                <a
                  href="https://instagram.com/kkn3_sadangserang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#f8f9ff] border border-slate-200 hover:border-emerald-700 hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-800">
                        @kkn3_sadangserang
                      </p>
                      <p className="text-xs text-slate-500">
                        KKN Tematik UNIKOM
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-800" />
                </a>
              </div>
            </div>

            {/* Right: Study Visit Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#eef4ff] rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-xs flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#003e74]">
                    Studi Banding &amp; Kunjungan Belajar
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Tertarik Mengunjungi Fasilitas RW 18?
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kami menyambut baik kunjungan edukasi dari pengurus RT/RW,
                  sekolah, dan pegiat lingkungan yang ingin mempelajari sistem
                  biokonversi maggot dan budidaya Buruan SAE tingkat rukun warga.
                </p>

                <div className="pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700 mb-3 font-medium">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>
                      Lokasi: Kelurahan Sadang Serang, Kecamatan Coblong, Kota Bandung
                    </span>
                  </div>
                  <a
                    href="https://instagram.com/kartaunit18_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-6 rounded-full bg-[#003e74] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#195694] transition-colors shadow-xs"
                  >
                    <span>Hubungi Pengurus via Instagram @kartaunit18_</span>
                    <ExternalLink className="w-4 h-4" />
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
