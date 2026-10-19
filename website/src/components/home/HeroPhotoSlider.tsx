"use client";

import Image from "next/image";
import { Sparkles, MapPin, Layers } from "lucide-react";
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

const columnOnePhotos: PhotoCard[] = [
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

const columnTwoPhotos: PhotoCard[] = [
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
    <div className="relative w-full h-[210px] sm:h-[220px] rounded-2xl overflow-hidden bg-slate-900 border border-white/60 shadow-md group/card select-none">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 240px"
        className="object-cover group-hover/card:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

      {/* Top Floating Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs ${item.tagColor}`}
        >
          {item.tag}
        </span>
      </div>

      {/* Bottom Title & Subtitle */}
      <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
        <h4 className="text-sm font-bold font-heading line-clamp-1 leading-snug drop-shadow-xs">
          {item.title}
        </h4>
        <p className="text-[11px] text-slate-200 line-clamp-1 opacity-90 mt-0.5">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

function HorizontalCardItem({ item }: { item: PhotoCard }) {
  return (
    <div className="relative w-[250px] sm:w-[280px] h-[170px] sm:h-[185px] shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-white/80 shadow-md group/card select-none">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="280px"
        className="object-cover group-hover/card:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

      {/* Top Badge */}
      <div className="absolute top-2.5 left-2.5 z-10">
        <span
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs ${item.tagColor}`}
        >
          {item.tag}
        </span>
      </div>

      {/* Bottom Title */}
      <div className="absolute bottom-2.5 left-3 right-3 z-10 text-white">
        <h4 className="text-sm font-bold font-heading line-clamp-1 leading-snug">
          {item.title}
        </h4>
        <p className="text-[11px] text-slate-200 line-clamp-1 opacity-90">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function HeroPhotoSlider() {
  return (
    <div className="relative w-full">
      {/* ============================================================ */}
      {/* DESKTOP DISPLAY (≥ 1024px): DUAL VERTICAL INFINITE SLIDERS   */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative w-full rounded-[2.5rem] p-3.5 bg-gradient-to-br from-white via-white/90 to-blue-50/70 border border-slate-200/90 shadow-2xl shadow-blue-900/10">
        {/* Top/Bottom Gradient Fades for Smooth Clipping */}
        <div className="absolute top-3.5 inset-x-3.5 h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none rounded-t-[2rem]" />
        <div className="absolute bottom-3.5 inset-x-3.5 h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none rounded-b-[2rem]" />

        {/* Header Ribbon above Slider */}
        <div className="flex items-center justify-between px-3 pt-1 pb-3 border-b border-slate-100 mb-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#003e74]">
              Potret Ekosistem RW 18
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">
            Arahkan kursor untuk menjeda
          </span>
        </div>

        {/* Dual Vertical Columns Grid */}
        <div className="grid grid-cols-2 gap-3.5 h-[530px] overflow-hidden rounded-[2rem] bg-slate-50/60 p-2 relative">
          {/* Column 1: Upward Movement */}
          <InfiniteSlider
            direction="vertical"
            gap={14}
            duration={28}
            durationOnHover={80}
            className="h-[520px] w-full"
          >
            {columnOnePhotos.map((item) => (
              <CardItem key={`col1-${item.id}`} item={item} />
            ))}
          </InfiniteSlider>

          {/* Column 2: Downward Movement (Reverse) */}
          <InfiniteSlider
            direction="vertical"
            gap={14}
            duration={32}
            durationOnHover={80}
            reverse={true}
            className="h-[520px] w-full"
          >
            {columnTwoPhotos.map((item) => (
              <CardItem key={`col2-${item.id}`} item={item} />
            ))}
          </InfiniteSlider>
        </div>

        {/* Bottom Floating Info Pill */}
        <div className="mt-3.5 px-4 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Terintegrasi 4 Fasilitas &amp; Gotong Royong Warga</span>
          </div>
          <span className="font-mono text-[11px] text-emerald-700 font-bold">
            10 Foto Unggulan
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE & TABLET DISPLAY (< 1024px): DUAL HORIZONTAL SLIDERS */}
      {/* ============================================================ */}
      <div className="block lg:hidden relative w-full rounded-3xl p-3 bg-gradient-to-br from-white via-white/95 to-blue-50/60 border border-slate-200 shadow-xl overflow-hidden">
        {/* Left/Right Edge Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="flex items-center justify-between px-2 pt-1 pb-2.5 border-b border-slate-100 mb-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#003e74]">
              Galeri Visual Fasilitas &amp; Warga
            </span>
          </div>
          <span className="text-[10px] text-slate-500">Geser / Sentuh</span>
        </div>

        <div className="space-y-3">
          {/* Row 1: Leftward */}
          <InfiniteSlider
            direction="horizontal"
            gap={12}
            duration={24}
            durationOnHover={60}
            className="w-full py-0.5"
          >
            {columnOnePhotos.map((item) => (
              <HorizontalCardItem key={`row1-${item.id}`} item={item} />
            ))}
          </InfiniteSlider>

          {/* Row 2: Rightward (Reverse) */}
          <InfiniteSlider
            direction="horizontal"
            gap={12}
            duration={28}
            durationOnHover={60}
            reverse={true}
            className="w-full py-0.5"
          >
            {columnTwoPhotos.map((item) => (
              <HorizontalCardItem key={`row2-${item.id}`} item={item} />
            ))}
          </InfiniteSlider>
        </div>

        <div className="mt-3 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Kawasan Lingkungan Terpadu RW 18 Sadang Serang</span>
        </div>
      </div>
    </div>
  );
}
