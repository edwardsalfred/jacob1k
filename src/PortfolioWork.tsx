import React, { useState, useEffect } from 'react';
import './Work.css';

interface Video {
  id: string;
  title: string;
  type: string;
  category: string;
  duration: string;
  platform?: 'youtube' | 'vimeo' | 'direct';
}

const vids: Video[] = [
  { id: 'YOUR_YT_ID_1', title: 'Pestorix', type: '2024', category: 'wedding', duration: '4:32' },
  { id: 'YOUR_YT_ID_2', title: 'Danzora', type: '2024', category: 'commercial', duration: '2:10' },
  { id: 'YOUR_YT_ID_3', title: 'Didasko', type: '2024', category: 'event', duration: '3:55' },
  { id: 'YOUR_YT_ID_4', title: 'Harmonix', type: '2024', category: 'documentary', duration: '8:45' },
];

const PortfolioWork: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [activeVid, setActiveVid] = useState<Video | null>(null);
  const [isLightboxActive, setIsLightboxActive] = useState(false);

  const categories = ['all', 'wedding', 'commercial', 'event', 'documentary'];

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
              <img src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title} loading="lazy" />
              <div className="play-overlay">
                <div className="play-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div className="duration-tag">{v.duration}</div>
            </div>
            <div className="video-info">
              <div className="video-type">{v.type}</div>
              <h3 className="video-title">{v.title}</h3>
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
