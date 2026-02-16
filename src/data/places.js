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
    "slug": "francesinha-cafe",
    "image": "/images/places/francesinha_café.webp",
    "category": "eat",
    "featured": true,
    "location": {
      "lat": 41.16037,
      "lng": -8.60060,
      "address": "Rua da Alegria 946, 4000-048 Porto"
    },
    "translations": {
      "pt": {
        "name": "Francesinha Café",
        "description": "De forma praticamente unânime entre os portuenses, serve uma das melhores francesinhas do Porto — e, para muitos, do mundo. Molho intenso, ingredientes de qualidade e execução irrepreensível tornam este espaço uma paragem obrigatória.",
        "tips": "Chega muito cedo para garantir mesa, pois é extremamente concorrido. Reservas são possíveis, mas nem sempre fáceis de conseguir."
      },
      "en": {
        "name": "Francesinha Café",
        "description": "Widely agreed by locals to serve one of the best francesinhas in Porto — and arguably in the world. Rich sauce, top-quality ingredients, and flawless execution make it a must-visit spot.",
        "tips": "Arrive very early to get a table, as it gets extremely busy. Reservations can be attempted but are not always easy to secure."
      },
      "ko": {
        "name": "Francesinha Café",
        "description": "현지인들 사이에서 포르투 최고의 프란세지냐 맛집 중 하나로 unanimously 인정받는 곳이며, 세계 최고 수준으로도 평가됩니다. 진한 소스와 뛰어난 재료, 완벽한 조리가 특징입니다.",
        "tips": "대기 시간이 매우 길 수 있으므로 아주 일찍 도착하세요. 예약이 가능하지만 항상 성공하는 것은 아닙니다."
      },
      "ja": {
        "name": "Francesinha Café",
        "description": "地元の人々の間でポルト最高のフランセジーニャの一つとしてほぼ満場一致で認められており、世界でもトップクラスと評されます。濃厚なソースと高品質な食材、完璧な仕上がりが魅力です。",
        "tips": "非常に混雑するため、早めの来店がおすすめです。予約は試せますが、必ず取れるとは限りません。"
      }
    }
  },
  {
    "slug": "mirandas-kaffe",
    "image": "/images/places/mirandas_kaffe.webp",
    "category": "eat",
    "featured": true,
    "location": {
      "lat": 41.16301,
      "lng": -8.61098,
      "address": "Rua de Antero de Quental 524, 4200-196 Porto"
    },
    "translations": {
      "pt": {
        "name": "Mirandas Kaffe",
        "description": "Uma tasca moderna com ambiente descontraído e muito portuense, famosa pela sua francesinha intensa e pelo prego em pão extremamente suculento. Com televisão a passar futebol e um espírito de convívio constante, é um clássico para comer bem e sem formalidades.",
        "tips": "Leva dinheiro, pois normalmente é cash only. Pode haver espera nas horas de ponta, mas vale claramente a pena."
      },
      "en": {
        "name": "Mirandas Kaffe",
        "description": "A relaxed, tavern-style spot with a true local atmosphere, best known for its bold francesinha and exceptionally juicy steak sandwich. With football on TV and a lively vibe, it’s a classic place for an authentic, no-frills meal.",
        "tips": "Bring cash, as it’s typically cash only. Expect a wait at peak times — it’s worth it."
      },
      "ko": {
        "name": "Mirandas Kaffe",
        "description": "현지 분위기가 가득한 캐주얼 타베르나 스타일의 맛집으로, 진한 프란세지냐와 육즙 가득한 프레구 샌드위치로 유명합니다. 축구 중계와 활기찬 분위기가 어우러진 정통 포르투 식당입니다.",
        "tips": "현금만 받는 경우가 많으니 미리 준비하세요. 피크 시간에는 대기할 수 있습니다."
      },
      "ja": {
        "name": "Mirandas Kaffe",
        "description": "地元らしいリラックスした雰囲気のタベルナ風レストランで、濃厚なフランセジーニャとジューシーなステーキサンドが名物です。テレビでサッカーが流れる活気ある空間で、本場の食事が楽しめます。",
        "tips": "現金のみの場合が多いので事前に用意しましょう。混雑時間帯は待つことがあります。"
      }
    }
  },{
    "slug": "palacio-da-bolsa",
    "image": "/images/places/palacio_da_bolsa.webp",
    "category": "visit",
    "featured": true,
    "location": {
      "lat": 41.14157,
      "lng": -8.61565,
      "address": "R. de Ferreira Borges 11, 4050-253 Porto, Portugal"
    },
    "translations": {
      "pt": {
        "name": "Palácio da Bolsa",
        "description": "Um dos edifícios históricos mais emblemáticos do Porto, conhecido pelos seus salões luxuosos e pelo impressionante Salão Árabe. Antiga sede da Associação Comercial do Porto, combina arquitetura neoclássica com interiores ricamente decorados e é uma visita essencial para compreender a história comercial da cidade.",
        "tips": "A visita é feita apenas através de tour guiado e os horários podem esgotar, por isso compra o bilhete com antecedência e não percas o Salão Árabe. Sendo portuense, é um dos edifícios mais bonitos da cidade e a visita vale mesmo a pena pela história e pelas curiosidades partilhadas — e fica a dica: lá dentro nem tudo é o que parece."
      },
      "en": {
        "name": "Palácio da Bolsa",
        "description": "One of Porto’s most iconic historic buildings, renowned for its opulent rooms and the breathtaking Arab Hall. Formerly the city’s Stock Exchange, it blends neoclassical architecture with richly decorated interiors and is essential for understanding Porto’s commercial heritage.",
        "tips": "Visits are only possible through guided tours and time slots often sell out, so book in advance and don’t miss the Arab Hall. As a local from Porto, this is considered one of the most beautiful buildings in the city — the guided tour is truly worth it for the history and the fascinating details shared, and here’s a curiosity: inside, not everything is what it seems."
      },
      "ko": {
        "name": "볼사 궁전",
        "description": "화려한 살롱과 압도적인 아라비안 홀로 유명한 포르투의 대표적인 역사 건축물입니다. 과거 상공회의소 건물로 사용되었으며, 신고전주의 건축과 화려한 내부 장식이 도시의 상업 역사를 잘 보여줍니다.",
        "tips": "가이드 투어로만 입장이 가능하며 시간이 빨리 매진되므로 미리 티켓을 구매하고 아라비안 홀을 꼭 보세요. 포르투 현지인의 시선에서 보면 도시에서 가장 아름다운 건물 중 하나이며, 역사와 흥미로운 이야기를 들을 수 있어 투어의 가치가 매우 높습니다 — 그리고 한 가지 재미있는 점은 내부의 모든 것이 보이는 그대로가 아니라는 것입니다."
      },
      "ja": {
        "name": "ボルサ宮殿",
        "description": "豪華な装飾の広間と圧巻のアラブの間で知られる、ポルトを代表する歴史的建造物です。かつての商工会議所で、新古典主義建築と華麗な内装が街の商業の歴史を物語ります。",
        "tips": "見学はガイドツアーのみで、時間枠は売り切れやすいため事前予約がおすすめで、アラブの間は必見です。地元ポルトの人にとっても街で最も美しい建物の一つで、歴史や興味深いエピソードが聞けるツアーは非常に価値があります — そして中では見た目通りではないものが多いという豆知識もあります。"
      }
    }
  }
];
