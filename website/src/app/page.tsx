import HeroSection from "@/components/home/HeroSection";
import CircularFlowSection from "@/components/home/CircularFlowSection";
import OfficialBannerSection from "@/components/home/OfficialBannerSection";
import FacilityCards from "@/components/home/FacilityCards";
import SDGsPreview from "@/components/home/SDGsPreview";
import EducationCTA from "@/components/home/EducationCTA";
import CommunityGallerySection from "@/components/home/CommunityGallerySection";

export const metadata = {
  title: "RW 18 Sadang Serang - Lingkungan & Inovasi SDGs",
  description:
    "Website profil fasilitas ramah lingkungan RW 18 Kelurahan Sadang Serang (Taman Dahlia, Rumah Maggot, Buruan SAE, Bata Terawang) dan pusat edukasi gerakan pilah sampah langsung dari rumah tangga.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION & 3D DIORAMA */}
      <HeroSection />

      {/* SECTION 2: SIKLUS SIRKULAR SAMPAH ORGANIK */}
      <CircularFlowSection />

      {/* SECTION 3: BANNER DLH KOTA BANDUNG */}
      <OfficialBannerSection />

      {/* SECTION 4: FASILITAS UNGGULAN RW 18 */}
      <FacilityCards />

      {/* SECTION 5: PEMETAAN CAPAIAN SDGS */}
      <SDGsPreview />

      {/* SECTION 6: PANDUAN 3 WADAH SAMPAH & BOOKLET */}
      <EducationCTA />

      {/* SECTION 7: DOKUMENTASI KEGIATAN & GOTONG ROYONG */}
      <CommunityGallerySection />
    </div>
  );
}
