import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLinks = [
    { id: 'framer-16cts0g-container', label: 'Home', to: '/' },
    { id: 'framer-66u6hk-container', label: 'Articles', to: '/articles' },
    { id: 'framer-1i4yhxm-container', label: 'Projects', to: '/#projects' },
    { id: 'framer-1n16592-container', label: 'Get in touch', to: '/contact' },
  ];

  const renderNavItem = (item: typeof desktopLinks[0], variant: string) => {
    const linkClass = `framer-iNDTq framer-V2ibY framer-1ak38fk ${variant} framer-1dv31s5`;
    const inner = (
      <>
        <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none'}}>
          <p className="framer-text framer-styles-preset-v5wz0l">{item.label}</p>
        </div>
        <div className="framer-fxw977" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', opacity: '0'}} />
      </>
    );
    return (
      <Link className={linkClass} style={{width: '100%'}} to={item.to} onClick={() => setMenuOpen(false)}>
        {inner}
      </Link>
    );
  };

  const hamburger = (
    <div className="framer-1fsbdi0-container">
      <div
        className={`framer-26mG5 framer-1i3853m ${menuOpen ? 'framer-v-j0njfn' : 'framer-v-1i3853m'}`}
        style={{height: '100%', width: '100%', cursor: 'pointer'}}
        onClick={() => setMenuOpen(o => !o)}
        role="button"
        tabIndex={0}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setMenuOpen(o => !o); } }}
      >
        <div className="framer-1j0133v" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderRadius: '1000px', transform: 'none'}} />
        <div className="framer-l6qwvu" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderRadius: '1000px'}} />
        <div className="framer-hjv6oz" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderRadius: '1000px', transform: 'none'}} />
      </div>
    </div>
  );

  const navMenu = (linkVariant: string) => (
    <div className="framer-5lszq" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))'}}>
      <div className="framer-3y05gb" style={{opacity: menuOpen ? '1' : '0'}}>
        <div className="framer-x7etxh">
          {desktopLinks.map(item => (
            <div key={item.id} className={item.id}>
              {renderNavItem(item, linkVariant)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="framer-1tzjxip-container">
      {/* Desktop */}
      <div className="ssr-variant hidden-1jw10ax">
        <div className={`framer-Gice7 framer-wfq30t ${menuOpen ? 'framer-v-d51zca' : 'framer-v-15m6der'}`} style={{width: '100%'}}>
          <div className="framer-194evps" style={{backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)'}} />
          <header className="framer-1fiv5us" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 97.74774774774775%)'}}>
            <nav className="framer-12fwuhv">
              <div className="framer-16mznv0">
                <div className="framer-1izoyka-container">
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '72px', width: 'auto', display: 'block'}} />
                  </Link>
                </div>
                {hamburger}
              </div>
            </nav>
          </header>
          {navMenu('framer-v-1ak38fk')}
        </div>
      </div>
      {/* Mobile */}
      <div className="ssr-variant hidden-1rtwx6s hidden-he6zob">
        <div className={`framer-Gice7 framer-wfq30t ${menuOpen ? 'framer-v-d51zca' : 'framer-v-2qk1ce'}`} style={{width: '100%'}}>
          <div className="framer-194evps" style={{backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)'}} />
          <header className="framer-1fiv5us" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 97.74774774774775%)'}}>
            <nav className="framer-12fwuhv">
              <div className="framer-16mznv0">
                <div className="framer-1izoyka-container">
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '72px', width: 'auto', display: 'block'}} />
                  </Link>
                </div>
                {hamburger}
              </div>
            </nav>
          </header>
          {navMenu('framer-v-1wwxyxw')}
        </div>
      </div>
    </div>
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
        style={{ maxWidth: '1200px', width: '100%' }}
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
          <div className="footer-nav-links" style={{ display: 'flex', gap: '40px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: '"Inter", sans-serif' }}>Home</Link>
            <Link to="/articles" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: '"Inter", sans-serif' }}>Articles</Link>
            <Link to="/#projects" style={{ color: 'white', textDecoration: 'none', fontSize: '15px', fontWeight: 600, fontFamily: '"Inter", sans-serif' }}>Projects</Link>
          </div>

          <div className="footer-bottom-links" style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '40px', marginBottom: '40px' }}>
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
               src="/Jacob_Front_Image-removebg-preview.png"
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
             <h3 className="footer-cta-heading" style={{
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
    </footer>
  );
}
