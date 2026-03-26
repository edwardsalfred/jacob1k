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
}

const vids: Video[] = [
  { id: 'q92hPQwia3c', title: 'Pestorix', type: 'Wedding', category: 'wedding', duration: '1:00' },
  { id: 'BPNn8ZsB1EM', title: 'Danzora', type: 'Commercial', category: 'commercial', duration: '0:45' },
  { id: 'd739veB731k', title: 'Didasko', type: 'Event', category: 'event', duration: '0:50' },
  { id: 'wM5whcn5P8I', title: 'Harmonix', type: 'Documentary', category: 'documentary', duration: '1:30' },
  { id: 'knHWet8ylNs', title: 'Lumina', type: 'Reel', category: 'reel', duration: '0:15' },
  { id: 'jAFnOSPZcSo', title: 'Reel', type: 'Reel', category: 'reel', duration: '0:30' },
  { id: 'DRAS4whCWQh', title: 'Reel', type: 'Reel', category: 'reel', duration: '0:30', platform: 'instagram' },
  { id: 'C0FNvxGANJC', title: 'Reel', type: 'Reel', category: 'reel', duration: '0:30', platform: 'instagram' },
];

const PortfolioWork: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [activeVid, setActiveVid] = useState<Video | null>(null);
  const [isLightboxActive, setIsLightboxActive] = useState(false);

  const categories = ['all', 'wedding', 'commercial', 'event', 'documentary', 'reel'];

  const filteredVids = vids.filter(v => filter === 'all' || v.category === filter);

  const openLightbox = (v: Video) => {
    if (v.platform === 'instagram') {
      window.open(`https://www.instagram.com/reel/${v.id}/`, '_blank', 'noopener,noreferrer');
      return;
    }
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
    <div className="work-root">
      <div className="section-label">Projects</div>
      
      <div className="filters">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="video-grid">
        {filteredVids.map((v, i) => (
          <div 
            key={v.title + i}
            className={`video-card ${i === 0 ? 'wide' : ''}`}
            onClick={() => openLightbox(v)}
          >
            <div className="video-thumb">
              {v.platform === 'instagram' ? (
                <div className="instagram-thumb-placeholder">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <circle cx="12" cy="12" r="4"></circle>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
                  </svg>
                </div>
              ) : (
                <img
                  src={v.thumbnail || `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('0.jpg')) {
                      target.src = `https://i.ytimg.com/vi/${v.id}/0.jpg`;
                    }
                  }}
                />
              )}
              <div className="play-overlay">
                <div className="play-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <iframe
                src={`https://www.youtube.com/embed/${activeVid.id}?autoplay=1&rel=0`}
                title={activeVid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="lightbox-info">
              <div className="info-type">{activeVid.type}</div>
              <h2 className="info-title">{activeVid.title}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioWork;
