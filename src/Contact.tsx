import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from './Particles';

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '', privacy: false });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(f => ({ ...f, privacy: e.target.checked }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.privacy) return;
    setSent(true);
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'rgb(0,0,0)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Dominicus-style background: canvas starfield + blue glow vignettes */}
      <Particles />
      <div className="bg-glow-top" />
      <div className="bg-glow-bottom" />
      <div className="bg-noise" />

      {/* Back arrow */}
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'fixed', top: '28px', left: '32px',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.6)', fontSize: '22px',
          display: 'flex', alignItems: 'center', gap: '8px',
          zIndex: 10,
        }}
      >
        ← <span style={{ fontSize: '14px', letterSpacing: '0.05em' }}>Back</span>
      </button>

      {/* Card */}
      <div style={{
        width: '100%', maxWidth: '620px',
        position: 'relative', zIndex: 1,
      }}>

        {sent ? (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(40px, 8vw, 64px)',
              fontWeight: 400, margin: '0 0 20px',
              color: 'white',
            }}>Message sent!</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>
              I'll reply within one business day.
            </p>
          </div>
        ) : (
          <>
            {/* Heading */}
            <h1 style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(44px, 8vw, 72px)',
              fontWeight: 400,
              textAlign: 'center',
              color: 'white',
              margin: '0 0 16px',
              lineHeight: 1.1,
            }}>
              Get in touch
            </h1>

            <p style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.55)',
              fontSize: '15px',
              lineHeight: 1.6,
              margin: '0 0 48px',
            }}>
              Ready to turn your idea into a standout digital experience?<br />
              Send a message and I'll reply within one business day.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Name */}
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.75)', fontSize: '14px', marginBottom: '8px' }}>
                  Name*
                </label>
                <input
                  name="name" type="text" required
                  placeholder="Jane Smith"
                  value={form.name} onChange={handleChange}
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    background: 'rgb(30,30,30)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '100px',
                    padding: '16px 22px',
                    color: 'white', fontSize: '15px',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.75)', fontSize: '14px', marginBottom: '8px' }}>
                  Email*
                </label>
                <input
                  name="email" type="email" required
                  placeholder="jane@email.com"
                  value={form.email} onChange={handleChange}
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    background: 'rgb(30,30,30)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '100px',
                    padding: '16px 22px',
                    color: 'white', fontSize: '15px',
                    outline: 'none',
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.75)', fontSize: '14px', marginBottom: '8px' }}>
                  Message*
                </label>
                <textarea
                  name="message" required
                  placeholder="Write here..."
                  value={form.message} onChange={handleChange}
                  rows={6}
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    background: 'rgb(30,30,30)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '20px',
                    padding: '16px 22px',
                    color: 'white', fontSize: '15px',
                    outline: 'none', resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Privacy checkbox */}
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox" checked={form.privacy} onChange={handleCheck}
                  style={{ width: '16px', height: '16px', accentColor: 'white', cursor: 'pointer', flexShrink: 0 }}
                />
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                  I accept the privacy policy.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={!form.privacy}
                style={{
                  width: '100%',
                  background: form.privacy ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.15)',
                  color: form.privacy ? 'rgb(0,0,0)' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  borderRadius: '100px',
                  padding: '18px',
                  fontSize: '16px',
                  fontWeight: 500,
                  cursor: form.privacy ? 'pointer' : 'not-allowed',
                  transition: 'background 0.2s, color 0.2s',
                  fontFamily: 'inherit',
                }}
              >
                Send message
              </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
}
