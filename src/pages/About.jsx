import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import OptimizedImage from "../components/OptimizedImage";
import "./About.css";

const META = {
  pt: {
    title: "Sobre Nós | Ponto Cruz — Loja Familiar no Porto",
    description:
      "Conheça a história da Ponto Cruz: uma loja familiar apaixonada pelo artesanato português e pelas marcas independentes do Porto.",
  },
  en: {
    title: "About Us | Ponto Cruz — Family-Run Store in Porto",
    description:
      "Learn the story of Ponto Cruz: a family-owned store devoted to Portuguese craftsmanship and the independent brands of Porto.",
  },
  ko: {
    title: "소개 | 폰토 크루즈 — 포르투의 가족 운영 스토어",
    description:
      "폰토 크루즈의 이야기를 알아보세요: 포르투갈 공예와 독립 브랜드에 헌신하는 가족 운영 스토어.",
  },
  ja: {
    title: "私たちについて | ポント・クルス — ポルトのファミリーストア",
    description:
      "ポント・クルスの物語をご紹介します。ポルトガルの職人技と独立系ブランドに情熱を注ぐ家族経営のストアです。",
  },
};

const About = () => {
  const { language, t } = useLanguage();
  const meta = META[language] || META.pt;

  return (
    <div className="about-page">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

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
                  alt="Interior da Ponto Cruz Concept Store no Porto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
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
                  src="/images/hero/porto_photo-1200.webp"
                  alt="Vista da cidade do Porto, Portugal"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
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
                  src="/images/hero/artesanato_photo-1200.webp"
                  alt="Artesanato português tradicional — Ponto Cruz Porto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
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
                  src="/images/hero/ponte_photo-1200.webp"
                  alt="Detalhe de produto artesanal na Ponto Cruz Concept Store"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
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
