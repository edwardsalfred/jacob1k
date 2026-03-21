import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './SharedLayout.tsx';

export default function ArticleOverdoneVideographyTrends() {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'rgb(0,0,0)',
        color: 'white',
        fontFamily: '"Satoshi", "Inter", sans-serif',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      <div className="bg-blob bg-blob-4" />
      <div className="bg-noise" />

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
          Overdone Videography Trends You Should Ditch in 2026
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
          If your videos look like everyone else's, your clients will treat you like everyone else.
        </p>

        {/* Hero image - Will be updated with generated artifact URL */}
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
            src="/videography-trends.png"
            alt="Overdone Videography Trends - Water ripples"
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
            If your videos look like everyone else’s, your clients will treat you like everyone else. In 2026, certain videography trends are officially past their prime, and clinging to them signals that your visual language is stuck in 2019. The fastest way to stand out right now is not a new plugin, but the courage to subtract tired gimmicks from your workflow.
          </p>

          <p style={{ marginBottom: '32px' }}>
            The first major offender is the “transition circus”: constant whip‑pans, speed‑ramps, zoom transitions, and fake dolly zooms shoved between every shot. These tricks were effective when they were rare, but now they often break story flow and exhaust viewers. Instead of stacking effects, invest in intentional in‑camera movement—clean tracking shots, motivated pans, and well‑timed reframes that emphasize emotion or information. Edit only where the story truly turns; let composition and blocking carry more of the weight.
          </p>

          <p style={{ marginBottom: '32px' }}>
            Another trend that has overstayed its welcome is fake cinematic aspect ratios and “film” overlays used as a shortcut for real craft. Slapping black bars, grain overlays, and teal‑orange LUTs on poorly lit footage does not make it cinematic; it just highlights the mismatch between styling and substance. Commit to true cinematic fundamentals: contrast‑driven lighting, separation between subject and background, coherent color palettes, and consistent exposure across scenes. Once your base image is strong, a subtle grain layer and gentle letterbox become finishing touches—not band‑aids.
          </p>

          <p style={{ marginBottom: 0 }}>
            Finally, audiences are tiring of hyper‑polished, over‑stabilized footage that feels more like an advertisement than a moment. Social platforms are rewarding authenticity: slight handheld movement, natural light, and imperfect but honest angles. You do not need to abandon your gimbal or your log profile, but you do need to let a little texture back into your work. Mix precise coverage with moments that feel observed rather than staged, and your videos will feel more human—and far more memorable.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
