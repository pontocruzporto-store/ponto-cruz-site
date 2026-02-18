import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useParams, Navigate } from "react-router-dom";
import { useLanguage } from "../utils/LanguageContext";
import blogData from "../data/blog";
import OptimizedImage from "../components/OptimizedImage";
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();

  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to={`/${language}/blog`} replace />;
  }

  const content = post.translations[language] || post.translations.pt;

  const markdown = content.body || "";

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);

    const locale =
      language === "pt"
        ? "pt-PT"
        : language === "ko"
          ? "ko-KR"
          : language === "ja"
            ? "ja-JP"
            : "en-GB";

    return d.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <div className="container">
          <Link to={`/${language}/blog`} className="blog-back">
            ← {t("blog.backToBlog")}
          </Link>

          <header className="blog-post-header">
            <time className="blog-post-date" dateTime={post.date}>
              {formatDate(post.date)}
            </time>

            <h1 className="blog-post-title">{content.title}</h1>
          </header>

          {post.image && (
            <div className="blog-post-image">
              <OptimizedImage
                src={post.image}
                alt={content.title}
                sizes="(max-width: 768px) 100vw, 900px"
              />
            </div>
          )}

          <div className="blog-post-body content-wrapper">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
