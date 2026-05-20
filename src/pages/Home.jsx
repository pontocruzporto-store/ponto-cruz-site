import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../utils/LanguageContext";
import brandsData from "../data/brands";
import placesData from "../data/places";
import blogData from "../data/blog";
import OptimizedImage from "../components/OptimizedImage";
import { BASE_URL } from "../utils/seo";
import "./Home.css";

// SEO metadata per language
const META = {
  pt: {
    title: "Ponto Cruz Porto | Concept Store de Artesanato e Design Português",
    description:
      "A sua loja de souvenirs autênticos no Porto. Descubra uma curadoria única de cerâmica, cortiça e marcas independentes numa concept store familiar no coração da cidade.",
  },
  en: {
    title: "Ponto Cruz Porto | Best Authentic Souvenirs & Portuguese Gifts",
    description:
      "Discover Porto's hidden gem for authentic Portuguese gifts. Shop handmade ceramics, sustainable cork, and local design at our family-run concept store. Unique souvenirs made in Portugal.",
  },
  ko: {
    title:
      "포르투 소품샵 폰토 크루즈 (Ponto Cruz Concept Store) | 포르투갈 쇼핑 리스트 추천",
    description:
      "포르투에서 가장 감성적인 소품샵! 핸드메이드 도자기, 코르크 지갑 등 포르투갈 여행 필수 기념품을 만나보세요. 현지인이 사랑하는 가족 운영 콘셉트 스토어.",
  },
  ja: {
    title: "ポルトの雑貨店 ポント・クルス | 本場ポルトガルの伝統工芸とお土産",
    description:
      "ポルトで見つける本物のお土産。職人手作りの陶磁器やコルク製品など、ポルトガルの手仕事が光る逸品を厳選。家族経営の温かみあふれるコンセプトストアです。",
  },
};

const HERO_ALT = {
  pt: "Interior da Ponto Cruz Concept Store no centro do Porto",
  en: "Inside Ponto Cruz Concept Store — authentic Portuguese crafts in Porto",
  ko: "포르투 폰토 크루즈 콘셉트 스토어 내부",
  ja: "ポルトのコンセプトストア ポント・クルスの店内",
};

const Home = () => {
  const { language, t } = useLanguage();
  const meta = META[language] || META.pt;
  const pageUrl = `${BASE_URL}/${language}`;

  // Scroll-reveal — animates .reveal and .reveal-stagger into view
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
        el.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const featuredBrands = brandsData
    .filter((brand) => brand.featured)
    .slice(0, 3);
  const featuredPlaces = placesData
    .filter((place) => place.featured)
    .slice(0, 3);
  const featuredPosts = blogData.slice(0, 3);

  return (
    <div className="home" id="main-content">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content={`${BASE_URL}/images/hero/hero-image-1200.webp`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <OptimizedImage
            src="/images/hero/hero-image-1200.webp"
            alt={HERO_ALT[language] || HERO_ALT.pt}
            loading="eager"
            fetchpriority="high"
            sizes="100vw"
            width={1200}
            height={800}
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-tagline">{t("hero.tagline")}</h1>
          <p className="hero-subtitle">{t("hero.subtitle")}</p>
          <div className="hero-actions">
            <Link to={`/${language}/visit`} className="button hero-visit-button">
              {t("nav.visit")}
            </Link>
          </div>
        </div>
      </section>

      <section className="visit-strip" aria-label={t("visit.title")}>
        <div className="container visit-strip-grid">
          <div>
            <span>{t("visit.address")}</span>
            <p>Rua Arquitecto Nicolau Nasoni, 11</p>
          </div>
          <div>
            <span>{t("visit.hours")}</span>
            <p>11h00 - 19h00</p>
          </div>
          <Link to={`/${language}/visit`} className="visit-strip-link">
            {t("nav.visit")}
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-grid reveal">
            <div className="about-preview-image">
              <OptimizedImage
                src="/images/hero/about-image-1200.webp"
                alt="Interior da Ponto Cruz Concept Store no Porto"
                sizes="(max-width: 768px) 100vw, 50vw"
                width={800}
                height={600}
              />
            </div>
            <div className="about-preview-content">
              <h2>{t("about.title")}</h2>
              <p>{t("about.homeIntro")}</p>
              <Link to={`/${language}/about`} className="button">
                {t("nav.about")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      {featuredBrands.length > 0 && (
        <section className="section featured-brands">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t("brands.title")}</h2>
              <Link to={`/${language}/brands`} className="section-link">
                {t("home.viewBrands")}
              </Link>
            </div>
            <div className="brands-grid reveal-stagger">
              {featuredBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  to={`/${language}/brands/${brand.slug}`}
                  className="brand-card"
                >
                  <div className="brand-card-image">
                    <OptimizedImage
                      src={brand["card-image"]}
                      alt={`${brand.translations[language].name} — disponível na Ponto Cruz Porto`}
                      sizes="(max-width: 768px) 100vw, 400px"
                      width={800}
                      height={600}
                    />
                  </div>
                  <h3>{brand.translations[language].name}</h3>
                  <p>{brand.translations[language].tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Porto Recommendations Preview */}
      {featuredPlaces.length > 0 && (
        <section className="section porto-preview">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t("porto.title")}</h2>
              <Link to={`/${language}/porto`} className="section-link">
                {t("home.explorePorto")}
              </Link>
            </div>
            <div className="places-grid reveal-stagger">
              {featuredPlaces.map((place) => (
                <div key={place.slug} className="place-card">
                  <div className="place-card-image">
                    <OptimizedImage
                      src={place.image}
                      alt={place.translations[language].name}
                      sizes="(max-width: 768px) 100vw, 400px"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="place-card-content">
                    <span className="place-category">
                      {t(
                        `porto.filter${place.category === "visit" ? "Visit" : "Eat"}`,
                      )}
                    </span>
                    <h3>{place.translations[language].name}</h3>
                    <p>{place.translations[language].description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredPosts.length > 0 && (
        <section className="section blog-preview">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{t("blog.title")}</h2>
              <Link to={`/${language}/blog`} className="section-link">
                {t("home.readBlog")}
              </Link>
            </div>
            <div className="places-grid reveal-stagger">
              {featuredPosts.map((post) => {
                const content = post.translations[language] || post.translations.pt;
                return (
                  <Link
                    key={post.slug}
                    to={`/${language}/blog/${post.slug}`}
                    className="place-card"
                  >
                    <div className="place-card-image">
                      <OptimizedImage
                        src={post.image}
                        alt={content.title}
                        sizes="(max-width: 768px) 100vw, 400px"
                        width={800}
                        height={533}
                      />
                    </div>
                    <div className="place-card-content">
                      <h3>{content.title}</h3>
                      <p>{content.excerpt}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Visit CTA */}
      <section className="section visit-cta">
        <div className="container">
          <div className="visit-cta-content reveal">
            <h2>{t("visit.title")}</h2>
            <p>
              Rua Arquitecto Nicolau Nasoni, 11
              <br />
              4050-423 Porto, Portugal
            </p>
            <Link to={`/${language}/visit`} className="button">
              {t("nav.visit")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
