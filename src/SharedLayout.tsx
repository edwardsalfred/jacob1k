import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="framer-1tzjxip-container" data-framer-layout-hint-center-x="true" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
      {/* Desktop Header */}
      <div className="ssr-variant hidden-1jw10ax">
        <div className={`framer-Gice7 framer-wfq30t ${menuOpen ? 'framer-v-d51zca' : 'framer-v-15m6der'}`} data-framer-name="Desktop - Off" style={{width: '100%'}}>
          <div className="framer-194evps" data-framer-name="Background" data-highlight="true" style={{backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)'}} tabIndex={0}></div>
          <header className="framer-1fiv5us" data-framer-name="header" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 97.74774774774775%)'}}>
            <nav className="framer-12fwuhv" data-framer-name="content">
              <div className="framer-16mznv0" data-framer-name="wrapper">
                <div className="framer-1izoyka-container">
                  <Link className="framer-HOJPI framer-VuWFR framer-13obwic framer-v-13obwic framer-1te0x0d" data-framer-name="Default" data-highlight="true" to="/" tabIndex={0}>
                    <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '72px', width: 'auto', display: 'block'}} />
                  </Link>
                </div>
                <div className="framer-1fsbdi0-container">
                  <div className={`framer-26mG5 framer-1i3853m ${menuOpen ? 'framer-v-j0njfn' : 'framer-v-1i3853m'}`} data-framer-name="Inactive" data-highlight="true" style={{height: '100%', width: '100%', cursor: 'pointer'}} tabIndex={0} onClick={() => setMenuOpen(o => !o)}>
                    <div className="framer-1j0133v" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px', transform: 'none'}}></div>
                    <div className="framer-l6qwvu" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px'}}></div>
                    <div className="framer-hjv6oz" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px', transform: 'none'}}></div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="framer-5lszq" data-framer-name="navigation" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', display: menuOpen ? 'block' : 'none'}}>
            <div className="framer-3y05gb" data-framer-name="content" style={{opacity: menuOpen ? '1' : '0'}}>
              <div className="framer-x7etxh" data-framer-name="wrapper" style={{ padding: '0 6%', maxWidth: '1440px', margin: '0 auto' }}>
                <div className="framer-16cts0g-container">
                  <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1ak38fk framer-1dv31s5" data-framer-name="Default" style={{width: '100%'}} to="/" onClick={() => setMenuOpen(false)}>
                    <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'} as any} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">Home</p>
                    </div>
                  </Link>
                </div>
                <div className="framer-66u6hk-container">
                  <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1ak38fk framer-1dv31s5" data-framer-name="Default" style={{width: '100%'}} to="/articles" onClick={() => setMenuOpen(false)}>
                    <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'} as any} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">Articles</p>
                    </div>
                  </Link>
                </div>
                <div className="framer-1i4yhxm-container">
                  <a className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1ak38fk framer-1dv31s5" data-framer-name="Default" style={{width: '100%'}} href="/#projects" onClick={() => setMenuOpen(false)}>
                    <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'} as any} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">Projects</p>
                    </div>
                  </a>
                </div>
                <div className="framer-1n16592-container">
                  <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1ak38fk framer-1dv31s5" data-framer-name="Default" style={{width: '100%'}} to="/contact" onClick={() => setMenuOpen(false)}>
                    <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'} as any} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">Get in touch</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="ssr-variant hidden-1rtwx6s hidden-he6zob">
        <div className={`framer-Gice7 framer-wfq30t ${menuOpen ? 'framer-v-d51zca' : 'framer-v-2qk1ce'}`} data-framer-name="Mobile - Off" style={{width: '100%'}}>
          <div className="framer-194evps" data-framer-name="Background" style={{backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)'}}></div>
          <header className="framer-1fiv5us" data-framer-name="header" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 97.74774774774775%)'}}>
            <nav className="framer-12fwuhv" data-framer-name="content">
              <div className="framer-16mznv0" data-framer-name="wrapper">
                <div className="framer-1izoyka-container">
                  <Link className="framer-HOJPI framer-VuWFR framer-13obwic framer-v-13obwic framer-1te0x0d" data-framer-name="Default" data-highlight="true" to="/" tabIndex={0}>
                    <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '72px', width: 'auto', display: 'block'}} />
                  </Link>
                </div>
                <div className="framer-1fsbdi0-container">
                  <div className={`framer-26mG5 framer-1i3853m ${menuOpen ? 'framer-v-j0njfn' : 'framer-v-1i3853m'}`} data-framer-name="Inactive" data-highlight="true" style={{height: '100%', width: '100%', cursor: 'pointer'}} tabIndex={0} onClick={() => setMenuOpen(o => !o)}>
                    <div className="framer-1j0133v" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px', transform: 'none'}}></div>
                    <div className="framer-l6qwvu" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px'}}></div>
                    <div className="framer-hjv6oz" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px', transform: 'none'}}></div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div className="framer-5lszq" data-framer-name="navigation" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', display: menuOpen ? 'block' : 'none'}}>
            <div className="framer-3y05gb" data-framer-name="content" style={{opacity: menuOpen ? '1' : '0'}}>
              <div className="framer-x7etxh" data-framer-name="wrapper" style={{ padding: '0 6%', maxWidth: '1440px', margin: '0 auto' }}>
                <div className="framer-16cts0g-container">
                  <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1wwxyxw framer-1dv31s5" data-framer-name="Mobile" style={{width: '100%'}} to="/" onClick={() => setMenuOpen(false)}>
                    <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'} as any} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">Home</p>
                    </div>
                  </Link>
                </div>
                <div className="framer-66u6hk-container">
                  <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1wwxyxw framer-1dv31s5" data-framer-name="Mobile" style={{width: '100%'}} to="/articles" onClick={() => setMenuOpen(false)}>
                    <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'} as any} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">Articles</p>
                    </div>
                  </Link>
                </div>
                <div className="framer-1i4yhxm-container">
                  <a className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1wwxyxw framer-1dv31s5" data-framer-name="Mobile" style={{width: '100%'}} href="/#projects" onClick={() => setMenuOpen(false)}>
                    <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'} as any} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">Projects</p>
                    </div>
                  </a>
                </div>
                <div className="framer-1n16592-container">
                  <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1wwxyxw framer-1dv31s5" data-framer-name="Mobile" style={{width: '100%'}} to="/contact" onClick={() => setMenuOpen(false)}>
                    <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'} as any} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">Get in touch</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
