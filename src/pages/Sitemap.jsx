import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import brandsData from "../data/brands";
import blogData from "../data/blog";
import "./Sitemap.css";

const labels = {
  pt: {
    title: "Mapa do site",
    subtitle: "Links para todas as paginas do site.",
    pages: "Paginas",
    brands: "Marcas",
    blog: "Blog",
  },
  en: {
    title: "Sitemap",
    subtitle: "Links to all pages on the site.",
    pages: "Pages",
    brands: "Brands",
    blog: "Blog",
  },
  ko: {
    title: "Sitemap",
    subtitle: "Links to all pages on the site.",
    pages: "Pages",
    brands: "Brands",
    blog: "Blog",
  },
  ja: {
    title: "Sitemap",
    subtitle: "Links to all pages on the site.",
    pages: "Pages",
    brands: "Brands",
    blog: "Blog",
  },
};

const Sitemap = () => {
  const { language } = useParams();
  const lang = language || "pt";
  const { t } = useLanguage();
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
