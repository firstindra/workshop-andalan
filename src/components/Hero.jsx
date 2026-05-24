import React from 'react';

function Hero({ onNavigate }) {
  return (
    <section className="hero" id="beranda">
      <div className="hero-image">
        <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '80%', maxWidth: '380px' }}>
          {/* Server Rack 1 */}
          <rect x="20" y="20" width="300" height="38" rx="3" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
          <rect x="28" y="28" width="200" height="22" rx="2" fill="#1a1a1a"/>
          <rect x="234" y="28" width="70" height="9" rx="1" fill="#333"/>
          <rect x="234" y="41" width="70" height="9" rx="1" fill="#333"/>
          <circle cx="316" cy="33" r="4" fill="#4fc3f7" opacity="0.9"/>
          <circle cx="316" cy="47" r="4" fill="#4fc3f7" opacity="0.3"/>
          
          {/* Server Rack 2 */}
          <rect x="20" y="68" width="300" height="38" rx="3" fill="#252525" stroke="#444" strokeWidth="1"/>
          <rect x="28" y="76" width="180" height="22" rx="2" fill="#1a1a1a"/>
          <rect x="214" y="76" width="90" height="9" rx="1" fill="#2e2e2e"/>
          <rect x="214" y="89" width="90" height="9" rx="1" fill="#2e2e2e"/>
          <circle cx="316" cy="81" r="4" fill="#81c784" opacity="0.9"/>
          <circle cx="316" cy="95" r="4" fill="#81c784" opacity="0.4"/>
          <rect x="30" y="80" width="8" height="8" rx="1" fill="#4fc3f7" opacity="0.9"/>
          <rect x="42" y="80" width="8" height="8" rx="1" fill="#4fc3f7" opacity="0.6"/>
          <rect x="54" y="80" width="8" height="8" rx="1" fill="#ff7b00" opacity="0.8"/>
          <rect x="66" y="80" width="8" height="8" rx="1" fill="#4fc3f7" opacity="0.4"/>

          {/* Server Rack 3 */}
          <rect x="20" y="116" width="300" height="38" rx="3" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
          <rect x="28" y="124" width="160" height="22" rx="2" fill="#1a1a1a"/>
          <rect x="194" y="124" width="110" height="22" rx="1" fill="#222"/>
          <circle cx="316" cy="129" r="4" fill="#4fc3f7" opacity="0.7"/>
          <circle cx="316" cy="143" r="4" fill="#4fc3f7" opacity="0.2"/>

          {/* Server Rack 4 */}
          <rect x="20" y="164" width="300" height="38" rx="3" fill="#252525" stroke="#444" strokeWidth="1"/>
          <rect x="28" y="172" width="220" height="22" rx="2" fill="#1a1a1a"/>
          <rect x="254" y="172" width="50" height="22" rx="1" fill="#2a2a2a"/>
          <circle cx="316" cy="177" r="4" fill="#81c784" opacity="0.9"/>
          <circle cx="316" cy="191" r="4" fill="#81c784" opacity="0.9"/>

          {/* Server Rack 5 */}
          <rect x="20" y="212" width="300" height="38" rx="3" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
          <rect x="28" y="220" width="260" height="22" rx="2" fill="#1a1a1a"/>
          <circle cx="316" cy="225" r="4" fill="#e53935" opacity="0.7"/>
          <circle cx="316" cy="239" r="4" fill="#4fc3f7" opacity="0.5"/>

          {/* Connection lines */}
          <path d="M 40 250 C 40 265 80 265 80 250" stroke="#4fc3f7" strokeWidth="2" fill="none" opacity="0.4"/>
          <path d="M 100 250 C 100 270 150 270 150 250" stroke="#ff7b00" strokeWidth="2" fill="none" opacity="0.3"/>
          <path d="M 170 250 C 170 260 200 260 200 250" stroke="#4fc3f7" strokeWidth="2" fill="none" opacity="0.3"/>
        </svg>
      </div>

      <div className="hero-right">
        <h1>Satu Solusi Untuk Segala Masalah Teknologi</h1>
        <p>
          Kami adalah bengkel teknologi yang berkomitmen pada inovasi dan solusi kustom. 
          Kami membantu Anda mengatasi tantangan teknis dengan pendekatan analitis dan visioner.
        </p>
        <div className="hero-btns">
          <button 
            className="btn-primary" 
            onClick={() => onNavigate('kontak')}
          >
            Hubungi Kami
          </button>
          <button 
            className="btn-outline" 
            onClick={() => onNavigate('portofolio')}
          >
            Lihat Portofolio
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
