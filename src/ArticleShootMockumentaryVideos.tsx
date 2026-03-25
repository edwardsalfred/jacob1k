import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './SharedLayout.tsx';
import Particles from './Particles.tsx';

export default function ArticleShootMockumentaryVideos() {
    
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
          padding: '80px 40px 80px',
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
          How to Shoot Modern Mockumentary-Style Videos
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
          Mockumentary-style content is resurging in 2026. Discover how to treat the camera as a character in real time to capture observational comedy.
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
            src="/mockumentary-interview.png"
            alt="How to Shoot Modern Mockumentary-Style Videos"
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
            Mockumentary‑style content is resurging in 2026 because it blends the relatability of vlogs with the structure of scripted comedy. Whether you are making an office parody, a fake startup documentary, or a character‑driven short for social media, the key is to treat the camera as a character. The audience should feel that someone with opinions is behind the lens, observing and reacting in real time.
          </p>

          <p style={{ marginBottom: '32px' }}>
            Start with the visual language. Use handheld camerawork that feels intentional, not sloppy: gentle searching movements, small reframes during dialogue, and the occasional zoom‑in on a reaction or awkward pause. Compose as if a real documentary shooter is trying to catch moments as they unfold, sometimes arriving a beat late on punchlines or emotional reveals. Mix formal interviews “talking heads” with the subject looking just off‑camera with looser verité scenes where characters forget the camera is there. Those shifts between awareness and forgetfulness are where much of the comedy lives.
          </p>

          <p style={{ marginBottom: '32px' }}>
            Performance and blocking are just as critical. Encourage your actors to improvise within structured beats rather than memorize every line; the messiness of overlapping dialogue and half‑finished sentences sells the documentary illusion. When something funny or surprising happens, let the camera react with a slight zoom or whip‑pan instead of cutting away. Use glances to camera, awkward silences, and subtle rack focuses to highlight jokes without spelling them out. In editing, lean on smash cuts between interviews and action scenes, intercutting a confident statement with reality that proves the opposite.
          </p>

          <p style={{ marginBottom: 0 }}>
            Sound and world‑building tie it together. A mockumentary benefits from practical location audio room tone, office hum, footsteps mixed with just enough music to guide the mood. Choose score that feels like it came from a real low‑budget documentary library rather than a glossy blockbuster trailer. Round things out with lower‑thirds, time‑stamps, or simple “archival” stills that expand the universe. When all these elements align, you create videos that feel grounded, nimble, and endlessly meme‑able, perfectly tuned for today’s short‑form platforms and binge‑watching habits.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
