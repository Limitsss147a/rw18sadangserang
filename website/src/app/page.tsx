import HeroSection from "@/components/home/HeroSection";
import CircularFlowSection from "@/components/home/CircularFlowSection";
import OfficialBannerSection from "@/components/home/OfficialBannerSection";
import FacilityCards from "@/components/home/FacilityCards";
import SDGsPreview from "@/components/home/SDGsPreview";
import EducationCTA from "@/components/home/EducationCTA";
import CommunityGallerySection from "@/components/home/CommunityGallerySection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "RW 18 Sadang Serang - Lingkungan & Inovasi SDGs",
  description:
    "Website profil fasilitas ramah lingkungan RW 18 Kelurahan Sadang Serang (Taman Dahlia, Rumah Maggot, Buruan SAE, Bata Terawang) dan pusat edukasi gerakan pilah sampah langsung dari rumah tangga.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION & 3D DIORAMA */}
      <ScrollReveal delay={0.1} y={0}>
        <HeroSection />
      </ScrollReveal>

      {/* SECTION 2: SIKLUS SIRKULAR SAMPAH ORGANIK */}
      <ScrollReveal delay={0.15}>
        <CircularFlowSection />
      </ScrollReveal>

      {/* SECTION 3: BANNER DLH KOTA BANDUNG */}
      <ScrollReveal delay={0.2}>
        <OfficialBannerSection />
      </ScrollReveal>

      {/* SECTION 4: FASILITAS UNGGULAN RW 18 */}
      <ScrollReveal delay={0.25}>
        <FacilityCards />
      </ScrollReveal>

      {/* SECTION 5: PEMETAAN CAPAIAN SDGS */}
      <ScrollReveal delay={0.3}>
        <SDGsPreview />
      </ScrollReveal>

      {/* SECTION 6: PANDUAN 3 WADAH SAMPAH & BOOKLET */}
      <ScrollReveal delay={0.35}>
        <EducationCTA />
      </ScrollReveal>

      {/* SECTION 7: DOKUMENTASI KEGIATAN & GOTONG ROYONG */}
      <ScrollReveal delay={0.4}>
        <CommunityGallerySection />
      </ScrollReveal>
    </div>
  );
}
