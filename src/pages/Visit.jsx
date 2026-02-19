import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import visitInfo from "../data/visitInfo";
import "./Visit.css";

const META = {
  pt: {
    title: "Como Chegar | Ponto Cruz — Rua Nasoni, Porto",
    description:
      "Visite-nos na Rua Arquiteto Nicolau Nasoni, 11 no Porto. Horários, transportes, estacionamento e tudo o que precisas de saber.",
  },
  en: {
    title: "Visit Us | Ponto Cruz Porto — Address & Opening Hours",
    description:
      "Find us at Rua Arquiteto Nicolau Nasoni, 11 in Porto. Opening hours, transport links and parking info all in one place.",
  },
  ko: {
    title: "방문하기 | 폰토 크루즈 포르투 — 주소 및 영업시간",
    description:
      "포르투 Rua Arquiteto Nicolau Nasoni, 11에서 저희를 찾아오세요. 영업시간, 교통편, 주차 정보를 한곳에서 확인하세요.",
  },
  ja: {
    title: "アクセス | ポント・クルス ポルト — 住所と営業時間",
    description:
      "ポルトのRua Arquiteto Nicolau Nasoni, 11にあります。営業時間、交通アクセス、駐車場情報をまとめてご確認いただけます。",
  },
};

const Visit = () => {
  const { language, t } = useLanguage();
  const info = visitInfo.translations[language];
  const coords = visitInfo.coordinates;
  const meta = META[language] || META.pt;

  return (
    <div className="visit-page">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <h1>{t("visit.title")}</h1>
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
                <h3>{t("visit.address")}</h3>
                <p>{info.address}</p>
                <p className="contact-info">
                  <a href={`mailto:${info.email}`}>{info.email}</a>
                  <br />
                  <a href={`tel:${info.phone.replace(/\s/g, "")}`}>
                    {info.phone}
                  </a>
                </p>
              </div>

              {/* Hours */}
              <div className="info-card">
                <h3>{t("visit.hours")}</h3>
                {info.hours.map((hour, index) => (
                  <p key={index}>{hour}</p>
                ))}
              </div>

              {/* Transport */}
              <div className="info-card">
                <h3>{t("visit.transport")}</h3>
                <ul>
                  {info.transport.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Parking */}
              <div className="info-card">
                <h3>{t("visit.parking")}</h3>
                <p>{info.parking.description}</p>
              </div>

              {/* Nearby */}
              {info.nearby && info.nearby.length > 0 && (
                <div className="info-card">
                  <h3>{t("visit.nearbyTitle")}</h3>
                  <ul>
                    {info.nearby.map((place, index) => (
                      <li key={index}>{place}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Accessibility */}
              <div className="info-card">
                <h3>{t("visit.accessibility")}</h3>
                <p>{info.accessibility}</p>
              </div>

              {/* Languages */}
              <div className="info-card">
                <h3>{t("visit.languages")}</h3>
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
