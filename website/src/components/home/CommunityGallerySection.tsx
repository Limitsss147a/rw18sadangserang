import Link from "next/link";
import Image from "next/image";
import { Share2, Users, Mail, HelpCircle } from "lucide-react";

export default function CommunityGallerySection() {
  const photos = [
    {
      title: "Kerja Bakti Warga Rutin",
      desc: "Pembersihan saluran air dan penataan lingkungan kawasan",
      tag: "Minggu Bersih",
      tagColor: "text-[#003e74]",
      image: "/images/facilities/taman-dahlia-2.jpg",
    },
    {
      title: "Panen Raya Buruan SAE",
      desc: "Distribusi hasil sayur sehat untuk konsumsi posyandu & warga",
      tag: "Panen Posyandu",
      tagColor: "text-emerald-700",
      image: "/images/facilities/buruan-sae-1.jpg",
    },
    {
      title: "Sosialisasi Dari Pintu ke Pintu",
      desc: "Edukasi pemilahan sampah langsung ke setiap rumah warga",
      tag: "KKN Menyapa",
      tagColor: "text-amber-800",
      image: "/images/facilities/taman-dahlia-4.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24" id="galeri">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#003e74]">
              Aksi Nyata Lapangan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0f355c] mt-2">
              Dokumentasi Kegiatan &amp; Gotong Royong
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              Sinergi mahasiswa KKN UNIKOM, Karang Taruna Unit 18, dan warga RW
              18 Kelurahan Sadang Serang.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/kartaunit18_"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-4 rounded-full bg-[#eef4ff] text-[#003e74] text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#e4efff] transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>@kartaunit18_</span>
            </a>
            <a
              href="https://instagram.com/kkn3_sadangserang"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-4 rounded-full bg-[#eef4ff] text-emerald-800 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#e4efff] transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>@kkn3_sadangserang</span>
            </a>
          </div>
        </div>

        {/* Gallery Bento Mosaic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((item, index) => (
            <div
              key={index}
              className="relative h-72 rounded-3xl overflow-hidden bg-slate-100 shadow-md group border border-slate-200"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              <div
                className={`absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-xs ${item.tagColor}`}
              >
                {item.tag}
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-lg font-bold font-heading">{item.title}</p>
                <p className="text-xs text-slate-200 mt-1 opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact & Engagement Banner (Studi Banding) */}
        <div className="rounded-3xl bg-[#dbe9ff] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-200">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#003e74] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold font-heading text-[#0f355c]">
                Ingin Belajar Studi Banding ke RW 18?
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 mt-1">
                Kami membuka kunjungan belajar pengelolaan Maggot dan Buruan SAE
                bagi pengurus RW, sekolah, dan komunitas se-Kota Bandung.
              </p>
            </div>
          </div>

          <Link
            href="/kontak"
            className="h-12 px-6 rounded-full bg-[#003e74] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#195694] shadow-sm transition-all shrink-0"
          >
            <span>Hubungi Pengurus RW</span>
            <HelpCircle className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
