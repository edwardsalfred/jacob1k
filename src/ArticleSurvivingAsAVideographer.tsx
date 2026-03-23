import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './SharedLayout.tsx';
import Particles from './Particles.tsx';

export default function ArticleSurvivingAsAVideographer() {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
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
          Surviving as a Videographer in 2026’s Crowded Market
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
          To survive in 2026, you cannot sit in the mushy middle; you need to move toward specialized, premium service or volume‑driven creation.
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
            src="/surviving-videographer.png"
            alt="Surviving as a Videographer in 2026’s Crowded Market"
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
            The middle of the videography market has never been more crowded. Entry‑level creators are undercutting on price with smartphones, while high‑end agencies are pulling away with multi‑person crews and sophisticated strategy. To survive in 2026, you cannot sit in the mushy middle; you need to move either toward specialized, premium service or toward hyper‑efficient, volume‑driven content creation. Both routes demand clarity about what you actually sell.
          </p>

          <p style={{ marginBottom: '32px' }}>
            At the premium end, you are not selling “videos,” you are selling outcomes: more qualified leads, higher conversion rates, increased ticket sales, or improved brand perception. That means talking in the language of results, not resolution. Offer projects that bundle strategy, scripting, production, and distribution rather than isolated one‑off shoots. Build a visible process around discovery calls, pre‑production, shot lists, client reviews, and post‑launch analytics so clients feel they are buying a system, not just a shoot day. This structure makes it easier to justify higher prices and to build repeat relationships instead of single invoices.
          </p>

          <p style={{ marginBottom: '32px' }}>
            On the volume side, your advantage is speed and predictability. Product explainers, UGC‑style spots, and talking‑head content for personal brands and educators are all ripe for package‑based pricing. Productize what you do into clear tiers—such as “4 short edits per month,” “weekly talking‑head episodes,” or “monthly event recap”—with fixed inputs and outputs. Streamline your pipeline with templates, LUTs, and repeatable lighting setups so you can film, edit, and deliver multiple pieces of content per day without burning out. Clients buy peace of mind: knowing that three new pieces of content will hit their channels every week without them having to micromanage.
          </p>

          <p style={{ marginBottom: 0 }}>
            Regardless of where you position yourself, relationship and communication skills are non‑negotiable. Respond quickly, set expectations in writing, share simple moodboards or reference cuts, and over‑communicate about deadlines. Protect your margin with deposits, clear revision limits, and usage terms in your contracts. In a world where almost anyone can point a camera, the videographers who survive in 2026 are the ones who combine strong images with strong business habits—because great footage alone is no longer rare.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
