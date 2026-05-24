import React from 'react';

const steps = [
  'Analisis masalah teknis mendalam untuk identifikasi akar penyebab.',
  'Desain solusi kustom yang sesuai dengan kebutuhan operasional Anda.',
  'Implementasi dan pengujian sistem teknologi yang andal.'
];

function Keahlian() {
  return (
    <section id="keahlian">
      <div className="keahlian-header">
        <p className="section-label">Kompetensi</p>
        <h2 className="section-title-xl">Keahlian Kami</h2>
      </div>
      <div className="keahlian-grid">
        {/* Kolom 1: Judul & Deskripsi */}
        <div className="keahlian-col">
          <h2>Keahlian<br />Kami</h2>
          <p>
            Kami adalah tim teknologi yang fokus pada solusi inovatif untuk masalah kompleks.
            Dengan pendekatan analitis dan visioner, kami mengubah tantangan teknis menjadi
            hasil yang dapat diukur dan berdampak.
          </p>
        </div>

        {/* Kolom 2: Gambar Chip */}
        <div className="keahlian-col keahlian-img-col">
          <svg viewBox="0 0 200 200" fill="none" style={{ width: '180px', height: '180px' }}>
            {/* Body chip */}
            <rect x="55" y="55" width="90" height="90" rx="6" fill="#2a2a2a" />
            <rect x="62" y="62" width="76" height="76" rx="4" fill="#1a1a1a" />

            {/* Pin atas */}
            <rect x="70" y="42" width="8" height="13" rx="2" fill="#888" />
            <rect x="83" y="42" width="8" height="13" rx="2" fill="#888" />
            <rect x="96" y="42" width="8" height="13" rx="2" fill="#888" />
            <rect x="109" y="42" width="8" height="13" rx="2" fill="#888" />
            <rect x="122" y="42" width="8" height="13" rx="2" fill="#888" />

            {/* Pin bawah */}
            <rect x="70" y="145" width="8" height="13" rx="2" fill="#888" />
            <rect x="83" y="145" width="8" height="13" rx="2" fill="#888" />
            <rect x="96" y="145" width="8" height="13" rx="2" fill="#888" />
            <rect x="109" y="145" width="8" height="13" rx="2" fill="#888" />
            <rect x="122" y="145" width="8" height="13" rx="2" fill="#888" />

            {/* Pin kiri */}
            <rect x="42" y="70" width="13" height="8" rx="2" fill="#888" />
            <rect x="42" y="83" width="13" height="8" rx="2" fill="#888" />
            <rect x="42" y="96" width="13" height="8" rx="2" fill="#888" />
            <rect x="42" y="109" width="13" height="8" rx="2" fill="#888" />
            <rect x="42" y="122" width="13" height="8" rx="2" fill="#888" />

            {/* Pin kanan */}
            <rect x="145" y="70" width="13" height="8" rx="2" fill="#888" />
            <rect x="145" y="83" width="13" height="8" rx="2" fill="#888" />
            <rect x="145" y="96" width="13" height="8" rx="2" fill="#888" />
            <rect x="145" y="109" width="13" height="8" rx="2" fill="#888" />
            <rect x="145" y="122" width="13" height="8" rx="2" fill="#888" />

            {/* Center die */}
            <rect x="72" y="72" width="56" height="56" rx="3" fill="#333" />
            <rect x="78" y="78" width="44" height="44" rx="2" fill="#1a19ff" opacity="0.15" />
            <text x="100" y="105" textAnchor="middle" fill="#aaa" fontSize="8" fontFamily="monospace" fontWeight="700">
              MCU
            </text>
          </svg>
        </div>

        {/* Kolom 3: Steps */}
        <div className="keahlian-col keahlian-steps-col">
          {steps.map((step, index) => (
            <div className="step-item" key={index}>
              <div className="step-num">{index + 1}</div>
              <div className="step-text">{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Keahlian;
