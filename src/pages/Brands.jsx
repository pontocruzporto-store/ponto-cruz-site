import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import brandsData from "../data/brands";
import OptimizedImage from "../components/OptimizedImage";
import "./Brands.css";

const META = {
  pt: {
    title: "Marcas Portuguesas | Ponto Cruz Concept Store Porto",
    description:
      "Descubra as marcas portuguesas que selecionámos: artesanato, design e qualidade feitos em Portugal. Disponíveis na Ponto Cruz no Porto.",
  },
  en: {
    title: "Portuguese Brands & Gifts | Ponto Cruz Porto",
    description:
      "Explore our curated selection of Portuguese brands — handmade ceramics, cork, textiles and more. Available at Ponto Cruz in Porto.",
  },
  ko: {
    title: "포르투갈 브랜드 & 선물 | 폰토 크루즈 포르투",
    description:
      "엄선된 포르투갈 브랜드 컬렉션 — 수제 도자기, 코르크, 직물 등. 포르투의 폰토 크루즈에서 만나보세요.",
  },
  ja: {
    title: "ポルトガルブランド＆ギフト | ポント・クルス ポルト",
    description:
      "厳選されたポルトガルブランドのコレクション — 手作りセラミック、コルク、テキスタイルなど。ポルトのポント・クルスでご覧ください。",
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
