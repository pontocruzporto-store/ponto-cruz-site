import { Helmet } from "react-helmet-async";
import visitInfo from "../data/visitInfo";

/**
 * SchemaOrg — injects LocalBusiness JSON-LD structured data.
 * Add this once inside App.jsx, just like <Canonical />.
 * The Google Knowledge Panel and local search results use this data.
 */
const SchemaOrg = () => {
  const coords = visitInfo.coordinates;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Ponto Cruz Concept Store",
    description:
      "Authentic Portuguese concept store in Porto with curated local brands, handmade crafts and genuine souvenirs. Family-run since its founding.",
    url: "https://pontocruzconceptstore.pt",
    // ⚠️  Replace with real phone and email from visitInfo if they are
    // already stored there — we reference visitInfo.translations.en here
    // as a safe English fallback.
    telephone: visitInfo.translations?.pt?.phone ?? "+351 912 305 495",
    email: visitInfo.translations?.pt?.email ?? "conceptstore.cruz@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Arquiteto Nicolau Nasoni, 11",
      addressLocality: "Porto",
      postalCode: "4050-423",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coords?.lat ?? 41.1496,
      longitude: coords?.lng ?? -8.6109,
    },
    // ⚠️  Adjust opening hours to match your real schedule
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "11:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/pontocruzporto/",
      "https://www.facebook.com/pontocruzporto/",
    ],
    image: "https://pontocruzconceptstore.pt/images/hero/hero-image-1200.webp",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted:
      "Cash, Debit Card, Credit Card, NFC, Apple Pay, Google Pay",
    inLanguage: ["pt", "en", "ko", "ja"],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaOrg;
