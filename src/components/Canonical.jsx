import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BASE = "https://pontocruzconceptstore.pt";
const LANGS = ["pt", "en", "ko", "ja"];

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

      {/* Hreflang for each language */}
      {LANGS.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hreflang={lang}
          href={`${BASE}/${lang}${basePath}`}
        />
      ))}

      {/* x-default always points to the Portuguese version */}
      <link
        rel="alternate"
        hreflang="x-default"
        href={`${BASE}/pt${basePath}`}
      />
    </Helmet>
  );
};

export default Canonical;
