import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import visitInfo from '../data/visitInfo';
import './Visit.css';

const Visit = () => {
  const { language, t } = useLanguage();
  const info = visitInfo.translations[language];
  const coords = visitInfo.coordinates;

  return (
    <div className="visit-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('visit.title')}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="visit-grid">
            {/* Map */}
            <div className="map-container">
              <iframe
                src={`https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=${coords.zoom}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ponto Cruz Location"
              ></iframe>
            </div>

            {/* Info Cards */}
            <div className="visit-info-cards">
              {/* Address */}
              <div className="info-card">
                <h3>{t('visit.address')}</h3>
                <p>{info.address}</p>
                <p className="contact-info">
                  <a href={`mailto:${info.email}`}>{info.email}</a><br />
                  <a href={`tel:${info.phone.replace(/\s/g, '')}`}>{info.phone}</a>
                </p>
              </div>

              {/* Hours */}
              <div className="info-card">
                <h3>{t('visit.hours')}</h3>
                {info.hours.map((hour, index) => (
                  <p key={index}>{hour}</p>
                ))}
              </div>

              {/* Transport */}
              <div className="info-card">
                <h3>{t('visit.transport')}</h3>
                <ul>
                  {info.transport.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Parking */}
              <div className="info-card">
                <h3>{t('visit.parking')}</h3>
                <p>{info.parking.description}</p>
              </div>

              {/* Nearby */}
              {info.nearby && info.nearby.length > 0 && (
                <div className="info-card">
                  <h3>{t('visit.nearbyTitle')}</h3>
                  <ul>
                    {info.nearby.map((place, index) => (
                      <li key={index}>{place}</li>
                    ))}
                  </ul>
                </div>
              )}


              {/* Accessibility */}
              <div className="info-card">
                <h3>{t('visit.accessibility')}</h3>
                <p>{info.accessibility}</p>
              </div>

              {/* Languages */}
              <div className="info-card">
                <h3>{t('visit.languages')}</h3>
                <p>{info.languages}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;
