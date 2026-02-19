import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import placesData from "../data/places";
import OptimizedImage from "../components/OptimizedImage";
import "./Porto.css";

const META = {
  pt: {
    title: "O Nosso Porto | Dicas de Turismo da Ponto Cruz",
    description:
      "Os nossos lugares favoritos no Porto: restaurantes, museus e sítios especiais que recomendamos a quem nos visita.",
  },
  en: {
    title: "Our Porto | Local Tips & Recommendations from Ponto Cruz",
    description:
      "Our favourite spots in Porto: restaurants, museums and hidden gems we recommend to every visitor who steps into our store.",
  },
  ko: {
    title: "우리의 포르투 | 폰토 크루즈의 현지 추천",
    description:
      "포르투 현지인이 추천하는 장소들: 레스토랑, 박물관, 숨겨진 보석 같은 곳들을 소개합니다.",
  },
  ja: {
    title: "私たちのポルト | ポント・クルスからのローカルおすすめ",
    description:
      "ポルトのお気に入りスポット：レストラン、美術館、隠れた名所など、訪れるすべてのお客様におすすめする場所をご紹介します。",
  },
};

const Porto = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const meta = META[language] || META.pt;

  const filteredPlaces =
    filter === "all"
      ? placesData
      : placesData.filter((place) => place.category === filter);

  return (
    <div className="porto-page">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <h1>{t("porto.title")}</h1>
          <p className="page-subtitle">{t("porto.subtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-bar">
            <button
              className={`filter-button ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              {t("porto.filterAll")}
            </button>
            <button
              className={`filter-button ${filter === "visit" ? "active" : ""}`}
              onClick={() => setFilter("visit")}
            >
              {t("porto.filterVisit")}
            </button>
            <button
              className={`filter-button ${filter === "eat" ? "active" : ""}`}
              onClick={() => setFilter("eat")}
            >
              {t("porto.filterEat")}
            </button>
          </div>

          {/* Places Grid */}
          {filteredPlaces.length === 0 ? (
            <div className="empty-state">
              <p>No places available yet. Add places to /src/data/places.js</p>
            </div>
          ) : (
            <div className="porto-places-grid">
              {filteredPlaces.map((place) => (
                <div key={place.slug} className="porto-place-card">
                  <div className="porto-place-image">
                    <OptimizedImage
                      src={place.image}
                      alt={place.translations[language].name}
                      sizes="(max-width: 768px) 100vw, 400px"
                      width={800}
                      height={600}
                    />
                    <span className="place-category-badge">
                      {t(
                        `porto.filter${place.category === "visit" ? "Visit" : "Eat"}`,
                      )}
                    </span>
                  </div>
                  <div className="porto-place-content">
                    <h3>{place.translations[language].name}</h3>
                    {place.location && (
                      <p className="place-address">{place.location.address}</p>
                    )}
                    <p className="place-description">
                      {place.translations[language].description}
                    </p>
                    {place.translations[language].tips && (
                      <div className="place-tips">
                        <strong>{t("porto.tipLabel")}</strong>{" "}
                        {place.translations[language].tips}
                      </div>
                    )}

                    {place.location && (
                      <a
                        href={`https://www.google.com/maps?q=${place.location.lat},${place.location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="place-directions"
                      >
                        {t("porto.directionsLabel")}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Porto;
