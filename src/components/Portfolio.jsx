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
        <rect x="26" y="37" width="40" height="3" rx="1" fill="#444" />
        <rect x="26" y="44" width="45" height="3" rx="1" fill="#444" />
        <rect x="42" y="72" width="36" height="6" rx="2" fill="#333" />
        <rect x="45" y="78" width="30" height="4" rx="1" fill="#444" />
      </svg>
    );
  }

  if (type === 'automation') {
    return (
      <svg viewBox="0 0 120 90" fill="none" style={{ width: '90%', height: '90%' }}>
        <rect x="5" y="5" width="110" height="80" rx="4" fill="rgba(0,0,0,0.3)" />
        <rect x="10" y="10" width="35" height="70" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="12" y="15" width="20" height="4" rx="1" fill="#60a5fa" />
        <rect x="12" y="22" width="28" height="3" rx="1" fill="rgba(255,255,255,0.3)" />
        <rect x="12" y="28" width="24" height="3" rx="1" fill="rgba(255,255,255,0.2)" />
        <rect x="12" y="34" width="28" height="3" rx="1" fill="#f97316" opacity="0.8" />
        <rect x="12" y="40" width="26" height="3" rx="1" fill="rgba(255,255,255,0.2)" />
        <rect x="50" y="10" width="60" height="35" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="55" y="15" width="20" height="4" rx="1" fill="#f97316" opacity="0.9" />
        <rect x="80" y="15" width="25" height="4" rx="1" fill="#f97316" opacity="0.7" />
        <rect x="55" y="23" width="48" height="3" rx="1" fill="rgba(255,255,255,0.2)" />
        <rect x="55" y="30" width="40" height="3" rx="1" fill="rgba(255,255,255,0.15)" />
        <rect x="50" y="52" width="28" height="30" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="82" y="52" width="28" height="30" rx="2" fill="rgba(255,255,255,0.05)" />
        <rect x="55" y="60" width="18" height="4" rx="1" fill="#f97316" opacity="0.7" />
        <rect x="87" y="60" width="18" height="4" rx="1" fill="#60a5fa" opacity="0.7" />
      </svg>
    );
  }

  // Default IoT icon
  return (
    <svg viewBox="0 0 120 120" fill="none" style={{ width: '80px', height: '80px' }}>
      <rect x="15" y="45" width="90" height="50" rx="6" fill="none" stroke="#4fc3f7" strokeWidth="2" />
      <rect x="30" y="55" width="20" height="12" rx="2" fill="#4fc3f7" opacity="0.5" />
      <rect x="55" y="55" width="20" height="12" rx="2" fill="#4fc3f7" opacity="0.3" />
      <rect x="80" y="55" width="16" height="12" rx="2" fill="#4fc3f7" opacity="0.2" />
      <circle cx="60" cy="30" r="12" fill="none" stroke="#ff7b00" strokeWidth="2" />
      <circle cx="60" cy="30" r="5" fill="#ff7b00" opacity="0.7" />
      <line x1="60" y1="18" x2="60" y2="10" stroke="#ff7b00" strokeWidth="2" opacity="0.5" />
      <line x1="60" y1="42" x2="60" y2="45" stroke="#4fc3f7" strokeWidth="2" />
      <line x1="30" y1="70" x2="30" y2="95" stroke="#4fc3f7" strokeWidth="1.5" opacity="0.4" />
      <line x1="60" y1="67" x2="60" y2="95" stroke="#4fc3f7" strokeWidth="1.5" opacity="0.4" />
      <line x1="90" y1="67" x2="90" y2="95" stroke="#4fc3f7" strokeWidth="1.5" opacity="0.4" />
      <circle cx="30" cy="97" r="3" fill="#4fc3f7" />
      <circle cx="60" cy="97" r="3" fill="#4fc3f7" />
      <circle cx="90" cy="97" r="3" fill="#4fc3f7" />
    </svg>
  );
}

function Portfolio() {
  return (
    <section id="portofolio">
      <div className="portfolio-header">
        <p className="section-label">Portofolio Proyek</p>
        <h2 className="section-title-xl">Portfolio</h2>
      </div>

      <div className="portfolio-grid">
        {portfolioData.map((item) => (
          <div className="portfolio-item" key={item.id}>
            <div className="portfolio-img-wrapper" style={{ background: item.bg }}>
              <div className="portfolio-img-placeholder">
                <PortfolioIcon type={item.icon} />
              </div>
            </div>
            <div className="portfolio-item-bottom">
              <div className="portfolio-item-meta">
                <div className="portfolio-item-title">{item.title}</div>
                <div className="portfolio-item-num">{item.num}</div>
              </div>
              <p className="portfolio-item-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
