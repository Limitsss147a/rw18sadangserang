import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Users,
  TreePine,
  Award,
  ArrowRight,
  ShieldCheck,
  Compass,
  HeartHandshake,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { facilities } from "@/data/facilities";

export const metadata: Metadata = {
  title: "Profil RW 18 Sadang Serang — Wilayah & Komunitas Berkelanjutan",
  description:
    "Profil lengkap RW 18 Kelurahan Sadang Serang, Kecamatan Coblong, Kota Bandung. Transformasi komunitas gotong royong menuju kemandirian lingkungan, pangan, dan pengelolaan sampah terpadu.",
};

export default function ProfilPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#195694] via-[#14477A] to-[#0E3A6B] text-white py-20 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
            <Compass className="w-4 h-4" />
            <span>Profil Wilayah & Komunitas</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight max-w-4xl">
            Mengenal Lebih Dekat RW 18 Kelurahan Sadang Serang
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-3xl leading-relaxed">
            Dari pemukiman padat perkotaan menjadi pelopor aksi lingkungan berkelanjutan di Kota Bandung melalui kolaborasi warga, pemuda Karang Taruna, dan penerapan Tujuan Pembangunan Berkelanjutan (SDGs).
          </p>
        </div>
      </section>

      {/* Ringkasan & Wilayah */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#195694] font-semibold text-sm uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Gambaran Geografis & Karakteristik</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 leading-tight">
              Kawasan Pemukiman yang Hidup, Tanggap Lingkungan, dan Mandiri
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              RW 18 terletak di Kelurahan Sadang Serang, Kecamatan Coblong, Kota Bandung. Sebagai kawasan pemukiman warga dengan dinamika perkotaan yang tinggi, RW 18 menghadapi tantangan nyata terkait keterbatasan lahan terbuka hijau dan volume timbulan sampah harian.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Menjawab tantangan tersebut, pengurus RW 18 bersama warga menginisiasi gerakan pembenahan lingkungan dari akar rumput. Setiap sudut yang sebelumnya kurang produktif kini ditransformasikan menjadi ruang publik hijau, fasilitas edukasi pemilahan sampah, biokonversi maggot, serta budidaya tanaman pangan pekarangan.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 font-heading">Kelurahan Sadang Serang</h4>
                  <p className="text-sm text-slate-600">Kecamatan Coblong, Kota Bandung, Jawa Barat</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 font-heading">Fokus Utama Gerakan</h4>
                  <p className="text-sm text-slate-600">Zero Waste to Landfill & Ketahanan Pangan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg relative">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#195694] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                Identitas & Informasi Wilayah
              </h3>
              <dl className="space-y-4 text-sm divide-y divide-slate-100">
                <div className="pt-3 flex justify-between">
                  <dt className="text-slate-500 font-medium">Tingkat Wilayah</dt>
                  <dd className="text-slate-900 font-semibold">Rukun Warga (RW) 18</dd>
                </div>
                <div className="pt-3 flex justify-between">
                  <dt className="text-slate-500 font-medium">Kelurahan</dt>
                  <dd className="text-slate-900 font-semibold">Sadang Serang</dd>
                </div>
                <div className="pt-3 flex justify-between">
                  <dt className="text-slate-500 font-medium">Kecamatan</dt>
                  <dd className="text-slate-900 font-semibold">Coblong</dd>
                </div>
                <div className="pt-3 flex justify-between">
                  <dt className="text-slate-500 font-medium">Kota / Provinsi</dt>
                  <dd className="text-slate-900 font-semibold">Bandung, Jawa Barat</dd>
                </div>
                <div className="pt-3 flex justify-between">
                  <dt className="text-slate-500 font-medium">Instagram Karang Taruna</dt>
                  <dd className="text-[#195694] font-semibold">
                    <a
                      href="https://instagram.com/kartaunit18_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      @kartaunit18_
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </dd>
                </div>
                <div className="pt-3 flex justify-between">
                  <dt className="text-slate-500 font-medium">Kemitraan KKN</dt>
                  <dd className="text-[#195694] font-semibold">
                    <a
                      href="https://instagram.com/kkn3_sadangserang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      @kkn3_sadangserang
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#195694] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Prinsip Dasar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mt-3">
              Visi & Aksi Keberlanjutan RW 18
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Prinsip yang mengarahkan setiap langkah penataan ruang dan kebiasaan hidup bersih warga Sadang Serang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                Kemandirian Pangan Lokal
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Memanfaatkan setiap jengkal lahan pekarangan warga melalui program Buruan SAE untuk menghasilkan sayuran segar dan tanaman obat keluarga tanpa bergantung pada pasokan luar.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#195694] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                Pemilahan Sampah dari Sumber
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Menegaskan peran warga untuk memilah sampah organik, anorganik, dan residu langsung dari rumah tangga, sehingga sampah organik bernilai guna tinggi dapat diolah di Rumah Maggot.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                Gotong Royong & Edukasi Warga
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Menyediakan ruang interaksi publik seperti Taman Dahlia dan infrastruktur ramah lingkungan Bata Terawang sebagai media edukasi antargenerasi dan wadah kegiatan sosial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Fasilitas Lingkungan */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Infrastruktur Berkelanjutan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mt-3">
              Empat Pilar Fasilitas Lingkungan RW 18
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-base">
            Setiap fasilitas memiliki peran unik yang saling melengkapi dalam rantai siklus lingkungan dan SDGs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={fac.heroImage}
                  alt={fac.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span
                    className="inline-block text-xs font-bold px-2.5 py-1 rounded mb-1 uppercase tracking-wider"
                    style={{ backgroundColor: fac.color }}
                  >
                    Fasilitas RW 18
                  </span>
                  <h3 className="text-2xl font-bold font-heading">{fac.name}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#195694] mb-2">{fac.tagline}</p>
                  <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
                    {fac.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>SDG {fac.sdgs.map((s) => s.number).join(", ")}</span>
                  </div>
                  <Link
                    href={`/fasilitas/${fac.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#195694] hover:text-[#0E3A6B] group"
                  >
                    <span>Detail Fasilitas</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kolaborasi & Penggerak */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Users className="w-10 h-10 text-[#195694] mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">
              Kolaborasi & Penggerak Komunitas
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Keberlanjutan inisiatif di RW 18 terwujud melalui kerja sama erat antara warga, pengurus RT/RW, Karang Taruna Unit 18, Kelurahan Sadang Serang, DLH Kota Bandung, DKPP Kota Bandung, dan Program KKN Mahasiswa UNIKOM.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/edukasi"
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#195694] text-white font-semibold text-base inline-flex items-center gap-2 hover:bg-[#0E3A6B] transition-colors"
              >
                <span>Pelajari Cara Buang Sampah</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="min-h-[48px] px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-base inline-flex items-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <span>Kembali ke Beranda</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
