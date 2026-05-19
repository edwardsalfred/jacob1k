import React, { useState, useEffect } from 'react';
import './Work.css';

interface Video {
  id: string;
  title: string;
  type: string;
  category: string;
  duration: string;
  platform?: 'youtube' | 'vimeo' | 'direct' | 'instagram';
  thumbnail?: string;
  src?: string;
}

const vids: Video[] = [
  { id: 'q92hPQwia3c', title: 'Pestorix', type: 'Wedding', category: 'wedding', duration: '1:00' },
  { id: 'BPNn8ZsB1EM', title: 'Danzora', type: 'Commercial', category: 'commercial', duration: '0:45' },
  { id: 'd739veB731k', title: 'Didasko', type: 'Event', category: 'event', duration: '0:50' },
  { id: 'wM5whcn5P8I', title: 'Harmonix', type: 'Documentary', category: 'documentary', duration: '1:30' },
  { id: 'knHWet8ylNs', title: 'Lumina', type: 'Reel', category: 'reel', duration: '0:15' },
  { id: 'jAFnOSPZcSo', title: 'Reel', type: 'Reel', category: 'reel', duration: '0:30' },
  { id: 'DRAS4whCWQh', title: 'Reel', type: 'Reel', category: 'reel', duration: '0:30', platform: 'direct', src: '/videos/reel-DRAS4whCWQh.mp4', thumbnail: '/videos/reel-DRAS4whCWQh.jpg' },
  { id: 'C0FNvxGANJC', title: 'Reel', type: 'Reel', category: 'reel', duration: '0:30', platform: 'direct', src: '/videos/reel-C0FNvxGANJC.mp4', thumbnail: '/videos/reel-C0FNvxGANJC.jpg' },
];

const PortfolioWork: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [activeVid, setActiveVid] = useState<Video | null>(null);
  const [isLightboxActive, setIsLightboxActive] = useState(false);

  const categories = ['all', 'wedding', 'commercial', 'event', 'documentary', 'reel'];

  const filteredVids = vids.filter(v => filter === 'all' || v.category === filter);

  const openLightbox = (v: Video) => {
    setActiveVid(v);
    setIsLightboxActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxActive(false);
    setTimeout(() => setActiveVid(null), 400); // Wait for fade out
    document.body.style.overflow = '';
  };

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="work-root" aria-label="Projects">
      <div className="section-label" aria-hidden="true">Projects</div>
      

      <div className="video-grid">
        {filteredVids.map((v, i) => (
          <div
            key={v.title + i}
            className={`video-card ${i === 0 ? 'wide' : ''}`}
            onClick={() => openLightbox(v)}
            role="button"
            tabIndex={0}
            aria-label={`Play ${v.title} — ${v.type}`}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(v); } }}
          >
            <div className="video-thumb">
              <img
                src={v.thumbnail || `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                alt={v.title}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (v.platform !== 'direct' && !target.src.includes('0.jpg')) {
                    target.src = `https://i.ytimg.com/vi/${v.id}/0.jpg`;
                  }
                }}
              />
              <div className="play-overlay">
                <div className="play-icon">
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="duration-tag">{v.duration}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={`lightbox ${isLightboxActive ? 'active' : ''}`} onClick={closeLightbox}>
        {activeVid && (
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox} aria-label="Close Lightbox">&times;</button>
            <div className="video-wrapper">
              {activeVid.platform === 'direct' && activeVid.src ? (
                <video
                  src={activeVid.src}
                  poster={activeVid.thumbnail}
                  title={activeVid.title}
                  controls
                  autoPlay
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVid.id}?autoplay=1&rel=0`}
                  title={activeVid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioWork;
