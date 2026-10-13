export interface SDG {
  number: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  facilities: string[];
}

export const sdgsData: SDG[] = [
  {
    number: 2,
    title: 'Tanpa Kelaparan',
    description:
      'Menghilangkan kelaparan, mencapai ketahanan pangan, memperbaiki kualitas nutrisi keluarga, serta menggalakkan pertanian perkotaan berkelanjutan secara mandiri.',
    color: '#DDA63A',
    icon: 'Utensils',
    facilities: ['buruan-sae'],
  },
  {
    number: 11,
    title: 'Kota dan Permukiman yang Berkelanjutan',
    description:
      'Menjadikan permukiman RW 18 tempat tinggal yang inklusif, aman, tangguh, dan ramah lingkungan melalui ruang terbuka hijau, ventilasi lorong alami, dan pengolahan limbah terpadu.',
    color: '#FD9D24',
    icon: 'Building2',
    facilities: ['taman-dahlia', 'rumah-maggot', 'buruan-sae', 'bata-terawang'],
  },
  {
    number: 12,
    title: 'Konsumsi dan Produksi yang Bertanggung Jawab',
    description:
      'Menjamin pola konsumsi dan sirkulasi produksi yang ramah lingkungan dengan mengurangi limbah makanan melalui biokonversi maggot dan pemanfaatan material lokal bermutu.',
    color: '#BF8B2E',
    icon: 'Recycle',
    facilities: ['rumah-maggot', 'buruan-sae', 'bata-terawang'],
  },
  {
    number: 13,
    title: 'Penanganan Perubahan Iklim',
    description:
      'Mengambil aksi nyata dalam memitigasi dampak perubahan iklim dengan mencegah pembentukan gas metana dari timbunan sampah basah melalui daur ulang organik biologis.',
    color: '#3F7E44',
    icon: 'Globe',
    facilities: ['rumah-maggot'],
  },
  {
    number: 15,
    title: 'Ekosistem Daratan',
    description:
      'Melindungi, merestorasi, dan mengoptimalkan ekosistem darat perkotaan melalui pelestarian ruang hijau, keanekaragaman hayati nabati, dan konservasi tanah subur di Taman Dahlia.',
    color: '#56C02B',
    icon: 'Trees',
    facilities: ['taman-dahlia'],
  },
];

export const sdgs = sdgsData;

export const sdgToFacilitiesMapping: Record<number, string[]> = {
  2: ['buruan-sae'],
  11: ['taman-dahlia', 'rumah-maggot', 'buruan-sae', 'bata-terawang'],
  12: ['rumah-maggot', 'buruan-sae', 'bata-terawang'],
  13: ['rumah-maggot'],
  15: ['taman-dahlia'],
};

export const facilityToSdgsMapping: Record<string, number[]> = {
  'taman-dahlia': [11, 15],
  'rumah-maggot': [11, 12, 13],
  'buruan-sae': [2, 11, 12],
  'bata-terawang': [11, 12],
};

export const sdgFacilityMapping = sdgToFacilitiesMapping;
export const facilitySdgMapping = facilityToSdgsMapping;

export function getSDGByNumber(goalNumber: number): SDG | undefined {
  return sdgsData.find((sdg) => sdg.number === goalNumber);
}

export function getSDGsForFacility(facilitySlug: string): SDG[] {
  const goalNumbers = facilityToSdgsMapping[facilitySlug] || [];
  return sdgsData.filter((sdg) => goalNumbers.includes(sdg.number));
}
