// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import Particles from './Particles';
import PortfolioWork from './PortfolioWork';


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <>
      
    <script async="" src="https://events.framer.com/script?v=2" data-fid="8b272cedbcfc1baa425f4281baa75e2651fe3cb9ec7b9e7b6522dfc000fd1979" data-no-nt="">
    </script>
    {/*  Start of bodyStart  */}
    {/*  End of bodyStart  */}
    {/* SVG icon symbol definitions for service cards */}
    <svg style={{display: 'none'}} aria-hidden="true">
      <defs>
        <symbol id="1623269785" viewBox="0 0 24 24">
          {/* Video Editing - video camera */}
          <polygon points="23 7 16 12 23 17 23 7" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </symbol>
        <symbol id="1765663906" viewBox="0 0 24 24">
          {/* Music Videos - music notes */}
          <path d="M9 18V5l12-2v13" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="6" cy="18" r="3" fill="none" stroke="white" strokeWidth="1.5"/>
          <circle cx="18" cy="16" r="3" fill="none" stroke="white" strokeWidth="1.5"/>
        </symbol>
        <symbol id="3076148817" viewBox="0 0 24 24">
          {/* Social Media Marketing - share */}
          <circle cx="18" cy="5" r="3" fill="none" stroke="white" strokeWidth="1.5"/>
          <circle cx="6" cy="12" r="3" fill="none" stroke="white" strokeWidth="1.5"/>
          <circle cx="18" cy="19" r="3" fill="none" stroke="white" strokeWidth="1.5"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </symbol>
        <symbol id="800733362" viewBox="0 0 24 24">
          {/* Podcast Editing / Drone Videos - microphone */}
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="8" y1="23" x2="16" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </symbol>
      </defs>
    </svg>

    <div id="main" data-framer-hydrate-v2="{&#34;routeId&#34;:&#34;augiA20Il&#34;,&#34;localeId&#34;:&#34;default&#34;,&#34;breakpoints&#34;:[{&#34;hash&#34;:&#34;72rtr7&#34;,&#34;mediaQuery&#34;:&#34;(min-width: 1200px)&#34;},{&#34;hash&#34;:&#34;1dy4dcp&#34;,&#34;mediaQuery&#34;:&#34;(min-width: 810px) and (max-width: 1199px)&#34;},{&#34;hash&#34;:&#34;f2wq4l&#34;,&#34;mediaQuery&#34;:&#34;(max-width: 809px)&#34;},{&#34;hash&#34;:&#34;he6zob&#34;,&#34;mediaQuery&#34;:&#34;(min-width: 1200px)&#34;},{&#34;hash&#34;:&#34;1rtwx6s&#34;,&#34;mediaQuery&#34;:&#34;(min-width: 810px) and (max-width: 1199px)&#34;},{&#34;hash&#34;:&#34;1jw10ax&#34;,&#34;mediaQuery&#34;:&#34;(max-width: 809px)&#34;}]}" data-framer-ssr-released-at="2025-07-23T07:48:11.716Z" data-framer-page-optimized-at="2025-07-28T11:21:02.869Z" data-framer-generated-page="">
      {/* $ */}
      <style data-framer-html-style={{}} dangerouslySetInnerHTML={{__html: ':root body { background: var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0)); }'}} />
      <div className="framer-i3OY7 framer-he6zob" data-layout-template="true" style={{minHeight: '100vh', width: 'auto'}}>
        <div className="framer-1rctyl8-container" data-code-component-plugin-id="84d4c1" data-framer-name="Background" name="Background">
          {/* $ */}
          <div style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}>
            {/* Dominicus-style background: canvas starfield + blue glow vignettes */}
            <Particles />
            <div className="bg-glow-top" />
            <div className="bg-glow-bottom" />
            <div className="bg-noise" />
          </div>
          {/* /$ */}
        </div>
        <div className="framer-1tzjxip-container" data-framer-layout-hint-center-x="true">
          <div className="ssr-variant hidden-1jw10ax">
            <div className={`framer-Gice7 framer-wfq30t ${menuOpen ? 'framer-v-d51zca' : 'framer-v-15m6der'}`} data-framer-name="Desktop - Off" style={{width: '100%'}}>
              <div className="framer-194evps" data-framer-name="Background" data-highlight="true" style={{backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)'}} tabindex="0">
              </div>
              <header className="framer-1fiv5us" data-framer-name="header" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 97.74774774774775%)'}}>
                <nav className="framer-12fwuhv" data-framer-name="content">
                  <div className="framer-16mznv0" data-framer-name="wrapper">
                    <div className="framer-1izoyka-container">
                      {/* $ */}
                      <a className="framer-HOJPI framer-VuWFR framer-13obwic framer-v-13obwic framer-1te0x0d" data-framer-name="Default" data-highlight="true" href="./" data-framer-page-link-current="true" tabindex="0">                      <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '72px', width: 'auto', display: 'block'}} />
</a>
                      {/* /$ */}
                    </div>
                    <div className="framer-1fsbdi0-container">
                      <div className={`framer-26mG5 framer-1i3853m ${menuOpen ? 'framer-v-j0njfn' : 'framer-v-1i3853m'}`} data-framer-name="Inactive" data-highlight="true" style={{height: '100%', width: '100%', cursor: 'pointer'}} tabindex="0" onClick={() => setMenuOpen(o => !o)}>
                        <div className="framer-1j0133v" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px', transform: 'none'}}>
                        </div>
                        <div className="framer-l6qwvu" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px'}}>
                        </div>
                        <div className="framer-hjv6oz" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px', transform: 'none'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
              <div className="framer-5lszq" data-framer-name="navigation" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))'}}>
                <div className="framer-3y05gb" data-framer-name="content" style={{opacity: menuOpen ? '1' : '0'}}>
                  <div className="framer-x7etxh" data-framer-name="wrapper">
                    {/* $ */}
                    <div className="framer-16cts0g-container">
                      {/* $ */}
                      <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1ak38fk framer-1dv31s5" data-framer-name="Default" style={{width: '100%'}} to="/">                      <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">
                          Home
                        </p>
                      </div>
                      <div className="framer-fxw977" data-framer-name="Line" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', opacity: '0'}}>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                    {/* $ */}
                    <div className="framer-66u6hk-container">
                      {/* $ */}
                      <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1ak38fk framer-1dv31s5" data-framer-name="Default" style={{width: '100%'}} to="/articles">                      <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">
                          Articles
                        </p>
                      </div>
                      <div className="framer-fxw977" data-framer-name="Line" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', opacity: '0'}}>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                    {/* $ */}
                    <div className="framer-1i4yhxm-container">
                      {/* $ */}
                      <a className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1ak38fk framer-1dv31s5" data-framer-name="Default" style={{width: '100%'}} href="#projects" onClick={() => setMenuOpen(false)}>                      <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">
                          Projects
                        </p>
                      </div>
                      <div className="framer-fxw977" data-framer-name="Line" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', opacity: '0'}}>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                    {/* $ */}
                    <div className="framer-1n16592-container">
                      {/* $ */}
                      <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1ak38fk framer-1dv31s5" data-framer-name="Default" style={{width: '100%'}} to="/contact">                      <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">
                          Get in touch
                        </p>
                      </div>
                      <div className="framer-fxw977" data-framer-name="Line" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', opacity: '0'}}>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant hidden-1rtwx6s hidden-he6zob">
            <div className={`framer-Gice7 framer-wfq30t ${menuOpen ? 'framer-v-d51zca' : 'framer-v-2qk1ce'}`} data-framer-name="Mobile - Off" style={{width: '100%'}}>
              <div className="framer-194evps" data-framer-name="Background" style={{backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)'}}>
              </div>
              <header className="framer-1fiv5us" data-framer-name="header" style={{background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 97.74774774774775%)'}}>
                <nav className="framer-12fwuhv" data-framer-name="content">
                  <div className="framer-16mznv0" data-framer-name="wrapper">
                    <div className="framer-1izoyka-container">
                      {/* $ */}
                      <a className="framer-HOJPI framer-VuWFR framer-13obwic framer-v-13obwic framer-1te0x0d" data-framer-name="Default" data-highlight="true" href="./" data-framer-page-link-current="true" tabindex="0">                      <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '72px', width: 'auto', display: 'block'}} />
</a>
                      {/* /$ */}
                    </div>
                    <div className="framer-1fsbdi0-container">
                      <div className={`framer-26mG5 framer-1i3853m ${menuOpen ? 'framer-v-j0njfn' : 'framer-v-1i3853m'}`} data-framer-name="Inactive" data-highlight="true" style={{height: '100%', width: '100%', cursor: 'pointer'}} tabindex="0" onClick={() => setMenuOpen(o => !o)}>
                        <div className="framer-1j0133v" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px', transform: 'none'}}>
                        </div>
                        <div className="framer-l6qwvu" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px'}}>
                        </div>
                        <div className="framer-hjv6oz" data-framer-name="Line" style={{backgroundColor: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', borderBottomLeftRadius: '1000px', borderBottomRightRadius: '1000px', borderTopLeftRadius: '1000px', borderTopRightRadius: '1000px', transform: 'none'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
              <div className="framer-5lszq" data-framer-name="navigation" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))'}}>
                <div className="framer-3y05gb" data-framer-name="content" style={{opacity: menuOpen ? '1' : '0'}}>
                  <div className="framer-x7etxh" data-framer-name="wrapper">
                    {/* $ */}
                    <div className="framer-16cts0g-container">
                      {/* $ */}
                      <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1wwxyxw framer-1dv31s5" data-framer-name="Mobile" style={{width: '100%'}} to="/">                      <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">
                          Home
                        </p>
                      </div>
                      <div className="framer-fxw977" data-framer-name="Line" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', opacity: '0'}}>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                    {/* $ */}
                    <div className="framer-66u6hk-container">
                      {/* $ */}
                      <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1wwxyxw framer-1dv31s5" data-framer-name="Mobile" style={{width: '100%'}} to="/articles">                      <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">
                          Articles
                        </p>
                      </div>
                      <div className="framer-fxw977" data-framer-name="Line" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', opacity: '0'}}>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                    {/* $ */}
                    <div className="framer-1i4yhxm-container">
                      {/* $ */}
                      <a className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1wwxyxw framer-1dv31s5" data-framer-name="Mobile" style={{width: '100%'}} href="#projects" onClick={() => setMenuOpen(false)}>                      <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">
                          Projects
                        </p>
                      </div>
                      <div className="framer-fxw977" data-framer-name="Line" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', opacity: '0'}}>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                    {/* $ */}
                    <div className="framer-1n16592-container">
                      {/* $ */}
                      <Link className="framer-iNDTq framer-V2ibY framer-1ak38fk framer-v-1wwxyxw framer-1dv31s5" data-framer-name="Mobile" style={{width: '100%'}} to="/contact">                      <div className="framer-18gnjd5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-v5wz0l" data-styles-preset="HqO5DcEhi">
                          Get in touch
                        </p>
                      </div>
                      <div className="framer-fxw977" data-framer-name="Line" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', opacity: '0'}}>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style data-framer-html-style={{}} dangerouslySetInnerHTML={{__html: 'html body { background: var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0)); }'}} />
        <div data-framer-root="" className="framer-SE1iI framer-ujTCN framer-4DSQ7 framer-pec35 framer-72rtr7" style={{minHeight: '100vh', width: 'auto', display: 'contents'}}>
          <section className="framer-h77pal" data-framer-name="hero">
            <div className="framer-m9g7ev" data-framer-name="content">
              <div className="ssr-variant hidden-f2wq4l">
                <div className="framer-1a7qf8j">
                  <div style={{position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0'}} data-framer-background-image-wrapper="true">
                    <img decoding="async" width="974" height="1536" sizes="(min-width: 1200px) 600px, (min-width: 810px) and (max-width: 1199px) 600px, (max-width: 809px) 390px" src="/Jacob_Front_Image-removebg-preview.png" alt="" style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center top', objectFit: 'cover'}} draggable="false" data-framer-original-sizes="600px" />
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                <div className="framer-1a7qf8j">
                  <div style={{position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0'}} data-framer-background-image-wrapper="true">
                    <img decoding="async" width="974" height="1536" sizes="(min-width: 1200px) 600px, (min-width: 810px) and (max-width: 1199px) 600px, (max-width: 809px) 390px" src="/Jacob_Front_Image-removebg-preview.png" alt="" style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center top', objectFit: 'cover'}} draggable="false" data-framer-original-sizes="390px" />
                  </div>
                </div>
              </div>
              <div className="framer-1hkaut7" data-framer-name="wrapper">
                <div className="framer-1tono1f" data-framer-name="wrapper">
                  <div className="framer-1t7lbrk" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <h1 className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center'}}>
                      I'm Jacob,
                    </h1>
                  </div>
                  <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                    <div className="framer-1p5hqfu-container">
                      <div className="framer-KC7jT framer-ujTCN framer-w0owup framer-v-w0owup" data-framer-name="First" data-highlight="true" style={{height: '100%', width: '100%'}}>
                        <div className="framer-1o32dkd" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)))'}}>
                            VIDEOGRAPHER.
                          </p>
                        </div>
                        <div className="framer-1seqat5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)))'}}>
                            WEB DEVELOPER.
                          </p>
                        </div>
                        <div className="framer-q1wc4f" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)))'}}>
                            WEB STRATEGIST.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                    <div className="framer-1p5hqfu-container">
                      <div className="framer-KC7jT framer-ujTCN framer-w0owup framer-v-w0owup" data-framer-name="First" data-highlight="true" style={{height: '100%', width: '100%'}}>
                        <div className="framer-1o32dkd" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)))'}}>
                            VIDEOGRAPHER.
                          </p>
                        </div>
                        <div className="framer-1seqat5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)))'}}>
                            WEB DEVELOPER.
                          </p>
                        </div>
                        <div className="framer-q1wc4f" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)))'}}>
                            WEB STRATEGIST.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                    <div className="framer-1p5hqfu-container">
                      <div className="framer-KC7jT framer-ujTCN framer-w0owup framer-v-w0owup" data-framer-name="First" data-highlight="true" style={{height: '100%', width: '100%'}}>
                        <div className="framer-1o32dkd" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)))'}}>
                            VIDEOGRAPHER.
                          </p>
                        </div>
                        <div className="framer-1seqat5" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)))'}}>
                            WEB DEVELOPER.
                          </p>
                        </div>
                        <div className="framer-q1wc4f" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-1he25hm" data-styles-preset="Whfp6oF34" style={{'--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)))'}}>
                            WEB STRATEGIST.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-izbr7n" data-framer-name="wrapper">
                  {/* $ */}
                  <div className="ssr-variant hidden-f2wq4l">
                    <div className="framer-11j8644-container">
                      {/* $ */}
                      <Link className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-qq3djw framer-1y6mld" data-framer-name="Default" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', borderBottomLeftRadius: '2500px', borderBottomRightRadius: '2500px', borderTopLeftRadius: '2500px', borderTopRightRadius: '2500px', maxWidth: '100%', opacity: '1'}} to="/contact">                      <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17)))'}}>
                          Get in touch
                        </p>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                    <div className="framer-11j8644-container">
                      {/* $ */}
                      <Link className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-qq3djw framer-1y6mld" data-framer-name="Default" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', borderBottomLeftRadius: '2500px', borderBottomRightRadius: '2500px', borderTopLeftRadius: '2500px', borderTopRightRadius: '2500px', maxWidth: '100%', width: '100%', opacity: '1'}} to="/contact">                      <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17)))'}}>
                          Get in touch
                        </p>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                  </div>
                  {/* /$ */}
                  {/* $ */}
                  <div className="ssr-variant hidden-f2wq4l">
                    <div className="framer-nogdgp-container">
                      {/* $ */}
                      <a className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-4mrmyx framer-1y6mld" data-framer-name="Alternative" style={{backgroundColor: 'rgba(0, 0, 0, 0)', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', maxWidth: '100%', opacity: '1'}} href="#projects">                      <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          See my projects
                        </p>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                    <div className="framer-nogdgp-container">
                      {/* $ */}
                      <a className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-4mrmyx framer-1y6mld" data-framer-name="Alternative" style={{backgroundColor: 'rgba(0, 0, 0, 0)', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', maxWidth: '100%', width: '100%', opacity: '1'}} href="#projects">                      <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          See my projects
                        </p>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  {/* /$ */}
                </div>
              </div>
            </div>
          </section>
          <div style={{width: '100%', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', background: 'rgb(0, 0, 0)', overflow: 'hidden'}}>
            <p style={{color: 'rgba(153, 153, 153, 0.6)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0', fontFamily: 'inherit'}}>Tools &amp; AI I work with</p>
            <div style={{width: '100%', overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'}}>
              <div className="marquee-track" style={{display: 'flex', gap: '48px', alignItems: 'center', whiteSpace: 'nowrap', width: 'max-content'}}>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>Adobe Premiere</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>CapCut</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>HeyGen</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>Claude</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>Nano Banana</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>Kling</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>VEO 3.1</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>Adobe Premiere</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>CapCut</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>HeyGen</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>Claude</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>Nano Banana</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>Kling</span>
                <span style={{color: 'rgba(153, 153, 153, 0.3)', fontSize: '20px'}}>·</span>
                <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px', fontWeight: '500', fontFamily: 'inherit'}}>VEO 3.1</span>
              </div>
            </div>
          </div>
          <section className="framer-1rk5yxv" data-framer-name="about">
            <div className="framer-acty02" data-framer-name="content">
              <div className="ssr-variant hidden-f2wq4l">
                <div className="framer-mt1gym-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        About
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                <div className="framer-mt1gym-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        About
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-wy2cua" data-framer-name="wrapper">
                <div className="framer-15i9k0m" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', transform: 'none'}} data-framer-component-type="RichTextContainer">
                  <h3 className="framer-text framer-styles-preset-16e5bus" data-styles-preset="kK_Tgea3Q">
                    My craft lives where design meets code, merging elegant visuals with solid engineering to deliver web experiences that feel effortless, engaging, and alive on every device.
                  </h3>
                </div>
                <div className="framer-gxr08c" data-framer-name="wrapper">
                  <div className="framer-19pej3y" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', transform: 'none'}} data-framer-component-type="RichTextContainer">
                    <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-alignment': 'left'}}>
                      I’m Dominicus, a freelance designer-developer who prototypes in Figma and Framer, documents road-maps in Notion, version-controls code on GitHub, and ships lightning-fast sites to Vercel. Each project starts with research: I map user goals, content flow, and performance targets before sketching wireframes. Framer then brings interactions to life, while GitHub Actions run automated tests that safeguard quality. Notion keeps briefs, timelines, and analytics in one shared workspace, ensuring feedback loops stay tight. The outcome is a clean, accessible interface that loads in a blink and keeps evolving through data-driven refinements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="framer-h1as7c" data-framer-name="services" id="services">
            <div className="framer-1vasyet" data-framer-name="content">
              <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                <div className="framer-1hsz4c4-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        Services
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                <div className="framer-1hsz4c4-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        Services
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                <div className="framer-1hsz4c4-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        Services
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-kkeui1" data-framer-name="wrapper">
                <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                  <div className="framer-79def1-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-A4Q1Q framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#1623269785">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Video Editing
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                            High-quality, dynamic video editing tailored to engage your audience and tell your brand story.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                  <div className="framer-79def1-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-A4Q1Q framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#1623269785">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Video Editing
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                            High-quality, dynamic video editing tailored to engage your audience and tell your brand story.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                  <div className="framer-79def1-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-A4Q1Q framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#1623269785">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Video Editing
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                            High-quality, dynamic video editing tailored to engage your audience and tell your brand story.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                  <div className="framer-zl6a7w-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-icXAD framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#1765663906">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Music Videos
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                            Creative and industry-standard music video production and editing to bring your artistic vision to life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                  <div className="framer-zl6a7w-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-icXAD framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#1765663906">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Music Videos
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                            Creative and industry-standard music video production and editing to bring your artistic vision to life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                  <div className="framer-zl6a7w-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-icXAD framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#1765663906">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Music Videos
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                            Creative and industry-standard music video production and editing to bring your artistic vision to life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                  <div className="framer-1gqp7gv-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-qlGUT framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#3076148817">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Social Media Marketing Videos
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                            Short-form, high-retention video content optimized for TikTok, Instagram Reels, and YouTube Shorts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                  <div className="framer-1gqp7gv-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-qlGUT framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#3076148817">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Social Media Marketing Videos
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                            Short-form, high-retention video content optimized for TikTok, Instagram Reels, and YouTube Shorts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                  <div className="framer-1gqp7gv-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-qlGUT framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#3076148817">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Social Media Marketing Videos
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                            Short-form, high-retention video content optimized for TikTok, Instagram Reels, and YouTube Shorts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                  <div className="framer-13v92e8-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-E8Br1 framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#800733362">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Podcast Editing
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                  <div className="framer-13v92e8-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-E8Br1 framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#800733362">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Podcast Editing
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                  <div className="framer-13v92e8-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-E8Br1 framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#800733362">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Podcast Editing
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>Professional multi-cam podcast editing, audio cleanup, and clipping for promotional use.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                  <div className="framer-13v92e8-container">
                    <div className="framer-R3Cyr framer-Cmb46 framer-z8xZJ framer-7jkgu7 framer-v-7jkgu7" data-framer-name="Default" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                      <div className="framer-136d8os" data-border="true" data-framer-name="button" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
                        <svg className="framer-E8Br1 framer-1ppqmmi" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5'}} viewBox="0 0 24 24">
                          <use href="#800733362">
                          </use>
                        </svg>
                      </div>
                      <div className="framer-1c9eaee" data-framer-name="wrapper">
                        <div className="framer-1qfureh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                            Drone Videos
                          </h3>
                        </div>
                        <div className="framer-1ijr2sb" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>Breathtaking aerial cinematography that captures your projects, events, or real estate from an unforgettable perspective.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="projects" className="framer-x1dgnz" data-framer-name="projects">
            <PortfolioWork />
          </section>
          <section className="framer-uudsc8" data-framer-name="testimonials">
            <div className="framer-pse8bq" data-framer-name="content">
              <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                <div className="framer-cn3xz9-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{maxWidth: '100%', width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        Testimonials
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                <div className="framer-cn3xz9-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{maxWidth: '100%', width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        Testimonials
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                <div className="framer-cn3xz9-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{maxWidth: '100%', width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        Testimonials
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-4vc7dg" data-framer-name="content">
              <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                <div className="framer-945edz-container">
                  <div className="framer-MWgD5 framer-115vq2g framer-v-115vq2g" data-framer-name="Desktop" style={{width: '100%'}}>
                    <div className="framer-c9so7t-container">
                      {/* $ */}
                      <section style={{display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0', padding: '0px', listStyleType: 'none', textIndent: 'none', opacity: '1', WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', overflow: 'hidden'}}>
                        <ul className="testimonial-track-left" style={{margin: '0', padding: '0', listStyleType: 'none', textIndent: 'none'}}>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-1ywxh7m-container" data-framer-name="1" name="1" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="1" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Transformed our outdated site into a sleek, responsive hub that delights visitors and drives more qualified leads daily.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      James Reed
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-15gc0o2-container" data-framer-name="2" name="2" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="2" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Clean, intuitive layouts dramatically raised conversions and kept navigation entirely effortless for satisfied visitors.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Sarah Lopez
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-1hduuv7-container" data-framer-name="3" name="3" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="3" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Responsive build slashed load times, boosting engagement across devices and elevating our brand&#39;s credibility instantly.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      David Kim
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-bdu5pr-container" data-framer-name="4" name="4" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="4" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Elegant motion effects refine each scroll, encouraging visitors to explore content a bit deeper and stay engaged longer.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Olivia Grant
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-1ywxh7m-container" data-framer-name="1" name="1" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="1" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Transformed our outdated site into a sleek, responsive hub that delights visitors and drives more qualified leads daily.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      James Reed
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-15gc0o2-container" data-framer-name="2" name="2" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="2" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Clean, intuitive layouts dramatically raised conversions and kept navigation entirely effortless for satisfied visitors.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Sarah Lopez
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-1hduuv7-container" data-framer-name="3" name="3" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="3" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Responsive build slashed load times, boosting engagement across devices and elevating our brand&#39;s credibility instantly.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      David Kim
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-bdu5pr-container" data-framer-name="4" name="4" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="4" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Elegant motion effects refine each scroll, encouraging visitors to explore content a bit deeper and stay engaged longer.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Olivia Grant
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                      {/* /$ */}
                    </div>
                    <div className="framer-q2a7z5-container">
                      {/* $ */}
                      <section style={{display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0', padding: '0px', listStyleType: 'none', textIndent: 'none', opacity: '1', WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', overflow: 'hidden'}}>
                        <ul className="testimonial-track-right" style={{margin: '0', padding: '0', listStyleType: 'none', textIndent: 'none'}}>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-5yxa9y-container" data-framer-name="5" name="5" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="5" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Seamless backend integration saved hours, ensured safe data flow, enabled scalability and delivered daily peace of mind.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Mark Patel
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-grv5e2-container" data-framer-name="6" name="6" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="6" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      CMS setup lets you update text code-free; edits are speedy as new posts publish in minutes, keeping the website current.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Emily Chen
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-165cisl-container" data-framer-name="7" name="7" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="7" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Clear communication kept the project on schedule, maintaining expectations and preventing surprises during delivery now.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Lucas Meyer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-v0du2z-container" data-framer-name="8" name="8" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="8" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Post-launch support stays prompt, keeping the site secure, optimized and running smoothly for every visitor at any hour.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Hannah Brooks
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-5yxa9y-container" data-framer-name="5" name="5" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="5" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Seamless backend integration saved hours, ensured safe data flow, enabled scalability and delivered daily peace of mind.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Mark Patel
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-grv5e2-container" data-framer-name="6" name="6" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="6" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      CMS setup lets you update text code-free; edits are speedy as new posts publish in minutes, keeping the website current.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Emily Chen
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-165cisl-container" data-framer-name="7" name="7" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="7" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Clear communication kept the project on schedule, maintaining expectations and preventing surprises during delivery now.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Lucas Meyer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-v0du2z-container" data-framer-name="8" name="8" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="8" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Post-launch support stays prompt, keeping the site secure, optimized and running smoothly for every visitor at any hour.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Hannah Brooks
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                      {/* /$ */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                <div className="framer-945edz-container">
                  <div className="framer-MWgD5 framer-115vq2g framer-v-115vq2g" data-framer-name="Desktop" style={{width: '100%'}}>
                    <div className="framer-c9so7t-container">
                      {/* $ */}
                      <section style={{display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0', padding: '0px', listStyleType: 'none', textIndent: 'none', opacity: '1', WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', overflow: 'hidden'}}>
                        <ul className="testimonial-track-left" style={{margin: '0', padding: '0', listStyleType: 'none', textIndent: 'none'}}>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-1ywxh7m-container" data-framer-name="1" name="1" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="1" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Transformed our outdated site into a sleek, responsive hub that delights visitors and drives more qualified leads daily.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      James Reed
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-15gc0o2-container" data-framer-name="2" name="2" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="2" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Clean, intuitive layouts dramatically raised conversions and kept navigation entirely effortless for satisfied visitors.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Sarah Lopez
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-1hduuv7-container" data-framer-name="3" name="3" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="3" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Responsive build slashed load times, boosting engagement across devices and elevating our brand&#39;s credibility instantly.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      David Kim
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-bdu5pr-container" data-framer-name="4" name="4" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="4" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Elegant motion effects refine each scroll, encouraging visitors to explore content a bit deeper and stay engaged longer.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Olivia Grant
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-1ywxh7m-container" data-framer-name="1" name="1" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="1" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Transformed our outdated site into a sleek, responsive hub that delights visitors and drives more qualified leads daily.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      James Reed
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-15gc0o2-container" data-framer-name="2" name="2" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="2" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Clean, intuitive layouts dramatically raised conversions and kept navigation entirely effortless for satisfied visitors.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Sarah Lopez
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-1hduuv7-container" data-framer-name="3" name="3" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="3" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Responsive build slashed load times, boosting engagement across devices and elevating our brand&#39;s credibility instantly.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      David Kim
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-bdu5pr-container" data-framer-name="4" name="4" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="4" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Elegant motion effects refine each scroll, encouraging visitors to explore content a bit deeper and stay engaged longer.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Olivia Grant
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                      {/* /$ */}
                    </div>
                    <div className="framer-q2a7z5-container">
                      {/* $ */}
                      <section style={{display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0', padding: '0px', listStyleType: 'none', textIndent: 'none', opacity: '1', WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', overflow: 'hidden'}}>
                        <ul className="testimonial-track-right" style={{margin: '0', padding: '0', listStyleType: 'none', textIndent: 'none'}}>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-5yxa9y-container" data-framer-name="5" name="5" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="5" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Seamless backend integration saved hours, ensured safe data flow, enabled scalability and delivered daily peace of mind.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Mark Patel
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-grv5e2-container" data-framer-name="6" name="6" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="6" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      CMS setup lets you update text code-free; edits are speedy as new posts publish in minutes, keeping the website current.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Emily Chen
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-165cisl-container" data-framer-name="7" name="7" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="7" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Clear communication kept the project on schedule, maintaining expectations and preventing surprises during delivery now.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Lucas Meyer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-v0du2z-container" data-framer-name="8" name="8" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="8" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Post-launch support stays prompt, keeping the site secure, optimized and running smoothly for every visitor at any hour.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Hannah Brooks
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-5yxa9y-container" data-framer-name="5" name="5" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="5" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Seamless backend integration saved hours, ensured safe data flow, enabled scalability and delivered daily peace of mind.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Mark Patel
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-grv5e2-container" data-framer-name="6" name="6" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="6" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      CMS setup lets you update text code-free; edits are speedy as new posts publish in minutes, keeping the website current.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Emily Chen
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-165cisl-container" data-framer-name="7" name="7" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="7" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Clear communication kept the project on schedule, maintaining expectations and preventing surprises during delivery now.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Lucas Meyer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li style={{width: '380px', height: '100%'}}>
                            <div className="framer-v0du2z-container" data-framer-name="8" name="8" style={{width: '380px', height: '100%', flexShrink: '0'}}>
                              <div name="8" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                <div className="framer-1ete0uc" data-framer-name="button">
                                  <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                  <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                    <use href="#2930526878">
                                    </use>
                                  </svg>
                                </div>
                                <div className="framer-15rysuf" data-framer-name="wrapper">
                                  <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                      Post-launch support stays prompt, keeping the site secure, optimized and running smoothly for every visitor at any hour.
                                    </p>
                                  </div>
                                  <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                    <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                      Hannah Brooks
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </section>
                      {/* /$ */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                <div className="framer-945edz-container">
                  <div className="framer-MWgD5 framer-115vq2g framer-v-ctjexb" data-framer-name="Mobile" style={{width: '100%'}}>
                    <div className="framer-kwovn1-container">
                      {/* $ */}
                      <section style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0', padding: '0px 40px 0px 40px', listStyleType: 'none', textIndent: 'none', opacity: '1', userSelect: 'none'}}>
                        <div style={{width: '100%', height: '100%', margin: '0', padding: 'inherit', position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '0', userSelect: 'none', perspective: '1200px'}}>
                          <ul style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: '0', padding: '0', listStyleType: 'none', textIndent: 'none', gap: '28px', cursor: 'grab', userSelect: 'none', transform: `translateX(calc(-1 * (100% + 28px) * ${testimonialIndex}))`, transition: 'transform 0.5s ease-in-out', WebkitTouchCallout: 'none', WebkitUserSelect: 'none', touchAction: 'pan-y'}} draggable="false">
                            <li style={{display: 'contents'}} aria-hidden="false">
                              <div className="framer-1ywxh7m-container" data-framer-name="1" name="1" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="1" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Transformed our outdated site into a sleek, responsive hub that delights visitors and drives more qualified leads daily.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        James Reed
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="false">
                              <div className="framer-15gc0o2-container" data-framer-name="2" name="2" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="2" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Clean, intuitive layouts dramatically raised conversions and kept navigation entirely effortless for satisfied visitors.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Sarah Lopez
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="false">
                              <div className="framer-1hduuv7-container" data-framer-name="3" name="3" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="3" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Responsive build slashed load times, boosting engagement across devices and elevating our brand&#39;s credibility instantly.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        David Kim
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="false">
                              <div className="framer-bdu5pr-container" data-framer-name="4" name="4" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="4" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Elegant motion effects refine each scroll, encouraging visitors to explore content a bit deeper and stay engaged longer.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Olivia Grant
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="false">
                              <div className="framer-5yxa9y-container" data-framer-name="5" name="5" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="5" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Seamless backend integration saved hours, ensured safe data flow, enabled scalability and delivered daily peace of mind.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Mark Patel
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="false">
                              <div className="framer-grv5e2-container" data-framer-name="6" name="6" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="6" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        CMS setup lets you update text code-free; edits are speedy as new posts publish in minutes, keeping the website current.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Emily Chen
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="false">
                              <div className="framer-165cisl-container" data-framer-name="7" name="7" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="7" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Clear communication kept the project on schedule, maintaining expectations and preventing surprises during delivery now.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Lucas Meyer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="false">
                              <div className="framer-v0du2z-container" data-framer-name="8" name="8" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="8" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Post-launch support stays prompt, keeping the site secure, optimized and running smoothly for every visitor at any hour.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Hannah Brooks
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-1ywxh7m-container" data-framer-name="1" name="1" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="1" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Transformed our outdated site into a sleek, responsive hub that delights visitors and drives more qualified leads daily.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        James Reed
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-15gc0o2-container" data-framer-name="2" name="2" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="2" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Clean, intuitive layouts dramatically raised conversions and kept navigation entirely effortless for satisfied visitors.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Sarah Lopez
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-1hduuv7-container" data-framer-name="3" name="3" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="3" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Responsive build slashed load times, boosting engagement across devices and elevating our brand&#39;s credibility instantly.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        David Kim
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-bdu5pr-container" data-framer-name="4" name="4" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="4" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Elegant motion effects refine each scroll, encouraging visitors to explore content a bit deeper and stay engaged longer.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Olivia Grant
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-5yxa9y-container" data-framer-name="5" name="5" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="5" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Seamless backend integration saved hours, ensured safe data flow, enabled scalability and delivered daily peace of mind.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Mark Patel
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-grv5e2-container" data-framer-name="6" name="6" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="6" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        CMS setup lets you update text code-free; edits are speedy as new posts publish in minutes, keeping the website current.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Emily Chen
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-165cisl-container" data-framer-name="7" name="7" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="7" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Clear communication kept the project on schedule, maintaining expectations and preventing surprises during delivery now.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Lucas Meyer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-v0du2z-container" data-framer-name="8" name="8" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="8" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Post-launch support stays prompt, keeping the site secure, optimized and running smoothly for every visitor at any hour.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Hannah Brooks
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-1ywxh7m-container" data-framer-name="1" name="1" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'visible', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="1" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Transformed our outdated site into a sleek, responsive hub that delights visitors and drives more qualified leads daily.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        James Reed
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-15gc0o2-container" data-framer-name="2" name="2" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="2" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Clean, intuitive layouts dramatically raised conversions and kept navigation entirely effortless for satisfied visitors.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Sarah Lopez
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-1hduuv7-container" data-framer-name="3" name="3" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="3" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Responsive build slashed load times, boosting engagement across devices and elevating our brand&#39;s credibility instantly.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        David Kim
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-bdu5pr-container" data-framer-name="4" name="4" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="4" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Elegant motion effects refine each scroll, encouraging visitors to explore content a bit deeper and stay engaged longer.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Olivia Grant
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-5yxa9y-container" data-framer-name="5" name="5" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="5" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Seamless backend integration saved hours, ensured safe data flow, enabled scalability and delivered daily peace of mind.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Mark Patel
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-grv5e2-container" data-framer-name="6" name="6" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="6" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        CMS setup lets you update text code-free; edits are speedy as new posts publish in minutes, keeping the website current.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Emily Chen
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-165cisl-container" data-framer-name="7" name="7" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="7" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Clear communication kept the project on schedule, maintaining expectations and preventing surprises during delivery now.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Lucas Meyer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-v0du2z-container" data-framer-name="8" name="8" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="8" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Post-launch support stays prompt, keeping the site secure, optimized and running smoothly for every visitor at any hour.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Hannah Brooks
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-1ywxh7m-container" data-framer-name="1" name="1" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="1" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Transformed our outdated site into a sleek, responsive hub that delights visitors and drives more qualified leads daily.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        James Reed
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-15gc0o2-container" data-framer-name="2" name="2" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="2" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Clean, intuitive layouts dramatically raised conversions and kept navigation entirely effortless for satisfied visitors.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Sarah Lopez
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-1hduuv7-container" data-framer-name="3" name="3" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="3" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Responsive build slashed load times, boosting engagement across devices and elevating our brand&#39;s credibility instantly.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        David Kim
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-bdu5pr-container" data-framer-name="4" name="4" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="4" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Elegant motion effects refine each scroll, encouraging visitors to explore content a bit deeper and stay engaged longer.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Olivia Grant
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-5yxa9y-container" data-framer-name="5" name="5" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="5" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Seamless backend integration saved hours, ensured safe data flow, enabled scalability and delivered daily peace of mind.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Mark Patel
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-grv5e2-container" data-framer-name="6" name="6" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="6" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        CMS setup lets you update text code-free; edits are speedy as new posts publish in minutes, keeping the website current.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Emily Chen
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-165cisl-container" data-framer-name="7" name="7" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="7" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Clear communication kept the project on schedule, maintaining expectations and preventing surprises during delivery now.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Lucas Meyer
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li style={{display: 'contents'}} aria-hidden="true">
                              <div className="framer-v0du2z-container" data-framer-name="8" name="8" style={{flexShrink: '0', userSelect: 'none', width: '100%', height: '100%', opacity: '1', visibility: 'hidden', transform: 'none', transformOrigin: '100% 50% 0'}}>
                                <div name="8" className="framer-FHGpD framer-z8xZJ framer-Cmb46 framer-oz4ovi framer-v-oz4ovi" data-framer-name="star-5" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153)), inset 0px -3px 2px -1px var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', height: '100%', width: '100%'}}>
                                  <div className="framer-1ete0uc" data-framer-name="button">
                                    <svg className="framer-YnhV6 framer-mpvb2d" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-12uyprg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-16vmer0" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-19qblpo" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                    <svg className="framer-YnhV6 framer-cupogg" role="presentation" style={{'--1m6trwb': '1', '--21h8s6': 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', '--pgex8v': '0'}} viewBox="0 0 24 24">
                                      <use href="#2930526878">
                                      </use>
                                    </svg>
                                  </div>
                                  <div className="framer-15rysuf" data-framer-name="wrapper">
                                    <div className="framer-1vlw7yy" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-alignment': 'left'}}>
                                        Post-launch support stays prompt, keeping the site secure, optimized and running smoothly for every visitor at any hour.
                                      </p>
                                    </div>
                                    <div className="framer-1w3e91" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                                      <p className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                        Hannah Brooks
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <fieldset style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', pointerEvents: 'none', userSelect: 'none', top: '0', left: '0', right: '0', bottom: '0', border: '0', padding: '0', margin: '0'}} aria-label="Slideshow pagination controls" className="framer--slideshow-controls">
                          <div style={{position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 'unset', opacity: '1', alignItems: 'center', inset: '10px', top: '10px', left: '10px', right: '10px', bottom: '10px'}}>
                            <button onClick={() => setTestimonialIndex(prev => (prev > 0 ? prev - 1 : 7))} type="button" style={{border: 'none', display: 'block', placeContent: 'center', placeItems: 'center', overflow: 'hidden', background: 'transparent', cursor: 'pointer', margin: '0', padding: '0', backgroundColor: 'var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', width: '40px', height: '40px', borderRadius: '40px', pointerEvents: 'auto', transform: 'none'}} aria-label="Previous" tabindex="0">
                              <img decoding="async" width="40" height="40" src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg" alt="Back Arrow" />
                            </button>
                            <button onClick={() => setTestimonialIndex(prev => (prev < 7 ? prev + 1 : 0))} type="button" style={{border: 'none', display: 'block', placeContent: 'center', placeItems: 'center', overflow: 'hidden', background: 'transparent', cursor: 'pointer', margin: '0', padding: '0', backgroundColor: 'var(--token-4b2257b1-6059-4332-a819-251f434b173b, rgb(0, 0, 0))', width: '40px', height: '40px', borderRadius: '40px', pointerEvents: 'auto', transform: 'none'}} aria-label="Next" tabindex="0">
                              <img decoding="async" width="40" height="40" src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg" alt="Next Arrow" />
                            </button>
                          </div>
                        </fieldset>
                      </section>
                      {/* /$ */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="framer-1gbh09u" data-framer-name="faq">
            <div className="framer-a6i5yb" data-framer-name="content">
              <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                <div className="framer-jyt9k9-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        FAQ
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                <div className="framer-jyt9k9-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        FAQ
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                <div className="framer-jyt9k9-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-w5y01r" data-framer-name="No Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        FAQ
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                <div className="framer-gfdxji-container">
                  <div className="framer-sgoyp framer-eh9nif framer-v-eh9nif" data-framer-name="Desktop" style={{width: '100%'}}>
                    <div className="framer-9v8uhu-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 1 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              001.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How much do you charge?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Pricing varies depending on the scope of your project, factors like shoot length, location, and deliverables all play a role. Reach out for a custom quote and I'll get back to you within 24 hours.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1y3achi-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 2 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              002.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                Do you travel?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Absolutely! I'm available for travel both locally and out of state. Travel fees apply for locations outside of Hattiesburg, MS and will be included in your project quote upfront. No surprises.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1bs6tnd-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 3 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              003.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How can I book?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Booking is easy! You can submit a booking request directly on my website, email me at Jacob@jacob1k.com, or send me a DM on Instagram, TikTok, or Facebook. I recommend reaching out at least 1 week in advance to lock in your date.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-is40ls-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 4 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              004.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How long does it take to receive the final video?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Turnaround time is typically 1–2 weeks from your shoot date. Rush delivery may be available depending on my current schedule. Just ask!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-gjo1bc-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 5 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              005.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                Do you require a deposit?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Yes, a deposit is required to officially secure your booking. This ensures your date is held exclusively for you. The remaining balance is due on the shoot day.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="framer-gjo1bc-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 6 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 6 ? null : 6)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              006.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How can I officially secure my booking?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                To officially secure your booking, a deposit must be paid. I accept Cash App, Apple Pay, and cash. Once the deposit is received, your date is held exclusively for you.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                <div className="framer-gfdxji-container">
                  <div className="framer-sgoyp framer-eh9nif framer-v-eh9nif" data-framer-name="Desktop" style={{width: '100%'}}>
                    <div className="framer-9v8uhu-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 1 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              001.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How much do you charge?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Pricing varies depending on the scope of your project, factors like shoot length, location, and deliverables all play a role. Reach out for a custom quote and I'll get back to you within 24 hours.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1y3achi-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 2 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              002.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                Do you travel?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Absolutely! I'm available for travel both locally and out of state. Travel fees apply for locations outside of Hattiesburg, MS and will be included in your project quote upfront. No surprises.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1bs6tnd-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 3 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              003.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How can I book?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Booking is easy! You can submit a booking request directly on my website, email me at Jacob@jacob1k.com, or send me a DM on Instagram, TikTok, or Facebook. I recommend reaching out at least 1 week in advance to lock in your date.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-is40ls-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 4 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              004.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How long does it take to receive the final video?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Turnaround time is typically 1–2 weeks from your shoot date. Rush delivery may be available depending on my current schedule. Just ask!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-gjo1bc-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 5 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              005.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                Do you require a deposit?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Yes, a deposit is required to officially secure your booking. This ensures your date is held exclusively for you. The remaining balance is due on the shoot day.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="framer-gjo1bc-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 6 ? 'framer-v-utxo0w' : 'framer-v-d33ej7'}`} onClick={() => setOpenFaq(openFaq === 6 ? null : 6)} data-border="true" data-framer-name="Desktop Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              006.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How can I officially secure my booking?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                To officially secure your booking, a deposit must be paid. I accept Cash App, Apple Pay, and cash. Once the deposit is received, your date is held exclusively for you.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                <div className="framer-gfdxji-container">
                  <div className="framer-sgoyp framer-eh9nif framer-v-1je8slx" data-framer-name="Mobile" style={{width: '100%'}}>
                    <div className="framer-9v8uhu-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 1 ? 'framer-v-phl8dc' : 'framer-v-1692ibg'}`} onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} data-border="true" data-framer-name="Mobile Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-1rlcj7" data-styles-preset="XBfR5uDtL">
                              001.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How much do you charge?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Pricing varies depending on the scope of your project, factors like shoot length, location, and deliverables all play a role. Reach out for a custom quote and I'll get back to you within 24 hours.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1y3achi-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 2 ? 'framer-v-phl8dc' : 'framer-v-1692ibg'}`} onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} data-border="true" data-framer-name="Mobile Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-1rlcj7" data-styles-preset="XBfR5uDtL">
                              002.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                Do you travel?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Absolutely! I'm available for travel both locally and out of state. Travel fees apply for locations outside of Hattiesburg, MS and will be included in your project quote upfront. No surprises.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1bs6tnd-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 3 ? 'framer-v-phl8dc' : 'framer-v-1692ibg'}`} onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} data-border="true" data-framer-name="Mobile Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-1rlcj7" data-styles-preset="XBfR5uDtL">
                              003.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How can I book?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Booking is easy! You can submit a booking request directly on my website, email me at Jacob@jacob1k.com, or send me a DM on Instagram, TikTok, or Facebook. I recommend reaching out at least 1 week in advance to lock in your date.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-is40ls-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 4 ? 'framer-v-phl8dc' : 'framer-v-1692ibg'}`} onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} data-border="true" data-framer-name="Mobile Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-1rlcj7" data-styles-preset="XBfR5uDtL">
                              004.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How long does it take to receive the final video?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Turnaround time is typically 1–2 weeks from your shoot date. Rush delivery may be available depending on my current schedule. Just ask!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-gjo1bc-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 5 ? 'framer-v-phl8dc' : 'framer-v-1692ibg'}`} onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} data-border="true" data-framer-name="Mobile Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-1rlcj7" data-styles-preset="XBfR5uDtL">
                              005.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                Do you require a deposit?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                Yes, a deposit is required to officially secure your booking. This ensures your date is held exclusively for you. The remaining balance is due on the shoot day.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="framer-gjo1bc-container">
                      <div className={`framer-iCqDH framer-pec35 framer-3HVtM framer-Cmb46 framer-d33ej7 ${openFaq === 6 ? 'framer-v-phl8dc' : 'framer-v-1692ibg'}`} onClick={() => setOpenFaq(openFaq === 6 ? null : 6)} data-border="true" data-framer-name="Mobile Inactive" data-highlight="true" style={{'--border-bottom-width': '1px', '--border-color': 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', '--border-left-width': '0px', '--border-right-width': '0px', '--border-style': 'solid', '--border-top-width': '0px', width: '100%'}} tabindex="0">
                        <div className="framer-8i65d2" data-framer-name="wrapper">
                          <div className="framer-gvbjkm" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <p className="framer-text framer-styles-preset-1rlcj7" data-styles-preset="XBfR5uDtL" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                              006.
                            </p>
                          </div>
                          <div className="framer-g1ccu5" data-framer-name="wrapper">
                            <div className="framer-1gi4s88" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                                How can I officially secure my booking?
                              </h3>
                            </div>
                            <svg className="framer-ohg0r framer-1w78jxw" role="presentation" style={{'--1m6trwb': '0', '--21h8s6': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', '--pgex8v': '1.5', transform: 'none'}} viewBox="0 0 24 24">
                              <use href="#465907804">
                              </use>
                            </svg>
                          </div>
                        </div>
                        <div className="framer-1cd45jo" data-framer-name="wrapper">
                          <div className="framer-19zvow4" data-framer-name="wrapper">
                            <div className="framer-40swjj" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                              <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_">
                                To officially secure your booking, a deposit must be paid. I accept Cash App, Apple Pay, and cash. Once the deposit is received, your date is held exclusively for you.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="framer-q46d90" data-framer-name="articles">
            <div className="framer-gqfere" data-framer-name="content">
              {/* $ */}
              <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                <div className="framer-1yj65yf-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-6403zz" data-framer-name="Yes Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        Articles
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                    <div className="framer-k578jg" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                        {/* $ */}
                        <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="/articles">                        See all
</a>
                        {/* /$ */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                <div className="framer-1yj65yf-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-6403zz" data-framer-name="Yes Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        Articles
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                    <div className="framer-k578jg" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                        {/* $ */}
                        <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="/articles">                        See all
</a>
                        {/* /$ */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                <div className="framer-1yj65yf-container">
                  <div className="framer-Pb7lB framer-Bdswg framer-pec35 framer-u9Eok framer-6403zz framer-v-6403zz" data-framer-name="Yes Link" style={{width: '100%'}}>
                    <div className="framer-1642qx4" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h2 className="framer-text framer-styles-preset-1w65hox" data-styles-preset="RUd4XrY7o">
                        Articles
                      </h2>
                    </div>
                    <div className="framer-183hu95-container">
                      <div className="framer-cFLQO framer-ku1g8u framer-v-ku1g8u" data-framer-name="Initial" data-highlight="true" style={{backgroundColor: 'var(--token-dfbbe9a1-b097-4733-a9b0-0062d46a88fc, rgba(153, 153, 153, 0.2))', height: '100%', width: '100%'}}>
                        <div className="framer-1yshcpq" data-framer-name="vector" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))'}}>
                        </div>
                      </div>
                    </div>
                    <div className="framer-k578jg" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                        {/* $ */}
                        <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="/articles">                        See all
</a>
                        {/* /$ */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /$ */}
              <div className="framer-1i7834g">
                {/* $ */}
                <div className="framer-wmgva7">
                  {/* $ */}
                  <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/overdone-videography-trends-you-should-ditch-in-2026">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none'}} src="/videography-trends.png" srcset="/videography-trends.png 512w, /videography-trends.png 900w" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              Overdone Videography Trends You Should Ditch in 2026
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/overdone-videography-trends-you-should-ditch-in-2026">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none'}} src="/videography-trends.png" srcset="/videography-trends.png 512w, /videography-trends.png 900w" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              Overdone Videography Trends You Should Ditch in 2026
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/overdone-videography-trends-you-should-ditch-in-2026">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none'}} src="/videography-trends.png" srcset="/videography-trends.png 512w, /videography-trends.png 900w" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              Overdone Videography Trends You Should Ditch in 2026
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  {/* /$ */}
                </div>
                <div className="framer-wmgva7">
                  {/* $ */}
                  <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/getting-into-videography-in-2026-what-you-really-need">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none'}} src="/getting-into-videography.png" srcset="/getting-into-videography.png 512w, /getting-into-videography.png 900w" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              Getting Into Videography in 2026 – What You Really Need
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/getting-into-videography-in-2026-what-you-really-need">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none'}} src="/getting-into-videography.png" srcset="/getting-into-videography.png 512w, /getting-into-videography.png 900w" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              Getting Into Videography in 2026 – What You Really Need
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/getting-into-videography-in-2026-what-you-really-need">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none'}} src="/getting-into-videography.png" srcset="/getting-into-videography.png 512w, /getting-into-videography.png 900w" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              Getting Into Videography in 2026 – What You Really Need
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  {/* /$ */}
                </div>
                <div className="framer-wmgva7">
                  {/* $ */}
                  <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/surviving-as-a-videographer-in-2026-crowded-market">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none'}} src="/surviving-videographer.png" srcset="/surviving-videographer.png" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              Surviving as a Videographer in 2026’s Crowded Market
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/surviving-as-a-videographer-in-2026-crowded-market">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none'}} src="/surviving-videographer.png" srcset="/surviving-videographer.png" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              Surviving as a Videographer in 2026’s Crowded Market
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/surviving-as-a-videographer-in-2026-crowded-market">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none'}} src="/surviving-videographer.png" srcset="/surviving-videographer.png" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              Surviving as a Videographer in 2026’s Crowded Market
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  {/* /$ */}
                </div>
                <div className="framer-wmgva7">
                  {/* $ */}
                  <div className="ssr-variant hidden-1dy4dcp hidden-f2wq4l">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/how-to-shoot-modern-mockumentary-style-videos">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none', objectFit: 'cover'}} src="/mockumentary-interview.png" srcset="/mockumentary-interview.png 512w, /mockumentary-interview.png 900w" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              How to Shoot Modern Mockumentary-Style Videos
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-f2wq4l hidden-72rtr7">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/how-to-shoot-modern-mockumentary-style-videos">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none', objectFit: 'cover'}} src="/mockumentary-interview.png" srcset="/mockumentary-interview.png 512w, /mockumentary-interview.png 900w" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              How to Shoot Modern Mockumentary-Style Videos
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1dy4dcp hidden-72rtr7">
                    <div className="framer-hkxns-container">
                      {/* $ */}
                      <a className="framer-6BRNr framer-Cmb46 framer-1ytnq11 framer-v-1ytnq11 framer-174ojtb" data-framer-name="Default" style={{width: '100%', opacity: '1'}} href="./articles/how-to-shoot-modern-mockumentary-style-videos">                      <div className="framer-y3u9ib-container">
                        {/* $ */}
                        <div style={{display: 'flex', placeContent: 'center', placeItems: 'center', width: '100%', height: '100%', padding: '0'}}>
                          <img style={{maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', webkitUserDrag: 'none', userDrag: 'none', userSelect: 'none', objectFit: 'cover'}} src="/mockumentary-interview.png" srcset="/mockumentary-interview.png 512w, /mockumentary-interview.png 900w" alt="" data-framer-original-sizes="" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199px) 100vw, (max-width: 809px) 100vw" />
                          <div style={{position: 'absolute', inset: '0', pointerEvents: 'none', borderRadius: '12px'}}>
                          </div>
                        </div>
                        {/* /$ */}
                      </div>
                      <div className="framer-35rypx" data-framer-name="wrapper" style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}}>
                        <div className="framer-t1tuoh" data-framer-name="wrapper">
                          <div className="framer-1gztgac" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                            <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE">
                              How to Shoot Modern Mockumentary-Style Videos
                            </h3>
                          </div>
                        </div>
                      </div>
</a>
                      {/* /$ */}
                    </div>
                  </div>
                  {/* /$ */}
                </div>
                {/* /$ */}
              </div>
            </div>
          </section>
        </div>
        <div id="overlay">
        </div>
        <div className="framer-1ftq036">
        </div>
        <div className="framer-e0qva1-container">
          <div className="ssr-variant hidden-1rtwx6s hidden-1jw10ax">
            <footer className="framer-9yKWY framer-z8xZJ framer-3HVtM framer-u9Eok framer-pec35 framer-Cmb46 framer-15bkvbd framer-v-15bkvbd" data-framer-name="Desktop" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', width: '100%'}}>
              <div className="framer-1o40squ" data-framer-name="content">
                <div className="framer-1x3qpm0" data-framer-name="wrapper">
                  <div className="framer-1svxqbp" data-framer-name="wrapper">
                    <div className="framer-6yqgdw" data-framer-name="wrapper">
                      <div className="framer-1qy5f1n-container">
                        {/* $ */}
                        <a className="framer-HOJPI framer-VuWFR framer-13obwic framer-v-13obwic framer-1te0x0d" data-framer-name="Default" data-highlight="true" href="./" data-framer-page-link-current="true" tabindex="0">                        <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '76px', width: 'auto', display: 'block'}} />
</a>
                        {/* /$ */}
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
                          {/* $ */}
                          <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="./" data-framer-page-link-current="true">                          Home
</a>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-1220l8p" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="/articles">                          Articles
</a>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-1nqinf3" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="#projects">                          Projects
</a>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-1xoirvh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/contact">                          Contact
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-11b4dvx" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/privacy">                          Privacy
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-y072jz" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/terms">                          Terms
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                    </nav>
                  </div>
                  <div className="framer-1icw2us" data-framer-name="wrapper">
                    <div className="framer-5q20tc-container">
                      {/* $ */}
                      <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
                        <div style={{fontSize: '14px', color: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', fontStyle: 'normal', fontWeight: '500', letterSpacing: '-0.02em', lineHeight: '1.5em'}}>
                          © 2026 Jacob1K. All rights reserved.
                        </div>
                        <Link to="/privacy" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Privacy Policy</Link>
                        <Link to="/terms" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Terms of Service</Link>
                      </div>
                      {/* /$ */}
                    </div>
                  </div>
                </div>
                <div className="framer-ojgt7v" data-framer-name="wrapper">
                  <div className="framer-1t98eli" style={{mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add', WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add'}}>
                    <div style={{position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0'}} data-framer-background-image-wrapper="true">
                      <img decoding="async" width="974" height="1536" sizes="(min-width: 1200px) 250px, (min-width: 810px) and (max-width: 1199px) 250px, (max-width: 809px) 250px" src="/Jacob_Front_Image-removebg-preview.png" alt="" style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center top', objectFit: 'cover'}} draggable="false" data-framer-original-sizes="250px" />
                    </div>
                  </div>
                  <div className="framer-1ex5l0u" data-framer-name="wrapper">
                    <div className="framer-1bf9gec" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE" style={{'--framer-text-alignment': 'center'}}>
                        Let’s build your next big thing
                      </h3>
                    </div>
                    {/* $ */}
                    <div className="framer-xidy4q-container">
                      {/* $ */}
                      <Link className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-qq3djw framer-1y6mld" data-framer-name="Default" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', borderBottomLeftRadius: '2500px', borderBottomRightRadius: '2500px', borderTopLeftRadius: '2500px', borderTopRightRadius: '2500px', maxWidth: '100%', opacity: '1'}} to="/contact">                      <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17)))'}}>
                          Start your project
                        </p>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <div className="ssr-variant hidden-1jw10ax hidden-he6zob">
            <footer className="framer-9yKWY framer-z8xZJ framer-3HVtM framer-u9Eok framer-pec35 framer-Cmb46 framer-15bkvbd framer-v-k2e729" data-framer-name="Tablet" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', width: '100%'}}>
              <div className="framer-1o40squ" data-framer-name="content">
                <div className="framer-1x3qpm0" data-framer-name="wrapper">
                  <div className="framer-1svxqbp" data-framer-name="wrapper">
                    <div className="framer-6yqgdw" data-framer-name="wrapper">
                      <div className="framer-1qy5f1n-container">
                        {/* $ */}
                        <a className="framer-HOJPI framer-VuWFR framer-13obwic framer-v-13obwic framer-1te0x0d" data-framer-name="Default" data-highlight="true" href="./" data-framer-page-link-current="true" tabindex="0">                        <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '76px', width: 'auto', display: 'block'}} />
</a>
                        {/* /$ */}
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
                          {/* $ */}
                          <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="./" data-framer-page-link-current="true">                          Home
</a>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-1220l8p" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="/articles">                          Articles
</a>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-1nqinf3" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="#projects">                          Projects
</a>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-1xoirvh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/contact">                          Contact
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-11b4dvx" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/privacy">                          Privacy
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-y072jz" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-h71jo3" data-styles-preset="yWt0Fhoeu" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/terms">                          Terms
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                    </nav>
                  </div>
                  <div className="framer-1icw2us" data-framer-name="wrapper">
                    <div className="framer-5q20tc-container">
                      {/* $ */}
                      <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
                        <div style={{fontSize: '14px', color: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', fontStyle: 'normal', fontWeight: '500', letterSpacing: '-0.02em', lineHeight: '1.5em'}}>
                          © 2026 Jacob1K. All rights reserved.
                        </div>
                        <Link to="/privacy" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Privacy Policy</Link>
                        <Link to="/terms" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Terms of Service</Link>
                      </div>
                      {/* /$ */}
                    </div>
                  </div>
                </div>
                <div className="framer-ojgt7v" data-framer-name="wrapper">
                  <div className="framer-1t98eli" style={{mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add', WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add'}}>
                    <div style={{position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0'}} data-framer-background-image-wrapper="true">
                      <img decoding="async" width="974" height="1536" sizes="(min-width: 1200px) 250px, (min-width: 810px) and (max-width: 1199px) 250px, (max-width: 809px) 250px" src="/Jacob_Front_Image-removebg-preview.png" alt="" style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center top', objectFit: 'cover'}} draggable="false" data-framer-original-sizes="250px" />
                    </div>
                  </div>
                  <div className="framer-1ex5l0u" data-framer-name="wrapper">
                    <div className="framer-1bf9gec" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE" style={{'--framer-text-alignment': 'center'}}>
                        Let’s build your next big thing
                      </h3>
                    </div>
                    {/* $ */}
                    <div className="framer-xidy4q-container">
                      {/* $ */}
                      <Link className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-qq3djw framer-1y6mld" data-framer-name="Default" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', borderBottomLeftRadius: '2500px', borderBottomRightRadius: '2500px', borderTopLeftRadius: '2500px', borderTopRightRadius: '2500px', maxWidth: '100%', opacity: '1'}} to="/contact">                      <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17)))'}}>
                          Start your project
                        </p>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <div className="ssr-variant hidden-1rtwx6s hidden-he6zob">
            <footer className="framer-9yKWY framer-z8xZJ framer-3HVtM framer-u9Eok framer-pec35 framer-Cmb46 framer-15bkvbd framer-v-6dhke6" data-framer-name="Mobile" style={{backgroundColor: 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', boxShadow: 'inset 0px 1px 1px -1px var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', width: '100%'}}>
              <div className="framer-1o40squ" data-framer-name="content">
                <div className="framer-1x3qpm0" data-framer-name="wrapper">
                  <div className="framer-1svxqbp" data-framer-name="wrapper">
                    <div className="framer-6yqgdw" data-framer-name="wrapper">
                      <div className="framer-1qy5f1n-container">
                        {/* $ */}
                        <a className="framer-HOJPI framer-VuWFR framer-13obwic framer-v-13obwic framer-1te0x0d" data-framer-name="Default" data-highlight="true" href="./" data-framer-page-link-current="true" tabindex="0">                        <img src="/latestjacob-removebg-preview.png" alt="Jacob1K" style={{height: '76px', width: 'auto', display: 'block'}} />
</a>
                        {/* /$ */}
                      </div>
                      <div className="framer-b53igs" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-1rlcj7" data-styles-preset="XBfR5uDtL" style={{'--framer-text-alignment': 'left'}}>
                          Transforming bold concepts into intuitive, high impact digital experiences that captivate users, amplify brands, and convert exploration into growth.
                        </p>
                      </div>
                    </div>
                    <nav className="framer-1e4ujir" data-framer-name="nav">
                      <div className="framer-1qt6x2a" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/">                          Home
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-1220l8p" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/articles">                          Articles
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-1nqinf3" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <a className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" href="#projects">                          Projects
</a>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-1xoirvh" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/contact">                          Contact
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-11b4dvx" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/privacy">                          Privacy
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                      <div className="framer-y072jz" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255)))'}}>
                          {/* $ */}
                          <Link className="framer-text framer-styles-preset-1c6ncnn" data-styles-preset="vvwkuHhz5" to="/terms">                          Terms
</Link>
                          {/* /$ */}
                        </p>
                      </div>
                    </nav>
                  </div>
                  <div className="framer-1icw2us" data-framer-name="wrapper">
                    <div className="framer-5q20tc-container">
                      {/* $ */}
                      <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
                        <div style={{fontSize: '14px', color: 'var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))', fontStyle: 'normal', fontWeight: '500', letterSpacing: '-0.02em', lineHeight: '1.5em'}}>
                          © 2026 Jacob1K. All rights reserved.
                        </div>
                        <Link to="/privacy" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Privacy Policy</Link>
                        <Link to="/terms" style={{fontSize: '14px', color: 'rgba(153,153,153,0.7)', fontWeight: '500', letterSpacing: '-0.02em', textDecoration: 'none'}}>Terms of Service</Link>
                      </div>
                      {/* /$ */}
                    </div>
                  </div>
                </div>
                <div className="framer-ojgt7v" data-framer-name="wrapper">
                  <div className="framer-1t98eli" style={{mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add', WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add'}}>
                    <div style={{position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0'}} data-framer-background-image-wrapper="true">
                      <img decoding="async" width="974" height="1536" sizes="(min-width: 1200px) 250px, (min-width: 810px) and (max-width: 1199px) 250px, (max-width: 809px) 250px" src="/Jacob_Front_Image-removebg-preview.png" alt="" style={{display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center top', objectFit: 'cover'}} draggable="false" data-framer-original-sizes="250px" />
                    </div>
                  </div>
                  <div className="framer-1ex5l0u" data-framer-name="wrapper">
                    <div className="framer-1bf9gec" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                      <h3 className="framer-text framer-styles-preset-mgnp7g" data-styles-preset="DorUiGrSE" style={{'--framer-text-alignment': 'center'}}>
                        Let’s build your next big thing
                      </h3>
                    </div>
                    {/* $ */}
                    <div className="framer-xidy4q-container">
                      {/* $ */}
                      <Link className="framer-nBLMP framer-pec35 framer-qq3djw framer-v-qq3djw framer-1y6mld" data-framer-name="Default" style={{backgroundColor: 'var(--token-da6cfa3b-4541-4c0f-899e-86c3f3559e26, rgb(255, 255, 255))', borderBottomLeftRadius: '2500px', borderBottomRightRadius: '2500px', borderTopLeftRadius: '2500px', borderTopRightRadius: '2500px', maxWidth: '100%', width: '100%', opacity: '1'}} to="/contact">                      <div className="framer-whs66b" style={{outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: '0', '--extracted-r6o4lv': 'var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17))', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none'}} data-framer-component-type="RichTextContainer">
                        <p className="framer-text framer-styles-preset-i3ioj7" data-styles-preset="e4XI1gL8_" style={{'--framer-text-color': 'var(--extracted-r6o4lv, var(--token-884dfe64-9412-4f85-9b9d-e737ee92d939, rgb(17, 17, 17)))'}}>
                          Start your project
                        </p>
                      </div>
</Link>
                      {/* /$ */}
                    </div>
                    {/* /$ */}
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="framer-2oug1p-container">
          {/* $ */}
          <div>
          </div>
          {/* /$ */}
        </div>
      </div>
      <div id="template-overlay">
      </div>
      {/* /$ */}
    </div>
    <div id="__framer-badge-container">
    </div>
    <script data-framer-appear-animation="no-preference">
    </script>
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-PW42VSCL.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-BICVXJW4.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-EREUIR4R.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-A3IIQ6X3.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-HZL4YIMB.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-7EKAIDK5.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-LN4T5HQR.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-HSWYL4KX.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-MM4VKSHP.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-43AC6ZOE.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-42U43NKG.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/xDO1FekVEOsTGGFJWmhMk4KThLqqeKBO1lum545QyLU.RFBI65WD.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-IJTFFJPY.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-GV6AJVV4.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-AGCPBEEF.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-NMW6ZXFQ.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-ZSVOBURL.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-VVUWFEKG.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-SNY4MNHG.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-PR5B2OAD.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-2A7JRAYZ.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/chunk-5CKHXEXC.mjs" />
    <link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/script_main.UOUJYEWZ.mjs" />
    <script type="module" async="" data-framer-bundle="main" fetchpriority="low" src="https://framerusercontent.com/sites/5QJLcaCAzOIflLZLDHuTzt/script_main.UOUJYEWZ.mjs">
    </script>
    <div id="svg-templates" style={{position: 'absolute', overflow: 'hidden', bottom: '0', left: '0', width: '0', height: '0', zIndex: '0', contain: 'strict'}} aria-hidden="true">
      <svg viewBox="0 0 162.066 25" overflow="visible" id="svg-884623484_3906">
        <g>
          <path d="M 21.128 22.779 C 26.28 17.536 26.242 9.12 21.044 3.922 C 15.846 -1.275 7.431 -1.312 2.188 3.84 L 6.607 8.259 C 7.304 8.957 8.431 8.922 9.318 8.491 C 11.372 7.493 13.833 7.906 15.447 9.521 C 17.062 11.136 17.475 13.597 16.477 15.65 C 16.046 16.538 16.011 17.664 16.708 18.361 L 21.128 22.78 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 18.75 25 L 12.194 25 C 11.247 25 10.338 24.624 9.669 23.954 L 1.046 15.332 C 0.376 14.662 0 13.753 0 12.806 L 0 6.25 Z M 6.696 25 L 2.679 25 C 1.199 25 0 23.801 0 22.321 L 0 18.304 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 152.496 4.376 C 157.771 4.376 162.066 8.669 162.066 13.944 L 162.066 20.713 L 157.398 20.713 L 157.398 13.944 C 157.398 12.007 156.231 10.327 154.597 9.534 L 154.597 20.713 L 149.929 20.713 L 149.929 13.944 C 149.929 12.007 148.761 10.326 147.128 9.533 L 147.128 20.713 L 142.459 20.713 L 142.459 4.375 L 145.027 4.375 C 146.801 4.375 148.481 4.889 149.929 5.753 L 149.929 4.375 L 152.496 4.375 Z M 140.606 13.944 C 140.606 17.679 137.548 20.713 133.836 20.713 C 130.102 20.713 127.068 17.679 127.068 13.944 L 127.068 4.376 L 131.736 4.376 L 131.736 13.944 C 131.733 14.502 131.954 15.038 132.348 15.433 C 132.743 15.827 133.278 16.048 133.836 16.046 C 134.995 16.042 135.934 15.104 135.938 13.945 L 135.938 4.375 L 140.606 4.375 L 140.606 13.945 Z M 125.644 15.462 C 125.644 18.333 123.31 20.667 120.439 20.667 L 113.507 20.667 L 113.507 15.999 L 120.439 15.999 C 120.735 15.995 120.973 15.757 120.976 15.462 C 120.976 15.182 120.719 14.949 120.439 14.949 L 118.549 14.949 C 117.149 14.95 115.807 14.395 114.817 13.405 C 113.828 12.416 113.272 11.073 113.274 9.674 C 113.274 6.756 115.631 4.375 118.549 4.375 L 125.411 4.375 L 125.411 9.044 L 118.549 9.044 C 118.199 9.044 117.942 9.323 117.942 9.674 C 117.942 10 118.199 10.28 118.549 10.28 L 120.439 10.28 C 123.31 10.28 125.644 12.614 125.644 15.462 Z M 106.436 4.376 C 109.704 4.376 112.388 7.059 112.388 10.327 C 112.388 13.618 109.704 16.279 106.436 16.279 L 104.686 16.279 L 104.686 20.714 L 100.018 20.714 L 100.018 4.375 L 106.436 4.375 Z M 106.436 11.611 C 106.777 11.612 107.104 11.477 107.345 11.236 C 107.586 10.995 107.721 10.668 107.72 10.327 C 107.72 9.627 107.137 9.043 106.436 9.043 L 104.686 9.043 L 104.686 11.611 Z M 97.916 20.713 L 93.248 20.713 L 93.248 4.376 L 97.916 4.376 Z M 91.814 12.544 C 91.814 17.049 88.126 20.713 83.645 20.713 C 79.14 20.713 75.476 17.049 75.476 12.544 C 75.476 8.063 79.14 4.376 83.645 4.376 C 88.126 4.376 91.814 8.063 91.814 12.544 Z M 87.146 12.544 C 87.146 10.631 85.559 9.043 83.645 9.043 C 81.708 9.043 80.144 10.631 80.144 12.544 C 80.144 14.482 81.708 16.046 83.645 16.046 C 85.559 16.046 87.146 14.482 87.146 12.544 Z M 74.118 11.494 L 74.118 20.713 L 68.282 20.713 C 63.778 20.713 60.113 17.049 60.113 12.544 C 60.113 8.063 63.778 4.376 68.282 4.376 L 74.118 4.376 L 74.118 9.043 L 68.282 9.043 C 66.345 9.043 64.781 10.631 64.781 12.544 C 64.781 14.482 66.345 16.046 68.282 16.046 L 69.449 16.046 L 69.449 11.494 Z M 59.356 12.544 C 59.356 17.049 55.669 20.713 51.187 20.713 C 46.682 20.713 43.018 17.049 43.018 12.544 C 43.018 8.063 46.682 4.376 51.187 4.376 C 55.668 4.376 59.356 8.063 59.356 12.544 Z M 54.688 12.544 C 54.688 10.631 53.101 9.043 51.187 9.043 C 49.249 9.043 47.686 10.631 47.686 12.544 C 47.686 14.482 49.249 16.046 51.187 16.046 C 53.101 16.046 54.688 14.482 54.688 12.544 Z M 42.536 16.046 L 42.536 20.714 L 36.701 20.714 C 35.586 20.718 34.514 20.277 33.725 19.488 C 32.936 18.699 32.495 17.628 32.5 16.512 L 32.5 4.375 L 37.169 4.375 L 37.169 16.046 L 42.536 16.046 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
        </g>
      </svg>
      <svg viewBox="0 0 179.396 25" overflow="visible" id="svg-228475865_4719">
        <g>
          <path d="M 42.083 17.267 L 48.889 17.267 L 48.04 21.291 L 41.234 21.291 C 37.851 21.291 35.679 18.589 36.382 15.256 L 38.151 6.875 L 42.234 6.875 L 40.465 15.256 C 40.231 16.367 40.955 17.267 42.083 17.267 Z M 81.879 6.875 L 80.11 15.256 C 79.407 18.589 76.094 21.291 72.712 21.291 L 65.905 21.291 L 66.755 17.267 L 73.56 17.267 C 74.688 17.267 75.792 16.368 76.027 15.256 L 76.947 10.898 L 71.21 10.898 C 70.986 10.906 70.794 11.063 70.74 11.281 C 70.702 11.464 70.8 11.621 70.974 11.657 L 76.495 12.793 L 72.304 16.211 L 69.34 15.602 C 67.337 15.19 66.214 13.382 66.657 11.281 C 67.17 8.848 69.589 6.875 72.059 6.875 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 92.537 6.875 C 95.92 6.875 98.092 9.577 97.389 12.909 L 96.894 15.256 C 96.202 18.532 92.989 21.199 89.665 21.288 L 90.514 17.267 L 85.592 21.281 C 82.399 21.112 80.389 18.479 81.07 15.256 L 81.565 12.909 C 82.257 9.629 85.478 6.959 88.805 6.877 L 88.964 6.875 Z M 88.062 10.899 C 86.953 10.926 85.879 11.816 85.649 12.909 L 85.154 15.256 C 84.919 16.367 85.643 17.267 86.77 17.267 L 90.344 17.267 C 91.471 17.267 92.575 16.367 92.81 15.256 L 93.305 12.909 C 93.54 11.799 92.815 10.898 91.688 10.898 L 88.115 10.898 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 100.334 21.291 L 96.25 21.291 L 99.292 6.875 L 103.376 6.875 Z M 113.639 6.875 C 116.522 6.875 118.374 9.178 117.774 12.019 C 117.257 14.47 115.054 16.581 112.512 17.061 L 109.919 17.552 L 107.17 14.133 L 112.544 13.117 C 113.098 13.012 113.577 12.553 113.691 12.018 C 113.821 11.399 113.417 10.898 112.789 10.898 L 107.801 10.898 L 105.608 21.291 L 101.524 21.291 L 104.567 6.875 Z M 133.335 6.876 L 132.486 10.898 L 122.913 10.898 C 122.742 10.904 122.596 11.023 122.556 11.189 C 122.526 11.328 122.601 11.447 122.733 11.475 L 128.916 12.746 L 129.007 12.766 C 130.912 13.205 131.971 14.952 131.544 16.976 C 131.041 19.359 128.672 21.291 126.254 21.291 L 119.743 21.291 L 116.509 17.267 L 127.102 17.267 C 127.273 17.262 127.419 17.143 127.46 16.977 C 127.487 16.846 127.424 16.733 127.307 16.697 L 127.282 16.691 L 121.1 15.42 C 119.138 15.017 118.038 13.246 118.472 11.189 C 118.975 8.807 121.343 6.876 123.762 6.876 Z M 136.501 15.256 C 136.266 16.367 136.99 17.267 138.118 17.267 L 143.733 17.267 L 145.926 6.875 L 150.009 6.875 L 146.968 21.291 L 142.884 21.291 L 143.733 17.267 L 138.8 21.291 L 137.269 21.291 C 133.886 21.291 131.714 18.589 132.417 15.256 L 134.186 6.875 L 138.269 6.875 Z M 155.114 6.875 L 154.265 10.898 L 159.197 6.875 L 159.878 6.875 C 163.261 6.875 165.434 9.577 164.73 12.909 L 162.961 21.291 L 158.877 21.291 L 160.647 12.909 C 160.881 11.799 160.157 10.898 159.029 10.898 L 154.265 10.898 L 152.072 21.291 L 147.988 21.291 L 151.031 6.875 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 170.613 6.875 C 173.996 6.875 176.168 9.577 175.465 12.909 L 173.696 21.291 L 169.612 21.291 L 171.381 12.909 C 171.616 11.799 170.892 10.898 169.764 10.898 L 165 10.898 L 169.933 6.875 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 60.975 6.875 C 64.357 6.875 66.53 9.577 65.827 12.909 L 65.331 15.256 C 64.628 18.589 61.315 21.291 57.932 21.291 L 54.359 21.291 C 50.976 21.291 48.804 18.589 49.507 15.256 L 50.002 12.909 C 50.671 9.739 53.701 7.141 56.907 6.894 L 60.125 10.898 L 56.552 10.898 L 56.5 10.899 C 55.39 10.926 54.317 11.816 54.086 12.909 L 53.591 15.256 C 53.356 16.367 54.08 17.267 55.208 17.267 L 58.781 17.267 C 59.909 17.267 61.013 16.367 61.247 15.256 L 61.743 12.909 C 61.977 11.799 61.253 10.898 60.125 10.898 L 60.125 10.898 Z M 60.125 10.898 L 60.125 10.898 L 60.125 10.898 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 179.396 5.806 C 179.396 6.942 178.482 7.863 177.354 7.863 C 176.227 7.863 175.313 6.942 175.313 5.806 C 175.313 4.671 176.227 3.75 177.354 3.75 C 178.482 3.75 179.396 4.671 179.396 5.806 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 26.875 19.375 L 19.375 25 L 3.125 25 L 4.375 21.875 L 7.5 19.375 L 18.125 19.375 L 20 21.875 L 25 6.875 L 28.125 4.375 L 31.25 4.375 Z M 26.875 3.125 L 23.75 5.625 L 13.125 5.625 L 11.25 3.125 L 6.25 18.125 L 3.125 20.625 L 0 20.625 L 4.375 5.625 L 11.875 0 L 28.125 0 Z M 15 8.125 L 21.875 8.125 L 18.125 19.375 L 16.25 16.875 L 9.375 16.875 L 13.125 5.625 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
        </g>
      </svg>
      <svg viewBox="0 0 146.607 24.998" overflow="visible" id="svg-338746650_10088">
        <g>
          <path d="M 56.63 7.5 C 56.63 12.262 56.63 14.142 50.313 14.142 C 56.63 14.142 56.63 16.022 56.63 20.784 C 56.63 16.051 56.63 14.142 62.849 14.142 C 56.63 14.142 56.63 12.234 56.63 7.5 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 25.316 24.998 C 23.131 24.998 21.209 24.561 19.553 23.687 C 17.914 22.795 16.631 21.557 15.702 19.973 C 15.553 19.71 15.415 19.439 15.29 19.161 L 14.556 24.616 L 0.001 24.616 L 0.001 24.343 L 0.028 24.343 C 0.684 24.343 1.212 24.169 1.612 23.824 C 2.013 23.478 2.213 22.977 2.213 22.321 L 2.213 6.591 C 2.213 5.935 2.013 5.407 1.612 5.007 C 1.212 4.606 0.684 4.406 0.028 4.406 L 0 4.406 L 0 4.132 L 8.713 4.132 L 8.713 4.406 L 8.603 4.406 C 7.947 4.406 7.419 4.606 7.019 5.007 C 6.619 5.407 6.418 5.935 6.418 6.591 L 6.418 22.431 C 6.418 23.013 6.555 23.468 6.827 23.796 C 7.119 24.106 7.62 24.261 8.33 24.261 L 8.903 24.261 C 10.524 24.261 11.889 23.76 13 22.758 C 14.083 21.782 14.777 20.416 15.081 18.659 C 14.584 17.375 14.337 15.946 14.337 14.374 C 14.337 12.244 14.792 10.387 15.702 8.803 C 16.631 7.201 17.914 5.963 19.553 5.089 C 21.209 4.196 23.131 3.751 25.316 3.751 C 27.448 3.751 29.319 4.176 30.932 5.025 C 32.651 4.175 34.648 3.75 36.922 3.75 C 37.633 3.75 38.215 3.777 38.67 3.832 C 39.144 3.869 39.563 3.914 39.926 3.969 C 40.291 4.024 40.691 4.078 41.128 4.132 C 41.692 4.173 42.256 4.191 42.821 4.188 L 43.64 9.65 L 43.367 9.65 C 43.039 7.92 42.303 6.563 41.155 5.58 C 40.026 4.597 38.616 4.105 36.922 4.105 C 35.885 4.105 34.937 4.351 34.082 4.842 C 33.514 5.169 33 5.581 32.557 6.063 C 32.317 6.323 32.097 6.6 31.897 6.891 C 31.722 7.152 31.557 7.428 31.403 7.72 C 31.194 8.119 31.01 8.531 30.852 8.954 C 30.71 9.335 30.585 9.721 30.477 10.113 C 30.149 11.369 29.986 12.763 29.986 14.292 C 29.986 15.702 30.114 16.998 30.371 18.181 L 29.937 19.471 C 29.733 20.091 29.461 20.687 29.125 21.246 C 28.933 21.55 28.729 21.822 28.516 22.065 L 28.495 22.089 C 27.818 21.471 27.234 20.758 26.763 19.973 C 25.797 18.371 25.316 16.486 25.316 14.319 C 25.316 12.207 25.797 10.359 26.763 8.776 C 27.413 7.704 28.266 6.771 29.274 6.028 C 28.882 5.566 28.422 5.167 27.91 4.842 C 27.127 4.351 26.262 4.105 25.316 4.105 C 24.369 4.105 23.504 4.351 22.721 4.842 C 21.938 5.334 21.273 6.026 20.727 6.919 C 20.162 7.811 19.726 8.894 19.416 10.169 C 19.125 11.425 18.979 12.818 18.979 14.347 C 18.979 15.876 19.125 17.269 19.416 18.525 C 19.726 19.781 20.162 20.856 20.727 21.748 C 21.273 22.64 21.938 23.332 22.721 23.823 C 23.504 24.315 24.369 24.561 25.316 24.561 C 26.262 24.561 27.127 24.315 27.909 23.823 C 28.692 23.332 29.366 22.64 29.931 21.748 C 30.477 20.856 30.896 19.781 31.187 18.525 C 31.496 17.269 31.651 15.876 31.651 14.347 C 31.651 12.964 31.525 11.692 31.272 10.533 L 31.741 9.288 C 32.007 8.578 32.322 7.959 32.682 7.425 C 32.855 7.173 33.046 6.933 33.253 6.707 L 33.274 6.69 C 33.914 7.313 34.462 8.024 34.901 8.803 C 35.83 10.387 36.294 12.244 36.294 14.374 C 36.294 16.504 35.83 18.371 34.901 19.972 C 34.297 21.032 33.493 21.964 32.535 22.718 C 32.924 23.147 33.371 23.519 33.864 23.824 C 34.682 24.315 35.593 24.561 36.595 24.561 C 37.341 24.561 38.051 24.433 38.725 24.179 C 39.417 23.924 39.944 23.605 40.309 23.223 L 40.309 16.259 C 40.309 15.603 40.109 15.075 39.708 14.674 C 39.307 14.274 38.779 14.074 38.124 14.074 L 38.042 14.074 L 38.042 13.801 L 45.496 13.801 C 45.571 11.909 46.022 10.243 46.85 8.803 C 47.779 7.201 49.063 5.963 50.701 5.089 C 52.357 4.196 54.278 3.751 56.463 3.751 C 58.648 3.751 60.56 4.196 62.198 5.088 C 63.855 5.963 65.139 7.201 66.049 8.803 C 66.647 9.823 67.053 10.957 67.266 12.204 L 67.266 6.591 C 67.266 5.935 67.066 5.407 66.665 5.007 C 66.264 4.606 65.736 4.406 65.081 4.406 L 65.054 4.406 L 65.054 4.132 L 81.486 4.132 C 82.887 4.151 84.108 4.397 85.145 4.87 C 86.201 5.325 87.02 5.963 87.603 6.782 C 87.822 7.081 88.001 7.399 88.141 7.737 C 88.364 6.683 88.908 5.818 89.771 5.143 C 90.955 4.214 92.512 3.751 94.441 3.751 C 94.915 3.751 95.298 3.769 95.589 3.805 C 95.882 3.838 96.173 3.883 96.463 3.941 C 96.754 3.996 97.091 4.041 97.473 4.078 C 97.963 4.119 98.455 4.137 98.948 4.132 L 107.575 4.132 L 107.575 4.406 L 107.493 4.406 C 106.838 4.406 106.31 4.606 105.909 5.007 C 105.509 5.407 105.308 5.935 105.308 6.591 L 105.308 17.433 C 105.308 19.363 105.8 20.892 106.783 22.021 C 107.784 23.132 109.132 23.687 110.825 23.687 C 112.536 23.687 113.884 23.123 114.867 21.993 C 115.85 20.847 116.342 19.326 116.342 17.433 L 116.342 7.001 C 116.342 6.217 116.105 5.598 115.632 5.143 C 115.158 4.688 114.53 4.442 113.748 4.406 L 113.748 4.132 L 122.761 4.132 L 129.424 19.563 L 136.088 4.132 L 141.195 4.132 L 141.195 4.406 C 140.613 4.406 140.121 4.579 139.72 4.924 C 139.319 5.271 139.138 5.744 139.174 6.345 L 140.567 22.512 C 140.658 23.131 140.949 23.596 141.441 23.906 C 141.951 24.215 142.451 24.369 142.943 24.369 L 142.943 24.616 L 134.476 24.616 L 134.476 24.369 C 134.786 24.369 135.104 24.297 135.433 24.151 C 135.747 24.015 136.021 23.799 136.224 23.523 C 136.443 23.25 136.525 22.931 136.47 22.567 L 135.132 7.492 L 127.54 24.998 L 119.893 7.464 L 118.609 21.83 C 118.536 22.558 118.746 23.15 119.237 23.605 C 119.729 24.06 120.33 24.306 121.04 24.342 L 121.04 24.616 L 115.578 24.616 L 115.578 24.342 C 116.269 24.306 116.852 24.051 117.326 23.577 C 117.799 23.104 118.072 22.512 118.145 21.803 L 119.511 6.7 C 119.164 5.99 118.728 5.434 118.199 5.034 C 118.109 4.96 118.014 4.892 117.915 4.832 C 117.772 4.921 117.639 5.026 117.516 5.143 C 117.042 5.598 116.806 6.217 116.806 7 L 116.806 17.433 C 116.806 18.963 116.487 20.291 115.85 21.421 C 115.231 22.549 114.33 23.432 113.146 24.069 C 111.981 24.688 110.588 24.998 108.968 24.998 C 107.366 24.998 105.973 24.688 104.789 24.069 C 103.606 23.451 102.686 22.576 102.031 21.447 C 101.394 20.301 101.075 18.963 101.075 17.433 L 101.075 6.591 C 101.075 5.936 100.875 5.408 100.474 5.007 C 100.088 4.621 99.584 4.421 98.961 4.408 L 99.221 9.65 L 98.947 9.65 C 98.693 7.956 98.147 6.619 97.309 5.636 C 96.471 4.653 95.461 4.161 94.277 4.161 C 93.44 4.161 92.766 4.406 92.257 4.898 C 91.765 5.389 91.519 6.045 91.519 6.864 C 91.519 7.574 91.747 8.257 92.202 8.913 C 92.676 9.55 93.486 10.296 94.632 11.152 L 95.807 12.026 C 97.009 12.9 97.956 13.71 98.647 14.457 C 99.357 15.185 99.867 15.895 100.177 16.587 C 100.487 17.283 100.646 18.037 100.641 18.799 C 100.641 20.001 100.341 21.066 99.739 21.994 C 99.139 22.923 98.301 23.651 97.227 24.179 C 96.171 24.689 94.924 24.962 93.486 24.998 C 93.012 24.998 92.621 24.98 92.311 24.944 C 92.019 24.907 91.727 24.862 91.437 24.808 C 91.085 24.745 90.73 24.699 90.372 24.671 C 89.954 24.634 89.38 24.616 88.652 24.616 L 87.696 17.516 L 88.024 17.516 C 88.297 19.755 88.916 21.484 89.881 22.704 C 90.864 23.906 92.12 24.507 93.649 24.507 C 94.778 24.507 95.697 24.188 96.408 23.551 C 97.118 22.913 97.473 22.085 97.473 21.066 C 97.473 20.628 97.391 20.21 97.227 19.809 C 97.081 19.409 96.827 18.981 96.462 18.526 C 96.098 18.071 95.616 17.579 95.015 17.051 C 94.414 16.505 93.667 15.895 92.776 15.221 L 91.656 14.375 C 90.291 13.338 89.344 12.408 88.816 11.589 C 88.652 11.336 88.511 11.069 88.394 10.791 C 88.261 11.443 87.992 12.059 87.603 12.599 C 87.02 13.419 86.182 14.065 85.091 14.539 C 84.016 14.994 82.742 15.221 81.267 15.221 L 78.754 15.221 L 78.754 22.158 C 78.754 22.814 78.954 23.342 79.355 23.742 C 79.756 24.142 80.284 24.343 80.939 24.343 L 80.994 24.343 L 80.994 24.616 L 65.054 24.616 L 65.054 24.343 L 65.081 24.343 C 65.736 24.343 66.264 24.143 66.665 23.742 C 67.066 23.342 67.266 22.814 67.266 22.158 L 67.266 16.548 C 67.053 17.799 66.647 18.941 66.049 19.973 C 65.139 21.558 63.855 22.796 62.198 23.688 C 60.56 24.561 58.648 24.998 56.463 24.998 C 54.278 24.998 52.357 24.561 50.701 23.688 C 49.062 22.796 47.779 21.558 46.85 19.973 C 45.944 18.377 45.488 16.521 45.484 14.401 C 45.362 14.479 45.247 14.57 45.142 14.675 C 44.742 15.076 44.542 15.604 44.542 16.259 L 44.542 23.223 C 44.177 23.587 43.595 23.906 42.794 24.179 C 42.011 24.434 41.119 24.634 40.117 24.779 C 39.134 24.926 38.151 24.998 37.167 24.998 C 34.791 24.998 32.722 24.577 30.959 23.736 C 29.341 24.577 27.459 24.998 25.315 24.998 Z M 61.079 21.748 C 61.625 20.856 62.044 19.781 62.335 18.525 C 62.644 17.269 62.799 15.876 62.799 14.347 C 62.799 12.817 62.644 11.424 62.335 10.168 C 62.044 8.894 61.625 7.811 61.079 6.918 C 60.514 6.026 59.841 5.334 59.058 4.843 C 58.275 4.351 57.41 4.106 56.463 4.106 C 55.516 4.106 54.652 4.351 53.869 4.843 C 53.086 5.334 52.421 6.026 51.875 6.918 C 51.311 7.811 50.874 8.894 50.564 10.168 C 50.273 11.424 50.127 12.817 50.127 14.347 C 50.127 15.876 50.273 17.269 50.564 18.525 C 50.874 19.781 51.311 20.856 51.875 21.748 C 52.421 22.64 53.086 23.332 53.869 23.823 C 54.651 24.315 55.516 24.561 56.464 24.561 C 57.41 24.561 58.275 24.315 59.058 23.823 C 59.841 23.332 60.514 22.64 61.079 21.748 Z M 73.947 23.741 C 74.348 23.341 74.549 22.813 74.549 22.157 L 74.549 6.591 C 74.549 5.935 74.348 5.407 73.947 5.007 C 73.693 4.752 73.374 4.571 73.024 4.484 C 72.664 4.576 72.356 4.751 72.099 5.007 C 71.699 5.407 71.499 5.935 71.499 6.591 L 71.499 22.157 C 71.499 22.813 71.699 23.341 72.099 23.741 C 72.354 23.996 72.674 24.177 73.024 24.264 C 73.374 24.177 73.693 23.997 73.947 23.742 Z M 80.366 14.866 C 81.149 14.866 81.823 14.647 82.387 14.21 C 82.969 13.755 83.416 13.136 83.725 12.353 C 84.053 11.571 84.216 10.678 84.216 9.677 C 84.216 8.676 84.053 7.783 83.725 7.001 C 83.416 6.217 82.969 5.607 82.387 5.171 C 81.804 4.716 81.121 4.487 80.338 4.487 L 78.754 4.487 L 78.754 14.866 L 80.366 14.866 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 146.607 1.897 C 146.607 2.945 145.758 3.795 144.71 3.795 C 143.662 3.795 142.813 2.945 142.813 1.897 C 142.813 0.85 143.662 0 144.71 0 C 145.758 0 146.607 0.85 146.607 1.897 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
        </g>
      </svg>
      <svg viewBox="0 0 104.356 24.869" overflow="visible" id="svg1175618593_4882">
        <g>
          <path d="M 30.625 17.6 L 38.095 17.6 L 38.095 15.35 L 33.28 15.35 L 33.28 6.875 L 30.625 6.875 Z M 42.52 16.1 C 41.456 16.1 40.901 15.17 40.901 13.775 C 40.901 12.38 41.456 11.435 42.521 11.435 C 43.586 11.435 44.156 12.38 44.156 13.775 C 44.156 15.17 43.586 16.1 42.521 16.1 Z M 42.536 17.84 C 45.011 17.84 46.631 16.085 46.631 13.775 C 46.631 11.465 45.011 9.71 42.536 9.71 C 40.076 9.71 38.426 11.465 38.426 13.775 C 38.426 16.085 40.076 17.84 42.536 17.84 Z M 50.914 20.255 C 52.054 20.255 53.059 20 53.734 19.4 C 54.349 18.845 54.754 18.005 54.754 16.85 L 54.754 9.92 L 52.414 9.92 L 52.414 10.745 L 52.384 10.745 C 51.934 10.1 51.244 9.695 50.224 9.695 C 48.319 9.695 46.999 11.285 46.999 13.535 C 46.999 15.89 48.604 17.18 50.329 17.18 C 51.259 17.18 51.844 16.805 52.294 16.295 L 52.354 16.295 L 52.354 17.06 C 52.354 17.99 51.919 18.53 50.884 18.53 C 50.074 18.53 49.669 18.185 49.534 17.78 L 47.164 17.78 C 47.404 19.385 48.799 20.255 50.914 20.255 Z M 50.899 15.365 C 49.984 15.365 49.384 14.615 49.384 13.46 C 49.384 12.29 49.984 11.54 50.899 11.54 C 51.919 11.54 52.459 12.41 52.459 13.445 C 52.459 14.525 51.964 15.365 50.899 15.365 Z M 59.566 16.1 C 58.501 16.1 57.946 15.17 57.946 13.775 C 57.946 12.38 58.501 11.435 59.566 11.435 C 60.631 11.435 61.201 12.38 61.201 13.775 C 61.201 15.17 60.631 16.1 59.566 16.1 Z M 59.581 17.84 C 62.056 17.84 63.676 16.085 63.676 13.775 C 63.676 11.465 62.056 9.71 59.581 9.71 C 57.121 9.71 55.471 11.465 55.471 13.775 C 55.471 16.085 57.121 17.84 59.581 17.84 Z M 64.39 17.6 L 66.835 17.6 L 66.835 9.92 L 64.39 9.92 Z M 64.39 8.855 L 66.835 8.855 L 66.835 6.875 L 64.39 6.875 Z M 67.896 20.135 L 70.341 20.135 L 70.341 16.805 L 70.371 16.805 C 70.851 17.45 71.556 17.84 72.546 17.84 C 74.556 17.84 75.891 16.25 75.891 13.76 C 75.891 11.45 74.646 9.695 72.606 9.695 C 71.556 9.695 70.806 10.16 70.281 10.85 L 70.236 10.85 L 70.236 9.92 L 67.896 9.92 Z M 71.916 15.95 C 70.866 15.95 70.266 15.095 70.266 13.85 C 70.266 12.605 70.806 11.66 71.871 11.66 C 72.921 11.66 73.416 12.53 73.416 13.85 C 73.416 15.155 72.846 15.95 71.916 15.95 Z M 79.871 17.84 C 81.881 17.84 83.366 16.97 83.366 15.29 C 83.366 13.325 81.776 12.98 80.426 12.755 C 79.451 12.575 78.581 12.5 78.581 11.96 C 78.581 11.48 79.046 11.255 79.646 11.255 C 80.321 11.255 80.786 11.465 80.876 12.155 L 83.126 12.155 C 83.006 10.64 81.836 9.695 79.661 9.695 C 77.846 9.695 76.346 10.535 76.346 12.155 C 76.346 13.955 77.771 14.315 79.106 14.54 C 80.126 14.72 81.056 14.795 81.056 15.485 C 81.056 15.98 80.591 16.25 79.856 16.25 C 79.046 16.25 78.536 15.875 78.446 15.11 L 76.136 15.11 C 76.211 16.805 77.621 17.84 79.871 17.84 Z M 86.687 17.825 C 87.752 17.825 88.427 17.405 88.982 16.655 L 89.027 16.655 L 89.027 17.6 L 91.367 17.6 L 91.367 9.92 L 88.922 9.92 L 88.922 14.21 C 88.922 15.125 88.412 15.755 87.572 15.755 C 86.792 15.755 86.417 15.29 86.417 14.45 L 86.417 9.92 L 83.987 9.92 L 83.987 14.96 C 83.987 16.67 84.917 17.825 86.687 17.825 Z M 92.431 17.6 L 94.876 17.6 L 94.876 13.295 C 94.876 12.38 95.326 11.735 96.091 11.735 C 96.826 11.735 97.171 12.215 97.171 13.04 L 97.171 17.6 L 99.616 17.6 L 99.616 13.295 C 99.616 12.38 100.051 11.735 100.831 11.735 C 101.566 11.735 101.911 12.215 101.911 13.04 L 101.911 17.6 L 104.356 17.6 L 104.356 12.605 C 104.356 10.88 103.486 9.695 101.746 9.695 C 100.756 9.695 99.931 10.115 99.331 11.045 L 99.301 11.045 C 98.911 10.22 98.146 9.695 97.141 9.695 C 96.031 9.695 95.296 10.22 94.816 11.015 L 94.771 11.015 L 94.771 9.92 L 92.431 9.92 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 15.683 0.659 L 13.225 0 L 11.154 7.731 L 9.283 0.751 L 6.825 1.411 L 8.846 8.952 L 3.813 3.919 L 2.013 5.719 L 7.534 11.239 L 0.659 9.397 L 0 11.854 L 7.512 13.867 C 7.038 11.824 7.865 9.7 9.596 8.516 C 11.327 7.331 13.606 7.33 15.339 8.512 C 17.071 9.693 17.901 11.817 17.43 13.86 L 24.257 15.689 L 24.915 13.231 L 17.374 11.21 L 24.249 9.368 L 23.591 6.91 L 16.049 8.93 L 21.082 3.897 L 19.282 2.097 L 13.839 7.542 L 15.683 0.659 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 17.382 13.756 C 17.174 14.632 16.737 15.438 16.116 16.089 L 21.061 21.035 L 22.861 19.235 Z M 16.066 16.141 C 15.439 16.782 14.655 17.246 13.791 17.486 L 15.591 24.202 L 18.049 23.543 Z M 13.7 17.51 C 13.285 17.617 12.858 17.67 12.429 17.67 C 11.97 17.67 11.513 17.609 11.071 17.487 L 9.27 24.21 L 11.728 24.869 L 13.7 17.511 Z M 10.984 17.463 C 10.133 17.21 9.363 16.74 8.75 16.098 L 3.793 21.056 L 5.592 22.856 L 10.984 17.462 Z M 8.709 16.054 C 8.103 15.407 7.678 14.612 7.474 13.75 L 0.625 15.585 L 1.284 18.043 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
        </g>
      </svg>
      <svg viewBox="0 0 135.441 25.032" overflow="visible" id="svg-2001517018_5613">
        <g>
          <path d="M 32.627 1.155 L 36.012 1.155 L 36.012 19.62 L 41.582 19.62 L 41.582 22.697 L 32.627 22.697 Z M 47.979 23.005 C 46.318 23.005 45.045 22.534 44.163 21.59 C 43.281 20.646 42.84 19.313 42.84 17.589 L 42.84 6.264 C 42.84 4.54 43.281 3.207 44.163 2.263 C 45.046 1.319 46.317 0.847 47.979 0.847 C 49.641 0.847 50.913 1.319 51.795 2.263 C 52.677 3.207 53.119 4.54 53.119 6.264 L 53.119 17.589 C 53.119 19.313 52.678 20.646 51.795 21.589 C 50.914 22.534 49.641 23.005 47.979 23.005 Z M 47.979 19.928 C 49.148 19.928 49.733 19.22 49.733 17.804 L 49.733 6.049 C 49.733 4.634 49.148 3.925 47.979 3.925 C 46.809 3.925 46.225 4.633 46.225 6.049 L 46.225 17.803 C 46.225 19.219 46.809 19.927 47.979 19.927 Z M 60.208 23.005 C 58.568 23.005 57.316 22.544 56.454 21.62 C 55.592 20.677 55.162 19.332 55.162 17.589 L 55.162 6.264 C 55.162 4.519 55.592 3.186 56.454 2.263 C 57.316 1.319 58.568 0.847 60.208 0.847 C 61.85 0.847 63.102 1.319 63.963 2.263 C 64.825 3.186 65.256 4.519 65.256 6.264 L 65.256 8.11 L 62.055 8.11 L 62.055 6.048 C 62.055 4.633 61.47 3.925 60.301 3.925 C 59.131 3.925 58.547 4.632 58.547 6.048 L 58.547 17.836 C 58.547 19.231 59.131 19.928 60.301 19.928 C 61.47 19.928 62.055 19.231 62.055 17.835 L 62.055 13.619 L 60.363 13.619 L 60.363 10.542 L 65.256 10.542 L 65.256 17.589 C 65.256 19.333 64.825 20.677 63.964 21.62 C 63.102 22.544 61.85 23.005 60.209 23.005 Z M 72.323 23.005 C 70.661 23.005 69.389 22.534 68.507 21.59 C 67.625 20.646 67.183 19.313 67.183 17.589 L 67.183 6.264 C 67.183 4.54 67.624 3.207 68.507 2.263 C 69.389 1.319 70.661 0.847 72.323 0.847 C 73.985 0.847 75.257 1.319 76.139 2.263 C 77.021 3.207 77.463 4.54 77.463 6.264 L 77.463 17.589 C 77.463 19.313 77.022 20.646 76.139 21.589 C 75.258 22.534 73.985 23.005 72.323 23.005 Z M 72.323 19.928 C 73.492 19.928 74.077 19.22 74.077 17.804 L 74.077 6.049 C 74.077 4.634 73.492 3.925 72.323 3.925 C 71.153 3.925 70.569 4.633 70.569 6.049 L 70.569 17.803 C 70.569 19.219 71.153 19.927 72.323 19.927 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 79.661 1.155 L 83.047 1.155 L 83.047 22.697 L 79.662 22.697 L 79.662 1.155 Z M 85.582 1.155 L 90.568 1.155 C 92.25 1.155 93.512 1.606 94.353 2.509 C 95.195 3.412 95.615 4.735 95.615 6.479 L 95.615 8.603 C 95.615 10.347 95.195 11.67 94.353 12.573 C 93.512 13.475 92.25 13.926 90.568 13.926 L 88.968 13.926 L 88.968 22.697 L 85.582 22.697 Z M 90.568 10.849 C 91.122 10.849 91.532 10.695 91.799 10.387 C 92.086 10.08 92.23 9.557 92.23 8.818 L 92.23 6.264 C 92.23 5.525 92.086 5.002 91.799 4.694 C 91.532 4.386 91.122 4.232 90.568 4.232 L 88.968 4.232 L 88.968 10.849 Z M 101.975 23.005 C 100.334 23.005 99.092 22.544 98.251 21.62 C 97.41 20.677 96.989 19.332 96.989 17.589 L 96.989 16.358 L 100.19 16.358 L 100.19 17.836 C 100.19 19.231 100.775 19.928 101.944 19.928 C 102.519 19.928 102.949 19.764 103.236 19.436 C 103.544 19.086 103.698 18.533 103.698 17.774 C 103.698 16.871 103.493 16.081 103.083 15.404 C 102.673 14.706 101.914 13.875 100.805 12.911 C 99.41 11.68 98.436 10.572 97.881 9.587 C 97.328 8.582 97.051 7.453 97.051 6.202 C 97.051 4.498 97.481 3.186 98.343 2.263 C 99.205 1.319 100.457 0.847 102.098 0.847 C 103.719 0.847 104.94 1.319 105.76 2.263 C 106.602 3.186 107.022 4.519 107.022 6.264 L 107.022 7.156 L 103.821 7.156 L 103.821 6.049 C 103.821 5.31 103.678 4.777 103.391 4.448 C 103.103 4.1 102.683 3.925 102.129 3.925 C 101 3.925 100.436 4.613 100.436 5.987 C 100.436 6.767 100.642 7.496 101.052 8.173 C 101.482 8.849 102.252 9.67 103.36 10.635 C 104.775 11.865 105.75 12.984 106.284 13.989 C 106.817 14.994 107.084 16.174 107.084 17.528 C 107.084 19.292 106.642 20.647 105.76 21.591 C 104.898 22.535 103.636 23.006 101.975 23.006 Z M 113.949 23.005 C 112.308 23.005 111.056 22.544 110.194 21.62 C 109.332 20.677 108.902 19.332 108.902 17.589 L 108.902 1.155 L 112.287 1.155 L 112.287 17.836 C 112.287 18.574 112.431 19.107 112.718 19.436 C 113.025 19.764 113.457 19.927 114.01 19.927 C 114.564 19.927 114.985 19.764 115.272 19.436 C 115.58 19.108 115.734 18.574 115.734 17.835 L 115.734 1.156 L 118.996 1.156 L 118.996 17.59 C 118.996 19.334 118.565 20.678 117.703 21.621 C 116.842 22.545 115.59 23.006 113.949 23.006 Z M 121.407 1.155 L 126.239 1.155 L 128.393 16.573 L 128.454 16.573 L 130.609 1.155 L 135.441 1.155 L 135.441 22.697 L 132.24 22.697 L 132.24 6.386 L 132.179 6.386 L 129.716 22.697 L 126.885 22.697 L 124.423 6.386 L 124.362 6.386 L 124.362 22.697 L 121.407 22.697 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 0 22.709 C 4.165 22.709 7.541 19.333 7.541 15.168 C 7.541 11.003 4.165 7.627 0 7.627 L 0 12.907 C 1.225 12.94 2.201 13.943 2.201 15.169 C 2.201 16.394 1.225 17.397 0 17.431 L 0 22.71 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 25.223 9.951 C 23.902 9.533 22.524 9.321 21.138 9.322 C 13.676 9.322 7.627 15.371 7.627 22.833 C 7.627 23.582 7.688 24.316 7.805 25.032 L 16.201 25.032 C 15.108 22.585 15.973 19.706 18.235 18.268 C 20.497 16.83 23.471 17.266 25.224 19.294 L 25.224 9.951 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 1.271 0 C 1.896 5.656 6.691 10.055 12.513 10.055 C 18.335 10.055 23.13 5.656 23.755 0 L 15.665 0 C 15.15 1.29 13.901 2.136 12.512 2.136 C 11.123 2.136 9.874 1.29 9.359 0 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
        </g>
      </svg>
      <svg viewBox="0 0 104.822 24.946" overflow="visible" id="svg1646817130_11931">
        <g>
          <path d="M 50.248 0 C 49.662 2.579 49.431 3.597 45.938 3.916 C 49.431 3.597 49.2 4.616 48.614 7.194 C 49.197 4.631 49.431 3.597 52.871 3.284 C 49.431 3.597 49.666 2.564 50.248 0 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 51.797 6.88 C 50.815 7.5 49.622 7.647 48.468 7.784 C 47.204 7.933 45.953 8.087 44.716 8.246 C 45.044 6.804 45.196 6.22 47.154 6.042 C 45.176 6.222 45.311 5.627 45.646 4.153 C 45.308 5.636 45.176 6.222 43.165 6.405 C 45.155 6.224 45.045 6.796 44.716 8.246 C 41.157 8.703 37.605 9.22 34.063 9.796 C 37.997 9.317 43.466 8.849 48.159 8.449 C 49.683 8.318 51.727 8.158 52.161 9.624 C 52.299 10.087 52.301 10.659 52.217 11.342 L 50.141 11.342 L 48.427 19.406 L 52.989 19.406 L 54.704 11.341 L 52.389 11.341 C 52.743 10.263 53.186 9.423 53.911 8.774 C 54.834 7.949 56.14 7.776 57.375 7.687 C 82.481 5.876 102.247 7.199 102.572 10.892 C 102.665 11.944 101.172 13.081 98.411 14.231 L 98.411 14.236 L 98.402 14.239 L 98.402 14.231 C 99.425 13.799 101.484 12.726 101.61 11.341 L 97.239 11.341 L 95.512 15.331 C 95.511 15.338 95.505 15.345 95.496 15.353 L 95.485 15.353 L 95.49 15.331 C 95.482 14.886 95.47 14.442 95.454 13.998 C 95.446 13.556 95.437 13.115 95.428 12.674 C 95.42 12.23 95.408 11.786 95.393 11.341 L 89.533 11.341 L 87.818 19.406 L 91.831 19.406 L 92.775 14.965 L 92.777 14.954 L 92.788 14.954 L 92.793 14.955 C 92.796 14.956 92.798 14.958 92.798 14.961 L 92.798 14.964 L 92.797 14.965 C 92.823 15.704 92.846 16.442 92.865 17.181 C 92.884 17.919 92.906 18.661 92.931 19.406 L 95.734 19.406 L 97.763 14.933 L 97.764 14.923 L 97.776 14.923 C 97.78 14.923 97.783 14.924 97.784 14.926 L 97.784 14.928 L 97.784 14.934 L 96.833 19.407 L 101.066 19.407 L 102.579 12.288 C 104.119 11.351 104.906 10.446 104.814 9.606 C 104.376 5.572 83.857 4.442 57.814 6.808 L 57.665 6.822 L 57.659 6.822 C 56.432 6.936 54.959 7.072 54.334 6.038 C 53.734 5.044 54.117 3.358 54.667 0.938 C 53.992 3.906 53.572 5.76 51.798 6.88 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 36.282 12.701 C 36.622 13.239 36.778 13.848 36.751 14.529 L 31.768 15.626 L 36.43 15.626 L 35.644 19.325 L 30.982 19.325 L 31.768 15.626 L 31.488 16.199 C 31.433 16.312 31.378 16.426 31.323 16.538 C 31.054 17.096 30.781 17.652 30.505 18.207 C 30.296 18.637 30.088 19.064 29.881 19.487 C 29.676 19.522 29.476 19.548 29.283 19.562 C 29.095 19.583 28.873 19.594 28.616 19.594 C 28.059 19.594 27.557 19.544 27.109 19.443 C 26.704 19.356 26.313 19.215 25.945 19.024 C 25.611 18.837 25.328 18.616 25.097 18.358 C 24.873 18.099 24.7 17.813 24.576 17.497 C 24.462 17.174 24.396 16.831 24.378 16.465 C 24.364 16.075 24.398 15.684 24.482 15.303 C 24.552 14.975 24.653 14.655 24.784 14.346 C 24.925 14.031 25.099 13.73 25.306 13.443 C 25.528 13.144 25.781 12.87 26.063 12.626 C 26.36 12.361 26.686 12.131 27.033 11.937 C 27.4 11.729 27.808 11.551 28.258 11.399 C 28.708 11.249 29.198 11.134 29.728 11.056 C 30.264 10.977 30.844 10.938 31.468 10.938 C 32.772 10.938 33.816 11.095 34.599 11.411 C 35.382 11.726 35.943 12.156 36.282 12.701 Z M 31.93 14.916 C 31.899 14.716 31.786 14.558 31.591 14.443 C 31.396 14.328 31.114 14.271 30.748 14.271 C 30.404 14.271 30.119 14.318 29.894 14.411 C 29.676 14.504 29.508 14.622 29.389 14.766 C 29.28 14.902 29.208 15.049 29.175 15.206 C 29.151 15.316 29.153 15.431 29.181 15.54 C 29.216 15.648 29.279 15.744 29.363 15.819 C 29.455 15.906 29.584 15.974 29.749 16.024 C 29.914 16.074 30.118 16.099 30.359 16.099 C 30.733 16.099 31.031 16.06 31.253 15.981 C 31.476 15.895 31.648 15.776 31.768 15.626 C 31.907 15.354 31.961 15.117 31.93 14.916 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 44.633 10.959 C 44.379 10.944 44.124 10.937 43.869 10.938 C 43.194 10.938 42.564 10.988 41.979 11.088 C 41.434 11.172 40.899 11.313 40.383 11.508 C 39.898 11.686 39.459 11.905 39.068 12.164 C 38.693 12.407 38.351 12.696 38.049 13.024 C 37.763 13.343 37.518 13.697 37.319 14.078 C 37.11 14.496 36.96 14.941 36.875 15.401 C 42.092 15.294 43.346 14.023 44.633 10.959 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 36.956 15.529 C 36.904 15.806 36.877 16.086 36.875 16.367 C 36.881 16.683 36.928 16.984 37.013 17.271 C 37.106 17.558 37.239 17.83 37.411 18.088 C 37.592 18.339 37.818 18.569 38.089 18.776 C 38.367 18.984 38.7 19.164 39.086 19.314 C 39.473 19.457 39.914 19.569 40.411 19.647 C 40.715 19.7 41.042 19.736 41.391 19.757 C 42.452 16.694 42.165 15.451 36.956 15.529 Z M 41.429 19.759 C 41.644 19.771 41.867 19.777 42.098 19.777 C 42.971 19.777 43.753 19.697 44.446 19.54 C 45.146 19.39 45.762 19.178 46.296 18.906 C 46.832 18.626 47.289 18.303 47.667 17.938 C 48.03 17.587 48.338 17.185 48.581 16.744 C 48.823 16.295 48.996 15.813 49.093 15.313 C 43.959 15.419 42.711 16.707 41.429 19.759 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 48.897 15.161 C 43.78 15.238 43.505 13.978 44.558 10.938 C 45.539 10.999 46.354 11.177 47 11.472 C 47.815 11.846 48.377 12.358 48.685 13.01 C 48.982 13.637 49.052 14.354 48.897 15.16 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 72.683 14.48 C 73.327 14.502 73.888 14.542 74.366 14.604 C 75.087 14.697 75.645 14.845 76.042 15.045 C 76.441 15.239 76.703 15.49 76.828 15.798 C 76.954 16.099 76.973 16.457 76.885 16.873 C 76.789 17.325 76.553 17.726 76.178 18.078 C 75.812 18.422 75.336 18.712 74.751 18.949 C 74.174 19.178 73.522 19.351 72.794 19.465 C 72.072 19.587 71.308 19.648 70.502 19.648 C 69.607 19.648 68.807 19.583 68.102 19.454 C 67.397 19.326 66.815 19.128 66.358 18.863 C 65.903 18.591 65.593 18.243 65.426 17.819 C 65.267 17.397 65.275 16.891 65.452 16.304 L 70.003 16.005 C 69.374 15.981 68.83 15.934 68.37 15.863 C 67.677 15.748 67.142 15.59 66.767 15.389 C 66.392 15.189 66.145 14.952 66.027 14.679 C 65.911 14.4 65.889 14.088 65.962 13.744 C 66.04 13.379 66.209 13.049 66.47 12.755 C 66.732 12.454 67.065 12.192 67.472 11.97 C 67.887 11.74 68.353 11.551 68.868 11.399 C 69.418 11.243 69.979 11.128 70.547 11.056 C 71.15 10.977 71.77 10.938 72.408 10.938 C 73.309 10.938 74.099 11.016 74.776 11.174 C 75.461 11.332 76.014 11.558 76.435 11.851 C 76.864 12.145 77.141 12.497 77.267 12.905 C 77.392 13.314 77.346 13.772 77.128 14.282 Z M 72.64 13.981 C 72.582 13.844 72.463 13.748 72.285 13.69 C 72.115 13.626 71.913 13.594 71.678 13.594 C 71.532 13.594 71.397 13.608 71.273 13.636 C 71.159 13.656 71.047 13.692 70.943 13.744 C 70.853 13.787 70.775 13.841 70.71 13.906 C 70.657 13.963 70.619 14.033 70.601 14.109 C 70.58 14.184 70.596 14.264 70.643 14.325 C 70.692 14.375 70.772 14.411 70.884 14.433 C 71.005 14.454 71.163 14.464 71.362 14.464 L 71.636 14.464 C 71.941 14.464 72.245 14.468 72.55 14.476 C 72.67 14.273 72.7 14.108 72.64 13.981 Z M 70.202 16.012 C 70.107 16.218 70.086 16.391 70.142 16.529 C 70.207 16.673 70.33 16.78 70.513 16.852 C 70.696 16.924 70.908 16.959 71.15 16.959 C 71.297 16.959 71.43 16.949 71.552 16.927 C 71.682 16.906 71.798 16.873 71.903 16.831 C 71.997 16.794 72.084 16.739 72.157 16.669 C 72.22 16.603 72.264 16.521 72.284 16.433 C 72.321 16.261 72.253 16.149 72.08 16.099 C 71.915 16.049 71.66 16.024 71.316 16.024 L 71.041 16.024 C 70.747 16.024 70.468 16.02 70.202 16.012 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 82.891 11.251 L 78.329 11.251 L 77.248 16.337 C 77.155 16.774 77.169 17.173 77.291 17.531 C 77.417 17.885 77.629 18.203 77.908 18.456 C 78.229 18.729 78.59 18.95 78.978 19.112 C 79.424 19.297 79.89 19.431 80.366 19.509 C 80.876 19.596 81.398 19.639 81.933 19.639 C 82.608 19.639 83.278 19.57 83.944 19.434 C 84.59 19.307 85.217 19.102 85.812 18.821 C 86.384 18.542 86.864 18.197 87.252 17.789 C 87.64 17.387 87.907 16.884 88.022 16.337 L 89.103 11.251 L 84.541 11.251 L 83.638 15.498 C 83.594 15.706 83.476 15.864 83.284 15.971 C 83.093 16.079 82.891 16.132 82.678 16.132 C 82.576 16.132 82.476 16.118 82.379 16.09 C 82.294 16.063 82.214 16.023 82.141 15.971 C 82.08 15.914 82.031 15.844 81.998 15.767 C 81.97 15.676 81.967 15.58 81.991 15.488 L 82.891 11.25 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 62.111 11.25 C 62.793 11.25 63.367 11.343 63.832 11.529 C 64.308 11.709 64.676 11.956 64.939 12.272 C 65.211 12.58 65.389 12.931 65.474 13.326 C 65.559 13.719 65.556 14.128 65.466 14.551 C 65.367 15.011 65.184 15.448 64.928 15.842 C 64.662 16.257 64.324 16.621 63.93 16.917 C 63.526 17.233 63.051 17.484 62.505 17.67 C 61.961 17.849 61.356 17.939 60.689 17.939 L 58.326 17.939 L 58.313 17.949 L 58.301 17.949 L 58.299 17.96 L 58.011 19.315 L 53.438 19.315 L 55.152 11.25 Z M 59.833 15.605 C 60.053 15.605 60.244 15.569 60.406 15.498 C 60.576 15.419 60.711 15.323 60.808 15.208 C 60.908 15.086 60.97 14.964 60.996 14.842 C 61.024 14.723 61.012 14.598 60.961 14.487 C 60.906 14.366 60.811 14.267 60.691 14.208 C 60.56 14.136 60.381 14.1 60.154 14.1 L 59.141 14.1 C 59.134 14.1 59.126 14.103 59.118 14.111 L 59.115 14.121 L 58.803 15.594 C 58.809 15.594 58.813 15.598 58.811 15.605 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 11.675 16.154 L 11.003 19.315 L 3.355 19.315 C 3.588 18.292 4.419 17.173 6.365 16.316 C 3.634 17.46 2.158 18.591 2.251 19.636 C 2.6 23.599 25.335 24.833 53.031 22.394 C 55.583 22.169 58.148 21.951 60.661 21.738 L 60.668 21.737 L 60.676 21.737 L 60.681 21.736 L 60.684 21.736 C 63.544 21.493 66.334 21.256 68.953 21.022 C 63.738 21.836 58.505 22.528 53.257 23.097 C 24.322 26.248 0.481 25.274 0.007 20.924 C -0.087 20.059 0.75 19.127 2.376 18.161 L 3.845 11.25 L 8.407 11.25 L 7.37 16.132 L 7.365 16.154 Z M 6.228 16.359 L 6.097 16.411 C 6.256 16.349 6.418 16.286 6.584 16.223 L 6.662 16.191 C 6.517 16.246 6.372 16.302 6.228 16.359 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 19.946 10.959 C 19.692 10.944 19.436 10.937 19.181 10.938 C 18.508 10.938 17.878 10.988 17.292 11.088 C 16.715 11.181 16.183 11.321 15.696 11.508 C 15.211 11.686 14.773 11.905 14.381 12.164 C 14.007 12.407 13.664 12.696 13.362 13.024 C 13.076 13.343 12.831 13.697 12.632 14.078 C 12.423 14.495 12.273 14.941 12.188 15.401 C 17.406 15.294 18.658 14.023 19.946 10.959 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 11.956 15.529 C 11.903 15.806 11.876 16.086 11.875 16.367 C 11.881 16.683 11.928 16.984 12.013 17.271 C 12.106 17.558 12.239 17.83 12.411 18.088 C 12.602 18.349 12.83 18.581 13.089 18.776 C 13.367 18.984 13.699 19.164 14.085 19.314 C 14.472 19.457 14.914 19.569 15.41 19.647 C 15.715 19.7 16.041 19.736 16.391 19.757 C 17.452 16.694 17.165 15.451 11.956 15.529 Z M 16.429 19.759 C 16.644 19.771 16.867 19.777 17.098 19.777 C 17.971 19.777 18.753 19.697 19.446 19.54 C 20.145 19.39 20.762 19.178 21.296 18.906 C 21.832 18.626 22.289 18.303 22.668 17.938 C 23.03 17.587 23.337 17.185 23.58 16.744 C 23.823 16.295 23.995 15.813 24.093 15.313 C 18.959 15.419 17.71 16.707 16.429 19.759 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
          <path d="M 24.21 15.161 C 19.092 15.238 18.817 13.978 19.87 10.938 C 20.852 10.999 21.667 11.177 22.313 11.472 C 23.128 11.846 23.69 12.358 23.998 13.01 C 24.294 13.637 24.365 14.354 24.21 15.16 Z M 102.877 19.301 C 103.148 19.312 103.403 19.174 103.541 18.942 C 103.68 18.709 103.68 18.419 103.541 18.187 C 103.403 17.954 103.148 17.816 102.877 17.827 C 102.482 17.844 102.17 18.169 102.17 18.564 C 102.17 18.96 102.482 19.285 102.877 19.301 Z" fill="var(--token-1b03a498-4ccd-48f7-89b0-2f6f29aef1f1, rgb(153, 153, 153))">
          </path>
        </g>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 4.5 9 L 0 4.5 L 4.5 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="9px" id="dh81FTJGO" transform="translate(3 5.25)" width="4.5px">
        </path>
        <path d="M 4.5 9 L 0 4.5 L 4.5 0 Z" fill="transparent" height="9px" id="oIH_X_FV2" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 5.25)" width="4.5px">
        </path>
        <path d="M 13.5 9 C 13.5 4.029 9.471 0 4.5 0 L 0 0" fill="transparent" height="9px" id="vA718ibwQ" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 9.75)" width="13.5px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 6 L 0 12 L 6.75 18.75 L 6.75 12 L 13.5 12 L 0 0 L 13.5 0 L 13.5 6 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18.75px" id="WSyo6DWb7" transform="translate(5.25 3.75)" width="13.5px">
        </path>
        <path d="M 0 6 L 0 12 L 6.75 18.75 L 6.75 12 L 13.5 12 L 0 0 L 13.5 0 L 13.5 6 Z" fill="transparent" height="18.75px" id="s0FMeaMKY" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(5.25 3.75)" width="13.5px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" fill="transparent" height="6px" id="gPHqXBEMn" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12.75 9)" width="6px">
        </path>
        <path d="M 0 6 L 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 L 0 0" fill="transparent" height="6px" id="H9qUdxE4A" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12.75 3)" width="6px">
        </path>
        <path d="M 6.75 0 L 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 L 6.75 6 Z" fill="transparent" height="6px" id="hHP_Fi6Mt" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 3)" width="6.75px">
        </path>
        <path d="M 6.75 0 L 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 L 6.75 6 Z" fill="transparent" height="6px" id="ajP48ctgT" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 9)" width="6.75px">
        </path>
        <path d="M 6.75 0 L 3.375 0 C 1.511 0 0 1.511 0 3.375 C 0 5.239 1.511 6.75 3.375 6.75 C 5.239 6.75 6.75 5.239 6.75 3.375 Z" fill="transparent" height="6.75px" id="cVEwKK9Rt" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 15)" width="6.75px">
        </path>
        <path d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="6px" id="jjkSi4ZOk" transform="translate(12.75 9)" width="6px">
        </path>
        <path d="M 6.75 0 L 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 L 6.75 6 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="6px" id="IpkRTQ7he" transform="translate(6 3)" width="6.75px">
        </path>
        <path d="M 6.75 0 L 3.375 0 C 1.511 0 0 1.511 0 3.375 C 0 5.239 1.511 6.75 3.375 6.75 C 5.239 6.75 6.75 5.239 6.75 3.375 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="6.75px" id="pDSFdQOkL" transform="translate(6 15)" width="6.75px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 0 L 8.25 15 L 12 15 L 3.75 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="15px" id="dnGGqnw64" transform="translate(6 4.5)" width="12px">
        </path>
        <path d="M 0 0 L 2.25 0 L 10.5 15 L 14.25 15 L 14.25 0" fill="transparent" height="15px" id="K5XSdqDl2" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 4.5)" width="14.25px">
        </path>
        <path d="M 0 0 L 4.5 0" fill="transparent" height="1px" id="VW69bOPhH" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 19.5)" width="4.5px">
        </path>
        <path d="M 0 0 L 4.5 0" fill="transparent" height="1px" id="Hiu4UKeHs" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15.75 4.5)" width="4.5px">
        </path>
        <path d="M 12 15 L 3.75 0 L 0 0 L 0 15" fill="transparent" height="15px" id="kL_S9uTt8" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 4.5)" width="12px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 6.75 L 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 6.75 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="6.75px" id="y6ODVUHOT" transform="translate(9.75 15)" width="6px">
        </path>
        <path d="M 5.234 2.25 C 4.338 0.848 2.789 0 1.125 0 C 0.387 1.275 0.267 2.816 0.798 4.191 C 0.285 4.946 0.007 5.837 0 6.75 L 0 7.5 C 0 9.985 2.015 12 4.5 12 L 9 12 C 11.485 12 13.5 9.985 13.5 7.5 L 13.5 6.75 C 13.493 5.837 13.215 4.946 12.702 4.191 C 13.233 2.816 13.113 1.275 12.375 0 C 10.711 0 9.162 0.848 8.266 2.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="12.000000134557656px" id="jEvqf77oh" transform="translate(6 3)" width="13.5px">
        </path>
        <path d="M 5.234 2.25 C 4.338 0.848 2.789 0 1.125 0 C 0.387 1.275 0.267 2.816 0.798 4.191 C 0.285 4.946 0.007 5.837 0 6.75 L 0 7.5 C 0 9.985 2.015 12 4.5 12 L 9 12 C 11.485 12 13.5 9.985 13.5 7.5 L 13.5 6.75 C 13.493 5.837 13.215 4.946 12.702 4.191 C 13.233 2.816 13.113 1.275 12.375 0 C 10.711 0 9.162 0.848 8.266 2.25 Z" fill="transparent" height="12.000000134557656px" id="tRijDoqp2" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6 3)" width="13.5px">
        </path>
        <path d="M 0 6.75 L 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 6.75" fill="transparent" height="6.75px" id="ThwMvxByn" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9.75 15)" width="6px">
        </path>
        <path d="M 9 6 L 6 6 C 4.343 6 3 4.657 3 3 C 3 1.343 1.657 0 0 0" fill="transparent" height="6px" id="YWB51DZZd" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(0.75 13.5)" width="9px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 13.495 0 C 10.445 0 7.699 1.847 6.549 4.673 L 6.549 4.663 C 4.579 4.16 2.497 4.839 1.203 6.406 C -0.092 7.973 -0.366 10.146 0.499 11.985 C 1.365 13.824 3.213 14.998 5.245 15 L 13.495 15 C 17.638 15 20.995 11.642 20.995 7.5 C 20.995 3.358 17.638 0 13.495 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="15.00000000509916px" id="YpM31805z" transform="translate(1.505 4.5)" width="20.995466689395847px">
        </path>
        <path d="M 8.994 10.5 L 5.244 10.5 C 3.212 10.498 1.363 9.323 0.499 7.484 C -0.366 5.645 -0.091 3.472 1.203 1.906 C 2.498 0.339 4.58 -0.339 6.549 0.163" fill="transparent" height="10.500193561253383px" id="KspAVyjAn" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(1.506 9)" width="8.993584039658053px">
        </path>
        <path d="M 0 3 L 3 0 L 6 3" fill="transparent" height="3px" id="zM4wsDlxF" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(11.25 12)" width="6px">
        </path>
        <path d="M 0 7.5 L 0 0" fill="transparent" height="7.5px" id="r9tIiUy9r" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(14.25 12)" width="1px">
        </path>
        <path d="M 0 7.499 C 0.001 3.753 2.765 0.582 6.476 0.071 C 10.186 -0.441 13.705 1.864 14.72 5.469 C 15.734 9.075 13.933 12.876 10.5 14.374" fill="transparent" height="14.374463343089374px" id="BD02sn1ib" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(7.5 4.501)" width="15.001154869439048px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 3.034 8.536 C 5.565 6.322 8.531 3.076 8.531 0 C 5.455 0 2.21 2.966 0 5.498 C 1.272 6.211 2.322 7.263 3.034 8.536 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="8.5359375px" id="jRZEN5dpW" transform="translate(12.469 3)" width="8.53125px">
        </path>
        <path d="M 0 9.75 L 7.125 9.75 C 9.817 9.75 12 7.567 12 4.875 C 12 2.183 9.817 0 7.125 0 C 4.433 0 2.25 2.183 2.25 4.875 C 2.25 8.25 0 9.75 0 9.75 Z" fill="transparent" height="9.75px" id="r9dYzlRkJ" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(1.5 10.5)" width="12px">
        </path>
        <path d="M 0 7.89 C 1.799 5.465 6.286 0 10.462 0 C 10.462 4.176 4.997 8.663 2.572 10.462" fill="transparent" height="10.4615625px" id="vqQLMErYV" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(10.538 3)" width="10.4615625px">
        </path>
        <path d="M 0 0 C 1.274 0.713 2.325 1.765 3.038 3.038" fill="transparent" height="3.0384375000000006px" id="XRQt2uguA" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12.469 8.498)" width="3.0384375000000006px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 16.5 7.5 L 21 3.75 L 16.5 0 L 4.5 0 L 0 3.75 L 4.5 7.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="7.5px" id="JFMETPv_p" transform="translate(1.5 8.25)" width="21px">
        </path>
        <path d="M 4.5 0 L 0 3.75 L 4.5 7.5" fill="transparent" height="7.5px" id="ZCmlJHFVC" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(1.5 8.25)" width="4.5px">
        </path>
        <path d="M 0 0 L 4.5 3.75 L 0 7.5" fill="transparent" height="7.5px" id="LOivKvSTK" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(18 8.25)" width="4.5px">
        </path>
        <path d="M 6 0 L 0 16.5" fill="transparent" height="16.5px" id="Q8WRP3rJN" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(9 3.75)" width="6px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="10.5px" id="lYFPhWKGp" transform="translate(3 2.25)" width="18px">
        </path>
        <path d="M 0 0 L 9 5.25 L 18 0" fill="transparent" height="5.25px" id="tjxbvx4B_" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 16.5)" width="18px">
        </path>
        <path d="M 0 0 L 9 5.25 L 18 0" fill="transparent" height="5.25px" id="jkFbsHmSE" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 12)" width="18px">
        </path>
        <path d="M 0 5.25 L 9 10.5 L 18 5.25 L 9 0 Z" fill="transparent" height="10.5px" id="g8tAjyTpu" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3 2.25)" width="18px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 6 0 L 0 0 L 6 6 L 6 0" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="6px" id="EGuibIl0i" transform="translate(15.75 5.25)" width="6px">
        </path>
        <path d="M 6 6 L 6 0 L 0 0 Z" fill="transparent" height="6px" id="qnxgPYrWk" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(15.75 5.25)" width="6px">
        </path>
        <path d="M 16.5 0 L 10.5 6 L 6.75 2.25 L 0 9" fill="transparent" height="9px" id="HzexE4p54" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 8.25)" width="16.5px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="18.746261605760054px" id="t6hF1mhP1" transform="translate(2.251 2.25)" width="19.49332240036336px">
        </path>
        <path d="M 9.749 15.477 L 14.879 18.632 C 15.151 18.797 15.496 18.782 15.753 18.594 C 16.01 18.406 16.128 18.082 16.053 17.772 L 14.658 11.886 L 19.223 7.948 C 19.461 7.739 19.552 7.409 19.455 7.108 C 19.357 6.806 19.09 6.592 18.774 6.563 L 12.783 6.075 L 10.475 0.488 C 10.354 0.193 10.068 0 9.749 0 C 9.431 0 9.144 0.193 9.023 0.488 L 6.715 6.075 L 0.724 6.563 C 0.406 6.59 0.136 6.806 0.038 7.109 C -0.06 7.412 0.034 7.745 0.275 7.953 L 4.84 11.89 L 3.445 17.772 C 3.37 18.082 3.488 18.406 3.745 18.594 C 4.002 18.782 4.347 18.797 4.619 18.632 Z" fill="transparent" height="18.746261605760054px" id="b0GcHZb5O" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.251 2.25)" width="19.49332240036336px">
        </path>
      </svg>
      <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="qUr6K2nJv" transform="translate(3.75 3.75)" width="16.5px">
        </path>
        <path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="MbfmAbWGf" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px">
        </path>
        <path d="M 0 0 L 0 16.5" fill="transparent" height="16.5px" id="mcA57vhod" stroke-dasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 3.75)" width="1px">
        </path>
      </svg>
    </div>
    {/*  Start of bodyEnd  */}
    {/*  End of bodyEnd  */}
  
    </>
  );
}
