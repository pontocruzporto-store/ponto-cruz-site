import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../utils/LanguageContext";
import visitInfo from "../data/visitInfo";
import "./Footer.css";

const Footer = () => {
  const { language, t } = useLanguage();
  const info = visitInfo.translations[language];
  const quickLinks = [
    { path: `/${language}/visit`, label: t("nav.visit") },
    { path: `/${language}/porto`, label: t("nav.porto") },
    { path: `/${language}/blog`, label: t("nav.blog") },
    { path: `/${language}/brands`, label: t("nav.brands") },
    { path: `/${language}/about`, label: t("nav.about") },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <p className="footer-heading">{t("footer.address")}</p>
            <p className="footer-text">{info.address}</p>
          </div>

          <div className="footer-section">
            <p className="footer-heading">{t("footer.hours")}</p>
            {info.hours.map((hour, index) => (
              <p key={index} className="footer-text">
                {hour}
              </p>
            ))}
          </div>

          <div className="footer-section">
            <p className="footer-heading">{t("footer.contact")}</p>
            <p className="footer-text">
              <a href={`mailto:${info.email}`}>{info.email}</a>
            </p>
            <p className="footer-text">
              <a href={`tel:${info.phone.replace(/\s/g, "")}`}>{info.phone}</a>
            </p>
          </div>

          <div className="footer-section">
            <p className="footer-heading">{t("footer.quickLinks")}</p>
            <nav className="footer-links" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-section">
            <p className="footer-heading">{t("footer.follow")}</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/pontocruzporto/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/pontocruzporto/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            {t("footer.copyright")}
            {" · "}
            <Link to={`/${language}/sitemap`}>
              {language === "pt"
                ? "Mapa do site"
                : language === "en"
                  ? "Sitemap"
                  : language === "ko"
                    ? "사이트맵"
                    : "サイトマップ"}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
