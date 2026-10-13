import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FacilityCards from "@/components/home/FacilityCards";
import ProfilePreview from "@/components/home/ProfilePreview";
import SDGsPreview from "@/components/home/SDGsPreview";
import EducationCTA from "@/components/home/EducationCTA";

export const metadata: Metadata = {
  title: "RW 18 Sadang Serang — Lingkungan Berkelanjutan",
  description:
    "Portal resmi dan pusat edukasi lingkungan RW 18 Kelurahan Sadang Serang, Kota Bandung. Jelajahi fasilitas unggulan Taman Dahlia, Rumah Maggot, Buruan SAE, Bata Terawang, serta panduan pemilahan sampah terpilah dari rumah.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <FacilityCards />
      <ProfilePreview />
      <SDGsPreview />
      <EducationCTA />
    </main>
  );
}
