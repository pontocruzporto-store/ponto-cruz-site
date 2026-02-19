import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import visitInfo from "../data/visitInfo";
import "./Visit.css";

const META = {
  pt: {
    title: "Como Chegar à Ponto Cruz | Loja de Presentes junto aos Clérigos",
    description:
      "Visite a Ponto Cruz na Rua Arquiteto Nicolau Nasoni, 11, junto à Torre dos Clérigos. Saiba como chegar, onde estacionar e os horários da nossa concept store no Porto.",
  },
  en: {
    title: "Visit Ponto Cruz Porto | Near Clérigos Tower & Lello Bookstore",
    description:
      "Find Ponto Cruz at Rua Arquiteto Nicolau Nasoni, 11. Located steps away from Clérigos Tower, we are the perfect stop for authentic Porto souvenirs and local design.",
  },
  ko: {
    title: "포르투 폰토 크루즈 찾아오는 길 | 클레리구스 탑 근처 소품샵",
    description:
      "렐루 서점과 클레리구스 탑 도보 1분 거리! 포르투 쇼핑 필수 코스인 폰토 크루즈의 위치, 영업시간, 가는 법을 확인하세요. (Rua Arquiteto Nicolau Nasoni 11)",
  },
  ja: {
    title: "ポント・クルスへのアクセス | クレリゴス教会すぐそばの雑貨店",
    description:
      "クレリゴスの塔やレロ書店からすぐ。ポルト中心部のコンセプトストア「ポント・クルス」への行き方、営業時間、周辺情報をご案内します。街歩きの合間にぜひお立ち寄りください。",
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
