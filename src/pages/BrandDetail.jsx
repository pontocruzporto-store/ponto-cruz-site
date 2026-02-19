import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

  // Dynamic title and description built from brand data
  const pageTitle = `${content.name} | Ponto Cruz Porto`;
  const pageDescription = content.tagline
    ? `${content.tagline} — ${content.origin}. Disponível na Ponto Cruz Concept Store no Porto.`
    : `Descobre ${content.name} na Ponto Cruz Concept Store no Porto. Marcas portuguesas autênticas e artesanato de qualidade.`;

  return (
    <div className="brand-detail">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <section className="brand-hero">
        <div className="container">
          <div className="brand-hero-content">
            <div className="brand-logo-large">
              <OptimizedImage
                src={brand.logo}
                alt={content.name}
                sizes="(max-width: 768px) 200px, 300px"
                width={300}
                height={300}
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
                  <div className="product-info">
                    <h4>{product.translations[language].name}</h4>
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
