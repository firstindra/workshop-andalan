import React from 'react';

const socialLinks = [
  { href: '#', label: 'Facebook', className: 'si-fb', icon: 'f' },
  { href: '#', label: 'Instagram', className: 'si-ig', icon: 'in' },
  { href: '#', label: 'YouTube', className: 'si-yt', icon: '▶' },
  { href: '#', label: 'X (Twitter)', className: 'si-x', icon: '✕' },
  { href: '#', label: 'LinkedIn', className: 'si-li', icon: 'Li' },
  { href: '#', label: 'TikTok', className: 'si-tt', icon: 'tt' }
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo-block">
          <svg className="footer-logo-icon" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="4" fill="#1a19ff" opacity="0.8" />
            <rect x="8" y="8" width="10" height="14" rx="2" fill="#fff" opacity="0.9" />
            <rect x="22" y="14" width="10" height="8" rx="2" fill="#ff7b00" opacity="0.9" />
            <rect x="8" y="26" width="24" height="6" rx="2" fill="#fff" opacity="0.5" />
          </svg>
          <div>
            <span className="footer-brand">Solusi Teknologi untuk Masalah Anda</span>
            <span className="footer-brand">info@workshop-andalan.com</span>
          </div>
        </div>

        <div className="footer-socials">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              className={`social-icon ${social.className}`}
              href={social.href}
              title={social.label}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-middle">
        <h2>WORKSHOP-ANDALAN</h2>
      </div>

      <div className="footer-bottom">
        <div>© {currentYear} workshop-andalan. All rights reserved.</div>
        <div>Jakarta Technology Hub</div>
      </div>
    </footer>
  );
}

export default Footer;
