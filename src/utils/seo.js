export const BASE_URL = "https://pontocruzconceptstore.pt";
export const LANGS = ["pt", "en", "ko", "ja"];

export const localBusinessSchema = (url = BASE_URL) => ({
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": `${BASE_URL}/#store`,
  name: "Ponto Cruz Concept Store",
  description:
    "Authentic Portuguese concept store in Porto with curated local brands, handmade crafts and genuine souvenirs.",
  url,
  telephone: "+351 912 305 495",
  email: "conceptstore.cruz@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Arquitecto Nicolau Nasoni, 11",
    addressLocality: "Porto",
    postalCode: "4050-423",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.14553,
    longitude: -8.6135,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "19:00",
    },
  ],
  image: `${BASE_URL}/images/hero/hero-image-1200.webp`,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Debit Card, Credit Card, NFC, Apple Pay, Google Pay",
  sameAs: [
    "https://www.instagram.com/pontocruzporto/",
    "https://www.facebook.com/pontocruzporto/",
  ],
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}${item.path}`,
  })),
});

export const faqSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const placeSchema = (place, language, pagePath) => {
  const content = place.translations[language] || place.translations.pt;

  return {
    "@context": "https://schema.org",
    "@type": place.category === "eat" ? "Restaurant" : "TouristAttraction",
    name: content.name,
    description: content.description,
    image: `${BASE_URL}${place.image}`,
    url: `${BASE_URL}${pagePath}`,
    address: place.location?.address,
    geo: place.location
      ? {
          "@type": "GeoCoordinates",
          latitude: place.location.lat,
          longitude: place.location.lng,
        }
      : undefined,
  };
};
