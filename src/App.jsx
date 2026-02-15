import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './utils/LanguageContext';
import { logPageView } from './utils/analytics';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';
import BrandDetail from './pages/BrandDetail';
import Visit from './pages/Visit';
import Porto from './pages/Porto';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';
import Canonical from './components/Canonical';
import './styles/global.css';

function App() {
  useEffect(() => {
    // Log page views for analytics
    logPageView(window.location.pathname);
  }, []);

  return (
    <Router>
      <LanguageProvider>
        <Canonical />
        <ScrollToTop />   {/* add this line */}
        <div className="app">
          <Header />
          <main>
            <div className="main-inner">
              <Routes>
                {/* Redirect root to Portuguese */}
                <Route path="/" element={<Navigate to="/pt" replace />} />
                
                {/* Portuguese routes */}
                <Route path="/pt" element={<Home />} />
                <Route path="/pt/about" element={<About />} />
                <Route path="/pt/brands" element={<Brands />} />
                <Route path="/pt/brands/:slug" element={<BrandDetail />} />
                <Route path="/pt/visit" element={<Visit />} />
                <Route path="/pt/porto" element={<Porto />} />
                <Route path="/pt/contact" element={<Contact />} />
                <Route path="/pt/sitemap" element={<Sitemap />} />
                
                {/* English routes */}
                <Route path="/en" element={<Home />} />
                <Route path="/en/about" element={<About />} />
                <Route path="/en/brands" element={<Brands />} />
                <Route path="/en/brands/:slug" element={<BrandDetail />} />
                <Route path="/en/visit" element={<Visit />} />
                <Route path="/en/porto" element={<Porto />} />
                <Route path="/en/contact" element={<Contact />} />
                <Route path="/en/sitemap" element={<Sitemap />} />
                
                {/* Korean routes */}
                <Route path="/ko" element={<Home />} />
                <Route path="/ko/about" element={<About />} />
                <Route path="/ko/brands" element={<Brands />} />
                <Route path="/ko/brands/:slug" element={<BrandDetail />} />
                <Route path="/ko/visit" element={<Visit />} />
                <Route path="/ko/porto" element={<Porto />} />
                <Route path="/ko/contact" element={<Contact />} />
                <Route path="/ko/sitemap" element={<Sitemap />} />
                
                {/* Japanese routes */}
                <Route path="/ja" element={<Home />} />
                <Route path="/ja/about" element={<About />} />
                <Route path="/ja/brands" element={<Brands />} />
                <Route path="/ja/brands/:slug" element={<BrandDetail />} />
                <Route path="/ja/visit" element={<Visit />} />
                <Route path="/ja/porto" element={<Porto />} />
                <Route path="/ja/contact" element={<Contact />} />
                <Route path="/ja/sitemap" element={<Sitemap />} />
                
                {/* Catch all - redirect to Portuguese home */}
                <Route path="*" element={<Navigate to="/pt" replace />} />
              </Routes>
             </div>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
