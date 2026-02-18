import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../utils/LanguageContext";
import OptimizedImage from "../components/OptimizedImage";
import "./Header.css";

const Header = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { key: "home", path: `/${language}` },
    { key: "about", path: `/${language}/about` },
    { key: "brands", path: `/${language}/brands` },
    { key: "visit", path: `/${language}/visit` },
    { key: "porto", path: `/${language}/porto` },
    { key: "blog", path: `/${language}/blog` },
    { key: "contact", path: `/${language}/contact` },
  ];

  const languages = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "ko", label: "KO" },
    { code: "ja", label: "JA" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to={`/${language}`} className="logo">
          <OptimizedImage
            src="/logo-simple-400.webp"
            alt="Ponto Cruz"
            sizes="120px"
            loading="eager"
            fetchpriority="high"
            isLogo={true}
            width={120}
            height={128}
          />
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switcher">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`lang-button ${language === lang.code ? "active" : ""}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
