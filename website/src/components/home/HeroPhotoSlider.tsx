"use client";

import Image from "next/image";
import { Sparkles, MapPin, Eye } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

interface PhotoCard {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  image: string;
  facility: string;
}

const rowOnePhotos: PhotoCard[] = [
  {
    id: 1,
    title: "Taman Dahlia RW 18",
    subtitle: "RTH & Pusat Interaksi Warga",
    tag: "RTH Publik",
    tagColor: "bg-emerald-700 text-white",
    image: "/images/facilities/taman-dahlia-1.jpg",
    facility: "Taman Dahlia",
  },
  {
    id: 2,
    title: "Rumah Maggot BSF",
    subtitle: "Biokonversi Sampah Organik 0 Bau",
    tag: "Biokonversi",
    tagColor: "bg-amber-700 text-white",
    image: "/images/facilities/rumah-maggot-1.jpg",
    facility: "Rumah Maggot",
  },
  {
    id: 3,
    title: "Panen Sayur Buruan SAE",
    subtitle: "Sayuran Hijau Segar Non-Kimia",
    tag: "Urban Farming",
    tagColor: "bg-green-700 text-white",
    image: "/images/gallery/panen-buruan-sae.jpeg",
    facility: "Buruan SAE",
  },
  {
    id: 4,
    title: "Pembagian MBG RW 18",
    subtitle: "Nutrisi Bergizi Warga & Anak",
    tag: "Aksi Sosial",
    tagColor: "bg-blue-700 text-white",
    image: "/images/gallery/pembagian-mbg.jpeg",
    facility: "Sosial Warga",
  },
  {
    id: 5,
    title: "Konservasi Bunga Dahlia",
    subtitle: "Pelestarian Vegetasi Flora Lokal",
    tag: "Konservasi",
    tagColor: "bg-rose-700 text-white",
    image: "/images/facilities/taman-dahlia-3.jpg",
    facility: "Taman Dahlia",
  },
];

const rowTwoPhotos: PhotoCard[] = [
  {
    id: 6,
    title: "Penarikan Sampah Organik",
    subtitle: "Pilah Sampah Langsung Dari Dapur",
    tag: "Pilah Sampah",
    tagColor: "bg-sky-700 text-white",
    image: "/images/gallery/penarikan-sampah-organik-1.jpeg",
    facility: "Pilah Sampah",
  },
  {
    id: 7,
    title: "Kebun Buruan SAE",
    subtitle: "Ketahanan Pangan Pekarangan",
    tag: "Ketahanan Pangan",
    tagColor: "bg-emerald-800 text-white",
    image: "/images/facilities/buruan-sae-1.jpg",
    facility: "Buruan SAE",
  },
  {
    id: 8,
    title: "Komposter Bata Terawang",
    subtitle: "Pengomposan Aerobik Alami",
    tag: "Bata Terawang",
    tagColor: "bg-orange-700 text-white",
    image: "/images/facilities/bata-terawang-1.jpg",
    facility: "Bata Terawang",
  },
  {
    id: 9,
    title: "Pelayanan Posyandu Balita",
    subtitle: "Layanan Kesehatan & Nutrisi Anak",
    tag: "Posyandu RW 18",
    tagColor: "bg-indigo-700 text-white",
    image: "/images/gallery/posyandu-1.jpeg",
    facility: "Kesehatan Warga",
  },
  {
    id: 10,
    title: "Pengomposan Sampah Kebun",
    subtitle: "Olah Daun Gugur Jadi Pupuk",
    tag: "Pupuk Kompos",
    tagColor: "bg-teal-700 text-white",
    image: "/images/facilities/bata-terawang-2.jpg",
    facility: "Bata Terawang",
  },
];

function CardItem({ item }: { item: PhotoCard }) {
  return (
    <div className="relative w-[280px] sm:w-[320px] h-[190px] sm:h-[205px] shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-md group/card select-none">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 280px, 320px"
        className="object-cover group-hover/card:scale-105 transition-transform duration-500"
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

      {/* Top Floating Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs ${item.tagColor}`}
        >
          {item.tag}
        </span>
      </div>

      {/* Bottom Title & Subtitle */}
      <div className="absolute bottom-3 left-3.5 right-3.5 z-10 text-white">
        <h4 className="text-sm sm:text-base font-bold font-heading line-clamp-1 leading-snug drop-shadow-sm">
          {item.title}
        </h4>
        <p className="text-xs text-slate-200 line-clamp-1 opacity-90 mt-0.5">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function HeroPhotoSlider() {
  return (
    <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] p-3.5 sm:p-5 bg-gradient-to-br from-white via-white/95 to-blue-50/70 border border-slate-200/90 shadow-2xl shadow-blue-900/10 overflow-hidden">
      {/* Left and Right Smooth Edge Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none rounded-l-[2rem]" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none rounded-r-[2rem]" />

      {/* Top Header Ribbon */}
      <div className="flex items-center justify-between px-2 pt-1 pb-3 border-b border-slate-100 mb-3.5">
        <div className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#003e74]">
            Galeri Bergerak Ekosistem RW 18
          </span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-slate-500 font-medium bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/60">
          <Eye className="w-3 h-3 text-emerald-600" />
          <span>Bergeser Otomatis • Arahkan Kursor untuk Jeda</span>
        </div>
      </div>

      {/* Dual Continuous Infinite Horizontal Sliders */}
      <div className="space-y-3.5">
        {/* Row 1: Sliding Left */}
        <InfiniteSlider
          direction="horizontal"
          gap={14}
          duration={25}
          durationOnHover={75}
          className="w-full py-0.5"
        >
          {rowOnePhotos.map((item) => (
            <CardItem key={`r1-${item.id}`} item={item} />
          ))}
        </InfiniteSlider>

        {/* Row 2: Sliding Right (Reverse) */}
        <InfiniteSlider
          direction="horizontal"
          gap={14}
          duration={30}
          durationOnHover={75}
          reverse={true}
          className="w-full py-0.5"
        >
          {rowTwoPhotos.map((item) => (
            <CardItem key={`r2-${item.id}`} item={item} />
          ))}
        </InfiniteSlider>
      </div>

      {/* Bottom Floating Info Pill */}
      <div className="mt-3.5 px-4 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Terintegrasi BSF × Buruan SAE × Bata Terawang × Taman Dahlia</span>
        </div>
        <div className="flex items-center gap-1.5 font-semibold text-emerald-700 self-end sm:self-auto">
          <MapPin className="w-3.5 h-3.5" />
          <span>10 Foto Kegiatan Asli RW 18</span>
        </div>
      </div>
    </div>
  );
}
