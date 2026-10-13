"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronRight, ExternalLink } from "lucide-react";
import { Instagram } from "@/components/icons/InstagramIcon";

export default function Footer() {
  const quickLinks = [
    { label: "Beranda", href: "/" },
    { label: "Profil RW 18", href: "/profil" },
    { label: "Fasilitas Lingkungan", href: "/fasilitas" },
    { label: "Edukasi Sampah", href: "/edukasi" },
    { label: "Capaian SDGs", href: "/sdgs" },
    { label: "Kontak & Lokasi", href: "/kontak" },
  ];

  const socialLinks = [
    {
      handle: "@kartaunit18_",
      name: "Karang Taruna Unit RW 18",
      url: "https://instagram.com/kartaunit18_",
    },
    {
      handle: "@kkn3_sadangserang",
      name: "KKN UNIKOM Kelompok 3 Sadang Serang",
      url: "https://instagram.com/kkn3_sadangserang",
    },
  ];

  return (
    <footer className="bg-[#195694] text-white pt-16 pb-12 border-t border-[#134577]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/15">
          {/* Col 1: RW 18 Branding & Description (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white text-[#195694] flex items-center justify-center font-bold text-xl shadow-md shrink-0">
                18
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white leading-tight">
                  RW 18 Sadang Serang
                </span>
                <span className="text-xs uppercase tracking-wider text-blue-200 font-medium">
                  Kec. Coblong, Kota Bandung
                </span>
              </div>
            </div>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-md">
              Website profil dan pusat informasi lingkungan RW 18 Kelurahan Sadang Serang. Dikembangkan sebagai proyek pengabdian masyarakat melalui program Kuliah Kerja Nyata (KKN) Tematik Universitas Komputer Indonesia (UNIKOM) untuk mendukung lingkungan mandiri sampah dan berkelanjutan berbasis SDGs.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-blue-100 text-sm border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]" aria-hidden="true" />
              <span>Praktik Nyata SDGs di Tingkat Rukun Warga</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-white pb-1 border-b border-white/15">
              Tautan Cepat
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="min-h-[48px] flex items-center gap-2 text-base sm:text-lg text-blue-100 hover:text-white hover:translate-x-1 transition-all rounded-lg py-2 focus:outline-hidden focus:ring-2 focus:ring-white/50"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-300 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Social Media (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-xl font-semibold tracking-tight text-white pb-1 border-b border-white/15">
              Kontak & Media Sosial
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3 text-blue-100 text-base">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-emerald-300" />
              </div>
              <p className="leading-snug">
                RW 18 Kelurahan Sadang Serang, Kecamatan Coblong, Kota Bandung, Jawa Barat 40134
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-2.5 pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-blue-200">
                Instagram Resmi
              </span>
              <div className="space-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.handle}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Instagram className="w-5 h-5 text-pink-300 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col text-left">
                        <span className="text-base font-semibold text-white">
                          {social.handle}
                        </span>
                        <span className="text-xs text-blue-200">
                          {social.name}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Logos & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Institutional Logos */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-white/95 backdrop-blur-xs px-5 py-3 rounded-2xl shadow-sm border border-white/20">
            <div className="relative h-9 sm:h-10 w-24 sm:w-28 flex items-center justify-center">
              <Image
                src="/images/logos/logo-unikom.png"
                alt="Logo Universitas Komputer Indonesia (UNIKOM)"
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-contain"
              />
            </div>
            <div className="h-6 w-px bg-slate-300" aria-hidden="true" />
            <div className="relative h-9 sm:h-10 w-24 sm:w-28 flex items-center justify-center">
              <Image
                src="/images/logos/logo-diktisaintek.png"
                alt="Logo Direktorat Jenderal Pendidikan Tinggi, Sains, dan Teknologi"
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-contain"
              />
            </div>
            <div className="h-6 w-px bg-slate-300" aria-hidden="true" />
            <div className="relative h-9 sm:h-10 w-20 sm:w-24 flex items-center justify-center">
              <Image
                src="/images/logos/logo-kkn.png"
                alt="Logo Program KKN UNIKOM"
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-blue-100/90 space-y-1">
            <p className="font-medium text-white">
              &copy; 2026 KKN UNIKOM x RW 18 Sadang Serang
            </p>
            <p className="text-xs text-blue-200">
              Mewujudkan Lingkungan Sadang Serang yang Asri, Sehat, dan Mandiri Sampah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
