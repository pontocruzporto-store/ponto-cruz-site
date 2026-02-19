import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import placesData from "../data/places";
import OptimizedImage from "../components/OptimizedImage";
import "./Porto.css";

const META = {
  pt: {
    title: "Guia do Porto | Os Nossos Lugares Favoritos e Dicas Locais",
    description:
      "Explore o Porto como um local. A equipa da Ponto Cruz partilha os seus restaurantes, museus e segredos favoritos na cidade. O guia autêntico para quem visita o Porto.",
  },
  en: {
    title: "Porto Local Guide | Best Restaurants & Hidden Gems by Ponto Cruz",
    description:
      "Discover the real Porto with our insider guide. From the best local food to hidden viewpoints and museums, explore the city recommendations from our family-run store.",
  },
  ko: {
    title: "포르투 현지인 맛집 & 명소 가이드 | 폰토 크루즈 추천",
    description:
      "포르투 로컬이 제안하는 진짜 포르투 여행! 인스타 감성 맛집부터 숨겨진 사진 명소, 박물관까지. 폰토 크루즈 가족이 직접 가본 최애 장소들을 공개합니다.",
  },
  ja: {
    title: "ポルトの街歩きガイド | 地元店主が教えるおすすめスポット",
    description:
      "ポルトを愛する店主厳選のローカルガイド。美味しいレストランや静かな美術館など、観光ガイドには載っていないポルトの隠れた名所をご案内します。",
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
