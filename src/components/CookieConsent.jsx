import React, { useState, useEffect } from 'react';
import { useLanguage } from '../utils/LanguageContext';
import { initGA } from '../utils/analytics';
import './CookieConsent.css';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      initGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    initGA();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <p className="cookie-message">{t('cookie.message')}</p>
        <div className="cookie-actions">
          <button onClick={handleAccept} className="cookie-button accept">
            {t('cookie.accept')}
          </button>
          <button onClick={handleDecline} className="cookie-button decline">
            {t('cookie.decline')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
