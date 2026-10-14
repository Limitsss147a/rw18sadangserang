import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFacilityBySlug } from "@/data/facilities";
import FacilityDetailTemplate from "@/components/facility/FacilityDetailTemplate";

export const metadata: Metadata = {
  title: "Taman Dahlia — Ruang Terbuka Hijau & Komunitas RW 18",
  description:
    "Profil lengkap Taman Dahlia RW 18 Kelurahan Sadang Serang. Ruang terbuka hijau publik, interaksi sosial warga, dan penerapan SDG 11 & 15.",
};

export default function TamanDahliaPage() {
  const facility = getFacilityBySlug("taman-dahlia");
  if (!facility) notFound();

  return <FacilityDetailTemplate facility={facility} />;
}
