import React from 'react';

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'portofolio', label: 'Halaman Portofolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'keahlian', label: 'Daftar Program' },
];

function Navbar({ activeSection, onNavigate, menuOpen, setMenuOpen }) {
  const handleNavClick = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="nav-logo"
        onClick={() => handleNavClick('beranda')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleNavClick('beranda')}
      >
        <svg className="nav-logo-icon" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="4" fill="#1a19ff" />
          <rect x="8" y="8" width="10" height="14" rx="2" fill="#fff" opacity="0.9" />
          <rect x="22" y="14" width="10" height="8" rx="2" fill="#ff7b00" opacity="0.9" />
          <rect x="8" y="26" width="24" height="6" rx="2" fill="#fff" opacity="0.5" />
        </svg>
        <div className="nav-logo-text">
          <span className="top">Workshop Andalan</span>
          <span className="bot">Solusi Teknologi</span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className="nav-cta"
        onClick={() => handleNavClick('kontak')}
      >
        Mulai Proyek
      </button>
    </nav>
  );
}

export default Navbar;
