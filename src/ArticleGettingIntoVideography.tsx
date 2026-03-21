import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './SharedLayout.tsx';

export default function ArticleGettingIntoVideography() {
    
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
          Getting Into Videography in 2026 – What You Really Need
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
          Breaking into videography in 2026 can feel overwhelming, but the fundamentals are clearer than ever.
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
            src="/getting-into-videography.png"
            alt="Getting Into Videography in 2026"
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
            Breaking into videography in 2026 can feel overwhelming, but the fundamentals are clearer than ever. You do not need to start with a cinema camera, giant light kit, or a drawer full of lenses; you need a reliable hybrid camera, one fast prime, decent audio, and a ruthless focus on story. Image quality from mid‑range mirrorless bodies is already “good enough” for most clients, so your advantage comes from how you see and shape moments, not how expensive your rig looks.
          </p>

          <p style={{ marginBottom: '32px' }}>
            The modern beginner’s toolkit should be built around three pillars: mobility, audio, and vertical‑first delivery. Mobility means a compact camera, one stabilized zoom or fast prime, and support you can carry alone—like a lightweight tripod and a simple handheld or gimbal setup. Audio matters more than ever because most platforms auto‑play with sound on; pick a small on‑camera shotgun and a budget wireless lav system you trust. Vertical‑first delivery means you light, frame, and compose with both 16:9 and 9:16 in mind from the start, using safe zones to keep faces and key actions centered.
          </p>

          <p style={{ marginBottom: '32px' }}>
            Skill wise, the priority stack has shifted too. You should learn exposure, color temperature, and audio gain before diving into advanced color grading or motion graphics. Practice shooting in mixed lighting, controlling contrast with reflectors, and keeping your ISO as low as practical. In post, master clean cuts, J‑cuts, L‑cuts, and simple sound design long before you worry about flashy transitions. The beginner who can turn around a clean, well‑structured 45‑second vertical edit in 24 hours will land more work than the beginner who spends a week on a noisy “cinematic b‑roll” clip.
          </p>

          <p style={{ marginBottom: 0 }}>
            Most importantly, position yourself around problems you can actually solve. Short‑form content for local brands, talking‑head educational videos, and micro‑documentaries for founders or artists are all growing niches. Reach out with small, specific offers: “I can make you three vertical videos showcasing your process,” or “I can film one customer story that lives on your homepage and socials.” Each project is both a portfolio piece and a learning lab, and in 2026 the people who learn fastest—not the ones with the fanciest cameras—are the ones who win.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
