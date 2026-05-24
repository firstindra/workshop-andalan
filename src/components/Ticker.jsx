import React from 'react';

const tickerItems = [
  'Inovasi',
  'Integrasi',
  'Solusi Kustom',
  'Teknologi Terdepan',
  'IoT Engineering',
  'AI Agent',
  'Embedded Systems',
];

function Ticker({ variant }) {
  // Duplicate items for seamless infinite loop
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className={variant === 'footer' ? 'footer-ticker' : 'ticker-wrap'}>
      <div className="ticker-track">
        {items.map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            {variant === 'footer' ? item.toUpperCase() : item}
            <span>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
