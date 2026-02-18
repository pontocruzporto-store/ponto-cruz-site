import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LanguageProvider } from "./utils/LanguageContext";
import { logPageView } from "./utils/analytics";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";
import Canonical from "./components/Canonical";
import "./styles/global.css";

import Home from "./pages/Home";
import Visit from "./pages/Visit";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";

const About = lazy(() => import("./pages/About"));
const Brands = lazy(() => import("./pages/Brands"));
const BrandDetail = lazy(() => import("./pages/BrandDetail"));
const Porto = lazy(() => import("./pages/Porto"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

function App() {
  useEffect(() => {
    logPageView(window.location.pathname);
  }, []);

  return (
    <Router>
      <LanguageProvider>
        <Canonical />
        <ScrollToTop />
        <div className="app">
          <Header />
          <main>
            <div className="main-inner">
              <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
                <Routes>
                  <Route path="/" element={<Navigate to="/pt" replace />} />

                  <Route path="/pt" element={<Home />} />
                  <Route path="/pt/about" element={<About />} />
                  <Route path="/pt/brands" element={<Brands />} />
                  <Route path="/pt/brands/:slug" element={<BrandDetail />} />
                  <Route path="/pt/visit" element={<Visit />} />
                  <Route path="/pt/porto" element={<Porto />} />
                  <Route path="/pt/contact" element={<Contact />} />
                  <Route path="/pt/blog" element={<Blog />} />
                  <Route path="/pt/blog/:slug" element={<BlogPost />} />
                  <Route path="/pt/sitemap" element={<Sitemap />} />

                  <Route path="/en" element={<Home />} />
                  <Route path="/en/about" element={<About />} />
                  <Route path="/en/brands" element={<Brands />} />
                  <Route path="/en/brands/:slug" element={<BrandDetail />} />
                  <Route path="/en/visit" element={<Visit />} />
                  <Route path="/en/porto" element={<Porto />} />
                  <Route path="/en/contact" element={<Contact />} />
                  <Route path="/en/blog" element={<Blog />} />
                  <Route path="/en/blog/:slug" element={<BlogPost />} />
                  <Route path="/en/sitemap" element={<Sitemap />} />

                  <Route path="/ko" element={<Home />} />
                  <Route path="/ko/about" element={<About />} />
                  <Route path="/ko/brands" element={<Brands />} />
                  <Route path="/ko/brands/:slug" element={<BrandDetail />} />
                  <Route path="/ko/visit" element={<Visit />} />
                  <Route path="/ko/porto" element={<Porto />} />
                  <Route path="/ko/contact" element={<Contact />} />
                  <Route path="/ko/blog" element={<Blog />} />
                  <Route path="/ko/blog/:slug" element={<BlogPost />} />
                  <Route path="/ko/sitemap" element={<Sitemap />} />

                  <Route path="/ja" element={<Home />} />
                  <Route path="/ja/about" element={<About />} />
                  <Route path="/ja/brands" element={<Brands />} />
                  <Route path="/ja/brands/:slug" element={<BrandDetail />} />
                  <Route path="/ja/visit" element={<Visit />} />
                  <Route path="/ja/porto" element={<Porto />} />
                  <Route path="/ja/contact" element={<Contact />} />
                  <Route path="/ja/blog" element={<Blog />} />
                  <Route path="/ja/blog/:slug" element={<BlogPost />} />
                  <Route path="/ja/sitemap" element={<Sitemap />} />

                  <Route path="*" element={<Navigate to="/pt" replace />} />
                </Routes>
              </Suspense>
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
