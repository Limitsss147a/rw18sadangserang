import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFacilityBySlug } from "@/data/facilities";
import FacilityDetailTemplate from "@/components/facility/FacilityDetailTemplate";

export const metadata: Metadata = {
  title: "Buruan SAE — Urban Farming Sayuran Sosin & Pangan Mandiri RW 18",
  description:
    "Profil lengkap program Buruan SAE RW 18 Kelurahan Sadang Serang. Pemanfaatan pekarangan untuk budidaya aneka sayuran segar (sosin, pakcoy, kangkung) secara organik mandiri (SDG 2, 11, 12).",
};

export default function BuruanSaePage() {
  const facility = getFacilityBySlug("buruan-sae");
  if (!facility) notFound();

  return <FacilityDetailTemplate facility={facility} />;
}
