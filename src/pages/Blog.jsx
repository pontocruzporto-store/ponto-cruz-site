import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import blogData from "../data/blog";
import OptimizedImage from "../components/OptimizedImage";
import "./Blog.css";

const META = {
  pt: {
    title: "Blog | Guias de Compras Autênticas no Porto",
    description:
      "Artigos e guias sobre souvenirs autênticos, marcas portuguesas e dicas de compras no Porto para turistas e locais.",
  },
  en: {
    title: "Blog | Authentic Souvenir Guides for Porto Visitors",
    description:
      "Guides and articles about authentic Porto souvenirs, Portuguese brands and where to shop like a local — not a tourist.",
  },
  ko: {
    title: "블로그 | 포르투 방문객을 위한 정품 기념품 가이드",
    description:
      "포르투 정품 기념품, 포르투갈 브랜드, 현지인처럼 쇼핑하는 방법에 대한 가이드와 기사.",
  },
  ja: {
    title: "ブログ | ポルト訪問者のための本格お土産ガイド",
    description:
      "ポルトの本物のお土産、ポルトガルブランド、観光客ではなく地元の人のようにショッピングする方法についてのガイドと記事。",
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
