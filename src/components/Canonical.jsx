import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BASE = "https://pontocruzconceptstore.pt";
const LANGS = ["pt", "en", "ko", "ja"];
const LOCALES = {
  pt: "pt_PT",
  en: "en_GB",
  ko: "ko_KR",
  ja: "ja_JP",
};

const Canonical = () => {
  const location = useLocation();

  // Remove trailing slash
  const fullPath = location.pathname.replace(/\/$/, "") || "/";

  // Detect current language prefix (e.g. /en/about → "en")
  const parts = fullPath.split("/").filter(Boolean);
  const currentLang = LANGS.includes(parts[0]) ? parts[0] : "pt";

  // The path after the language prefix (e.g. /about, /brands/minerva, or "")
  const restPath = parts.slice(1).join("/");
  const basePath = restPath ? `/${restPath}` : "";

  const canonicalUrl = `${BASE}/${currentLang}${basePath}`;

  return (
    <Helmet htmlAttributes={{ lang: currentLang }}>
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta property="og:site_name" content="Ponto Cruz Concept Store" />
      <meta property="og:locale" content={LOCALES[currentLang]} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Hreflang for each language */}
      {LANGS.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${BASE}/${lang}${basePath}`}
        />
      ))}
      {LANGS.filter((lang) => lang !== currentLang).map((lang) => (
        <meta
          key={lang}
          property="og:locale:alternate"
          content={LOCALES[lang]}
        />
      ))}

      {/* x-default always points to the Portuguese version */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${BASE}/pt${basePath}`}
      />
    </Helmet>
  );
};

export default Canonical;
