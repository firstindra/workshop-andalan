import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="kontak">
      <div className="contact-wrap">
        <div className="contact-left">
          <h2>Mulai Kolaborasi</h2>
          <div className="contact-info-item">info@workshop-andalan.com</div>
          <div className="contact-info-item">Jakarta Technology Hub</div>
          {submitted && (
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              background: '#e8f5e9',
              color: '#2e7d32',
              borderRadius: '4px',
              fontWeight: 500
            }}>
              ✅ Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
            </div>
          )}
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Nama Depan *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Masukkan nama depan Anda"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Nama Belakang *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Masukkan nama belakang Anda"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="alamat@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subjek *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Apa yang ingin Anda bahas?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Pesan *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tuliskan pesan Anda di sini..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-submit">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
