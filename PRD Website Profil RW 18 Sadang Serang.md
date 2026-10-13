# PRD — Website Profil RW 18 Kelurahan Sadang Serang

Product Requirements Document | Program KKN UNIKOM x Pemprov Jabar | Divisi PDD | Versi 1.0

## 1. Ringkasan Produk

Website profil RW 18 adalah situs informasi publik yang memperkenalkan fasilitas lingkungan RW 18 Kelurahan Sadang Serang, yaitu Taman Dahlia, Rumah Maggot, Buruan SAE, dan Bata Terawang, sebagai praktik nyata penerapan Tujuan Pembangunan Berkelanjutan (SDGs) tingkat RW. Situs ini juga menjadi pusat edukasi pembuangan sampah terpilah melalui booklet digital dan video edukasi.

**Pernyataan nilai:** warga, mahasiswa, dan pihak luar dapat memahami apa yang dikerjakan RW 18 dalam waktu kurang dari dua menit, dan mengetahui cara membuang sampah secara terpilah dalam waktu kurang dari lima menit.

## 2. Latar Belakang dan Masalah

- Fasilitas RW 18 (Taman Dahlia, Rumah Maggot, Buruan SAE) belum memiliki satu media informasi terpusat yang dapat diakses publik.
- Materi edukasi pemilahan sampah (booklet dan video) tersebar di beberapa kanal sehingga sulit ditemukan kembali.
- Pesan inti dari DLH Kota Bandung perlu konsisten: tugas warga adalah **membuang sampah secara terpilah sejak dari sumber (rumah)**, bukan mengumpulkan sampah tercampur lalu memilahnya kemudian.
- Capaian RW 18 belum terdokumentasi dalam kerangka SDGs sehingga sulit dijadikan rujukan oleh pihak kelurahan, DLH, maupun kampus.

## 3. Tujuan dan Indikator Keberhasilan

| Tujuan | Indikator | Target awal |
| --- | --- | --- |
| Menyediakan profil terpusat fasilitas RW 18 | Jumlah halaman fasilitas terpublikasi | 4 fasilitas lengkap (foto, deskripsi, lokasi, SDGs) |
| Menyebarkan edukasi sampah terpilah | Unduhan booklet dan penayangan video | Dipantau mingguan; target ditetapkan setelah baseline minggu pertama |
| Menjangkau berbagai kalangan | Skor aksesibilitas dan keterbacaan | Lighthouse Accessibility ≥ 90; dapat dipakai tanpa panduan oleh lansia |
| Performa memadai di perangkat warga | Kecepatan muat di jaringan seluler | LCP ≤ 2,5 detik pada 4G; halaman awal ≤ 3 MB |
| Keberlanjutan tanpa pengelola | Situs tetap berfungsi tanpa pembaruan rutin | Tautan situs dibagikan ke warga dan Karang Taruna setelah hosting |

## 4. Pengguna Sasaran

| Persona | Kebutuhan | Implikasi desain |
| --- | --- | --- |
| Ibu rumah tangga dan warga dewasa | Panduan praktis membuang sampah terpilah; informasi kegiatan | Bahasa sederhana, ikon besar, alur visual |
| Lansia | Membaca tanpa kesulitan | Ukuran huruf besar, kontras tinggi, tombol besar, tanpa animasi berlebihan |
| Mahasiswa dan penghuni indekos | Informasi cepat lewat ponsel | Mobile-first, video pendek, halaman ringan |
| Pengurus RT/RW, kelurahan, DLH | Bukti capaian dan dokumentasi | Halaman SDGs, galeri, data ringkas |
| Pengunjung luar (kampus, media, instansi) | Gambaran program secara cepat | Beranda yang naratif dan informatif |

## 5. Ruang Lingkup

**Termasuk (in scope):**

- Situs publik statis-dinamis berbahasa Indonesia
- Profil empat fasilitas: Taman Dahlia, Rumah Maggot, Buruan SAE, dan Bata Terawang
- Pemetaan keterkaitan fasilitas dengan SDGs
- Pusat edukasi: booklet digital dan video pemilahan sampah
- Galeri foto dan peta lokasi
- Elemen visual 3D interaktif pada beranda

**Tidak termasuk (out of scope) pada versi 1.0:**

- Sistem login atau akun warga
- Transaksi, donasi, atau jual-beli
- Integrasi data real-time dengan aplikasi Berseka
- Versi bahasa selain Indonesia

## 6. Arsitektur Informasi

```
Beranda
├── Profil RW 18 (tentang, wilayah, struktur singkat)
├── Fasilitas
│   ├── Taman Dahlia
│   ├── Rumah Maggot
│   ├── Buruan SAE
│   └── Bata Terawang
├── SDGs di RW 18 (pemetaan fasilitas ke tujuan SDGs)
├── Edukasi Sampah Terpilah
│   ├── Panduan 3 Jenis Sampah
│   ├── Booklet Digital
│   └── Video Edukasi
├── Galeri Kegiatan
└── Kontak dan Lokasi
```

## 7. Kebutuhan Fungsional

Prioritas: **P0** wajib pada rilis awal, **P1** sebaiknya ada, **P2** pengembangan lanjutan.

### 7.1 Beranda

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| F-01 | Hero dengan elemen 3D interaktif dan satu kalimat nilai situs | P0 |
| F-02 | Tiga kartu fasilitas yang mengarah ke halaman masing-masing | P0 |
| F-03 | Ringkasan SDGs dalam bentuk ikon yang dapat diklik | P0 |
| F-04 | Blok ajakan "Buang Sampah Terpilah" menuju halaman edukasi | P0 |
| F-05 | Cuplikan galeri dan video unggulan | P1 |

### 7.2 Halaman Fasilitas (Taman Dahlia, Rumah Maggot, Buruan SAE, Bata Terawang)

Setiap halaman memiliki struktur seragam agar mudah dikelola:

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| F-06 | Foto utama sebagai latar hero, deskripsi singkat, dan fungsi fasilitas | P0 |
| F-07 | Label SDGs yang relevan beserta penjelasan satu kalimat per tujuan | P0 |
| F-08 | Cara kerja atau kegiatan di fasilitas (alur bergambar 3 sampai 5 langkah) | P0 |
| F-09 | Galeri foto dengan tampilan pembesaran (lightbox) | P0 |
| F-10 | Peta lokasi dan petunjuk arah | P1 |
| F-11 | Penanggung jawab fasilitas, bila tersedia (tanpa jam kegiatan yang mudah berubah) | P1 |

Catatan khusus Rumah Maggot: alur disajikan sebagai sampah organik terpilah, larva maggot, lalu produk (pakan dan kasgot), agar menguatkan pesan bahwa kualitas pengolahan bergantung pada sampah organik yang sudah terpilah dari sumber.

### 7.3 Pusat Edukasi Sampah Terpilah

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| F-12 | Pesan inti ditampilkan menonjol: "Cukup buang sampah secara terpilah dari rumah" | P0 |
| F-13 | Panduan tiga jenis sampah (organik, anorganik, residu) dengan contoh gambar dan kode warna | P0 |
| F-14 | Penampil booklet digital (flipbook atau PDF viewer) dan tombol unduh | P0 |
| F-15 | Video edukasi tertanam, dengan takarir (subtitle) | P0 |
| F-16 | Kuis interaktif singkat "Sampah ini masuk wadah mana?" | P2 |

Seluruh konten pada halaman ini tidak boleh menampilkan ilustrasi atau kalimat yang menyiratkan sampah dikumpulkan tercampur terlebih dahulu sebelum dipilah.

### 7.4 Halaman SDGs, Galeri, dan Kontak

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| F-17 | Halaman SDGs memuat tabel pemetaan fasilitas ke tujuan SDGs | P0 |
| F-18 | Galeri kegiatan berdasarkan kategori (fasilitas, kegiatan, edukasi) | P1 |
| F-19 | Kontak pengurus RW 18 serta tautan Instagram Karang Taruna (@kartaunit18\_) dan Instagram kelompok KKN (@kkn3\_sadangserang) | P0 |
| F-20 | Peta lokasi interaktif seluruh fasilitas dalam satu tampilan | P1 |

## 8. Usulan Pemetaan SDGs

Pemetaan berikut merupakan usulan awal dan perlu dikonfirmasi bersama pengurus RW dan DPL sebelum dipublikasikan.

| Fasilitas | Tujuan SDGs yang relevan | Alasan |
| --- | --- | --- |
| Taman Dahlia | SDG 11 (Kota dan Permukiman Berkelanjutan), SDG 15 (Ekosistem Daratan) | Ruang terbuka hijau dan ruang interaksi warga |
| Rumah Maggot | SDG 12 (Konsumsi dan Produksi yang Bertanggung Jawab), SDG 11, SDG 13 (Penanganan Perubahan Iklim) | Pengolahan sampah organik, pengurangan beban TPA |
| Buruan SAE | SDG 2 (Tanpa Kelaparan), SDG 12, SDG 11 | Pangan lokal dari pekarangan dan pemanfaatan kasgot sebagai pupuk |
| Bata Terawang | SDG 11 (Kota dan Permukiman Berkelanjutan), SDG 12 (Konsumsi dan Produksi yang Bertanggung Jawab) | Pemanfaatan material lokal untuk infrastruktur lingkungan yang estetis dan fungsional |

## 9. Arah Desain

**Karakter:** ramah, hangat, modern, dan berakar pada lingkungan RW. Foto fasilitas asli menjadi elemen utama sehingga situs terasa autentik, bukan generik.

### 9.1 Identitas Visual

| Elemen | Rekomendasi |
| --- | --- |
| Warna utama | Biru #195694 sebagai warna dominan (header, tombol utama, tautan); kontras dengan putih ≈ 7,5:1 |
| Warna pendamping | Hijau (misalnya #2E7D32) untuk identitas lingkungan dan putih sebagai latar dominan |
| Latar | Putih dan biru muda lembut turunan #195694; mode gelap opsional (P2) |
| Kode warna jenis sampah | Hijau (organik), kuning (anorganik), dan warna residu mengikuti wadah yang berlaku di RW 18; dipakai pada ikon, label, dan wadah 3D di elemen edukasi pemilahan. Kuning dipakai sebagai blok warna dengan teks gelap, bukan sebagai teks di atas putih |
| Tipografi judul | Sans-serif membulat (misalnya Poppins atau Nunito) |
| Tipografi isi | Sans-serif jelas (misalnya Inter atau Nunito), ukuran dasar minimal 18 px |
| Ilustrasi dan ikon | Flat/vector sederhana, konsisten satu gaya |

### 9.2 Prinsip Tata Letak

- Mobile-first; sebagian besar pengguna mengakses dari ponsel.
- Satu pesan utama per layar gulir (scroll), disertai gambar besar dan teks pendek.
- Tombol berukuran minimal 48 px dengan label jelas, bukan hanya ikon.
- Navigasi maksimal enam menu utama dengan label sehari-hari (misalnya "Cara Buang Sampah", bukan "Modul Edukasi").
- Pemanfaatan foto: sebagai latar hero dengan lapisan gradien agar teks tetap terbaca, serta sebagai tekstur pada elemen 3D.

### 9.3 Aksesibilitas (target WCAG 2.1 AA)

- Rasio kontras teks minimal 4,5:1.
- Teks alternatif pada seluruh gambar dan takarir pada video.
- Dapat dioperasikan dengan keyboard dan pembaca layar.
- Menghormati pengaturan "kurangi gerakan" (prefers-reduced-motion); seluruh animasi 3D memiliki versi statis.

## 10. Spesifikasi Elemen 3D

Tujuan elemen 3D adalah memberi kesan modern tanpa mengorbankan keterbacaan dan kecepatan. Penting dicatat bahwa foto dua dimensi tidak otomatis menjadi model 3D; oleh karena itu digunakan pendekatan bertingkat berikut.

| Tingkat | Elemen | Pendekatan | Prioritas |
| --- | --- | --- | --- |
| 1 | Hero diorama RW 18 | Adegan low-poly interaktif yang memuat tiga ikon fasilitas (pohon dahlia, rumah maggot, bedeng Buruan SAE); dapat diputar atau digeser ringan; foto asli dipakai sebagai tekstur latar | P0 |
| 2 | Kartu fasilitas 3D | Efek miring (tilt) dan kedalaman (parallax) berbasis CSS 3D pada foto fasilitas | P0 |
| 3 | Lapisan parallax pada foto | Foto dipecah menjadi 2 sampai 3 lapisan (latar, tengah, depan) yang bergerak berbeda saat digulir | P1 |
| 4 | Model 3D objek edukasi | Tiga wadah sampah terpilah yang dapat diputar pada halaman edukasi | P1 |
| 5 | Model hasil pemindaian (photogrammetry) fasilitas asli | Hanya bila waktu dan perangkat memungkinkan | P2 |

**Batasan teknis:**

- Adegan 3D dimuat tertunda (lazy load) setelah konten utama tampil.
- Perangkat berspesifikasi rendah atau pengguna dengan pengaturan kurangi gerakan menerima gambar statis sebagai pengganti.
- Ukuran seluruh aset 3D pada beranda dijaga di bawah 2 MB (model terkompresi format glTF/GLB).
- Elemen 3D bersifat dekoratif dan pelengkap; seluruh informasi penting tetap tersedia dalam teks.

## 11. Kebutuhan Non-Fungsional

| Aspek | Persyaratan |
| --- | --- |
| Performa | LCP ≤ 2,5 detik pada jaringan 4G; gambar dioptimalkan (WebP/AVIF) dan dimuat tertunda |
| Kompatibilitas | Dua versi terakhir Chrome, Safari, dan Edge; Android 9 ke atas; iOS 14 ke atas |
| Responsif | Lebar layar 360 px sampai desktop |
| SEO dasar | Judul dan meta deskripsi per halaman, peta situs, data terstruktur untuk lokasi |
| Keamanan dan privasi | HTTPS; tidak menampilkan data pribadi warga; wajah warga hanya dengan izin |
| Pemeliharaan | Situs statis tanpa server atau basis data agar tidak memerlukan perawatan rutin |

## 12. Rekomendasi Teknologi

| Lapisan | Rekomendasi | Alasan |
| --- | --- | --- |
| Kerangka kerja | Next.js dengan TypeScript | Performa baik, SEO memadai, dapat diekspor sebagai situs statis |
| Gaya | Tailwind CSS | Pengembangan cepat dan konsisten |
| 3D | Three.js melalui React Three Fiber (alternatif: Spline untuk prototipe cepat) | Kontrol penuh atas performa dan fallback |
| Animasi | Framer Motion | Transisi halus dan dukungan reduced-motion |
| Konten | Berkas MDX/JSON di repositori (konten statis, tanpa CMS dan tanpa basis data) | Tidak memerlukan pengelola harian; perubahan hanya oleh tim PDD bila diperlukan |
| Video | Tanam dari YouTube atau Instagram | Hemat penyimpanan dan bandwidth |
| Booklet | PDF dengan penampil flipbook | Dapat diunduh dan dicetak ulang |
| Hosting | Vercel atau Netlify (paket gratis); tautan dibagikan ke warga setelah hosting | Biaya rendah, sesuai tanpa dana kampus |

## 13. Aset dan Konten yang Dibutuhkan

| Aset | Penanggung jawab | Status |
| --- | --- | --- |
| Foto resolusi tinggi Taman Dahlia, Rumah Maggot, Buruan SAE, Bata Terawang (lanskap, minimal 1920 px) | PDD | Sebagian tersedia |
| Booklet pemilahan sampah (PDF final) | PDD | Dalam proses |
| Video edukasi dan video TTW pilihan | PDD | Sebagian tersedia |
| Teks deskripsi tiap fasilitas dan data pengelola | Divisi Humas dan pengurus RW | Perlu diverifikasi |
| Logo UNIKOM dan logo kelompok KKN | Humas | Menyusul (dikirim pengguna) |
| Persetujuan penggunaan foto warga | Humas | Wajib sebelum publikasi |

Saran pengambilan foto: ambil sudut lebar saat cahaya pagi atau sore, sertakan beberapa foto tanpa orang agar leluasa dipakai sebagai latar dan tekstur 3D.

## 14. Rencana Pelaksanaan

| Fase | Kegiatan | Keluaran |
| --- | --- | --- |
| 1. Persiapan | Finalisasi PRD, pengumpulan foto dan teks, konfirmasi pemetaan SDGs | PRD disetujui, aset lengkap |
| 2. Desain | Wireframe, panduan gaya, desain beranda dan satu halaman fasilitas | Prototipe yang divalidasi tim dan perwakilan warga |
| 3. Pengembangan | Implementasi halaman P0, elemen 3D tingkat 1 dan 2, integrasi booklet dan video | Versi uji coba |
| 4. Uji dan Perbaikan | Uji di ponsel warga, uji aksesibilitas, perbaikan | Versi rilis |
| 5. Rilis dan Distribusi | Publikasi di hosting dan pembagian tautan ke warga, Karang Taruna, serta melalui Instagram @kkn3\_sadangserang | Situs aktif dan tautan terdistribusi |

Disarankan melakukan uji kebergunaan sederhana dengan 3 sampai 5 warga (termasuk satu lansia) pada fase 2 dan fase 4.

## 15. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Elemen 3D berat di ponsel warga | Situs lambat atau gagal dimuat | Lazy load, batas ukuran aset, fallback gambar statis |
| Foto fasilitas kurang berkualitas atau tidak lengkap | Desain kurang menarik | Jadwalkan sesi foto khusus sejak fase 1 |
| Situs tidak diperbarui setelah KKN selesai | Informasi usang | Konten dibuat tahan lama (tanpa jadwal atau data yang cepat usang) dan situs statis agar tidak perlu perawatan |
| Pesan edukasi disalahartikan sebagai "memilah setelah tercampur" | Bertentangan dengan arahan DLH | Peninjauan seluruh konten edukasi oleh DPL atau PKBS sebelum rilis |
| Pemetaan SDGs dinilai terlalu klaim | Reputasi kredibilitas | Konfirmasi ke DPL dan pengurus RW; gunakan bahasa "berkontribusi pada" |

## 16. Keputusan dan Pertanyaan Terbuka

Empat hal berikut sudah diputuskan; dua hal masih perlu dikonfirmasi.

| Topik | Keputusan |
| --- | --- |
| Media sosial | Instagram Karang Taruna @kartaunit18\_ dan Instagram kelompok KKN @kkn3\_sadangserang |
| Warna | Biru #195694 dipadukan hijau, putih, dan warna pemilahan sampah |
| Pengelolaan setelah KKN | Tanpa pengelola; situs dibagikan ke warga setelah hosting |
| Logo | UNIKOM dan kelompok KKN; aset menyusul |

**Masih terbuka:**

1. Kode warna wadah sampah yang digunakan di RW 18 (konfirmasi ke PKBS Kelurahan) agar ilustrasi konsisten.
2. Nama domain: subdomain gratis dari penyedia hosting atau domain khusus.
