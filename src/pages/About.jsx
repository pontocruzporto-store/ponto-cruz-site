import React from "react";
import { useLanguage } from "../utils/LanguageContext";
import OptimizedImage from "../components/OptimizedImage";
import "./About.css";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t("about.title")}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            {/* Family Business */}
            <div className="about-section">
              <div className="about-text">
                <h2>{t("about.familyTitle")}</h2>
                <p>{t("about.familyBody1")}</p>
                <p>{t("about.familyBody2")}</p>
              </div>
              <div className="about-image">
                <OptimizedImage
                  src="/images/hero/about-image-1200.webp"
                  alt="Family"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Porto Roots */}
            <div className="about-section reverse">
              <div className="about-text">
                <h2>{t("about.portoTitle")}</h2>
                <p>{t("about.portoBody1")}</p>
                <p>{t("about.portoBody2")}</p>
              </div>
              <div className="about-image">
                <OptimizedImage
                  src="/images/hero/porto_photo.webp"
                  alt="Porto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Craftsmanship */}
            <div className="about-section">
              <div className="about-text">
                <h2>{t("about.craftsmanshipTitle")}</h2>
                <p>{t("about.craftsmanshipBody1")}</p>
                <p>{t("about.craftsmanshipBody2")}</p>
              </div>
              <div className="about-image">
                <OptimizedImage
                  src="/images/hero/artesanato_photo.webp"
                  alt="Craftsmanship"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Philosophy */}
            <div className="about-section reverse">
              <div className="about-text">
                <h2>{t("about.philosophyTitle")}</h2>
                <p>{t("about.philosophyBody1")}</p>
                <p>{t("about.philosophyBody2")}</p>
              </div>
              <div className="about-image">
                <OptimizedImage
                  src="/images/hero/ponte_photo.webp"
                  alt="Store detail"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
