import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Branding & Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#003e74] flex items-center justify-center text-white font-bold text-lg shadow-xs">
                18
              </div>
              <span className="text-xl font-bold font-heading text-[#003e74]">
                RW 18 Sadang Serang
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Kawasan pelopor lingkungan berkelanjutan mandiri sampah di Kota
              Bandung melalui integrasi biokonversi Black Soldier Fly (Rumah
              Maggot), ketahanan pangan lokal Buruan SAE, infrastruktur ramah
              lingkungan Bata Terawang, dan ruang hijau interaktif Taman Dahlia.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#eef4ff] text-[#003e74] text-xs font-semibold">
                KKN UNIKOM 2026
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                Coblong Juara
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-base font-bold font-heading text-slate-900">
              Tautan Cepat
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
              <li>
                <a
                  href="#fasilitas"
                  className="hover:text-[#003e74] transition-colors"
                >
                  Fasilitas Unggulan (Taman Dahlia, Rumah Maggot, Buruan SAE, Bata Terawang)
                </a>
              </li>
              <li>
                <a
                  href="#edukasi-sampah"
                  className="hover:text-[#003e74] transition-colors"
                >
                  Booklet Pemilahan Sampah 
                </a>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="hover:text-[#003e74] transition-colors"
                >
                  Galeri &amp; Dokumentasi Kegiatan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Collaboration & Partners */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-base font-bold font-heading text-slate-900">
              Kolaborasi &amp; Mitra
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
              <li>Program KKN Tematik UNIKOM</li>
              <li>Pemerintah Provinsi Jawa Barat</li>
              <li>Diktisaintek &amp; DLH Kota Bandung</li>
              <li>Pengurus RW 18 Kelurahan Sadang Serang</li>
              <li>
                <a
                  href="https://instagram.com/kartaunit18_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#003e74] hover:underline"
                >
                  Karang Taruna Unit 18 (@kartaunit18_)
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kkn3_sadangserang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#003e74] hover:underline"
                >
                  Tim KKN (@kkn3_sadangserang)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Citizen Action */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-base font-bold font-heading text-slate-900">
              Aksi Warga
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mulai pilah dari dapur rumah kita untuk Sadang Serang yang bersih
              dan lestari.
            </p>
            <a
              href="/Asset/Booklet/png2pdf.pdf"
              download
              className="inline-flex items-center justify-center px-4 h-11 rounded-full bg-[#1b6d24] text-white text-xs font-semibold hover:bg-emerald-800 transition-colors shadow-xs"
            >
              Unduh Panduan Sampah
            </a>
          </div>
        </div>

        {/* Bottom Partner Logos & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Hak Cipta © 2026 RW 18 Kelurahan Sadang Serang, Coblong, Kota Bandung.
            Dibuat dengan semangat gotong royong warga.
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-16">
                <Image
                  src="/images/logos/logo-unikom.png"
                  alt="Logo UNIKOM"
                  fill
                  className="object-contain"
                />
              </div>
              <span>•</span>
              <div className="relative h-6 w-16">
                <Image
                  src="/images/logos/logo-diktisaintek.png"
                  alt="Logo Diktisaintek"
                  fill
                  className="object-contain"
                />
              </div>
              <span>•</span>
              <div className="relative h-6 w-12">
                <Image
                  src="/images/logos/logo-kkn.png"
                  alt="Logo KKN"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
