"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export type GalleryCategory =
  | "fasilitas"
  | "pengelolaan-sampah"
  | "urban-farming"
  | "kegiatan-warga";

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  desc: string;
}

export const galleryData: GalleryItem[] = [
  // --- KATEGORI 1: FASILITAS LINGKUNGAN ---
  {
    id: 1,
    title: "Lanskap Hijau RTH Taman Dahlia",
    category: "fasilitas",
    categoryLabel: "Fasilitas Lingkungan",
    image: "/images/facilities/taman-dahlia-1.jpg",
    desc: "Pusat ruang terbuka hijau publik terpadu di kawasan RW 18 Sadang Serang untuk sarana rekreasi dan edukasi lingkungan warga.",
  },
  {
    id: 2,
    title: "Instalasi Biokonversi Rumah Maggot BSF",
    category: "fasilitas",
    categoryLabel: "Fasilitas Lingkungan",
    image: "/images/facilities/rumah-maggot-1.jpg",
    desc: "Unit biokonversi larva Black Soldier Fly (BSF) untuk mereduksi sampah makanan basah rumah tangga secara higienis tanpa bau.",
  },
  {
    id: 3,
    title: "Sarana Komposter Aerobik Bata Terawang",
    category: "fasilitas",
    categoryLabel: "Fasilitas Lingkungan",
    image: "/images/facilities/bata-terawang-1.jpg",
    desc: "Susunan batu bata merah berongga tanpa semen yang mengoptimalkan sirkulasi udara alami untuk proses pengomposan aerobik.",
  },
  {
    id: 5,
    title: "Kawasan Pekarangan Sayur Buruan SAE",
    category: "fasilitas",
    categoryLabel: "Fasilitas Lingkungan",
    image: "/images/facilities/buruan-sae-1.jpg",
    desc: "Pemanfaatan pekarangan perkotaan menjadi sentra budidaya tanaman pangan lokal terpadu dengan pupuk kasgot.",
  },

  // --- KATEGORI 2: PENGELOLAAN SAMPAH ORGANIK ---
  {
    id: 7,
    title: "Penarikan Sampah Organik dari Rumah Warga",
    category: "pengelolaan-sampah",
    categoryLabel: "Pengelolaan Sampah",
    image: "/images/gallery/penarikan-sampah-organik-1.jpeg",
    desc: "Petugas gaslah RW 18 bersama mahasiswa KKN Unikom mengambil sampah organik sisa makanan langsung dari wadah ember dapur keluarga secara rutin.",
  },
  {
    id: 8,
    title: "Pengangkutan Sampah Dapur Terpilah",
    category: "pengelolaan-sampah",
    categoryLabel: "Pengelolaan Sampah",
    image: "/images/gallery/penarikan-sampah-organik-2.jpeg",
    desc: "Petugas gaslah RW 18 bersama mahasiswa KKN Unikom mengambil sampah organik sisa makanan langsung dari wadah ember dapur keluarga secara rutin.",
  },
  {
    id: 9,
    title: "Penarikan Sampah Organik dari Rumah Warga",
    category: "pengelolaan-sampah",
    categoryLabel: "Pengelolaan Sampah",
    image: "/images/gallery/penarikan-sampah-organik-3.jpeg",
    desc: "Petugas gaslah RW 18 bersama mahasiswa KKN Unikom mengambil sampah organik sisa makanan langsung dari wadah ember dapur keluarga secara rutin.",
  },

  // --- KATEGORI 3: URBAN FARMING & PANEN ---
  {
    id: 11,
    title: "Penyemaian Bibit Sayuran Buruan SAE",
    category: "urban-farming",
    categoryLabel: "Urban Farming & Panen",
    image: "/images/gallery/penanaman-bibit-buruan-sae-1.jpeg",
    desc: "Persiapan media tanam subur berbasis kompos lokal dan penaburan benih sayuran hijau di lahan Buruan SAE.",
  },
  {
    id: 12,
    title: "Penanaman Bibit Bersama di Bedengan Sayur",
    category: "urban-farming",
    categoryLabel: "Urban Farming & Panen",
    image: "/images/gallery/penanaman-bibit-buruan-sae-2.jpeg",
    desc: "Aksi gotong royong warga dan mahasiswa KKN menanam bibit sayuran di bedengan tanah terawat untuk ketahanan pangan.",
  },
  {
    id: 13,
    title: "Panen Sayuran Segar Buruan SAE",
    category: "urban-farming",
    categoryLabel: "Urban Farming & Panen",
    image: "/images/gallery/panen-buruan-sae.jpeg",
    desc: "Mahasiswa KKN membantu panen sayuran di Buruan Sae.",
  },

  // --- KATEGORI 4: AKTIVITAS SOSIAL & WARGA ---
  {
    id: 16,
    title: "Pelayanan Kesehatan Rutin Posyandu",
    category: "kegiatan-warga",
    categoryLabel: "Aktivitas Sosial & Warga",
    image: "/images/gallery/posyandu-1.jpeg",
    desc: "Pemeriksaan kesehatan terpadu, pengukuran tinggi dan penimbangan berat badan balita dan lansia oleh kader Posyandu RW 18.",
  },
  {
    id: 17,
    title: "Kegiatan Posyandu RW 18 Bersama Mahasiswa KKN Unikom",
    category: "kegiatan-warga",
    categoryLabel: "Aktivitas Sosial & Warga",
    image: "/images/gallery/posyandu-2.jpeg",
    desc: "Mahasiswa KKN membantu kegiatan Posyandu di RW 18.",
  },
  {
    id: 18,
    title: "Program Pembagian Makanan Bergizi Gratis (MBG)",
    category: "kegiatan-warga",
    categoryLabel: "Aktivitas Sosial & Warga",
    image: "/images/gallery/pembagian-mbg.jpeg",
    desc: "Distribusi paket makanan bergizi seimbang untuk mendukung pemenuhan nutrisi dan kesehatan anak-anak di RW 18.",
  }
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("semua");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = useMemo(
    () => [
      {
        id: "semua",
        label: "Semua Foto",
        count: galleryData.length,
      },
      {
        id: "fasilitas",
        label: "Fasilitas Lingkungan",
        count: galleryData.filter((i) => i.category === "fasilitas").length,
      },
      {
        id: "pengelolaan-sampah",
        label: "Pengelolaan Sampah",
        count: galleryData.filter((i) => i.category === "pengelolaan-sampah").length,
      },
      {
        id: "urban-farming",
        label: "Urban Farming & Panen",
        count: galleryData.filter((i) => i.category === "urban-farming").length,
      },
      {
        id: "kegiatan-warga",
        label: "Aktivitas Sosial & Warga",
        count: galleryData.filter((i) => i.category === "kegiatan-warga").length,
      },
    ],
    []
  );

  const filteredItems = useMemo(
    () =>
      filter === "semua"
        ? galleryData
        : galleryData.filter((item) => item.category === filter),
    [filter]
  );

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
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
        {categories.map((cat) => {
          const isActive = filter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setSelectedIndex(null);
              }}
              type="button"
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-[#003e74] text-white shadow-md scale-102"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
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
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />

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
              <h3 className="text-base sm:text-lg font-bold font-heading leading-snug line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-200 mt-1 opacity-90 line-clamp-2 leading-relaxed">
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
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            type="button"
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Tutup foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation arrows */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(
                    (prev) => (prev! - 1 + filteredItems.length) % filteredItems.length
                  );
                }}
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev! + 1) % filteredItems.length);
                }}
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
                aria-label="Foto selanjutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Lightbox Image Container */}
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

            {/* Caption bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-auto sm:max-w-2xl px-6 py-3 rounded-2xl bg-black/80 backdrop-blur-md text-white text-center z-10 border border-white/10">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-700/80 text-[10px] uppercase font-bold tracking-wider mb-1">
                {filteredItems[selectedIndex].categoryLabel}
              </div>
              <p className="text-sm sm:text-base font-bold font-heading">
                {filteredItems[selectedIndex].title}
              </p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
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
