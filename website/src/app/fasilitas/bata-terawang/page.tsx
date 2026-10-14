import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFacilityBySlug } from "@/data/facilities";
import FacilityDetailTemplate from "@/components/facility/FacilityDetailTemplate";

export const metadata: Metadata = {
  title: "Bata Terawang — Infrastruktur Ramah Lingkungan & Estetika Lorong RW 18",
  description:
    "Profil lengkap inovasi Bata Terawang RW 18 Kelurahan Sadang Serang. Aplikasi dinding roster geometris untuk sirkulasi udara alami dan penataan kawasan berkelanjutan (SDG 11, 12).",
};

export default function BataTerawangPage() {
  const facility = getFacilityBySlug("bata-terawang");
  if (!facility) notFound();

  return <FacilityDetailTemplate facility={facility} />;
}
