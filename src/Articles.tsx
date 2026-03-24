import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from './SharedLayout.tsx';
import Particles from './Particles.tsx';

const articles = [
  {
    slug: 'how-to-shoot-modern-mockumentary-style-videos',
    title: 'How to Shoot Modern Mockumentary-Style Videos',
    category: 'Cinematography',
    date: 'May 12, 2026',
    readTime: '6 min read',
    excerpt:
      'Mockumentary-style content is resurging in 2026. Discover how to treat the camera as a character in real time to capture observational comedy.',
    image: '/mockumentary-interview.png',
    link: '/articles/how-to-shoot-modern-mockumentary-style-videos',
  },
  {
    slug: 'overdone-videography-trends-you-should-ditch-in-2026',
    title: 'Overdone Videography Trends You Should Ditch in 2026',
    category: 'Cinematography',
    date: 'Apr 7, 2026',
    readTime: '4 min read',
    excerpt:
      'If your videos look like everyone else’s, your clients will treat you like everyone else.',
    image: '/videography-trends.png',
    link: '/articles/overdone-videography-trends-you-should-ditch-in-2026',
  },
  {
    slug: 'getting-into-videography-in-2026-what-you-really-need',
    title: 'Getting Into Videography in 2026 – What You Really Need',
    category: 'Cinematography',
    date: 'Apr 7, 2026',
    readTime: '4 min read',
    excerpt:
      'Breaking into videography in 2026 can feel overwhelming, but the fundamentals are clearer than ever.',
    image: '/getting-into-videography.png',
    link: '/articles/getting-into-videography-in-2026-what-you-really-need',
  },
  {
    slug: 'surviving-as-a-videographer-in-2026-crowded-market',
    title: 'Surviving as a Videographer in 2026’s Crowded Market',
    category: 'Business',
    date: 'Apr 10, 2026',
    readTime: '4 min read',
    excerpt:
      'The middle of the videography market has never been more crowded. Learn how to survive in 2026 by moving toward specialized, premium service or volume-driven creation.',
    image: '/surviving-videographer.png',
    link: '/articles/surviving-as-a-videographer-in-2026-crowded-market',
  },
  {
    slug: 'designing-for-motion-how-micro-animations-shape-user-experience',
    title: 'Designing for Motion: How Micro-Animations Shape User Experience',
    category: 'Design',
    date: 'Apr 10, 2026',
    readTime: '4 min read',
    excerpt:
      'Learn why micro-animations guide users, improve usability, and boost conversions, plus best practices for timing, performance, and accessibility.',
    image: 'https://framerusercontent.com/images/2XmQwKSaHgfErm1BpvZyUSJrgs.png',
    link: '/articles/designing-for-motion-how-micro-animations-shape-user-experience',
  },

];

const categories = ['All', 'Design', 'Technology', 'Accessibility', 'Post-Production', 'Cinematography', 'Strategy', 'Production', 'Business'];

const categoryColors: Record<string, string> = {
  'Design': 'rgba(0, 180, 220, 0.18)',
  'Technology': 'rgba(60, 200, 160, 0.18)',
  'Accessibility': 'rgba(180, 120, 255, 0.18)',
  'Post-Production': 'rgba(120, 80, 255, 0.18)',
  'Cinematography': 'rgba(20, 120, 200, 0.18)',
  'Strategy': 'rgba(0, 160, 120, 0.18)',
  'Production': 'rgba(200, 80, 40, 0.18)',
  'Business': 'rgba(160, 100, 20, 0.18)',
};

export default function Articles() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div
      className="framer-i3OY7 framer-he6zob"
      style={{
        minHeight: '100vh',
        background: '#000',
        color: 'white',
        fontFamily: '"Satoshi", "Fragment Mono", sans-serif',
        position: 'relative',
        overflowX: 'hidden',
        width: 'auto'
      }}
    >
      <div className="bg-glow-top" />
      <div className="bg-glow-bottom" />
      <div className="bg-noise" />
      <Particles />

      <Header />

      {/* ── PAGE CONTENT ── */}
      <main
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '140px 40px 100px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Page header */}
        <div style={{ marginBottom: '60px' }}>
          <p
            style={{
              color: 'rgba(153,153,153,1)',
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Journal
          </p>
          <h1
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(44px, 6vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.05,
              margin: '0 0 20px',
              color: 'white',
            }}
          >
            Articles
          </h1>
          <p
            style={{
              color: 'rgba(153,153,153,1)',
              fontSize: '16px',
              lineHeight: 1.6,
              maxWidth: '520px',
              margin: 0,
            }}
          >
            Thoughts on videography, filmmaking, and the craft behind compelling visual storytelling.
          </p>
        </div>

        {/* Category filter pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '56px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '100px',
                border: `1px solid ${activeCategory === cat ? 'rgba(255,255,255,0.5)' : 'rgba(153,153,153,0.2)'}`,
                background: activeCategory === cat ? 'rgba(255,255,255,0.07)' : 'transparent',
                color: activeCategory === cat ? 'white' : 'rgba(153,153,153,1)',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                letterSpacing: '0.02em',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 490px), 1fr))',
            gap: '28px',
          }}
        >
          {filtered.map((article) => (
            <article
              key={article.slug}
              onMouseEnter={() => setHoveredCard(article.slug)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: '#000',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(153,153,153,0.12)',
                boxShadow:
                  hoveredCard === article.slug
                    ? 'inset 0 1px 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4)'
                    : 'inset 0 1px 1px rgba(255,255,255,0.04)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                transform: hoveredCard === article.slug ? 'translateY(-4px)' : 'translateY(0)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={() => navigate((article as any).link || '/')}
            >
              {/* Image */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                    transform: hoveredCard === article.slug ? 'scale(1.04)' : 'scale(1)',
                  }}
                />
              </div>

              {/* Card body */}
              <div
                style={{
                  padding: '28px 28px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  gap: '12px',
                }}
              >
                {/* Category + date row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      background: categoryColors[article.category] ?? 'rgba(153,153,153,0.12)',
                      color: 'rgba(255,255,255,0.75)',
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {article.category}
                  </span>
                  <span style={{ color: 'rgba(153,153,153,0.7)', fontSize: '12px' }}>
                    {article.date}
                  </span>
                  <span style={{ color: 'rgba(153,153,153,0.4)', fontSize: '12px' }}>·</span>
                  <span style={{ color: 'rgba(153,153,153,0.7)', fontSize: '12px' }}>
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: '"Instrument Serif", Georgia, serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: 'white',
                    margin: 0,
                    transition: 'color 0.2s',
                  }}
                >
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p
                  style={{
                    color: 'rgba(153,153,153,0.9)',
                    fontSize: '14px',
                    lineHeight: 1.65,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {article.excerpt}
                </p>

                {/* Read more link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '8px',
                    color: hoveredCard === article.slug ? 'white' : 'rgba(153,153,153,0.8)',
                    fontSize: '13px',
                    transition: 'color 0.2s',
                  }}
                >
                  Read article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(153,153,153,0.6)' }}>
            <p style={{ fontSize: '16px' }}>No articles in this category yet.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
