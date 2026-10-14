export interface Facility {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  images: string[];
  sdgs: {
    number: number;
    title: string;
    description: string;
  }[];
  steps: {
    title: string;
    description: string;
    icon: string;
  }[];
  color: string;
}

export const facilities: Facility[] = [
  {
    id: 'taman-dahlia',
    name: 'Taman Dahlia',
    slug: 'taman-dahlia',
    tagline: 'Ruang Terbuka Hijau & Titik Kumpul Guyub Warga RW 18',
    description:
      'Taman Dahlia merupakan ruang terbuka hijau terpadu di lingkungan RW 18 Kelurahan Sadang Serang. Dikelola secara mandiri oleh warga dan pemuda karang taruna, taman ini menjadi wahana rekreasi keluarga, pelestarian flora lokal, dan ruang dialog komunitas yang asri dan sejuk di tengah kawasan permukiman perkotaan.',
    heroImage: '/images/facilities/taman-dahlia-1.jpg',
    images: [
      '/images/facilities/taman-dahlia-1.jpg',
      '/images/facilities/taman-dahlia-2.jpg',
      '/images/facilities/taman-dahlia-3.jpg',
      '/images/facilities/taman-dahlia-4.jpg',
      '/images/facilities/taman-dahlia-5.jpg',
    ],
    sdgs: [
      {
        number: 11,
        title: 'Kota dan Permukiman yang Berkelanjutan',
        description:
          'Menyediakan ruang publik terbuka hijau yang inklusif, aman, dan mudah diakses oleh seluruh lapisan warga RW 18 untuk memperkuat keharmonisan sosial.',
      },
      {
        number: 15,
        title: 'Ekosistem Daratan',
        description:
          'Menjaga keanekaragaman hayati mikroperkotaan serta mencegah degradasi lahan melalui penanaman vegetasi pelindung dan tanaman berbunga.',
      },
    ],
    steps: [
      {
        title: 'Penataan Taman',
        description:
          'Pembersihan area, pemetaan zonasi taman, dan penyiapan media tanam gembur yang kaya unsur hara.',
        icon: 'Layout',
      },
      {
        title: 'Penanaman & Perawatan',
        description:
          'Penanaman ragam bunga dahlia, tanaman hias, dan pohon peneduh yang disiram serta dipangkas secara rutin oleh warga.',
        icon: 'Sprout',
      },
      {
        title: 'Ruang Interaksi Warga',
        description:
          'Penggunaan fasilitas gazebo dan bangku taman untuk rembuk warga, posyandu lansia, serta area bermain ramah anak.',
        icon: 'Users',
      },
      {
        title: 'Edukasi Lingkungan',
        description:
          'Kegiatan lapangan edukatif bagi anak-anak dan remaja mengenai konservasi tanaman serta pentingnya ruang hijau.',
        icon: 'GraduationCap',
      },
    ],
    color: '#2E7D32',
  },
  {
    id: 'rumah-maggot',
    name: 'Rumah Maggot',
    slug: 'rumah-maggot',
    tagline: 'Pusat Biokonversi Sampah Organik Berkelanjutan Berbasis BSF',
    description:
      'Rumah Maggot RW 18 adalah fasilitas reduksi sampah organik dari sumbernya menggunakan larva lalat tentara hitam (Black Soldier Fly / BSF). Fasilitas ini mampu mengolah ratusan kilogram sisa makanan rumah tangga setiap minggunya menjadi biomasa berprotein tinggi untuk pakan ternak serta pupuk organik kasgot (bekas maggot) bermutu tinggi.',
    heroImage: '/images/facilities/rumah-maggot-1.jpg',
    images: ['/images/facilities/rumah-maggot-1.jpg'],
    sdgs: [
      {
        number: 11,
        title: 'Kota dan Permukiman yang Berkelanjutan',
        description:
          'Mengurangi timbunan sampah domestik ke TPA dan menciptakan lingkungan permukiman RW 18 yang lebih bersih, higienis, dan sehat.',
      },
      {
        number: 12,
        title: 'Konsumsi dan Produksi yang Bertanggung Jawab',
        description:
          'Menerapkan sistem ekonomi sirkular komprehensif dengan mendaur ulang sampah organik makanan menjadi pakan protein dan pupuk alami.',
      },
      {
        number: 13,
        title: 'Penanganan Perubahan Iklim',
        description:
          'Menekan emisi gas metana (CH4) dan karbon dioksida yang biasanya dihasilkan dari penumpukan sampah organik di tempat pembuangan akhir.',
      },
    ],
    steps: [
      {
        title: 'Sampah Organik Terpilah',
        description:
          'Warga mengumpulkan dan memilah sisa makanan dapur rumah tangga yang diangkut berkala menuju instalasi Rumah Maggot.',
        icon: 'Trash2',
      },
      {
        title: 'Pemberian ke Larva BSF',
        description:
          'Limbah organik dicacah agar bertekstur halus, kemudian diumpankan ke biopond larva BSF yang lahap mendekomposisi material.',
        icon: 'Bug',
      },
      {
        title: 'Pengolahan Larva',
        description:
          'Setelah memasuki fase prepupa, larva dipanen dan disortir untuk kebutuhan pembibitan lalat dewasa maupun pengeringan pakan ternak.',
        icon: 'RefreshCw',
      },
      {
        title: 'Produk (Pakan & Kasgot)',
        description:
          'Residu kasgot dipisahkan dan disaring menjadi pupuk organik siap pakai untuk menyuburkan aneka tanaman sayuran Buruan SAE, sedangkan biomasa larva dipanen secara berkelanjutan.',
        icon: 'PackageCheck',
      },
    ],
    color: '#795548',
  },
  {
    id: 'buruan-sae',
    name: 'Buruan SAE',
    slug: 'buruan-sae',
    tagline: 'Urban Farming Pekarangan Mandiri: Sayuran Sosin, Pakcoy & Tanaman Pangan Warga',
    description:
      'Buruan SAE (Sehat, Alami, Ekonomis) RW 18 merupakan gerakan pemanfaatan pekarangan rumah, lorong gang, dan pot gantung warga untuk budidaya aneka tanaman sayuran segar seperti sosin (caisim), pakcoy, kangkung, cabai, terong, serta tanaman obat keluarga (TOGA). Program ini sepenuhnya fokus pada pertanian nabati pekarangan yang disuburkan oleh pupuk kasgot Rumah Maggot dan kompos Bata Terawang, mewujudkan kemandirian pangan keluarga yang sehat, hijau, dan bebas pestisida kimia sintetis.',
    heroImage: '/images/facilities/buruan-sae-1.jpg',
    images: [
      '/images/facilities/buruan-sae-1.jpg',
      '/images/facilities/buruan-sae-2.jpg',
      '/images/facilities/buruan-sae-3.jpg',
    ],
    sdgs: [
      {
        number: 2,
        title: 'Tanpa Kelaparan',
        description:
          'Meningkatkan ketahanan pangan mandiri warga melalui pasokan sayuran segar bergizi tinggi (sosin, pakcoy, kangkung) yang dipetik langsung dari pekarangan rumah.',
      },
      {
        number: 11,
        title: 'Kota dan Permukiman yang Berkelanjutan',
        description:
          'Mengubah sudut-sudut gang sempit dan ruang sisa di permukiman padat menjadi kantong-kantong hijau produktif yang menyejukkan.',
      },
      {
        number: 12,
        title: 'Konsumsi dan Produksi yang Bertanggung Jawab',
        description:
          'Memanfaatkan nutrisi alami dari pupuk kasgot lokal secara berkelanjutan tanpa ketergantungan pada input pupuk kimia sintetis.',
      },
    ],
    steps: [
      {
        title: 'Pemanfaatan Pekarangan',
        description:
          'Menata pot, rak bertingkat, dan polybag di teras serta lorong gang rumah warga yang sebelumnya sempit menjadi area tanam hijau produktif.',
        icon: 'Home',
      },
      {
        title: 'Penanaman Sayuran',
        description:
          'Menyemai dan membudidayakan aneka sayuran daun favorit warga seperti sosin (caisim), pakcoy, kangkung, bayam, cabai rawit, dan tomat.',
        icon: 'Sprout',
      },
      {
        title: 'Pemupukan dengan Kasgot',
        description:
          'Mengaplikasikan pupuk kasgot organik hasil olahan Rumah Maggot dan kompos Bata Terawang RW 18 untuk menyuburkan tanah secara alami.',
        icon: 'Droplets',
      },
      {
        title: 'Panen Pangan Lokal',
        description:
          'Memanen sayuran sosin dan sayuran segar bersama keluarga, memenuhi kebutuhan dapur harian, dan membagikan kelebihan panen kepada tetangga.',
        icon: 'Wheat',
      },
    ],
    color: '#388E3C',
  },
  {
    id: 'bata-terawang',
    name: 'Bata Terawang',
    slug: 'bata-terawang',
    tagline: 'Pengomposan Aerobik Sampah Organik dengan Susunan Bata Berongga',
    description:
      'Bata Terawang adalah metode atau sarana pengolahan sampah organik (seperti sisa makanan dan sampah kebun) menjadi pupuk kompos menggunakan susunan batu bata yang sengaja disusun tidak rapat atau berongga. Rongga antar bata memungkinkan sirkulasi udara alami yang optimal, sehingga proses dekomposisi aerobik berjalan efisien tanpa menimbulkan bau tidak sedap. Metode ini merupakan inovasi lokal warga RW 18 yang murah, mudah dibuat, dan sangat efektif menghasilkan kompos berkualitas tinggi.',
    heroImage: '/images/facilities/bata-terawang-1.jpg',
    images: [
      '/images/facilities/bata-terawang-1.jpg',
      '/images/facilities/bata-terawang-2.jpg',
    ],
    sdgs: [
      {
        number: 11,
        title: 'Kota dan Permukiman yang Berkelanjutan',
        description:
          'Mengurangi volume sampah organik rumah tangga yang berakhir di TPA, serta menciptakan lingkungan permukiman yang lebih bersih dan bebas bau.',
      },
      {
        number: 12,
        title: 'Konsumsi dan Produksi yang Bertanggung Jawab',
        description:
          'Menerapkan prinsip ekonomi sirkular dengan mengubah limbah organik dapur dan kebun menjadi pupuk kompos yang bermanfaat untuk pertanian urban.',
      },
      {
        number: 13,
        title: 'Penanganan Perubahan Iklim',
        description:
          'Menekan emisi gas metana dari penumpukan sampah organik dengan mengolahnya secara aerobik langsung di sumber, mengurangi jejak karbon rumah tangga.',
      },
    ],
    steps: [
      {
        title: 'Pemilahan Sampah Organik',
        description:
          'Warga memilah sisa makanan dapur, kulit buah, sayur layu, dan sampah kebun dari sampah anorganik dan residu sebelum dimasukkan ke bak kompos.',
        icon: 'Trash2',
      },
      {
        title: 'Penyusunan Bata Berongga',
        description:
          'Batu bata disusun membentuk bak pengomposan dengan celah-celah strategis yang memastikan aliran udara merata ke seluruh tumpukan material organik.',
        icon: 'Grid3X3',
      },
      {
        title: 'Proses Dekomposisi Aerobik',
        description:
          'Sampah organik terurai secara alami oleh mikroorganisme aerobik. Sirkulasi udara dari rongga bata mempercepat proses dan mencegah pembusukan anaerob.',
        icon: 'RefreshCw',
      },
      {
        title: 'Panen Pupuk Kompos',
        description:
          'Setelah 4–8 minggu, kompos matang dipanen dan digunakan untuk menyuburkan tanaman Buruan SAE, Taman Dahlia, atau dibagikan kepada warga.',
        icon: 'Sprout',
      },
    ],
    color: '#795548',
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return facilities.find((facility) => facility.slug === slug);
}

export function getAllFacilitySlugs(): string[] {
  return facilities.map((facility) => facility.slug);
}
