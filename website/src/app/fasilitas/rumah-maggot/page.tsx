import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFacilityBySlug } from "@/data/facilities";
import FacilityDetailTemplate from "@/components/facility/FacilityDetailTemplate";

export const metadata: Metadata = {
  title: "Rumah Maggot BSF — Biokonversi Sampah Organik RW 18",
  description:
    "Profil lengkap Rumah Maggot RW 18 Kelurahan Sadang Serang. Pengolahan sampah organik terpilah dari dapur menjadi pakan bernutrisi dan pupuk kasgot (SDG 11, 12, 13).",
};

export default function RumahMaggotPage() {
  const facility = getFacilityBySlug("rumah-maggot");
  if (!facility) notFound();

  return <FacilityDetailTemplate facility={facility} />;
}
