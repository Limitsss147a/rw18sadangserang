export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
}

export const navigation: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profil' },
  {
    label: 'Fasilitas',
    href: '/fasilitas',
    children: [
      { label: 'Taman Dahlia', href: '/fasilitas/taman-dahlia' },
      { label: 'Rumah Maggot', href: '/fasilitas/rumah-maggot' },
      { label: 'Buruan SAE', href: '/fasilitas/buruan-sae' },
      { label: 'Bata Terawang', href: '/fasilitas/bata-terawang' },
    ],
  },
  { label: 'SDGs', href: '/sdgs' },
  { label: 'Edukasi Sampah', href: '/edukasi' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Kontak', href: '/kontak' },
];

export default navigation;
