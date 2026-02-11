import React, { useState } from 'react';
import { useLanguage } from '../utils/LanguageContext';
import visitInfo from '../data/visitInfo';
import './Contact.css';

const Contact = () => {
  const { language, t } = useLanguage();
  const info = visitInfo.translations[language];
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formState
        }).toString()
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p className="page-subtitle">{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="form-group">
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="button"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? t('contact.sending') : t('contact.send')}
                </button>

                {status === 'success' && (
                  <p className="form-message success">{t('contact.success')}</p>
                )}
                {status === 'error' && (
                  <p className="form-message error">{t('contact.error')}</p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h3>{t('contact.visitUsTitle')}</h3>
                <p>{info.address}</p>
              </div>

              <div className="contact-info-card">
                <h3>{t('contact.openingHoursTitle')}</h3>
                {info.hours.map((hour, index) => (
                  <p key={index}>{hour}</p>
                ))}
              </div>

              <div className="contact-info-card">
                <h3>{t('contact.getInTouchTitle')}</h3>
                <p>
                  <a href={`mailto:${info.email}`}>{info.email}</a><br />
                  <a href={`tel:${info.phone.replace(/\s/g, '')}`}>{info.phone}</a>
                </p>
              </div>

              <div className="contact-info-card">
                <h3>{t('contact.followUsTitle')}</h3>
                <div className="social-links-vertical">
                  <a
                    href="https://www.instagram.com/pontocruzporto/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.instagram')}
                  </a>
                  <a
                    href="https://www.facebook.com/pontocruzporto/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('contact.facebook')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
