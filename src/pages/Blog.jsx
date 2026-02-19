import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import blogData from "../data/blog";
import OptimizedImage from "../components/OptimizedImage";
import "./Blog.css";

const META = {
  pt: {
    title: "Blog Ponto Cruz | Guia de Compras Locais e Artesanato no Porto",
    description:
      "Dicas exclusivas sobre o que comprar no Porto. Descubra marcas independentes, a história do artesanato português e onde encontrar souvenirs autênticos longe das armadilhas para turistas.",
  },
  en: {
    title:
      "Porto Shopping Guide Blog | Best Authentic Souvenirs & Local Brands",
    description:
      "Wondering what to buy in Porto? Explore our guides to unique Portuguese gifts, handmade ceramics, and the best independent shops. Shop like a local, not a tourist!",
  },
  ko: {
    title: "포르투 쇼핑 가이드 & 블로그 | 꼭 사야 할 기념품 리스트",
    description:
      "포르투갈 여행 쇼핑 리스트 완전 정복! 현지인이 추천하는 핸드메이드 소품, 포르투 기념품 추천, 그리고 숨겨진 로컬 브랜드 이야기를 확인해보세요.",
  },
  ja: {
    title: "ポルトの街歩きガイド＆ブログ | 本物志向のポルトガルお土産選び",
    description:
      "ポルトで見つける、職人技が光る伝統工芸品や最新のローカルデザイン。自分へのご褒美や大切な人へのギフトに最適な、ポルトガルの逸品を紹介します。",
  },
};

const Blog = () => {
  const { language, t } = useLanguage();
  const meta = META[language] || META.pt;

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(
      language === "pt"
        ? "pt-PT"
        : language === "ko"
          ? "ko-KR"
          : language === "ja"
            ? "ja-JP"
            : "en-GB",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    );
  };

  return (
    <div className="blog-page">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <h1>{t("blog.title")}</h1>
          <p className="page-subtitle">{t("blog.subtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {blogData.length === 0 ? (
            <div className="empty-state">
              <p>{t("blog.empty")}</p>
            </div>
          ) : (
            <div className="blog-grid">
              {blogData.map((post) => {
                const content =
                  post.translations[language] || post.translations.pt;
                return (
                  <Link
                    key={post.slug}
                    to={`/${language}/blog/${post.slug}`}
                    className="blog-card"
                  >
                    {post.image && (
                      <div className="blog-card-image">
                        <OptimizedImage
                          src={post.image}
                          alt={content.title}
                          sizes="(max-width: 768px) 100vw, 400px"
                          width={800}
                          height={533}
                        />
                      </div>
                    )}
                    <div className="blog-card-content">
                      <time className="blog-date" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <h2 className="blog-card-title">{content.title}</h2>
                      {content.excerpt && (
                        <p className="blog-card-excerpt">{content.excerpt}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
