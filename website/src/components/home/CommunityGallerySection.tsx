import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Images } from "lucide-react";

export default function CommunityGallerySection() {
  const photos = [
    {
      title: "Penarikan Sampah Organik",
      desc: "Pengambilan rutin sampah dapur dari rumah warga RW 18 untuk komposter & maggot",
      tag: "Pengelolaan Sampah",
      tagColor: "text-[#003e74]",
      image: "/images/gallery/penarikan-sampah-organik-1.jpeg",
    },
    {
      title: "Panen Sayuran Buruan SAE",
      desc: "Hasil panen sayur sosin & kangkung segar pekarangan RW 18 dengan pupuk kasgot",
      tag: "Urban Farming",
      tagColor: "text-emerald-700",
      image: "/images/gallery/panen-buruan-sae.jpeg",
    },
    {
      title: "Pelayanan Posyandu Balita",
      desc: "Pemeriksaan tumbuh kembang anak & balita secara rutin oleh kader RW 18",
      tag: "Kegiatan Warga",
      tagColor: "text-amber-800",
      image: "/images/gallery/posyandu-1.jpeg",
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24" id="galeri">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#003e74]">
              Aksi Nyata Lapangan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0f355c] mt-2">
              Dokumentasi Kegiatan &amp; Gotong Royong
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-2xl">
              Potret kolaborasi warga RW 18, Karang Taruna Unit 18, dan tim KKN
              UNIKOM dalam mengelola lingkungan dan menjaga kebersamaan.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/galeri"
              className="h-11 px-5 rounded-full bg-[#003e74] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#195694] transition-colors shadow-xs"
            >
              <Images className="w-4 h-4" />
              <span>Lihat Seluruh Galeri</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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
                <p className="text-xs text-slate-200 mt-1 opacity-90 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
