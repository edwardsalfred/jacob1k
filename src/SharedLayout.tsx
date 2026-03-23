import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
            background: scrolled
            ? 'rgba(0,0,0,0.85)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          padding: '24px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.3s, backdrop-filter 0.3s',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img 
            src="/latestjacob-removebg-preview.png" 
            style={{ height: '76px', width: 'auto', display: 'block' }} 
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '32px',
                height: '1.5px',
                background: 'rgb(200,200,200)',
                borderRadius: '2px',
                transition: 'transform 0.2s',
              }}
            />
          ))}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '60px 40px',
            gap: '32px',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '32px',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
          {[
            { label: 'Home', to: '/' },
            { label: 'Articles', to: '/articles' },
            { label: 'Projects', to: '/projects' },
            { label: 'Get in touch', to: '/contact' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '32px',
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontWeight: 400,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
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
