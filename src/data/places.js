// places.json - Porto recommendations data
//
// HOW TO ADD A NEW PLACE:
// 1. Copy the example structure below
// 2. Create unique slug (lowercase, hyphens)
// 3. Add image to /public/images/places/
// 4. Set category: "visit" or "eat"
// 5. Translate all fields to pt, en, ko, ja
//
// SCHEMA:
// {
//   "slug": "unique-place-id",
//   "image": "/images/places/place-photo.jpg",
//   "category": "visit" | "eat",
//   "featured": true/false,
//   "location": {
//     "lat": 41.1579,
//     "lng": -8.6291,
//     "address": "Street address"
//   },
//   "translations": {
//     "pt": {
//       "name": "Place Name",
//       "description": "Why we recommend this place",
//       "tips": "Insider tips (optional)"
//     },
//     "en": { ... },
//     "ko": { ... },
//     "ja": { ... }
//   }
// }

export default [
  // EXAMPLE PLACE - Remove or modify for actual recommendations
  {
    "slug": "example-cafe",
    "image": "/images/places/example-cafe.jpg",
    "category": "eat",
    "featured": true,
    "location": {
      "lat": 41.1579,
      "lng": -8.6291,
      "address": "Rua Exemplo, 123, Porto"
    },
    "translations": {
      "pt": {
        "name": "Café de Exemplo",
        "description": "Um dos nossos cafés preferidos no Porto. Ambiente acolhedor, café excepcional e pastelaria artesanal. Perfeito para uma pausa tranquila.",
        "tips": "Experimente o pastel de nata pela manhã. Chega cedo aos fins de semana!"
      },
      "en": {
        "name": "Example Café",
        "description": "One of our favorite cafés in Porto. Welcoming atmosphere, exceptional coffee, and artisanal pastries. Perfect for a peaceful break.",
        "tips": "Try the pastel de nata in the morning. Arrive early on weekends!"
      },
      "ko": {
        "name": "예시 카페",
        "description": "포르투에서 우리가 가장 좋아하는 카페 중 하나입니다. 환영하는 분위기, 뛰어난 커피, 그리고 수제 페이스트리. 평화로운 휴식에 완벽합니다.",
        "tips": "아침에 파스텔 데 나타를 맛보세요. 주말에는 일찍 도착하세요!"
      },
      "ja": {
        "name": "例のカフェ",
        "description": "ポルトで私たちのお気に入りのカフェの一つです。温かい雰囲気、優れたコーヒー、職人のペストリー。平和な休憩に最適です。",
        "tips": "朝にパステル・デ・ナタを試してください。週末は早めに到着してください！"
      }
    }
  },
  {
    "slug": "example-landmark",
    "image": "/images/places/example-landmark.jpg",
    "category": "visit",
    "featured": false,
    "location": {
      "lat": 41.1621,
      "lng": -8.6214,
      "address": "Praça Exemplo, Porto"
    },
    "translations": {
      "pt": {
        "name": "Monumento de Exemplo",
        "description": "Um local histórico imperdível que captura a essência do Porto. Vista deslumbrante e arquitetura magnífica.",
        "tips": "Visite ao pôr do sol para as melhores fotografias."
      },
      "en": {
        "name": "Example Monument",
        "description": "An unmissable historic site that captures Porto's essence. Stunning views and magnificent architecture.",
        "tips": "Visit at sunset for the best photographs."
      },
      "ko": {
        "name": "예시 기념물",
        "description": "포르투의 본질을 담은 놓칠 수 없는 역사적 장소입니다. 멋진 전망과 웅장한 건축물.",
        "tips": "최고의 사진을 위해 일몰 때 방문하세요."
      },
      "ja": {
        "name": "例の記念碑",
        "description": "ポルトの本質を捉えた見逃せない歴史的な場所です。素晴らしい景色と壮大な建築。",
        "tips": "最高の写真のために日没時に訪れてください。"
      }
    }
  }
];
