import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Articles', to: '/articles' },
    { label: 'Projects', to: '/#projects' },
    { label: 'Get in touch', to: '/contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '32px 6%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: menuOpen ? 'transparent' : 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%)',
          transition: 'background 0.3s',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
           <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{ height: '64px', width: 'auto', display: 'block' }} />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px',
            zIndex: 1100,
          }}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: '40px', height: '1.5px', background: 'white', transition: 'all 0.3s', transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }}></span>
          <span style={{ display: 'block', width: menuOpen ? '40px' : '28px', height: '1.5px', background: 'white', transition: 'all 0.3s', transform: menuOpen ? 'translateY(-4.5px) rotate(-45deg)' : 'none' }}></span>
        </button>
      </header>

      {/* Full-screen menu overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1050,
          background: '#000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 10%',
          transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {menuItems.map((item, idx) => (
            <div 
              key={item.label}
              style={{
                overflow: 'hidden',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.08}s`
              }}
            >
              {item.to.startsWith('/#') ? (
                <a
                  href={item.to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 'clamp(52px, 12vw, 88px)',
                    fontFamily: '"Instrument Serif", Georgia, serif',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    display: 'inline-block',
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 'clamp(52px, 12vw, 88px)',
                    fontFamily: '"Instrument Serif", Georgia, serif',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    display: 'inline-block',
                  }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background: '#000',
        position: 'relative',
        zIndex: 1,
        padding: '60px 4% 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        borderTop: '1px solid rgba(153,153,153,0.12)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'flex-start',
        }}
        className="custom-footer-grid"
      >
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingTop: '20px' }}>
          {/* Logo */}
          <Link to="/">
            <img 
              src="/latestjacob-removebg-preview.png" 
            style={{ height: '80px', width: 'auto', display: 'block' }} 
          />
          </Link>
          
          {/* Description */}
          <p style={{ 
            color: 'rgba(153,153,153,0.85)', 
            fontSize: '15px', 
            lineHeight: 1.6, 
            maxWidth: '380px',
            margin: 0,
            fontFamily: '"Inter", sans-serif'
          }}>
            Transforming bold concepts into intuitive, high impact digital experiences that captivate users, amplify brands, and convert exploration into growth.
          </p>

          {/* Links */}
          <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: '"Inter", sans-serif' }}>Home</Link>
            <Link to="/articles" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: '"Inter", sans-serif' }}>Articles</Link>
            <Link to="/projects" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: '"Inter", sans-serif' }}>Projects</Link>
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '40px', marginBottom: '40px' }}>
            <span style={{ color: 'rgba(153,153,153,0.7)', fontSize: '14px', fontWeight: 500, fontFamily: '"Inter", sans-serif' }}>
              © 2026 Jacob1K. All rights reserved.
            </span>
            <Link to="/privacy" style={{ color: 'rgba(153,153,153,0.7)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', fontFamily: '"Inter", sans-serif' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'rgba(153,153,153,0.7)', fontSize: '14px', fontWeight: 500, textDecoration: 'none', fontFamily: '"Inter", sans-serif' }}>Terms of Service</Link>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto', position: 'relative' }}>
             <img 
               src="https://framerusercontent.com/images/mm2HPmLVegqI6QSbsK2t3Ls2hnY.png" 
               alt="Jacob" 
               style={{ 
                 width: '100%', 
                 height: 'auto', 
                 display: 'block',
                 maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 80%)',
                 WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 80%)'
               }} 
             />
           </div>
           
           <div style={{ 
             position: 'absolute', 
             top: '55%', 
             left: '50%', 
             transform: 'translate(-50%, -50%)', 
             zIndex: 3, 
             textAlign: 'center', 
             width: '100%',
             filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.5))'
           }}>
             <h3 style={{ 
               fontFamily: '"Instrument Serif", Georgia, serif', 
               fontSize: 'clamp(32px, 4vw, 42px)', 
               fontWeight: 400, 
               color: 'white', 
               margin: '0 0 24px',
               letterSpacing: '-0.01em'
             }}>
               Let's build your next big thing
             </h3>
             <Link 
               to="/contact" 
               style={{ 
                 display: 'inline-block',
                 background: 'white', 
                 color: 'black', 
                 textDecoration: 'none', 
                 padding: '16px 32px', 
                 borderRadius: '100px', 
                 fontSize: '16px', 
                 fontWeight: 500,
                 fontFamily: '"Inter", sans-serif'
               }}
             >
               Start your project
             </Link>
           </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .custom-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
