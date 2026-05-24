import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Proyek Terbaru di Dunia Teknologi Kami',
    excerpt: 'Teknologi terus berkembang dengan pesat, dan setiap hari kita menyaksikan inovasi yang mengubah cara kita hidup dan bekerja...',
    author: 'workshopandalan',
    time: '48 menit yang lalu',
    readTime: '3 menit membaca',
    bg: 'linear-gradient(135deg, #1a3a4a, #0d2a3a)',
    icon: 'tech'
  },
  {
    id: 2,
    title: 'Inovasi Teknologi Terkini dari Workshop-andalan',
    excerpt: 'Teknologi terus berkembang dengan pesat, dan setiap tahun kita menyaksikan inovasi yang mengubah cara kita hidup dan bekerja...',
    author: 'workshopandalan',
    time: '48 menit yang lalu',
    readTime: '3 menit membaca',
    bg: 'linear-gradient(135deg, #3a2a1a, #2a1a0a)',
    icon: 'innovation'
  },
  {
    id: 3,
    title: 'Solusi Teknologi untuk Masalah Sehari-hari',
    excerpt: 'Teknologi telah menjadi bagian integral dari kehidupan kita sehari-hari. Dari cara kita berkomunikasi hingga cara kita bekerja...',
    author: 'workshopandalan',
    time: '48 menit yang lalu',
    readTime: '3 menit membaca',
    bg: 'linear-gradient(135deg, #1a1a3a, #0d0d2a)',
    icon: 'solution'
  }
];

function BlogIcon({ type }) {
  if (type === 'tech') {
    return (
      <svg viewBox="0 0 80 60" fill="none" style={{ width: '80px', height: '60px', opacity: 0.5 }}>
        <rect x="5" y="5" width="70" height="50" rx="4" fill="none" stroke="#4fc3f7" strokeWidth="1" />
        <rect x="10" y="12" width="40" height="4" rx="1" fill="#4fc3f7" />
        <rect x="10" y="20" width="60" height="3" rx="1" fill="#4fc3f7" opacity="0.4" />
        <rect x="10" y="26" width="50" height="3" rx="1" fill="#4fc3f7" opacity="0.3" />
        <rect x="10" y="35" width="25" height="16" rx="2" fill="#4fc3f7" opacity="0.2" />
        <rect x="40" y="35" width="30" height="7" rx="1" fill="#4fc3f7" opacity="0.15" />
        <rect x="40" y="44" width="20" height="7" rx="1" fill="#4fc3f7" opacity="0.1" />
      </svg>
    );
  }
  if (type === 'innovation') {
    return (
      <svg viewBox="0 0 80 60" fill="none" style={{ width: '80px', height: '60px', opacity: 0.5 }}>
        <circle cx="40" cy="30" r="22" fill="none" stroke="#ff7b00" strokeWidth="1.5" />
        <circle cx="40" cy="30" r="14" fill="none" stroke="#ff7b00" strokeWidth="1" opacity="0.5" />
        <circle cx="40" cy="30" r="6" fill="#ff7b00" opacity="0.4" />
        <line x1="18" y1="30" x2="62" y2="30" stroke="#ff7b00" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="8" x2="40" y2="52" stroke="#ff7b00" strokeWidth="1" opacity="0.3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 60" fill="none" style={{ width: '80px', height: '60px', opacity: 0.5 }}>
      <rect x="8" y="30" width="10" height="22" rx="1" fill="#a78bfa" />
      <rect x="23" y="22" width="10" height="30" rx="1" fill="#a78bfa" opacity="0.7" />
      <rect x="38" y="15" width="10" height="37" rx="1" fill="#a78bfa" opacity="0.5" />
      <rect x="53" y="25" width="10" height="27" rx="1" fill="#a78bfa" opacity="0.6" />
      <rect x="68" y="18" width="10" height="34" rx="1" fill="#a78bfa" opacity="0.4" />
      <line x1="5" y1="52" x2="78" y2="52" stroke="#a78bfa" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function Blog() {
  const [likedPosts, setLikedPosts] = useState([]);

  const toggleLike = (id) => {
    setLikedPosts(prev =>
      prev.includes(id) ? prev.filter(postId => postId !== id) : [...prev, id]
    );
  };

  return (
    <section id="blog">
      <div className="blog-title">
        <h2 className="section-title-xl">Wawasan &amp; Berita</h2>
      </div>

      <div className="blog-grid">
        {blogPosts.map(post => (
          <div className="blog-card" key={post.id}>
            <div className="blog-img-wrapper" style={{ background: post.bg }}>
              <BlogIcon type={post.icon} />
            </div>

            <div className="blog-body">
              <div className="blog-author">
                <div className="author-avatar">W</div>
                <div className="author-meta">
                  <strong>{post.author}</strong>
                  {post.time} &middot; {post.readTime}
                </div>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>

            <div className="blog-card-footer">
              <div className="blog-stat">👁 0</div>
              <div className="blog-stat">💬 0</div>
              <button
                className="blog-like"
                onClick={() => toggleLike(post.id)}
                style={{
                  color: likedPosts.includes(post.id) ? '#e53935' : '#999',
                  fontWeight: likedPosts.includes(post.id) ? '700' : '400'
                }}
              >
                {likedPosts.includes(post.id) ? '❤' : '♡'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="blog-all">
        <button className="btn-outline">Lihat Semua Artikel</button>
      </div>
    </section>
  );
}

export default Blog;
