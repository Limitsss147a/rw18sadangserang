import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Users, Award } from "lucide-react";
import { Facility } from "@/data/facilities";

interface FacilityHeroProps {
  facility: Facility;
}

export default function FacilityHero({ facility }: FacilityHeroProps) {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Ambient Gradient */}
      <div className="absolute inset-0">
        <Image
          src={facility.heroImage}
          alt={facility.name}
          fill
          priority
          className="object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1d2c] via-[#0e1d2c]/80 to-transparent" />
        <div className="absolute inset-0 bg-radial-[at_top_right] from-blue-900/30 to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 font-medium"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <Link href="/fasilitas" className="hover:text-white transition-colors">
            Fasilitas
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-white font-semibold">{facility.name}</span>
        </nav>

        <div className="max-w-3xl flex flex-col gap-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: facility.color }}
            />
            <span className="tracking-wide">Fasilitas Lingkungan RW 18</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
            {facility.name}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl font-medium text-emerald-300">
            {facility.tagline}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mt-1">
            {facility.description}
          </p>

          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-2 border-t border-white/15">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-300 font-medium">Lokasi</p>
                <p className="text-xs sm:text-sm text-white font-bold">
                  RW 18 Sadang Serang
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <Users className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-300 font-medium">Pengelola</p>
                <p className="text-xs sm:text-sm text-white font-bold">
                  Warga &amp; Karang Taruna
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-[11px] text-slate-300 font-medium">Kontribusi</p>
                <p className="text-xs sm:text-sm text-white font-bold">
                  SDG {facility.sdgs.map((s) => s.number).join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
