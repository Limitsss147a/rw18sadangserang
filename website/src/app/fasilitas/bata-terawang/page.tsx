import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFacilityBySlug } from "@/data/facilities";
import FacilityDetailTemplate from "@/components/facility/FacilityDetailTemplate";

export const metadata: Metadata = {
  title: "Bata Terawang — Pengomposan Aerobik Sampah Organik RW 18",
  description:
    "Profil lengkap metode Bata Terawang RW 18 Kelurahan Sadang Serang. Pengolahan sampah organik menjadi pupuk kompos menggunakan susunan batu bata berongga untuk sirkulasi udara optimal (SDG 11, 12, 13).",
};

export default function BataTerawangPage() {
  const facility = getFacilityBySlug("bata-terawang");
  if (!facility) notFound();

  return <FacilityDetailTemplate facility={facility} />;
}
