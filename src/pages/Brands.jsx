import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import brandsData from "../data/brands";
import OptimizedImage from "../components/OptimizedImage";
import "./Brands.css";

const META = {
  pt: {
    title: "Marcas Portuguesas e Design Local | Ponto Cruz Concept Store Porto",
    description:
      "Uma curadoria exclusiva de marcas portuguesas: do artesanato tradicional ao design moderno. Encontre cerâmica, cortiça e têxteis feitos em Portugal na Ponto Cruz.",
  },
  en: {
    title: "Best Portuguese Brands in Porto | Ponto Cruz Boutique & Gifts",
    description:
      "Shop the best of Portugal: handcrafted ceramics, eco-friendly cork, and luxury soaps. Discover unique local brands and authentic Porto gifts at our family-run store.",
  },
  ko: {
    title: "포르투 쇼핑 필수 브랜드 | 폰토 크루즈 — 포르투갈 감성 기념품",
    description:
      "포르투갈 여행에서 꼭 사야 할 브랜드 총집합! 핸드메이드 도자기, 천연 코르크 소품, 고퀄리티 텍스타일까지, 폰토 크루즈가 엄선한 로컬 브랜드를 만나보세요.",
  },
  ja: {
    title:
      "ポルトガルの厳選ブランド集 | ポント・クルス — ポルトの手仕事とデザイン",
    description:
      "ポルトガルが誇る伝統の技。手作りの陶磁器、上質なコル크製品、洗練されたテキスタイルなど、長く愛用できるポルトガルブランドを厳選してご紹介します。",
  },
};

const Brands = () => {
  const { language, t } = useLanguage();
  const meta = META[language] || META.pt;

  return (
    <div className="brands-page">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <h1>{t("brands.title")}</h1>
          <p className="page-subtitle">{t("brands.subtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {brandsData.length === 0 ? (
            <div className="empty-state">
              <p>No brands available yet. Add brands to /src/data/brands.js</p>
            </div>
          ) : (
            <div className="brands-grid-large">
              {brandsData.map((brand) => (
                <Link
                  key={brand.slug}
                  to={`/${language}/brands/${brand.slug}`}
                  className="brand-card-large"
                >
                  <div className="brand-card-image-large">
                    <OptimizedImage
                      src={brand.logo}
                      alt={brand.translations[language].name}
                      sizes="(max-width: 768px) 100vw, 300px"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="brand-card-info">
                    <h2>{brand.translations[language].name}</h2>
                    <p className="brand-origin">
                      {brand.translations[language].origin}
                    </p>
                    <p className="brand-tagline">
                      {brand.translations[language].tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Brands;
