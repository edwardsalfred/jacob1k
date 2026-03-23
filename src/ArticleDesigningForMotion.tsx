import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './SharedLayout.tsx';
import Particles from './Particles.tsx';

export default function ArticleDesigningForMotion() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const inlineCode: React.CSSProperties = {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '4px',
    padding: '2px 7px',
    fontFamily: '"Fragment Mono", "Fira Code", monospace',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.75)',
    letterSpacing: '0.02em',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#000',
        color: 'white',
        fontFamily: '"Satoshi", "Inter", sans-serif',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <div className="bg-glow-top" />
      <div className="bg-glow-bottom" />
      <div className="bg-noise" />
      <Particles />

      <Header />

      {/* ── ARTICLE CONTENT ── */}
      <main
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          padding: '140px 40px 80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Go back link */}
        <Link
          to="/articles"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            fontSize: '14px',
            marginBottom: '48px',
            transition: 'color 0.2s',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: 'scaleX(-1)' }}>
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Go back
        </Link>

        {/* Title */}
        <h1
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            fontWeight: 400,
            lineHeight: 1.08,
            color: 'white',
            margin: '0 0 24px',
            letterSpacing: '-0.01em',
          }}
        >
          Designing for Motion: How Micro-Animations Shape User Experience
        </h1>

        {/* Description */}
        <p
          style={{
            color: 'rgba(153,153,153,0.85)',
            fontSize: '16px',
            lineHeight: 1.7,
            margin: '0 0 48px',
            maxWidth: '640px',
            letterSpacing: '-0.01em',
          }}
        >
          Learn why micro-animations guide users, improve usability, and boost
          conversions, plus best practices for timing, performance, and
          accessibility.
        </p>

        {/* Hero image */}
        <div
          style={{
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '56px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          }}
        >
          <img
            src="https://framerusercontent.com/images/2XmQwKSaHgfErm1BpvZyUSJrgs.png"
            alt="Designing for Motion – abstract ripple visual"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              aspectRatio: '16 / 9',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* ── Article body ── */}
        <div
          style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.72)',
            letterSpacing: '-0.005em',
          }}
        >
          <p style={{ marginBottom: '32px' }}>
            In the golden age of flat design, still screens ruled the web. Yet in
            2025, movement is no longer decoration—it is dialogue. Thoughtfully
            crafted micro-animations guide, reassure, and educate visitors every
            time they hover, tap, or scroll. Designers who ignore motion risk
            building interfaces that feel static and uncertain, while teams who
            embrace it create experiences that are both delightful and highly
            usable.
          </p>

          {/* Why motion matters */}
          <h3
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '19px',
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 12px',
              letterSpacing: '0.01em',
            }}
          >
            Why motion matters
          </h3>
          <p style={{ marginBottom: '32px' }}>
            Human vision evolved to notice change; our brains are primed to look
            for movement in the periphery. A button that gently pulses or a
            progress bar that fills from left to right exploits this bias to draw
            attention exactly where we want it. But motion is also semantic. A
            swipe transition that pushes old content off-screen and slides new
            content in from the same direction reinforces the idea of spatial
            continuity—helpful on small mobile screens where hierarchy can feel
            cramped.
          </p>

          {/* Timing and easing */}
          <h3
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '19px',
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 12px',
              letterSpacing: '0.01em',
            }}
          >
            Timing and easing
          </h3>
          <p style={{ marginBottom: '32px' }}>
            The industry standard for micro-animation timing falls between 150 ms
            and 400 ms. Anything shorter can feel like a flash; anything longer
            risks slowing the user down. Easing functions—ease-out for exits,
            ease-in for entrances, and ease-in-out for reversible states—give life
            to movement without requiring complex choreography. Popular libraries
            such as Framer Motion or GSAP expose cubic bezier presets, but advanced
            teams often tweak these curves to match brand tone. For example, a
            playful lifestyle brand might adopt a slightly bouncy "overshoot"
            easing, whereas a banking app sticks to crisp linear exits that imply
            reliability.
          </p>

          {/* Performance considerations */}
          <h3
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '19px',
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 12px',
              letterSpacing: '0.01em',
            }}
          >
            Performance considerations
          </h3>
          <p style={{ marginBottom: '32px' }}>
            CSS transforms (translate, scale, rotate) and opacity changes are
            GPU-accelerated on most modern browsers. Animating expensive properties
            like top, left, or width forces a layout recalculation and should be
            avoided in high-volume loops. Devices running on battery also
            appreciate a frame-rate budget; throttling to 30 fps during scroll can
            conserve power without degrading perceived smoothness.
          </p>

          {/* Accessibility and motion sensitivity */}
          <h3
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '19px',
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 12px',
              letterSpacing: '0.01em',
            }}
          >
            Accessibility and motion sensitivity
          </h3>
          <p style={{ marginBottom: '32px' }}>
            Not all users tolerate motion well. Vestibular disorders or ADHD can
            amplify discomfort when elements slide around unexpectedly. Respect the{' '}
            <code style={inlineCode}>prefers-reduced-motion</code> media query by
            swapping complex transitions with fades or instant state changes. If
            disabling every animation breaks contextual meaning—for example, a
            toast notification sliding in to confirm an action—consider keeping a
            minimal motion but reducing distance and duration by 80&nbsp;%.
          </p>

          {/* Integration into design systems */}
          <h3
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '19px',
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 12px',
              letterSpacing: '0.01em',
            }}
          >
            Integration into design systems
          </h3>
          <p style={{ marginBottom: '32px' }}>
            Motion tokens—just like color, typography, and spacing—belong in the
            design-system glossary. Naming conventions such as{' '}
            <code style={inlineCode}>motion.fade.fast</code> or{' '}
            <code style={inlineCode}>motion.slide.medium</code> allow designers
            and developers to speak the same language. In Figma you can document
            these tokens in a dedicated "Motion" page and export JSON for real-time
            use with schemes like Style Dictionary.
          </p>

          {/* Measuring success */}
          <h3
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '19px',
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 12px',
              letterSpacing: '0.01em',
            }}
          >
            Measuring success
          </h3>
          <p style={{ marginBottom: '32px' }}>
            Micro-animations raise conversion rates indirectly. They shorten
            orientation time, reduce input errors, and signal success faster than
            static states. Combine Lighthouse performance audits with Hotjar
            recordings to ensure animations do not tank Core Web Vitals. Then A/B
            test two versions of the checkout flow—one static, one animated—and
            watch the abandonment curve flatten.
          </p>

          {/* Closing paragraph */}
          <p style={{ marginBottom: 0 }}>
            In short, motion is no longer the glitter on top of an interface; it is
            the pulse that keeps an experience alive. Master it, measure it, and
            your users will feel the difference—consciously or not.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
