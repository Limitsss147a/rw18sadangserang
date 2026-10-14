"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn, Tag } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "fasilitas" | "gotong-royong" | "panen" | "edukasi";
  categoryLabel: string;
  image: string;
  desc: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Taman Dahlia yang Asri & Rindang",
    category: "fasilitas",
    categoryLabel: "Fasilitas Lingkungan",
    image: "/images/facilities/taman-dahlia-1.jpg",
    desc: "Ruang terbuka hijau publik RW 18 untuk interaksi sosial warga lintas generasi.",
  },
  {
    id: 2,
    title: "Kerja Bakti Minggu Bersih",
    category: "gotong-royong",
    categoryLabel: "Gotong Royong",
    image: "/images/facilities/taman-dahlia-2.jpg",
    desc: "Warga RW 18 gotong royong membersihkan selokan lingkungan dan menata tanaman.",
  },
  {
    id: 3,
    title: "Kebun Pekarangan Buruan SAE",
    category: "panen",
    categoryLabel: "Urban Farming & Panen",
    image: "/images/facilities/buruan-sae-1.jpg",
    desc: "Budidaya tanaman kangkung dan sayuran pekarangan menggunakan pupuk kasgot maggot.",
  },
  {
    id: 4,
    title: "Instalasi Biokonversi Rumah Maggot BSF",
    category: "fasilitas",
    categoryLabel: "Fasilitas Lingkungan",
    image: "/images/facilities/rumah-maggot-1.jpg",
    desc: "Rak biopon pengolahan sampah organik dapur oleh larva BSF tanpa bau busuk.",
  },
  {
    id: 5,
    title: "Inovasi Dinding Roster Bata Terawang",
    category: "fasilitas",
    categoryLabel: "Fasilitas Lingkungan",
    image: "/images/facilities/bata-terawang-1.jpg",
    desc: "Dinding roster pembatas gang yang memperlancar sirkulasi udara alami kawasan.",
  },
  {
    id: 6,
    title: "Sosialisasi Door-to-Door Pemilahan Sampah",
    category: "edukasi",
    categoryLabel: "Edukasi & Sosialisasi",
    image: "/images/facilities/taman-dahlia-4.jpg",
    desc: "Mahasiswa KKN UNIKOM bersama Karang Taruna mengedukasi warga lansia cara memilah sampah.",
  },
  {
    id: 7,
    title: "Penataan Sudut Hijau Taman Dahlia",
    category: "fasilitas",
    categoryLabel: "Fasilitas Lingkungan",
    image: "/images/facilities/taman-dahlia-3.jpg",
    desc: "Penanaman aneka varietas bunga dahlia dan tanaman hias lokal oleh ibu-ibu kader PKK.",
  },
  {
    id: 8,
    title: "Tanaman Sayuran Sosin Buruan SAE",
    category: "panen",
    categoryLabel: "Urban Farming & Panen",
    image: "/images/facilities/buruan-sae-2.jpg",
    desc: "Budidaya tanaman pekarangan mandiri seperti sosin dan sayuran hijau yang disuburkan pupuk kasgot.",
  },
  {
    id: 9,
    title: "Instalasi Kompos Bata Terawang",
    category: "fasilitas",
    categoryLabel: "Fasilitas Lingkungan",
    image: "/images/facilities/bata-terawang-2.jpg",
    desc: "Susunan batu bata berongga untuk proses dekomposisi aerobik sampah organik tanpa bau.",
  },
  {
    id: 10,
    title: "Bibit Sayuran Segar Buruan SAE",
    category: "panen",
    categoryLabel: "Urban Farming & Panen",
    image: "/images/facilities/buruan-sae-3.jpg",
    desc: "Penyemaian bibit tanaman pangan pekarangan untuk ketahanan gizi keluarga.",
  },
  {
    id: 11,
    title: "Aktivitas Rembuk Warga di Gazebo",
    category: "gotong-royong",
    categoryLabel: "Gotong Royong",
    image: "/images/facilities/taman-dahlia-5.jpg",
    desc: "Musyawarah pengurus RT/RW bersama pemuda Karang Taruna di area taman.",
  },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("semua");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = [
    { id: "semua", label: "Semua Dokumentasi" },
    { id: "fasilitas", label: "Fasilitas Lingkungan" },
    { id: "gotong-royong", label: "Gotong Royong" },
    { id: "panen", label: "Urban Farming & Panen" },
    { id: "edukasi", label: "Edukasi & Sosialisasi" },
  ];

  const filteredItems =
    filter === "semua"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setFilter(cat.id);
              setSelectedIndex(null);
            }}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              filter === cat.id
                ? "bg-[#003e74] text-white shadow-md scale-102"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Photos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative h-80 rounded-3xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 flex flex-col justify-end p-5"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#003e74] text-xs font-bold shadow-xs">
                {item.categoryLabel}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            <div className="relative z-10 text-white">
              <h3 className="text-lg font-bold font-heading leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-200 mt-1 opacity-90 line-clamp-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(
                    (prev) => (prev! - 1 + filteredItems.length) % filteredItems.length
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev! + 1) % filteredItems.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
                aria-label="Foto selanjutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={filteredItems[selectedIndex].image}
                alt={filteredItems[selectedIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-auto sm:px-6 py-2.5 rounded-2xl bg-black/75 backdrop-blur-md text-white text-center z-10">
              <p className="text-sm font-bold font-heading">
                {filteredItems[selectedIndex].title}
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                {filteredItems[selectedIndex].desc} ({selectedIndex + 1} dari{" "}
                {filteredItems.length})
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
