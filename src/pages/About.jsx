import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import OptimizedImage from "../components/OptimizedImage";
import "./About.css";

const META = {
  pt: {
    title:
      "Sobre Nós | Ponto Cruz Concept Store — Artesanato e Design Independente no Porto",
    description:
      "Descubra a Ponto Cruz, uma concept store familiar no coração do Porto. Unimos o artesanato tradicional português ao design de marcas independentes e locais.",
  },
  en: {
    title:
      "About Us | Ponto Cruz Concept Store— Authentic Handmade Gifts & Souvenirs in Porto",
    description:
      "Meet the family behind Ponto Cruz Concept Store, Porto’s favorite concept store for unique Portuguese crafts, handmade ceramics, and sustainable gifts from local artisans.",
  },
  ko: {
    title:
      "브랜드 스토리 | 폰토 크루즈 (Ponto Cruz Concept Store) — 포르투 핸드메이드 소품샵",
    description:
      "포르투 여행 필수 코스! 포르투갈 전통 공예와 감성적인 독립 브랜드가 가득한 가족 운영 소품샵, 폰토 크루즈의 정성이 담긴 핸드메이드 제품을 만나보세요.",
  },
  ja: {
    title: "私たちについて | ポント・クルス — ポルトガルの伝統工芸と雑貨の店",
    description:
      "ポルトの家族経営コンセプトストア「ポント・クルス」。熟練の職人による手仕事の雑貨や、地元の若手デザイナーによる限定品など、ここでしか出会えないポルトガルギフトを。",
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
