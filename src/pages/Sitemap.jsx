import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import brandsData from '../data/brands';
import './Sitemap.css';

const Sitemap = () => {
  const { language } = useParams();
  const lang = language || 'pt';
  const { t } = useLanguage();
  const base = `/${lang}`;

  const staticPages = [
    { path: base, labelKey: 'nav.home' },
    { path: `${base}/about`, labelKey: 'nav.about' },
    { path: `${base}/brands`, labelKey: 'nav.brands' },
    { path: `${base}/visit`, labelKey: 'nav.visit' },
    { path: `${base}/contact`, labelKey: 'nav.contact' }
  ];

  return (
    <div className="sitemap-page">
      <section className="section">
        <div className="container">
          <h1>{lang === 'pt' ? 'Mapa do site' : lang === 'en' ? 'Sitemap' : lang === 'ko' ? '사이트맵' : 'サイトマップ'}</h1>
          <p className="page-subtitle">
            {lang === 'pt' && 'Links para todas as páginas do site.'}
            {lang === 'en' && 'Links to all pages on the site.'}
            {lang === 'ko' && '사이트의 모든 페이지 링크.'}
            {lang === 'ja' && 'サイト内の全ページへのリンク.'}
          </p>

          <h2>{lang === 'pt' ? 'Páginas' : lang === 'en' ? 'Pages' : lang === 'ko' ? '페이지' : 'ページ'}</h2>
          <ul className="sitemap-list">
            {staticPages.map((page) => (
              <li key={page.path}>
                <Link to={page.path}>{t(page.labelKey)}</Link>
              </li>
            ))}
          </ul>

          <h2>{lang === 'pt' ? 'Marcas' : lang === 'en' ? 'Brands' : lang === 'ko' ? '브랜드' : 'ブランド'}</h2>
          <ul className="sitemap-list">
            {brandsData.map((brand) => (
              <li key={brand.slug}>
                <Link to={`/${lang}/brands/${brand.slug}`}>
                  {brand.translations[lang]?.name || brand.translations.pt?.name || brand.slug}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;