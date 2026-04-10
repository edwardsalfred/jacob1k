// @ts-nocheck
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
    <>
      {/* Desktop */}
      <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l" style={{width: '100%'}}>
        <footer className="framer-9yKWY framer-z8xZJ framer-3HVtM framer-u9Eok framer-pec35 framer-Cmb46 framer-15bkvbd framer-v-15bkvbd" data-framer-name="Desktop" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', width: '100%'}}>
          <div className="framer-1o40squ" data-framer-name="content">
            <div className="framer-1x3qpm0" data-framer-name="wrapper">
              <div className="framer-1svxqbp" data-framer-name="wrapper">
                <div className="framer-6yqgdw" data-framer-name="wrapper">
                  <div className="framer-1qy5f1n-container">
                    <Link to="/"><img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '76px', width: 'auto', display: 'block'}} /></Link>
                  </div>
                  <div className="framer-b53igs" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                      Transforming bold concepts into intuitive, high impact digital experiences that captivate users, amplify brands, and convert exploration into growth.
                    </p>
                  </div>
                </div>
                <nav className="framer-1e4ujir" data-framer-name="nav">
                  <div className="framer-1qt6x2a" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/">Home</Link>
                    </p>
                  </div>
                  <div className="framer-1220l8p" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/articles">Articles</Link>
                    </p>
                  </div>
                  <div className="framer-1nqinf3" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/#projects">Projects</Link>
                    </p>
                  </div>
                  <div className="framer-1xoirvh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/contact">Contact</Link>
                    </p>
                  </div>
                  <div className="framer-11b4dvx" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/privacy">Privacy</Link>
                    </p>
                  </div>
                  <div className="framer-y072jz" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/terms">Terms</Link>
                    </p>
                  </div>
                </nav>
              </div>
              <div className="framer-1icw2us" data-framer-name="wrapper" style={{overflow: 'visible', height: 'auto', flexWrap: 'wrap'}}>
                <div className="framer-5q20tc-container" style={{width: '100%'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', width: '100%'}}>
                    <div style={{fontSize: '14px', color: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', fontStyle: 'normal', fontWeight: '500', letterSpacing: '-0.02em', lineHeight: '1.5em'}}>© 2026 Jacob1K. All rights reserved.</div>
                    <Link to="/privacy" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Privacy Policy</Link>
                    <Link to="/terms" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Terms of Service</Link>
                    <a href="https://www.chatbotboy.ai/" target="_blank" rel="noopener noreferrer" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Created by Chatbot Boy AI</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-ojgt7v" data-framer-name="wrapper">
              <div className="framer-1t98eli" style={{mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add', WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add'}}>
                <div style={{position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0'}} data-framer-background-image-wrapper="true">
                  <img decoding="async" src="/jacobwiththehoodie-removebg-preview.png" alt="" style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center 20%', objectFit: 'contain'}} draggable="false" />
                </div>
              </div>
              <div className="framer-1ex5l0u" data-framer-name="wrapper">
                <div className="framer-1bf9gec" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                  <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE" style={{'--framer-text-alignment': 'center'}}>
                    Let's build your next big thing
                  </h3>
                </div>
                <div className="framer-xidy4q-container">
                  <Link className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-qq3djw framer-1y6mld" data-framer-name="Default" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', borderBottomLeftRadius: '2500px', borderBottomRightRadius: '2500px', borderTopLeftRadius: '2500px', borderTopRightRadius: '2500px', maxWidth: '100%', opacity: '1'}} to="/contact">
                    <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17)))'}}>Start your project</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* Tablet */}
      <div className="ssr-variant hidden-1jw10ax hidden-he6zob" style={{width: '100%'}}>
        <footer className="framer-9yKWY framer-z8xZJ framer-3HVtM framer-u9Eok framer-pec35 framer-Cmb46 framer-15bkvbd framer-v-k2e729" data-framer-name="Tablet" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', width: '100%'}}>
          <div className="framer-1o40squ" data-framer-name="content">
            <div className="framer-1x3qpm0" data-framer-name="wrapper">
              <div className="framer-1svxqbp" data-framer-name="wrapper">
                <div className="framer-6yqgdw" data-framer-name="wrapper">
                  <div className="framer-1qy5f1n-container">
                    <Link to="/"><img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '76px', width: 'auto', display: 'block'}} /></Link>
                  </div>
                  <div className="framer-b53igs" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                      Transforming bold concepts into intuitive, high impact digital experiences that captivate users, amplify brands, and convert exploration into growth.
                    </p>
                  </div>
                </div>
                <nav className="framer-1e4ujir" data-framer-name="nav">
                  <div className="framer-1qt6x2a" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/">Home</Link>
                    </p>
                  </div>
                  <div className="framer-1220l8p" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/articles">Articles</Link>
                    </p>
                  </div>
                  <div className="framer-1nqinf3" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/#projects">Projects</Link>
                    </p>
                  </div>
                  <div className="framer-1xoirvh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/contact">Contact</Link>
                    </p>
                  </div>
                  <div className="framer-11b4dvx" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/privacy">Privacy</Link>
                    </p>
                  </div>
                  <div className="framer-y072jz" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/terms">Terms</Link>
                    </p>
                  </div>
                </nav>
              </div>
              <div className="framer-1icw2us" data-framer-name="wrapper" style={{overflow: 'visible', height: 'auto', flexWrap: 'wrap'}}>
                <div className="framer-5q20tc-container" style={{width: '100%'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', width: '100%'}}>
                    <div style={{fontSize: '14px', color: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', fontStyle: 'normal', fontWeight: '500', letterSpacing: '-0.02em', lineHeight: '1.5em'}}>© 2026 Jacob1K. All rights reserved.</div>
                    <Link to="/privacy" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Privacy Policy</Link>
                    <Link to="/terms" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Terms of Service</Link>
                    <a href="https://www.chatbotboy.ai/" target="_blank" rel="noopener noreferrer" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Created by Chatbot Boy AI</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-ojgt7v" data-framer-name="wrapper">
              <div className="framer-1t98eli" style={{mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add', WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add'}}>
                <div style={{position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0'}} data-framer-background-image-wrapper="true">
                  <img decoding="async" src="/jacobwiththehoodie-removebg-preview.png" alt="" style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center 20%', objectFit: 'contain'}} draggable="false" />
                </div>
              </div>
              <div className="framer-1ex5l0u" data-framer-name="wrapper">
                <div className="framer-1bf9gec" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                  <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE" style={{'--framer-text-alignment': 'center'}}>
                    Let's build your next big thing
                  </h3>
                </div>
                <div className="framer-xidy4q-container">
                  <Link className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-qq3djw framer-1y6mld" data-framer-name="Default" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', borderBottomLeftRadius: '2500px', borderBottomRightRadius: '2500px', borderTopLeftRadius: '2500px', borderTopRightRadius: '2500px', maxWidth: '100%', opacity: '1'}} to="/contact">
                    <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17)))'}}>Start your project</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* Mobile */}
      <div className="ssr-variant hidden-1rtwx6s hidden-he6zob" style={{width: '100%'}}>
        <footer className="framer-9yKWY framer-z8xZJ framer-3HVtM framer-u9Eok framer-pec35 framer-Cmb46 framer-15bkvbd framer-v-6dhke6" data-framer-name="Mobile" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', width: '100%'}}>
          <div className="framer-1o40squ" data-framer-name="content">
            <div className="framer-1x3qpm0" data-framer-name="wrapper">
              <div className="framer-1svxqbp" data-framer-name="wrapper" style={{gap: '32px'}}>
                <div className="framer-6yqgdw" data-framer-name="wrapper">
                  <div className="framer-1qy5f1n-container">
                    <Link to="/"><img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '76px', width: 'auto', display: 'block'}} /></Link>
                  </div>
                  <div className="framer-b53igs" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-1rlcj7" data-styles-preset="XBfR5uDtL" style={{'--framer-text-alignment': 'left'}}>
                      Transforming bold concepts into intuitive, high impact digital experiences that captivate users, amplify brands, and convert exploration into growth.
                    </p>
                  </div>
                </div>
                <nav className="framer-1e4ujir" data-framer-name="nav" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridAutoRows: 'auto', gridTemplateRows: 'auto', rowGap: '16px', columnGap: '16px', height: 'auto'}}>
                  <div className="framer-1qt6x2a" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/">Home</Link>
                    </p>
                  </div>
                  <div className="framer-1220l8p" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/articles">Articles</Link>
                    </p>
                  </div>
                  <div className="framer-1nqinf3" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/#projects">Projects</Link>
                    </p>
                  </div>
                  <div className="framer-1xoirvh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/contact">Contact</Link>
                    </p>
                  </div>
                  <div className="framer-11b4dvx" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/privacy">Privacy</Link>
                    </p>
                  </div>
                  <div className="framer-y072jz" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                      <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/terms">Terms</Link>
                    </p>
                  </div>
                </nav>
              </div>
              <div className="framer-1icw2us" data-framer-name="wrapper" style={{overflow: 'visible', height: 'auto', flexWrap: 'wrap'}}>
                <div className="framer-5q20tc-container" style={{width: '100%'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', width: '100%'}}>
                    <div style={{fontSize: '14px', color: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', fontStyle: 'normal', fontWeight: '500', letterSpacing: '-0.02em', lineHeight: '1.5em'}}>© 2026 Jacob1K. All rights reserved.</div>
                    <Link to="/privacy" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Privacy Policy</Link>
                    <Link to="/terms" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Terms of Service</Link>
                    <a href="https://www.chatbotboy.ai/" target="_blank" rel="noopener noreferrer" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Created by Chatbot Boy AI</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-ojgt7v" data-framer-name="wrapper">
              <div className="framer-1t98eli" style={{mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add', WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add'}}>
                <div style={{position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0'}} data-framer-background-image-wrapper="true">
                  <img decoding="async" src="/jacobwiththehoodie-removebg-preview.png" alt="" style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center 20%', objectFit: 'contain'}} draggable="false" />
                </div>
              </div>
              <div className="framer-1ex5l0u" data-framer-name="wrapper">
                <div className="framer-1bf9gec" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                  <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE" style={{'--framer-text-alignment': 'center'}}>
                    Let's build your next big thing
                  </h3>
                </div>
                <div className="framer-xidy4q-container">
                  <Link className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-qq3djw framer-1y6mld" data-framer-name="Default" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', borderBottomLeftRadius: '2500px', borderBottomRightRadius: '2500px', borderTopLeftRadius: '2500px', borderTopRightRadius: '2500px', maxWidth: '100%', width: '100%', opacity: '1'}} to="/contact">
                    <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17)))'}}>Start your project</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
