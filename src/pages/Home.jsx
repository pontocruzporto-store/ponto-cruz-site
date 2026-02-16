import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import brandsData from '../data/brands';
import placesData from '../data/places';
import './Home.css';

const Home = () => {
  const { language, t } = useLanguage();

  const featuredBrands = brandsData.filter(brand => brand.featured).slice(0, 3);
  const featuredPlaces = placesData.filter(place => place.featured).slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img 
            src="/images/hero/hero-image.webp" 
            alt="Authentic Souvenir & Concept Store in Porto"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-tagline">{t('hero.tagline')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-image">
              <img 
                src="/images/hero/about-image.webp" 
                alt="Store interior"
              />
            </div>
            <div className="about-preview-content">
              <h2>{t('about.title')}</h2>
              <p>
                {t('about.homeIntro')}
              </p>
              <Link to={`/${language}/about`} className="button">
                {t('nav.about')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      {featuredBrands.length > 0 && (
        <section className="section featured-brands">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('brands.title')}</h2>
              <Link to={`/${language}/brands`} className="section-link">
                {t('home.viewAll')}
              </Link>
            </div>
            <div className="brands-grid">
              {featuredBrands.map(brand => (
                <Link
                  key={brand.slug}
                  to={`/${language}/brands/${brand.slug}`}
                  className="brand-card"
                >
                  <div className="brand-card-image">
                    <img 
                      src={brand['card-image']} 
                      alt={brand.translations[language].name}
                    />
                  </div>
                  <h3>{brand.translations[language].name}</h3>
                  <p>{brand.translations[language].tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      Porto Recommendations Preview
      {featuredPlaces.length > 0 && (
        <section className="section porto-preview">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t('porto.title')}</h2>
              <Link to={`/${language}/porto`} className="section-link">
                {t('home.explorePorto')}
              </Link>
            </div>
            <div className="places-grid">
              {featuredPlaces.map(place => (
                <div key={place.slug} className="place-card">
                  <div className="place-card-image">
                    <img 
                      src={place.image} 
                      alt={place.translations[language].name}
                    />
                  </div>
                  <div className="place-card-content">
                    <span className="place-category">
                      {t(`porto.filter${place.category === 'visit' ? 'Visit' : 'Eat'}`)}
                    </span>
                    <h3>{place.translations[language].name}</h3>
                    <p>{place.translations[language].description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visit CTA */}
      <section className="section visit-cta">
        <div className="container">
          <div className="visit-cta-content">
            <h2>{t('visit.title')}</h2>
            <p>Rua Arquitecto Nicolau Nasoni, 11<br />4050-423 Porto, Portugal</p>
            <Link to={`/${language}/visit`} className="button">
              {t('nav.visit')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
