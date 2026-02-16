import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext';
import blogData from '../data/blog';
import './Blog.css';

const Blog = () => {
  const { language, t } = useLanguage();

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(language === 'pt' ? 'pt-PT' : language === 'ko' ? 'ko-KR' : language === 'ja' ? 'ja-JP' : 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('blog.title')}</h1>
          <p className="page-subtitle">{t('blog.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {blogData.length === 0 ? (
            <div className="empty-state">
              <p>{t('blog.empty')}</p>
            </div>
          ) : (
            <div className="blog-grid">
              {blogData.map((post) => {
                const content = post.translations[language] || post.translations.pt;
                return (
                  <Link
                    key={post.slug}
                    to={`/${language}/blog/${post.slug}`}
                    className="blog-card"
                  >
                    {post.image && (
                      <div className="blog-card-image">
                        <img src={post.image} alt="" loading="lazy" />
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
