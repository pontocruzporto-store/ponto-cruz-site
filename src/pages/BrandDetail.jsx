import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import brandsData from "../data/brands";
import OptimizedImage from "../components/OptimizedImage";
import { BASE_URL, breadcrumbSchema } from "../utils/seo";
import "./BrandDetail.css";

const BrandDetail = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();

  const brand = brandsData.find((b) => b.slug === slug);

  if (!brand) {
    return <Navigate to={`/${language}/brands`} replace />;
  }

  const content = brand.translations[language] || brand.translations.pt;
  const pageTitle = `${content.name} | Portuguese Brand at Ponto Cruz Porto`;
  const pageDescription = content.tagline
    ? `${content.tagline} - ${content.origin}. Discover it at Ponto Cruz Concept Store in Porto.`
    : `Discover ${content.name} at Ponto Cruz Concept Store in Porto, with authentic Portuguese brands and quality craftsmanship.`;
  const pageUrl = `${BASE_URL}/${language}/brands/${slug}`;
  const relatedBrands = brandsData
    .filter((item) => item.slug !== brand.slug)
    .slice(0, 3);
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: `/${language}` },
      { name: t("nav.brands"), path: `/${language}/brands` },
      { name: content.name, path: `/${language}/brands/${slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Brand",
      name: content.name,
      description: pageDescription,
      image: `${BASE_URL}${brand.logo}`,
      url: pageUrl,
    },
  ];

  return (
    <div className="brand-detail">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${BASE_URL}${brand.logo}`} />
        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
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

      <section className="section brand-next-steps">
        <div className="container">
          <div className="brand-link-panel">
            <div>
              <h2>{language === "pt" ? "Onde encontrar" : "Where to find it"}</h2>
              <p>
                {language === "pt"
                  ? "Visite a Ponto Cruz no centro do Porto para ver esta marca e outras pecas portuguesas selecionadas."
                  : "Visit Ponto Cruz in central Porto to discover this brand and other selected Portuguese pieces."}
              </p>
            </div>
            <Link to={`/${language}/visit`} className="button">
              {t("nav.visit")}
            </Link>
          </div>

          {relatedBrands.length > 0 && (
            <>
              <h2 className="section-title">
                {language === "pt" ? "Marcas relacionadas" : "Related brands"}
              </h2>
              <div className="related-brands-grid">
                {relatedBrands.map((item) => {
                  const relatedContent =
                    item.translations[language] || item.translations.pt;
                  return (
                    <Link
                      key={item.slug}
                      to={`/${language}/brands/${item.slug}`}
                      className="related-brand-card"
                    >
                      <OptimizedImage
                        src={item.logo}
                        alt={relatedContent.name}
                        sizes="(max-width: 768px) 100vw, 240px"
                        width={300}
                        height={300}
                      />
                      <h3>{relatedContent.name}</h3>
                      <p>{relatedContent.tagline}</p>
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrandDetail;
