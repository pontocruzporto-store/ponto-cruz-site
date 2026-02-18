import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useLanguage } from "../utils/LanguageContext";
import brandsData from "../data/brands";
import OptimizedImage from "../components/OptimizedImage";
import "./BrandDetail.css";

const BrandDetail = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();

  const brand = brandsData.find((b) => b.slug === slug);

  if (!brand) {
    return <Navigate to={`/${language}/brands`} replace />;
  }

  const content = brand.translations[language];

  return (
    <div className="brand-detail">
      <section className="brand-hero">
        <div className="container">
          <div className="brand-hero-content">
            <div className="brand-logo-large">
              <OptimizedImage
                src={brand.logo}
                alt={content.name}
                sizes="(max-width: 768px) 200px, 300px"
              />
            </div>
            <h1>{content.name}</h1>
            <p className="brand-hero-tagline">{content.tagline}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="brand-info-grid">
            <div className="brand-info-section">
              <h3>{t("brands.origin")}</h3>
              <p>{content.origin}</p>
            </div>

            <div className="brand-info-section">
              <h3>{t("brands.philosophy")}</h3>
              <p>{content.philosophy}</p>
            </div>
          </div>

          {content.story && (
            <div className="brand-story">
              <div className="content-wrapper">
                {content.story.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {brand.products && brand.products.length > 0 && (
        <section className="section products-section">
          <div className="container">
            <h2 className="section-title">{t("brands.productsTitle")}</h2>
            <div className="products-grid">
              {brand.products.map((product, index) => (
                <div key={index} className="product-card">
                  {/* <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.translations[language].name}
                    />
                  </div> */}
                  <div className="product-info">
                    <h4>{product.translations[language].name}</h4>
                    {/* <p>{product.translations[language].description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BrandDetail;
