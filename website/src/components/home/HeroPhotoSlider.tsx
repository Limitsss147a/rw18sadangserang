"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";

interface PhotoSlide {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  image: string;
  facility: string;
}

const photoSlides: PhotoSlide[] = [
  {
    id: 1,
    title: "Taman Dahlia RW 18",
    subtitle: "Ruang terbuka hijau & arena interaksi sosial warga lintas generasi",
    tag: "RTH Publik",
    tagColor: "bg-emerald-600 text-white",
    image: "/images/facilities/taman-dahlia-1.jpg",
    facility: "Taman Dahlia",
  },
  {
    id: 2,
    title: "Rumah Maggot BSF",
    subtitle: "Biokonversi sampah makanan dapur oleh larva BSF tanpa bau & pupuk kasgot",
    tag: "Biokonversi",
    tagColor: "bg-amber-600 text-white",
    image: "/images/facilities/rumah-maggot-1.jpg",
    facility: "Rumah Maggot",
  },
  {
    id: 3,
    title: "Panen Sayuran Buruan SAE",
    subtitle: "Hasil panen sayur sosin dan kangkung pekarangan non-pestisida kimia",
    tag: "Urban Farming",
    tagColor: "bg-green-700 text-white",
    image: "/images/gallery/panen-buruan-sae.jpeg",
    facility: "Buruan SAE",
  },
  {
    id: 4,
    title: "Komposter Bata Terawang",
    subtitle: "Sarana pengomposan aerobik beraerasi alami dengan susunan bata berongga",
    tag: "Bata Terawang",
    tagColor: "bg-orange-600 text-white",
    image: "/images/facilities/bata-terawang-1.jpg",
    facility: "Bata Terawang",
  },
  {
    id: 5,
    title: "Pekarangan Pangan Buruan SAE",
    subtitle: "Pemanfaatan lahan pekarangan perkotaan menjadi sentra sayuran produktif",
    tag: "Ketahanan Pangan",
    tagColor: "bg-emerald-700 text-white",
    image: "/images/facilities/buruan-sae-1.jpg",
    facility: "Buruan SAE",
  },
  {
    id: 6,
    title: "Penarikan Sampah Organik Warga",
    subtitle: "Pengambilan rutin sampah sisa makanan terpilah langsung dari dapur keluarga",
    tag: "Pilah Sampah",
    tagColor: "bg-sky-600 text-white",
    image: "/images/gallery/penarikan-sampah-organik-1.jpeg",
    facility: "Pilah Sampah",
  },
  {
    id: 7,
    title: "Pelayanan Rutin Posyandu Lansia & Balita",
    subtitle: "Pemeriksaan kesehatan lansia dan tumbuh kembang balita secara rutin oleh kader RW 18",
    tag: "Posyandu RW 18",
    tagColor: "bg-indigo-600 text-white",
    image: "/images/gallery/posyandu-1.jpeg",
    facility: "Kesehatan Warga",
  },
  {
    id: 8,
    title: "Program Makan Bergizi Gratis (MBG)",
    subtitle: "Penyaluran makanan bergizi sehat untuk pemenuhan nutrisi warga & anak-anak",
    tag: "Aksi Sosial",
    tagColor: "bg-blue-600 text-white",
    image: "/images/gallery/pembagian-mbg.jpeg",
    facility: "Sosial Warga",
  },
  {
    id: 9,
    title: "Pengomposan Sampah Kebun",
    subtitle: "Pengolahan sampah daun gugur dan kebun menjadi pupuk organik matang",
    tag: "Pupuk Kompos",
    tagColor: "bg-teal-700 text-white",
    image: "/images/facilities/bata-terawang-2.jpg",
    facility: "Bata Terawang",
  },
  {
    id: 10,
    title: "Konservasi Bunga & Flora Taman",
    subtitle: "Penataan aneka bunga dahlia dan tanaman hias gotong royong warga & kader PKK",
    tag: "Konservasi Flora",
    tagColor: "bg-rose-600 text-white",
    image: "/images/facilities/taman-dahlia-3.jpg",
    facility: "Taman Dahlia",
  },
];

export default function HeroPhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? photoSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === photoSlides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keep active thumbnail centered in thumbnail row
  useEffect(() => {
    if (!thumbnailsRef.current) return;
    const container = thumbnailsRef.current;
    const activeThumbnail = container.children[currentIndex] as HTMLElement | undefined;
    if (activeThumbnail) {
      const scrollLeft =
        activeThumbnail.offsetLeft -
        container.offsetWidth / 2 +
        activeThumbnail.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentIndex]);

  const current = photoSlides[currentIndex];

  return (
    <div className="relative w-full rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-5 bg-white border border-slate-200 shadow-xl select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-3.5">
        <div className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#003e74]">
            Galeri Dokumentasi RW 18
          </span>
        </div>

        {/* Manual Slide Counter & Controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 font-mono px-2 py-0.5 rounded-md bg-slate-100">
            {currentIndex + 1} / {photoSlides.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Foto sebelumnya"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#003e74] hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Foto selanjutnya"
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#003e74] hover:text-white text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Photo Display Card (Clean, NO gradient overlay) */}
      <div
        className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={current.image}
          alt={current.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 650px"
          className="object-cover transition-opacity duration-300"
        />

        {/* Tag Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${current.tagColor}`}
          >
            {current.tag}
          </span>
        </div>

        {/* Left & Right Click Targets for intuitive manual sliding on the image */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Foto sebelumnya"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Foto selanjutnya"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Clean White Caption Box (Below photo, NO gradient) */}
      <div className="pt-3.5 pb-2">
        <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900 leading-snug">
          {current.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          {current.subtitle}
        </p>
      </div>

      {/* Manual Slide Dots */}
      <div className="flex items-center justify-center gap-1.5 py-2">
        {photoSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(idx)}
            aria-label={`Lihat foto ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === currentIndex
                ? "w-6 bg-[#003e74]"
                : "w-2 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>

      {/* Scrollable Thumbnail Strip for quick manual jumping */}
      <div
        ref={thumbnailsRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 pb-1 border-t border-slate-100"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {photoSlides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={`thumb-${slide.id}`}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Pilih foto ${slide.title}`}
              className={`relative w-16 sm:w-20 h-12 sm:h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                isActive
                  ? "border-[#003e74] scale-105 shadow-sm"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Clean Bottom Note */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Kawasan Lingkungan RW 18 Sadang Serang</span>
        </div>
        <span className="text-[11px] text-slate-400">Geser atau klik panah</span>
      </div>
    </div>
  );
}
