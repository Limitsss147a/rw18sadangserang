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
          'Residu kasgot dipisahkan dan disaring menjadi pupuk organik siap pakai, sedangkan larva segar/kering didistribusikan untuk pakan lele dan unggas.',
        icon: 'PackageCheck',
      },
    ],
    color: '#795548',
  },
  {
    id: 'buruan-sae',
    name: 'Buruan SAE',
    slug: 'buruan-sae',
    tagline: 'Urban Farming Pekarangan Mandiri untuk Ketahanan Pangan Keluarga',
    description:
      'Buruan SAE (Sehat, Alami, Ekonomis) RW 18 merupakan gerakan pemanfaatan pekarangan rumah, lorong gang, dan atap rumah untuk budidaya sayuran, tanaman obat keluarga (TOGA), dan perikanan air tawar. Mengintegrasikan pupuk kasgot dari Rumah Maggot, program ini mewujudkan ketahanan pangan keluarga mandiri dan bernutrisi tinggi.',
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
          'Meningkatkan akses warga terhadap bahan pangan segar, bernutrisi seimbang, dan bebas pestisida kimia dari pekarangan sendiri.',
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
          'Menata pot, instalasi hidroponik vertikal, dan polybag di teras serta lorong rumah warga yang sebelumnya tidak termanfaatkan.',
        icon: 'Home',
      },
      {
        title: 'Penanaman Sayuran',
        description:
          'Menyemai dan membudidayakan bibit tanaman cepat panen seperti pakcoy, kangkung, selada, cabai, tomat, dan seledri.',
        icon: 'Sprout',
      },
      {
        title: 'Pemupukan dengan Kasgot',
        description:
          'Mengaplikasikan pupuk kasgot organik hasil olahan Rumah Maggot RW 18 untuk menutrisi media tanah secara alami.',
        icon: 'Droplets',
      },
      {
        title: 'Panen Pangan Lokal',
        description:
          'Memetik hasil panen segar bersama anggota keluarga, menghemat belanja dapur rumah tangga, dan membagikan surplus ke tetangga.',
        icon: 'Wheat',
      },
    ],
    color: '#388E3C',
  },
  {
    id: 'bata-terawang',
    name: 'Bata Terawang',
    slug: 'bata-terawang',
    tagline: 'Inovasi Infrastruktur Berpori untuk Sirkulasi Udara & Estetika Lorong',
    description:
      'Bata Terawang (Roster Perforated Brick) adalah sentuhan arsitektur vernakular berkelanjutan yang diaplikasikan pada dinding pembatas gang dan fasilitas umum RW 18. Dengan rongga geometris artistik, bata terawang memaksimalkan pencahayaan alami, melancarkan aliran angin mikro di lorong padat, serta memberikan identitas visual lingkungan yang estetik dan ramah lingkungan.',
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
          'Meningkatkan kenyamanan termal dan ventilasi alami di lorong padat penduduk, sekaligus memperindah tata ruang visual lingkungan RW 18.',
      },
      {
        number: 12,
        title: 'Konsumsi dan Produksi yang Bertanggung Jawab',
        description:
          'Menggunakan material konstruksi lokal yang awet, minim perawatan, dan dirancang tahan cuaca jangka panjang dengan efisiensi energi optimal.',
      },
    ],
    steps: [
      {
        title: 'Pengumpulan Material Lokal',
        description:
          'Pemilihan bahan baku semen, pasir ayak, dan agregat berkualitas dari pengrajin lokal untuk memastikan kekuatan struktural.',
        icon: 'Boxes',
      },
      {
        title: 'Pembuatan Bata',
        description:
          'Pencetakan bata roster berongga presisi dengan pola geometris yang dirancang untuk mengoptimalkan tangkapan cahaya dan angin.',
        icon: 'Hammer',
      },
      {
        title: 'Pemasangan Terawang',
        description:
          'Pemasangan dinding terawang secara terencana di titik-titik krusial sirkulasi gang, pagar komunal, dan batas taman.',
        icon: 'Grid3X3',
      },
      {
        title: 'Infrastruktur Estetis',
        description:
          'Penyelesaian dinding terawang yang menghasilkan bayangan dinamis estetik, suhu lingkungan lebih sejuk, dan lorong yang fotogenik.',
        icon: 'Sparkles',
      },
    ],
    color: '#BF360C',
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return facilities.find((facility) => facility.slug === slug);
}

export function getAllFacilitySlugs(): string[] {
  return facilities.map((facility) => facility.slug);
}
