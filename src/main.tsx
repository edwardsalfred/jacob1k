import { StrictMode, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Contact from './Contact.tsx'
import Articles from './Articles.tsx'
import Privacy from './Privacy.tsx'
import Terms from './Terms.tsx'
import ArticleOverdoneVideographyTrends from './ArticleOverdoneVideographyTrends.tsx'
import ArticleGettingIntoVideography from './ArticleGettingIntoVideography.tsx'
import ArticleSurvivingAsAVideographer from './ArticleSurvivingAsAVideographer.tsx'
import ArticleShootMockumentaryVideos from './ArticleShootMockumentaryVideos.tsx'
import ArticleDesigningForMotion from './ArticleDesigningForMotion.tsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/articles/overdone-videography-trends-you-should-ditch-in-2026" element={<ArticleOverdoneVideographyTrends />} />
        <Route path="/articles/getting-into-videography-in-2026-what-you-really-need" element={<ArticleGettingIntoVideography />} />
        <Route path="/articles/surviving-as-a-videographer-in-2026-crowded-market" element={<ArticleSurvivingAsAVideographer />} />
        <Route path="/articles/how-to-shoot-modern-mockumentary-style-videos" element={<ArticleShootMockumentaryVideos />} />
        <Route path="/articles/designing-for-motion-how-micro-animations-shape-user-experience" element={<ArticleDesigningForMotion />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
