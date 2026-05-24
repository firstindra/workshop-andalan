import React from 'react';

const portfolioData = [
  {
    id: 1,
    num: '01',
    title: 'Sistem Manajemen Inventaris Cerdas',
    desc: 'Proyek ini mendemonstrasikan sistem manajemen inventaris inovatif yang dirancang untuk mengoptimalkan pelacakan stok dan mengurangi pemborosan. Fitur utamanya meliputi pemindaian kode batang otomatis, pembaruan stok real-time, dan peringatan tingkat rendah yang dapat disesuaikan.',
    bg: 'linear-gradient(135deg, #1f1f1f 0%, #2d2d2d 100%)',
    icon: 'inventory',
  },
  {
    id: 2,
    num: '02',
    title: 'Solusi Otomasi Proses Bisnis',
    desc: 'Menerapkan alur kerja otomatis untuk merampingkan tugas-tugas operasional berulang dalam lingkungan bisnis. Tujuannya adalah untuk meningkatkan efisiensi, mengurangi kesalahan manual, dan membebaskan sumber daya karyawan untuk pekerjaan strategis.',
    bg: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
    icon: 'automation',
  },
  {
    id: 3,
    num: '03',
    title: 'Smart IoT Monitoring System',
    desc: 'Sistem monitoring berbasis IoT yang menghubungkan sensor, mikrokontroler, dan cloud dashboard secara real-time untuk pemantauan kondisi lingkungan dan infrastruktur.',
    bg: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
    icon: 'iot',
  },
];

// Icon components
function PortfolioIcon({ type }) {
  if (type === 'inventory') {
    return (
      <svg viewBox="0 0 120 90" fill="none" style={{ width: '70%', height: '70%' }}>
        <rect x="15" y="10" width="90" height="60" rx="6" fill="#2a2a2a" stroke="#444" strokeWidth="1.5" />
        <rect x="22" y="18" width="60" height="36" rx="3" fill="#1a1a1a" />
        <rect x="88" y="20" width="10" height="8" rx="2" fill="#333" />
        <rect x="88" y="34" width="10" height="8" rx="2" fill="#333" />
        <rect x="88" y="48" width="10" height="8" rx="2" fill="#ff7b00" opacity="0.8" />
        <rect x="26" y="22" width="16" height="4" rx="1" fill="#4fc3f7" opacity="0.7" />
        <rect x="26" y="30" width="50" height="3" rx="1" fill="#444" />
        <rect x="26"
