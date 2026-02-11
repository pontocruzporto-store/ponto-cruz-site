import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import brandsData from '../data/brands';
import './Brands.css';

const Brands = () => {
  const { language, t } = useLanguage();

  return (
    <div className="brands-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('brands.title')}</h1>
          <p className="page-subtitle">{t('brands.subtitle')}</p>
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
              {brandsData.map(brand => (
                <Link
                  key={brand.slug}
                  to={`/${language}/brands/${brand.slug}`}
                  className="brand-card-large"
                >
                  <div className="brand-card-image-large">
                    <img 
                      src={brand.logo} 
                      alt={brand.translations[language].name}
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
