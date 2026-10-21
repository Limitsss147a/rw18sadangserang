"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, ChevronLeft, ChevronRight, BookOpen, Maximize2, X } from "lucide-react";

export default function BookletViewer() {
  const pages = [
    {
      page: 1,
      title: "Halaman 1 — Panduan Pemilahan",
      src: "/booklet/1.png",
      width: 1600,
      height: 1000,
    },
    {
      page: 2,
      title: "Halaman 2 — Jadwal & Pengolahan",
      src: "/booklet/2.png",
      width: 1600,
      height: 1000,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003e74]">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Penampil Flipbook Digital</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0f355c] mt-1">
            Buku Saku Warga RW 18 Sadang Serang
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            {pages[currentPage].title} ({currentPage + 1} dari {pages.length})
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsFullscreen(true)}
            className="h-10 px-4 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors inline-flex items-center gap-1.5"
          >
            <Maximize2 className="w-4 h-4" />
            <span>Perbesar</span>
          </button>

          <a
            href="/booklet/png2pdf.pdf"
            download="Buku_Saku_Pilah_Sampah_RW18.pdf"
            className="h-10 px-5 rounded-xl bg-[#003e74] text-white text-xs font-semibold hover:bg-[#195694] transition-colors inline-flex items-center gap-2 shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Unduh PDF (5 MB)</span>
          </a>
        </div>
      </div>

      {/* Main Page Display with subtle flipbook feel */}
      <div
        className="relative w-full max-w-4xl mx-auto bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center p-2 sm:p-4"
        style={{
          aspectRatio: `${pages[currentPage].width} / ${pages[currentPage].height}`,
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-xl translate-x-2 translate-y-2 bg-slate-200/80 blur-[1px]" />
          <div
            key={currentPage}
            className="flipbook-page relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white book-shadow"
          >
            <Image
              src={pages[currentPage].src}
              alt={pages[currentPage].title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-slate-800/10 via-slate-700/5 to-transparent" />
          </div>
        </div>

        {/* Page Switch Buttons */}
        <button
          onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg border border-slate-200 transition-all z-20"
          aria-label="Halaman sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0))}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg border border-slate-200 transition-all z-20"
          aria-label="Halaman selanjutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails Navigation */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {pages.map((p, index) => (
          <button
            key={p.page}
            onClick={() => setCurrentPage(index)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 border ${
              currentPage === index
                ? "bg-[#003e74] text-white border-[#003e74] shadow-sm"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <span>Halaman {p.page}</span>
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox View */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="absolute top-5 right-5 flex items-center gap-3 z-50">
            <a
              href="/booklet/png2pdf.pdf"
              download
              onClick={(e) => e.stopPropagation()}
              className="h-10 px-4 rounded-xl bg-white/20 text-white text-xs font-semibold hover:bg-white/30 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Unduh PDF</span>
            </a>
            <button
              onClick={() => setIsFullscreen(false)}
              className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className="relative w-full max-w-6xl max-h-[85vh] h-full"
            style={{ aspectRatio: `${pages[currentPage].width} / ${pages[currentPage].height}` }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={pages[currentPage].src}
              alt={pages[currentPage].title}
              fill
              className="object-cover"
              sizes="90vw"
            />
          </div>

          <div className="flex items-center gap-4 mt-4 z-50">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
              }}
              className="px-4 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold hover:bg-white/30"
            >
              ← Halaman Sebelumnya
            </button>
            <span className="text-white text-xs font-medium">
              {currentPage + 1} / {pages.length}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
              }}
              className="px-4 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold hover:bg-white/30"
            >
              Halaman Selanjutnya →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
