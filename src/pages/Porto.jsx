import React, { useState } from 'react';
import { useLanguage } from '../utils/LanguageContext';
import placesData from '../data/places';
import './Porto.css';

const Porto = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredPlaces = filter === 'all' 
    ? placesData 
    : placesData.filter(place => place.category === filter);

  return (
    <div className="porto-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('porto.title')}</h1>
          <p className="page-subtitle">{t('porto.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-bar">
            <button
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t('porto.filterAll')}
            </button>
            <button
              className={`filter-button ${filter === 'visit' ? 'active' : ''}`}
              onClick={() => setFilter('visit')}
            >
              {t('porto.filterVisit')}
            </button>
            <button
              className={`filter-button ${filter === 'eat' ? 'active' : ''}`}
              onClick={() => setFilter('eat')}
            >
              {t('porto.filterEat')}
            </button>
          </div>

          {/* Places Grid */}
          {filteredPlaces.length === 0 ? (
            <div className="empty-state">
              <p>No places available yet. Add places to /src/data/places.js</p>
            </div>
          ) : (
            <div className="porto-places-grid">
              {filteredPlaces.map(place => (
                <div key={place.slug} className="porto-place-card">
                  <div className="porto-place-image">
                    <img 
                      src={place.image} 
                      alt={place.translations[language].name}
                    />
                    <span className="place-category-badge">
                      {t(`porto.filter${place.category === 'visit' ? 'Visit' : 'Eat'}`)}
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
                        <strong>{t('porto.tipLabel')}</strong> {place.translations[language].tips}
                      </div>
                    )}

                    {place.location && (
                      <a
                        href={`https://www.google.com/maps?q=${place.location.lat},${place.location.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="place-directions"
                      >
                        {t('porto.directionsLabel')}
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
