import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import brandsData from "../data/brands";
import blogData from "../data/blog";
import "./Sitemap.css";

const labels = {
  pt: {
    title: "Mapa do site",
    subtitle: "Todos os caminhos principais para explorar a Ponto Cruz.",
    pages: "Páginas",
    brands: "Marcas",
    blog: "Blog",
  },
  en: {
    title: "Sitemap",
    subtitle: "All the main paths for exploring Ponto Cruz.",
    pages: "Pages",
    brands: "Brands",
    blog: "Blog",
  },
  ko: {
    title: "사이트맵",
    subtitle: "Ponto Cruz를 둘러보는 주요 경로입니다.",
    pages: "페이지",
    brands: "브랜드",
    blog: "블로그",
  },
  ja: {
    title: "サイトマップ",
    subtitle: "Ponto Cruz を見るための主なページです。",
    pages: "ページ",
    brands: "ブランド",
    blog: "ブログ",
  },
};

const Sitemap = () => {
  const { language, t } = useLanguage();
  const lang = language || "pt";
  const base = `/${lang}`;
  const copy = labels[lang] || labels.pt;

  const staticPages = [
    { path: base, labelKey: "nav.home" },
    { path: `${base}/about`, labelKey: "nav.about" },
    { path: `${base}/brands`, labelKey: "nav.brands" },
    { path: `${base}/visit`, labelKey: "nav.visit" },
    { path: `${base}/porto`, labelKey: "nav.porto" },
    { path: `${base}/blog`, labelKey: "nav.blog" },
    { path: `${base}/contact`, labelKey: "nav.contact" },
  ];

  return (
    <div className="sitemap-page">
      <Helmet>
        <title>{copy.title} | Ponto Cruz Porto</title>
        <meta name="description" content={copy.subtitle} />
      </Helmet>

      <section className="section">
        <div className="container">
          <h1>{copy.title}</h1>
          <p className="page-subtitle">{copy.subtitle}</p>

          <h2>{copy.pages}</h2>
          <ul className="sitemap-list">
            {staticPages.map((page) => (
              <li key={page.path}>
                <Link to={page.path}>{t(page.labelKey)}</Link>
              </li>
            ))}
          </ul>

          <h2>{copy.brands}</h2>
          <ul className="sitemap-list">
            {brandsData.map((brand) => (
              <li key={brand.slug}>
                <Link to={`/${lang}/brands/${brand.slug}`}>
                  {brand.translations[lang]?.name ||
                    brand.translations.pt?.name ||
                    brand.slug}
                </Link>
              </li>
            ))}
          </ul>

          <h2>{copy.blog}</h2>
          <ul className="sitemap-list">
            {blogData.map((post) => {
              const content = post.translations[lang] || post.translations.pt;
              return (
                <li key={post.slug}>
                  <Link to={`/${lang}/blog/${post.slug}`}>{content.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
