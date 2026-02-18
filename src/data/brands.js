// brands.json - Data structure for Portuguese brands
//
// HOW TO ADD A NEW BRAND:
// 1. Copy the example below
// 2. Create a unique slug (lowercase, hyphens)
// 3. Add brand logo to /public/images/brands/
// 4. Add product images to /public/images/products/{brand-slug}/
// 5. Translate all text fields to pt, en, ko, ja
//
// SCHEMA:
// {
//   "slug": "unique-brand-identifier",
//   "logo": "/images/brands/brand-logo.jpg",
//   "translations": {
//     "pt": {
//       "name": "Brand Name",
//       "tagline": "Brief description",
//       "origin": "Region/City, Portugal",
//       "philosophy": "Longer description about values and approach",
//       "story": "Full brand story (2-3 paragraphs)"
//     },
//     "en": { ... },
//     "ko": { ... },
//     "ja": { ... }
//   },
//   "products": [
//     {
//       "image": "/images/products/brand-slug/product-1.jpg",
//       "translations": {
//         "pt": { "name": "Product Name", "description": "Description" },
//         "en": { "name": "Product Name", "description": "Description" },
//         "ko": { "name": "제품명", "description": "설명" },
//         "ja": { "name": "商品名", "description": "説明" }
//       }
//     }
//   ]
// }

export default [
  {
    slug: "essencias-portugal",
    logo: "/images/brands/creme_ept-1200.webp",
    "card-image": "/images/products/essencias_pt/product_creme_ept-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Essências de Portugal",
        tagline: "Sabonetes e cremes artesanais inspirados em Portugal",
        origin: "Torres Novas, Portugal",
        philosophy:
          "Criar produtos artesanais em Portugal que celebram materiais locais, produção cuidada e a identidade portuguesa em cada detalhe.",
        story:
          "A Longlife nasce em 2017 com a ambição de criar produtos artesanais diferentes, exclusivos e profundamente ligados a Portugal. Desde o início, a marca apostou na colaboração com produtores e artesãos locais, incorporando materiais e saberes nacionais — da cortiça à madeira, das essências naturais aos ingredientes tradicionais como o azeite e o óleo de grainha de uva.\n\nUm dos primeiros marcos foi o desafio de criar um sabonete comemorativo do centenário da aparição de Nossa Senhora de Fátima, projeto que impulsionou a criação de linhas inspiradas na identidade portuguesa e deu origem ao conceito Essências de Portugal.",
      },
      en: {
        name: "Essências de Portugal",
        tagline: "Artisanal soaps and creams inspired by Portugal",
        origin: "Torres Novas, Portugal",
        philosophy:
          "To create artisanal products in Portugal that celebrate local materials, careful production and Portuguese identity in every detail.",
        story:
          "Longlife was founded in 2017 with the ambition to create distinctive, exclusive handcrafted products deeply connected to Portugal. From the very beginning, the brand focused on working with local producers and artisans, incorporating national materials and know‑how — from cork and wood to natural essences and traditional ingredients such as olive oil and grape seed oil.\n\nOne of the first milestones was the challenge of creating a commemorative soap for the centenary of the apparition of Our Lady of Fátima. That project led to new collections inspired by Portuguese identity and gave rise to the Essências de Portugal concept.",
      },
      ko: {
        name: "Essências de Portugal",
        tagline: "포르투갈에서 영감을 받은 수제 비누와 크림",
        origin: "토레즈 노바스, 포르투갈",
        philosophy:
          "코르크와 목재, 천연 에센스, 올리브 오일과 포도씨 오일 같은 전통 재료 등, 포르투갈의 재료와 노하우를 기념하는 수제 제품을 만들고, 세심한 제작 과정과 포르투갈 정체성을 모든 디테일에 담는 것.",
        story:
          "Longlife는 2017년에 설립되었으며, 포르투갈과 깊게 연결된 독특하고 희소성이 있는 수제 제품을 만들겠다는 목표로 시작되었습니다. 브랜드는 처음부터 지역 생산자와 장인들과의 협업에 집중하며, 코르크와 목재, 천연 향료, 올리브 오일과 포도씨 오일 같은 전통적인 원료 등, 국내 재료와 기술을 적극적으로 활용해 왔습니다.\n\n초기 중요한 전환점 중 하나는 파티마 성모 발현 100주년을 기념하는 기념 비누를 제작해 달라는 도전이었습니다. 이 프로젝트는 포르투갈의 정체성에서 영감을 받은 새로운 라인으로 이어졌고, 그 결과 ‘Essências de Portugal’이라는 개념이 탄생하게 되었습니다.",
      },
      ja: {
        name: "Essências de Portugal",
        tagline:
          "ポルトガルにインスピレーションを得たハンドメイドの石けんとクリーム",
        origin: "トーレス・ノヴァス, ポルトガル",
        philosophy:
          "コルクや木材、天然エッセンス、オリーブオイルやブドウ種子油といった伝統的な素材を用いながら、ポルトガルの素材と職人技を祝福し、細部にまでポルトガルらしさを宿した手仕事のプロダクトをつくること。",
        story:
          "Longlife は 2017 年に誕生し、ポルトガルと深く結びついた、他にはないハンドメイドプロダクトをつくりたいという想いからスタートしました。創業当初から、ブランドは地元の生産者や職人たちとの協業に力を入れ、コルクや木材、天然の香り成分、オリーブオイルやブドウ種子油などの伝統的な原料といった、国内ならではの素材と知恵を積極的に取り入れてきました。\n\n最初の大きな節目のひとつが、ファティマの聖母出現 100 周年を記念した特別な石けんの制作という依頼でした。このプロジェクトをきっかけに、ポルトガルのアイデンティティに着想を得た新しいラインが生まれ、「Essências de Portugal」というコンセプトが形づくられていきました。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Sabonete 50g",
          },
          en: {
            name: "50g Soap",
          },
          ko: {
            name: "50g 비누",
          },
          ja: {
            name: "50gソープ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Sabonete 150g",
          },
          en: {
            name: "150g Soap",
          },
          ko: {
            name: "150g 비누",
          },
          ja: {
            name: "150gソープ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Creme de Mãos",
          },
          en: {
            name: "Hand Cream",
          },
          ko: {
            name: "핸드 크림",
          },
          ja: {
            name: "ハンドクリーム",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Cork Jewels Keeper",
          },
          en: {
            name: "Cork Jewels Keeper",
          },
          ko: {
            name: "코르크 주얼리 케이스",
          },
          ja: {
            name: "コルク製ジュエリーケース",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Sabonete Origens",
          },
          en: {
            name: "Origens Soap",
          },
          ko: {
            name: "오리젠스 비누",
          },
          ja: {
            name: "オリジェンスソープ",
          },
        },
      },
    ],
  },
  {
    slug: "minerva",
    logo: "/images/brands/sardinha_min-1200.webp",
    "card-image": "/images/products/minerva/product_lata_min-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Minerva",
        tagline: "Conservas premium de peixe feitas em Portugal desde 1942",
        origin: "Porto, Portugal",
        philosophy:
          "Produzimos conservas de peixe em Portugal com método tradicional, seleção rigorosa e compromisso absoluto com a qualidade e a excelência.",
        story:
          "Inspirada na figura mitológica de Minerva, deusa da sabedoria e da excelência, a marca assume desde a sua origem um posicionamento premium assente na qualidade superior e no rigor do saber-fazer tradicional.\n\nFundada em 1942, a Minerva construiu a sua reputação através da diversidade de receitas e sabores, mantendo sempre um elevado padrão na produção das suas conservas.\n\nElaborados exclusivamente com peixe fresco selecionado manualmente e preparado pelo método tradicional, os produtos são criados para surpreender os paladares mais exigentes, unindo herança, técnica e exigência numa marca que permanece referência de qualidade ao longo de gerações.",
      },
      en: {
        name: "Minerva",
        tagline: "Premium canned fish made in Portugal since 1942",
        origin: "Porto, Portugal",
        philosophy:
          "We produce canned fish in Portugal using traditional methods, rigorous selection and an unwavering commitment to quality and excellence.",
        story:
          "Inspired by the mythological figure of Minerva, goddess of wisdom and excellence, the brand has had a premium positioning from the beginning, grounded in superior quality and strict traditional know‑how.\n\nFounded in 1942, Minerva has built its reputation through a wide variety of recipes and flavours, while always maintaining a very high standard in its canning production.\n\nMade exclusively with fresh fish that is hand‑selected and prepared using traditional methods, Minerva products are created to delight the most demanding palates, bringing together heritage, technique and exacting standards in a brand that has remained a benchmark of quality across generations.",
      },
      ko: {
        name: "Minerva",
        tagline: "1942년부터 포르투갈에서 만들어 온 프리미엄 생선 통조림",
        origin: "포르투, 포르투갈",
        philosophy:
          "전통적인 방식과 엄격한 원재료 선별, 그리고 품질과 우수성에 대한 확고한 기준을 바탕으로, 포르투갈에서 생선 통조림을 생산하는 것.",
        story:
          "지혜와 탁월함의 여신인 그리스 신화 속 미네르바에서 영감을 받은 Minerva는, 탄생 당시부터 최고 품질과 전통적인 노하우에 기반한 프리미엄 브랜드로 자리매김해 왔습니다.\n\n1942년에 설립된 이후, Minerva는 다양한 레시피와 풍부한 맛을 선보이며, 통조림 생산에서 매우 높은 기준을 꾸준히 유지해 왔습니다.\n\n엄선된 신선한 생선만을 사용해, 전통적인 방법으로 손질·조리되는 Minerva의 제품들은, 가장 까다로운 미식가들까지 만족시키기 위해 만들어집니다. 유산과 기술, 그리고 엄격한 기준이 조화를 이루며, 여러 세대를 거쳐 품질의 기준으로 인정받는 브랜드로 남아 있습니다.",
      },
      ja: {
        name: "Minerva",
        tagline: "1942年創業、ポルトガル発のプレミアム魚介缶詰",
        origin: "ポルト, ポルトガル",
        philosophy:
          "伝統的な製法と厳格な素材選び、そして品質と卓越性への揺るぎないこだわりのもと、ポルトガルで魚介の缶詰をつくり続けること。",
        story:
          "知恵と卓越性の女神・ミネルヴァにインスピレーションを得た Minerva は、創業当初からプレミアムなポジションを貫いてきました。その基盤となっているのは、卓越した品質と、受け継がれてきた伝統的な技術です。\n\n1942 年の創業以来、Minerva は多彩なレシピと味わいによって評価を高めてきましたが、その裏には常に、高い基準で管理された缶詰づくりがあります。\n\n新鮮な魚のみを手作業で厳選し、伝統的な製法で丁寧に仕上げることで、最も舌の肥えた人々をも満足させるプロダクトが生まれます。受け継がれてきた遺産と確かな技術、そして妥協のない基準が一体となり、Minerva は世代を超えて品質のベンチマークであり続けています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Lata de Conserva",
          },
          en: {
            name: "Canned Fish",
          },
          ko: {
            name: "생선 통조림",
          },
          ja: {
            name: "魚介缶詰",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Paté",
          },
          en: {
            name: "Fish Pâté",
          },
          ko: {
            name: "생선 파테",
          },
          ja: {
            name: "魚のパテ",
          },
        },
      },
    ],
  },
  {
    slug: "maria-carmo",
    logo: "/images/brands/brincos_mc-1200.webp",
    "card-image": "/images/products/maria_carmo/product_brincos_mc-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Maria do Carmo",
        tagline: "Joias e figuras em cerâmica feitas à mão em Portugal",
        origin: "Porto, Portugal",
        philosophy:
          "Criar peças em cerâmica totalmente manuais, unindo detalhe, técnica e dedicação artesanal em cada criação.",
        story:
          "Maria do Carmo desenvolve todas as suas peças em cerâmica do início ao fim, com um nível de detalhe impressionante e um processo inteiramente manual.\n\nEntre brincos, anéis, colares e pulseiras, assim como presépios e andorinhas decorativas, cada criação nasce das mãos da artesã com tempo, precisão e atenção ao acabamento.\n\nO projeto construiu-se sobre o amor pela cerâmica e pela criação lenta, dando forma a objetos únicos que refletem dedicação, sensibilidade artística e respeito pelo trabalho artesanal.",
      },
      en: {
        name: "Maria do Carmo",
        tagline: "Handmade ceramic jewellery and figures from Portugal",
        origin: "Porto, Portugal",
        philosophy:
          "To create fully handmade ceramic pieces that bring together detail, technique and artisanal dedication in every creation.",
        story:
          "Maria do Carmo develops all her ceramic pieces from start to finish, with an impressive level of detail and a fully manual process.\n\nFrom earrings, rings, necklaces and bracelets to nativity scenes and decorative swallows, each creation is shaped by the artisan’s hands with time, precision and careful finishing.\n\nThe project is built on a love of ceramics and slow creation, giving form to unique objects that reflect dedication, artistic sensitivity and respect for handcrafted work.",
      },
      ko: {
        name: "Maria do Carmo",
        tagline: "포르투갈에서 손으로 만드는 세라믹 주얼리와 피규어",
        origin: "포르투, 포르투갈",
        philosophy:
          "처음부터 끝까지 전 과정을 손으로 진행하며, 디테일과 기술, 그리고 장인다운 헌신이 담긴 세라믹 작품을 만들어 내는 것.",
        story:
          "Maria do Carmo는 모든 세라믹 작품을 처음 구상하는 단계부터 완성에 이르기까지 직접 제작합니다. 놀라운 수준의 디테일과 100% 수작업 공정을 고수하는 것이 특징입니다.\n\n귀걸이, 반지, 목걸이, 팔찌는 물론, 구유 장식이나 장식용 제비 피규어까지, 각 작품은 장인의 손에서 천천히 빚어지며, 시간과 정밀함, 마감에 대한 높은 기준이 더해집니다.\n\n이 프로젝트는 세라믹에 대한 사랑과 ‘천천히 만드는 일’에서 출발했습니다. 그 결과, 헌신과 예술적 감수성, 수공예에 대한 깊은 존중이 고스란히 담긴 유일한 오브제들이 탄생합니다.",
      },
      ja: {
        name: "Maria do Carmo",
        tagline:
          "ポルトガルで一つひとつ手づくりされる陶器のジュエリーとフィギュア",
        origin: "ポルト, ポルトガル",
        philosophy:
          "すべての工程を手作業で行い、細部へのこだわりと確かな技術、そしてクラフトへの献身を一つひとつの陶器作品に込めること。",
        story:
          "Maria do Carmo は、構想から仕上げまで、すべての陶器作品を自らの手でつくり上げています。きわめて高いディテール表現と、完全に手仕事に依拠した制作プロセスが特徴です。\n\nイヤリングやリング、ネックレス、ブレスレットに加え、馬小屋をテーマにした小さな情景やツバメのオブジェなど、さまざまな作品が彼女の手から生まれます。どの作品も、時間をかけた制作と精緻な仕上げへのこだわりが感じられます。\n\nこのプロジェクトは、陶芸への深い愛情と“ゆっくりとものをつくること”への想いを土台にしています。その結果として生まれるオブジェは、献身と芸術的な感性、そして手仕事への敬意を映し出す、唯一無二の存在です。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Boneca Grande",
          },
          en: {
            name: "Large Doll",
          },
          ko: {
            name: "큰 인형",
          },
          ja: {
            name: "大きな人形",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Boneca Pequena",
          },
          en: {
            name: "Small Doll",
          },
          ko: {
            name: "작은 인형",
          },
          ja: {
            name: "小さな人形",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Porta-Chaves",
          },
          en: {
            name: "Keychain",
          },
          ko: {
            name: "키링",
          },
          ja: {
            name: "キーホルダー",
          },
        },
      },
    ],
  },
  {
    slug: "ana-willerding",
    logo: "/images/brands/brincos_aw-1200.webp",
    "card-image":
      "/images/products/ana_willerding/product_brincos_aw-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Ana Willerding",
        tagline: "Joalharia artesanal com porcelana portuguesa reaproveitada",
        origin: "Porto, Portugal",
        philosophy:
          "Criar joias artesanais em Portugal a partir de porcelana antiga reaproveitada, valorizando o saber-fazer local e transformando fragmentos de história em peças únicas.",
        story:
          "A marca nasce das mãos e do olhar atento de Ana Willerding — uma artesã de sorriso aberto e espírito caloroso, apaixonada por dar novas oportunidades a materiais que já viveram outras vidas.\n\nEntre pedaços de porcelana antiga encontrados em Portugal e ilustrações originais desenhadas pela própria Ana, surgiram brincos, colares, anéis e pulseiras que carregam mais do que forma: carregam tempo, memória e identidade.\n\nCada fragmento escolhido conta uma história silenciosa — de mesas antigas, casas cheias, fábricas tradicionais — e é reinventado num novo contexto, com leveza, cor e delicadeza. O processo é sempre manual, próximo e consciente, respeitando os ritmos da criação artesanal e celebrando as pessoas e os locais envolvidos em cada etapa.\n\nHoje, a Ana Willerding continua a criar com a mesma intenção com que começou: espalhar beleza, apoiar a produção portuguesa e oferecer peças que fazem quem as usa sentir que está a levar consigo algo verdadeiramente único.",
      },
      en: {
        name: "Ana Willerding",
        tagline:
          "Handcrafted jewellery made with reclaimed Portuguese porcelain",
        origin: "Porto, Portugal",
        philosophy:
          "To create handcrafted jewellery in Portugal from reclaimed antique porcelain, valuing local know-how and transforming fragments of history into unique pieces.",
        story:
          "The brand is born from the hands and attentive gaze of Ana Willerding — an artisan with a warm smile and generous spirit, passionate about giving new opportunities to materials that have already lived other lives.\n\nFrom fragments of antique porcelain found across Portugal and original illustrations drawn by Ana herself emerge earrings, necklaces, rings and bracelets that carry more than form: they carry time, memory and identity.\n\nEach selected fragment tells a silent story — of old tables, busy homes, traditional factories — and is reinvented in a new context with lightness, colour and delicacy. The process is always manual, close and conscious, respecting the rhythms of craft and celebrating the people and places involved at every stage.\n\nToday, Ana Willerding continues to create with the same intention she began with: spreading beauty, supporting Portuguese production and offering pieces that make those who wear them feel they are carrying something truly unique.",
      },
      ko: {
        name: "아나 빌레르딩",
        tagline: "재사용된 포르투갈 도자기로 만든 수제 주얼리",
        origin: "포르투, 포르투갈",
        philosophy:
          "오래된 포르투갈 도자기를 재사용해 포르투갈에서 수작업 주얼리를 제작하고, 지역 장인 정신을 존중하며 역사적 조각들을 유일한 작품으로 재탄생시키는 것.",
        story:
          "아나 빌레르딩 브랜드는 따뜻한 미소와 열린 마음을 지닌 장인 아나의 손과 섬세한 시선에서 시작되었습니다.\n\n포르투갈 전역에서 발견한 오래된 도자기 조각과 아나가 직접 그린 일러스트에서 귀걸이, 목걸이, 반지, 팔찌가 탄생합니다.\n\n각 조각은 오래된 식탁과 가정, 전통 공장의 이야기를 품고 있으며, 가벼움과 색채, 섬세함을 더해 새롭게 재해석됩니다.\n\n오늘도 아나는 아름다움을 전하고 포르투갈 생산을 지지하며, 착용자가 진정 특별한 무언가를 지닌 듯 느끼게 하는 작품을 만들고 있습니다.",
      },
      ja: {
        name: "アナ・ヴィレルディング",
        tagline: "再利用したポルトガル陶器によるハンドメイドジュエリー",
        origin: "ポルト, ポルトガル",
        philosophy:
          "古いポルトガル陶器を再利用し、地元の職人技を大切にしながら、歴史の断片を唯一無二のジュエリーへと変えること。",
        story:
          "このブランドは、温かい笑顔と優しい精神を持つ職人アナの手と視線から生まれました。\n\nポルトガル各地で見つけた古い陶器のかけらと、アナ自身のイラストから、時間と記憶を宿すジュエリーが誕生します。\n\n一つひとつの断片は古い暮らしの記憶を秘め、新たな文脈で軽やかに再構成されます。\n\n今日も彼女は、美しさを届け、ポルトガルのものづくりを支え、本当に特別な存在となる作品を作り続けています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Brincos",
          },
          en: {
            name: "Earrings",
          },
          ko: {
            name: "귀걸이",
          },
          ja: {
            name: "イヤリング",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Colar",
          },
          en: {
            name: "Necklace",
          },
          ko: {
            name: "목걸이",
          },
          ja: {
            name: "ネックレス",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Pulseira",
          },
          en: {
            name: "Bracelet",
          },
          ko: {
            name: "팔찌",
          },
          ja: {
            name: "ブレスレット",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Pregadeira",
          },
          en: {
            name: "Brooch",
          },
          ko: {
            name: "브로치",
          },
          ja: {
            name: "ブローチ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Anel",
          },
          en: {
            name: "Ring",
          },
          ko: {
            name: "반지",
          },
          ja: {
            name: "リング",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Postal",
          },
          en: {
            name: "Postcard",
          },
          ko: {
            name: "엽서",
          },
          ja: {
            name: "ポストカード",
          },
        },
      },
    ],
  },
  {
    slug: "azulejo-quadrado",
    logo: "/images/brands/azulejo_aq-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Azulejo ao Quadrado",
        tagline: "Azulejos pintados à mão em Portugal com temas únicos",
        origin: "Porto, Portugal",
        philosophy:
          "Criar azulejos pintados à mão em Portugal, preservando a tradição através de temas contemporâneos e cheios de personalidade.",
        story:
          "A Azulejo ao Quadrado nasce da vontade de reinterpretar um dos símbolos mais fortes da cultura portuguesa através do olhar atento da criação artesanal.\n\nCada azulejo é pintado manualmente em Portugal, explorando uma grande diversidade de temas — tradicionais, ilustrativos, contemporâneos ou decorativos — sempre com o cuidado e o rigor que só o trabalho feito à mão permite.\n\nCom um tom próximo e acessível, a marca procura levar para casas e espaços peças que não são apenas decorativas, mas carregadas de identidade, carácter e autenticidade portuguesa. Cada quadrado conta uma história — e cada pintura é feita para durar.",
      },
      en: {
        name: "Azulejo ao Quadrado",
        tagline: "Hand‑painted Portuguese tiles with unique themes",
        origin: "Porto, Portugal",
        philosophy:
          "To create hand‑painted tiles in Portugal, preserving tradition through contemporary, characterful themes.",
        story:
          "Azulejo ao Quadrado was born from the desire to reinterpret one of the strongest symbols of Portuguese culture through the lens of artisanal creation.\n\nEvery tile is painted by hand in Portugal, exploring a wide range of themes — from traditional and illustrative to contemporary and decorative — always with the care and precision that only handcraft can offer.\n\nWith a warm and accessible tone, the brand aims to bring pieces into homes and spaces that are not just decorative, but filled with Portuguese identity, character and authenticity. Each square tells a story — and each painting is made to last.",
      },
      ko: {
        name: "Azulejo ao Quadrado",
        tagline: "독창적인 테마로 그려진 포르투갈 수제 타일",
        origin: "포르투, 포르투갈",
        philosophy:
          "장인 정신이 살아 있는 수작업 페인팅을 통해, 전통을 현대적이고 개성 있는 테마로 새롭게 해석한 포르투갈 타일을 만드는 것.",
        story:
          "Azulejo ao Quadrado는 포르투갈 문화를 상징하는 가장 강렬한 아이콘 가운데 하나인 아줄레주를, 수공예적인 시각으로 새롭게 바라보면서 시작된 브랜드입니다.\n\n모든 타일은 포르투갈에서 하나하나 손으로 그려지며, 전통적인 모티브부터 일러스트, 현대적인 패턴, 장식적인 테마까지 다양한 주제를 탐구합니다. 그 과정은 언제나 장인의 손길이 느껴질 만큼 섬세하고 엄격합니다.\n\n이 브랜드는 단순한 장식품이 아니라, 포르투갈의 정체성과 개성, 진정성을 담은 작은 오브제를 집과 공간에 전하고자 합니다. 각각의 정사각형 타일은 하나의 이야기를 들려주며, 오래도록 곁에 둘 수 있도록 만들어집니다.",
      },
      ja: {
        name: "Azulejo ao Quadrado",
        tagline: "ユニークなテーマで描かれたポルトガルの手描きタイル",
        origin: "ポルト, ポルトガル",
        philosophy:
          "ポルトガルの伝統的なタイル文化を守りながら、現代的で個性あふれるテーマを通して手描きタイルとして表現すること。",
        story:
          "Azulejo ao Quadrado は、ポルトガル文化を象徴するアズレージョという存在を、クラフトならではの視点で再解釈したいという思いから生まれました。\n\nすべてのタイルはポルトガルで一つひとつ手描きされ、伝統的なモチーフやイラストレーション、コンテンポラリーな図柄、装飾的なパターンなど、幅広いテーマが丁寧に表現されています。その制作には、手仕事ならではの細やかさと厳密さが息づいています。\n\nこのブランドが届けたいのは、単なるインテリアではなく、ポルトガルのアイデンティティと個性、そして本物らしさを宿した小さな作品です。ひとつの四角にはひとつの物語があり、その絵は長く楽しめるように仕立てられています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Azulejo",
          },
          en: {
            name: "Tile",
          },
          ko: {
            name: "타일",
          },
          ja: {
            name: "タイル",
          },
        },
      },
    ],
  },
  {
    slug: "fatima-cunha",
    logo: "/images/brands/mochila_fc-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Fátima Cunha",
        tagline: "Mochilas e bolsas artesanais feitas à mão em Portugal",
        origin: "Porto, Portugal",
        philosophy:
          "Criar mochilas e bolsas artesanais em Portugal com foco na qualidade, no detalhe e na diversidade de tecidos e estilos.",
        story:
          "A marca de Fátima Cunha nasce das mãos da artesã portuguesa dedicada a criar mochilas e bolsas manualmente, combinando técnica, sensibilidade estética e atenção ao detalhe.\n\nTrabalhando com uma grande variedade de tecidos, dos mais discretos aos mais coloridos, cada peça é pensada para responder a diferentes gostos e personalidades, mantendo sempre como prioridade a qualidade do acabamento e a durabilidade do produto.\n\nCom um processo totalmente artesanal, a Fátima Cunha construiu a sua reputação na consistência do trabalho manual, na escolha cuidada dos materiais e na criação de acessórios únicos que unem funcionalidade, carácter e identidade portuguesa.",
      },
      en: {
        name: "Fátima Cunha",
        tagline: "Handmade backpacks and bags crafted in Portugal",
        origin: "Porto, Portugal",
        philosophy:
          "To create handcrafted backpacks and bags in Portugal with a strong focus on quality, detail and a wide variety of fabrics and styles.",
        story:
          "The Fátima Cunha brand is born from the hands of a Portuguese artisan dedicated to making backpacks and bags by hand, combining technique, aesthetic sensitivity and attention to detail.\n\nWorking with a wide range of fabrics, from discreet tones to bold colours, each piece is designed to suit different tastes and personalities, while always prioritising finishing quality and durability.\n\nThrough a fully artisanal process, Fátima Cunha has built her reputation on consistent handwork, carefully chosen materials and the creation of unique accessories that bring together functionality, character and a distinctly Portuguese identity.",
      },
      ko: {
        name: "파티마 쿠냐",
        tagline: "포르투갈에서 수작업으로 만드는 핸드메이드 가방과 백팩",
        origin: "포르투, 포르투갈",
        philosophy:
          "섬세한 마감, 다양한 원단과 스타일, 그리고 높은 품질을 중심에 두고 포르투갈에서 수제 백팩과 가방을 제작하는 것.",
        story:
          "파티마 쿠냐 브랜드는, 수작업으로 백팩과 가방을 만드는 데 헌신하는 포르투갈 장인 파티마의 손에서 시작되었습니다. 그녀는 탄탄한 기술과 미적인 감각, 디테일에 대한 세심한 시선을 결합해 작품을 완성합니다.\n\n차분한 색감부터 화려한 패턴까지 폭넓은 종류의 원단을 사용해, 각기 다른 취향과 개성을 가진 사람들에게 어울리는 가방을 구상합니다. 그 과정에서 가장 중요한 것은 언제나 견고한 마감과 오래 사용할 수 있는 내구성입니다.\n\n완전히 수작업으로 이루어지는 제작 과정을 통해, 파티마 쿠냐는 일관된 핸드크래프트 퀄리티와 신중하게 선택한 소재, 그리고 실용성과 개성, 포르투갈 특유의 정체성을 모두 담아낸 독특한 액세서리로 명성을 쌓아 왔습니다.",
      },
      ja: {
        name: "ファティマ・クーニャ",
        tagline: "ポルトガルで一つひとつ手作業でつくられるバッグとリュック",
        origin: "ポルト, ポルトガル",
        philosophy:
          "仕上がりの美しさと耐久性、そして多彩な生地やスタイルにこだわりながら、ポルトガルでハンドメイドのバッグやリュックをつくること。",
        story:
          "ファティマ・クーニャのブランドは、バッグやリュックを一つずつ手作業で制作するポルトガルの職人、ファティマの手から生まれました。彼女は確かな技術に、審美眼と細部へのこだわりを組み合わせて作品を形にしています。\n\n落ち着いたトーンの生地からカラフルで遊び心のある柄まで、幅広いテキスタイルを使い、それぞれの好みや個性に寄り添うアイテムをデザインしています。そのうえで最も大切にしているのは、丁寧な仕上げと長く使える丈夫さです。\n\n全工程を手仕事で行うことで、ファティマ・クーニャは安定したクラフト品質と厳選された素材、そして機能性と個性、ポルトガルらしいアイデンティティを併せ持つユニークなアクセサリーを生み出すブランドとして評価を築いてきました。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Mochila",
          },
          en: {
            name: "Backpack",
          },
          ko: {
            name: "백팩",
          },
          ja: {
            name: "バックパック",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Bolsa",
          },
          en: {
            name: "Bag",
          },
          ko: {
            name: "가방",
          },
          ja: {
            name: "バッグ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Tote Bag",
          },
          en: {
            name: "Tote Bag",
          },
          ko: {
            name: "토트백",
          },
          ja: {
            name: "トートバッグ",
          },
        },
      },
    ],
  },
  {
    slug: "illustrart",
    logo: "/images/brands/sardinha_ill-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Illustrart",
        tagline: "Ilustração aplicada a produtos únicos",
        origin: "Porto, Portugal",
        philosophy:
          "Criar produtos ilustrados, onde o design autoral transforma cada peça num objeto único e especial.",
        story:
          "A marca nasce em outubro de 2010 pela mão da designer Isabel Coelho, com a vontade de aplicar ilustração original a diferentes suportes e transformá-la em objetos únicos.\n\nDesde o início, o projeto foi pensado como uma expressão autoral, onde cada coleção é desenvolvida com identidade própria e produzida em pequenas séries, valorizando o detalhe, o desenho e o caráter exclusivo de cada peça.\n\nHoje, a marca mantém-se fiel a essa origem criativa, apostando na ilustração como elemento central e na criação de produtos que cruzam design, arte e funcionalidade.",
      },
      en: {
        name: "Illustrart",
        tagline: "Illustration applied to unique products",
        origin: "Porto, Portugal",
        philosophy:
          "To create illustrated products where original design turns each piece into something unique and special.",
        story:
          "Illustrart was founded in October 2010 by designer Isabel Coelho, driven by the desire to apply original illustration to different mediums and transform it into unique objects.\n\nFrom the beginning, the project was conceived as an author‑driven expression, where each collection is developed with its own identity and produced in small series, valuing detail, drawing and the exclusive character of every piece.\n\nToday, the brand remains faithful to that creative origin, keeping illustration at the centre and creating products that bring together design, art and functionality.",
      },
      ko: {
        name: "Illustrart",
        tagline: "일러스트가 더해진 개성 있는 제품",
        origin: "포르투, 포르투갈",
        philosophy:
          "오리지널 일러스트레이션이 각 상품을 하나뿐인 특별한 오브제로 바꾸어 주는, 일러스트 중심의 제품을 만드는 것.",
        story:
          "Illustrart는 디자이너 이자벨 코엘류가 2010년 10월에 시작한 브랜드로, 오리지널 일러스트를 다양한 매체에 적용해 독특한 오브제로 탄생시키고자 하는 바람에서 출발했습니다.\n\n처음부터 이 프로젝트는 작가적인 표현의 장으로 기획되었으며, 각 컬렉션은 고유한 아이덴티티를 지닌 시리즈로, 소량으로 제작됩니다. 이를 통해 디테일, 드로잉, 그리고 각 작품이 지닌 유일한 캐릭터가 더욱 돋보입니다.\n\n오늘날에도 브랜드는 이러한 창의적인 출발점을 그대로 이어가며, 일러스트레이션을 중심에 두고 디자인·예술·실용성이 교차하는 제품을 선보이고 있습니다.",
      },
      ja: {
        name: "Illustrart",
        tagline: "イラストが生きる、ユニークなプロダクト",
        origin: "ポルト, ポルトガル",
        philosophy:
          "オリジナルのイラストレーションを通して、一つひとつのアイテムを特別なオブジェへと変えるプロダクトをつくること。",
        story:
          "Illustrart は、デザイナーのイザベル・コエリョによって 2010 年 10 月に立ち上げられました。オリジナルイラストをさまざまな媒体に落とし込み、それを唯一無二のオブジェへと昇華させたいという思いから始まったブランドです。\n\n当初からこのプロジェクトは、作家性を大切にした表現の場として構想されました。各コレクションは固有のアイデンティティを持ち、小ロットで制作されることで、ディテールやドローイング、そして一つひとつの作品が持つ特別な個性が引き立てられています。\n\n現在もブランドはそのクリエイティブな原点に忠実であり続け、イラストレーションを中心に据えながら、デザインとアート、そして実用性が交差するプロダクトを生み出しています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Tote Bag",
          },
          en: {
            name: "Tote Bag",
          },
          ko: {
            name: "토트백",
          },
          ja: {
            name: "トートバッグ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "T-Shirt",
          },
          en: {
            name: "T‑shirt",
          },
          ko: {
            name: "티셔츠",
          },
          ja: {
            name: "Tシャツ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Porta-Chaves",
          },
          en: {
            name: "Keyring",
          },
          ko: {
            name: "키링",
          },
          ja: {
            name: "キーホルダー",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Iman",
          },
          en: {
            name: "Magnet",
          },
          ko: {
            name: "자석",
          },
          ja: {
            name: "マグネット",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Almofada Sardinha",
          },
          en: {
            name: "Sardine Cushion",
          },
          ko: {
            name: "정어리 쿠션",
          },
          ja: {
            name: "イワシ柄クッション",
          },
        },
      },
    ],
  },
  {
    slug: "meia-mania",
    logo: "/images/brands/meias_mm-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Meia Mania",
        tagline: "Meias fabricadas em Portugal desde 1969",
        origin: "Lousã, Portugal",
        philosophy:
          "Produzir meias em Portugal desde 1969, combinando fios de alta qualidade, variedade de estilos e rigor industrial com tradição.",
        story:
          "A empresa nasce em 1969 com a missão de fabricar meias e collants em Portugal, apostando desde o início na qualidade dos materiais e na excelência do processo produtivo.\n\nAo longo das décadas, desenvolveu uma oferta completa para bebé, criança e adulto, criando modelos lisos, canelados, em felpa, com desenho, antiderrapantes e em 3D, adaptados a diferentes utilizações e estilos.\n\nUtilizando maioritariamente fios de algodão penteado e mercerizado de elevada qualidade, a marca construiu coleções clássicas, fantasia, desporto e gift, afirmando-se como um fabricante português experiente, consistente e orientado para a durabilidade e o conforto.",
      },
      en: {
        name: "Meia Mania",
        tagline: "Socks made in Portugal since 1969",
        origin: "Lousã, Portugal",
        philosophy:
          "To produce socks in Portugal since 1969, combining high‑quality yarns, a wide variety of styles and industrial rigour rooted in tradition.",
        story:
          "The company was founded in 1969 with the mission of manufacturing socks and tights in Portugal, focusing from the very beginning on the quality of materials and the excellence of its production process.\n\nOver the decades, it has developed a complete range for babies, children and adults, creating plain, ribbed, terry, patterned, anti‑slip and 3D models tailored to different uses and styles.\n\nUsing mainly high‑quality combed and mercerised cotton yarns, the brand has built classic, fantasy, sports and gift collections, establishing itself as an experienced Portuguese manufacturer focused on durability and comfort.",
      },
      ko: {
        name: "Meia Mania",
        tagline: "1969년부터 포르투갈에서 생산된 양말",
        origin: "로우사, 포르투갈",
        philosophy:
          "1969년부터 포르투갈에서 양말을 생산해 온 노하우를 바탕으로, 높은 품질의 실과 다양한 스타일, 그리고 전통에 뿌리를 둔 엄격한 생산 관리가 어우러진 제품을 만드는 것.",
        story:
          "Meia Mania는 1969년에 설립되었으며, 포르투갈에서 양말과 스타킹을 생산하겠다는 목표로 시작되었습니다. 설립 초기부터 소재의 품질과 생산 공정의 탁월함을 가장 중요한 가치로 두었습니다.\n\n수십 년에 걸쳐 브랜드는 아기·어린이·성인을 위한 폭넓은 라인업을 구축해 왔습니다. 베이직한 솔리드부터 골지, 테리, 패턴, 논슬립, 3D 디자인까지 다양한 스타일을 선보이며, 각기 다른 용도와 취향에 맞추어 개발되었습니다.\n\n주로 고급스러운 빗질 면사와 머서라이즈드 코튼을 사용하여, 클래식·패턴·스포츠·기프트 컬렉션을 개발해 온 Meia Mania는, 내구성과 편안함을 중시하는 경험 많은 포르투갈 제조사로 자리매김했습니다.",
      },
      ja: {
        name: "Meia Mania",
        tagline: "1969年からポルトガルで作られるソックス",
        origin: "ロウザ, ポルトガル",
        philosophy:
          "1969 年から続くノウハウを生かし、高品質な糸と多彩なスタイル、そして伝統に根ざした厳格な生産管理を組み合わせたソックスをつくること。",
        story:
          "Meia Mania は 1969 年に創業し、ポルトガルでソックスやタイツを生産することを使命としてスタートしました。創業当初から、素材のクオリティと生産プロセスの優秀さを最も大切な価値としてきました。\n\nその後何十年にもわたり、ベビーから子ども、大人までをカバーする幅広いラインナップを築いてきました。シンプルな無地、リブ、パイル地、柄物、滑り止め付き、3D デザインなど、多様な用途やスタイルに合わせたモデルを開発しています。\n\n主に高品質なコーマ綿やマーセライズドコットンの糸を使用し、クラシック・ファンタジー・スポーツ・ギフト向けといったコレクションを展開することで、Meia Mania は耐久性と履き心地を何より重視する、経験豊富なポルトガルのソックスメーカーとして知られています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Meias Temáticas",
          },
          en: {
            name: "Themed Socks",
          },
          ko: {
            name: "테마 양말",
          },
          ja: {
            name: "テーマソックス",
          },
        },
      },
    ],
  },
  {
    slug: "portugal-bag",
    logo: "/images/brands/caderno_piab-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Portugal.In.A.Bag",
        tagline:
          "Acessórios inspirados em Portugal com design exclusivo e sustentável",
        origin: "Porto, Portugal",
        philosophy:
          "Criamos acessórios sustentáveis com design exclusivo que celebram os materiais, a cultura e a identidade portuguesa em cada detalhe.",
        story:
          "Portugal in a Bag nasce como uma celebração do que Portugal tem de melhor para oferecer, unindo design exclusivo, materiais de qualidade e uma forte ligação à cultura, aos monumentos e às tradições do país.\n\nCriada pela Greenbags, a coleção resulta da combinação entre a experiência das equipas e a riqueza dos recursos nacionais, dando origem a artigos inspirados em cidades emblemáticas, costumes tradicionais e patrimónios históricos, sempre com atenção ao detalhe — do design à embalagem informativa que acompanha cada peça.\n\nUtilizando materiais sustentáveis como algodão natural, denim e juta, a marca procura equilibrar durabilidade, estética e responsabilidade ambiental, transformando cada produto numa pequena viagem pela cultura portuguesa.",
      },
      en: {
        name: "Portugal.In.A.Bag",
        tagline:
          "Accessories inspired by Portugal with exclusive, sustainable design",
        origin: "Porto, Portugal",
        philosophy:
          "We create sustainable accessories with exclusive design that celebrate Portuguese materials, culture and identity in every detail.",
        story:
          "Portugal in a Bag was created as a celebration of the very best Portugal has to offer, bringing together exclusive design, quality materials and a strong connection to the country’s culture, monuments and traditions.\n\nDeveloped by Greenbags, the collection combines the team’s experience with the richness of national resources, resulting in items inspired by iconic cities, traditional customs and historic heritage, always with close attention to detail — from the design itself to the informative packaging that accompanies each piece.\n\nUsing sustainable materials such as natural cotton, denim and jute, the brand seeks to balance durability, aesthetics and environmental responsibility, turning every product into a small journey through Portuguese culture.",
      },
      ko: {
        name: "Portugal.In.A.Bag",
        tagline:
          "포르투갈에서 영감을 받은, 지속 가능하고 독창적인 디자인의 액세서리",
        origin: "포르투, 포르투갈",
        philosophy:
          "포르투갈의 소재와 문화, 정체성을 기념하며, 모든 디테일에 이를 담아낸 지속 가능한 액세서리를 독점적인 디자인으로 선보이는 것.",
        story:
          "Portugal in a Bag은 포르투갈이 지닌 가장 아름다운 요소들을 기념하기 위해 탄생한 브랜드입니다. 독창적인 디자인과 우수한 소재, 그리고 이 나라의 문화·기념물·전통과의 깊은 연결을 하나로 엮어 냅니다.\n\nGreenbags가 만든 이 컬렉션은, 팀이 쌓아온 경험과 풍부한 국내 자원을 결합해, 상징적인 도시와 전통적인 풍습, 역사적 유산에서 영감을 받은 다양한 제품을 선보입니다. 각 아이템에는 디자인뿐 아니라, 제품과 함께 제공되는 인포메이션 패키지까지 세심한 배려가 담겨 있습니다.\n\n천연 면, 데님, 주트와 같은 지속 가능한 소재를 사용함으로써, 브랜드는 내구성과 미적 완성도, 환경적 책임 사이의 균형을 추구합니다. 그 결과, 각 제품은 포르투갈 문화를 따라 떠나는 작은 여행과도 같은 경험을 제공합니다.",
      },
      ja: {
        name: "Portugal.In.A.Bag",
        tagline:
          "ポルトガルにインスピレーションを得た、サステナブルでユニークなデザインのアクセサリー",
        origin: "ポルト, ポルトガル",
        philosophy:
          "ポルトガルの素材・文化・アイデンティティを祝福し、その魅力を細部にまで宿したサステナブルなアクセサリーを、オリジナルデザインでつくること。",
        story:
          "Portugal in a Bag は、ポルトガルが持つ魅力の最良の部分を祝うために誕生したブランドです。唯一無二のデザインと上質な素材、そしてこの国の文化やモニュメント、伝統との深い結びつきを一つにまとめています。\n\nGreenbags によって生み出されたこのコレクションは、チームの経験と豊かな国内資源が組み合わさることで、象徴的な都市や伝統的な習慣、歴史的遺産からインスピレーションを得たアイテムへと形を変えています。各プロダクトには、デザインそのものはもちろん、一緒に添えられるインフォメーションカードにいたるまで、細やかな配慮が込められています。\n\nナチュラルコットンやデニム、ジュートなどのサステナブルな素材を用いることで、ブランドは耐久性と美しさ、環境への配慮のバランスを追求しています。その結果、生まれる一つひとつのアイテムは、ポルトガル文化を巡る小さな旅のような存在となっています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Tote Bag",
          },
          en: {
            name: "Tote Bag",
          },
          ko: {
            name: "토트백",
          },
          ja: {
            name: "トートバッグ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Bolsa Necessaire",
          },
          en: {
            name: "Toiletry Bag",
          },
          ko: {
            name: "파우치(네세서리 가방)",
          },
          ja: {
            name: "ネセサリーポーチ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Avental",
          },
          en: {
            name: "Apron",
          },
          ko: {
            name: "앞치마",
          },
          ja: {
            name: "エプロン",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Caderno",
          },
          en: {
            name: "Notebook",
          },
          ko: {
            name: "노트",
          },
          ja: {
            name: "ノートブック",
          },
        },
      },
    ],
  },
  {
    slug: "captain-socks",
    logo: "/images/brands/meias_cs-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Captain Socks",
        tagline:
          "Meias desenhadas e produzidas em Portugal com atitude e sustentabilidade",
        origin: "Comporta, Portugal",
        philosophy:
          "Criar meias em Portugal de forma sustentável, combinando design expressivo, qualidade técnica e produção justa.",
        story:
          "A The Captain Socks nasce em março de 2018 durante uma segunda caminhada no Caminho de Santiago, quando dias intensos de chuva e constantes trocas de meias despertaram a vontade de criar um produto simples, mas realmente bem feito.\n\nDa ideia inicial surgiram reflexões sobre conforto, identidade e expressão pessoal, levando a um longo processo de pesquisa, testes de materiais e visitas a fábricas em Portugal, com o objetivo de desenvolver meias que unissem qualidade, design e autenticidade.\n\nGuiada por uma atitude ousada e positiva, a marca construiu-se sobre a crença de que os pequenos detalhes do quotidiano podem ser uma forma de afirmação individual.\n\nHoje, todos os produtos são desenhados e produzidos em Portugal de forma sustentável, justa e equilibrada, marcando o início de um novo capítulo para quem caminha com personalidade.",
      },
      en: {
        name: "Captain Socks",
        tagline:
          "Socks designed and made in Portugal with attitude and sustainability",
        origin: "Comporta, Portugal",
        philosophy:
          "To create socks in Portugal in a sustainable way, combining bold design, technical quality and fair production.",
        story:
          "The Captain Socks was born in March 2018 during a second walk along the Camino de Santiago, when long days of rain and constant sock changes sparked the desire to create a simple product that was truly well made.\n\nFrom that first idea came reflections on comfort, identity and personal expression, leading to a long process of research, material testing and visits to factories in Portugal, with the aim of developing socks that bring together quality, design and authenticity.\n\nGuided by a bold, positive attitude, the brand is built on the belief that the small details of everyday life can be a form of individual expression.\n\nToday, every product is designed and produced in Portugal in a sustainable, fair and balanced way, marking the beginning of a new chapter for those who walk with personality.",
      },
      ko: {
        name: "Captain Socks",
        tagline: "태도와 지속 가능성을 담아 포르투갈에서 디자인·제조된 양말",
        origin: "콤포르타, 포르투갈",
        philosophy:
          "대담한 디자인과 뛰어난 기술력, 그리고 공정한 생산 방식을 결합해, 지속 가능한 방식으로 포르투갈에서 양말을 만드는 것.",
        story:
          "The Captain Socks는 2018년 3월, 두 번째 산티아고 순례길을 걷던 중에 탄생한 브랜드입니다. 며칠 동안 계속된 비와 끊임없는 양말 교체 속에서, 단순하지만 정말 잘 만들어진 제품을 만들고 싶다는 생각이 싹텄습니다.\n\n그 첫 아이디어는 편안함, 정체성, 개성 표현에 대한 고민으로 이어졌고, 이는 곧 다양한 소재 연구와 테스트, 포르투갈 내 여러 공장 방문으로 확장되었습니다. 목표는 품질·디자인·진정성이 모두 어우러진 양말을 개발하는 것이었습니다.\n\n대담하고 긍정적인 태도를 바탕으로, 작은 일상 속 디테일이 개인의 개성을 드러낼 수 있다는 믿음 위에 브랜드가 세워졌습니다.\n\n오늘날 Captain Socks의 모든 제품은 포르투갈에서 지속 가능하고 공정하며 균형 잡힌 방식으로 디자인되고 생산되며, 개성 있게 걷고 싶은 이들을 위한 새로운 장을 열고 있습니다.",
      },
      ja: {
        name: "Captain Socks",
        tagline:
          "個性とサステナビリティを大切にした、ポルトガル製デザインソックス",
        origin: "コンポルタ, ポルトガル",
        philosophy:
          "大胆なデザインと高い技術力、公正な生産体制を組み合わせ、サステナブルなかたちでポルトガル製のソックスをつくること。",
        story:
          "The Captain Socks は 2018 年 3 月、2 度目のサンティアゴ巡礼の道の途中で生まれました。何日にもわたる雨と絶え間ない靴下の履き替えの中で、「シンプルだけれど本当に良くできたプロダクト」をつくりたいという想いが芽生えたのです。\n\nそこから、心地よさやアイデンティティ、自分らしさの表現についての考察が始まりました。そして、素材のリサーチやテスト、ポルトガル各地の工場訪問を重ね、品質・デザイン・オーセンティシティを兼ね備えたソックスづくりを目指すようになりました。\n\n日々の小さなディテールこそが個性を表現する手段になり得る──そんな信念のもと、大胆で前向きな姿勢を軸にブランドは築かれてきました。\n\n現在、すべての製品はポルトガルでサステナブルかつ公正でバランスのとれた方法でデザイン・生産されており、自分らしい一歩を踏み出したい人たちの、新しいチャプターを後押ししています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Meias Temáticas",
          },
          en: {
            name: "Themed Socks",
          },
          ko: {
            name: "테마 양말",
          },
          ja: {
            name: "テーマソックス",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Meias Athletics",
          },
          en: {
            name: "Athletic Socks",
          },
          ko: {
            name: "애슬레틱 양말",
          },
          ja: {
            name: "アスレチックソックス",
          },
        },
      },
    ],
  },
  {
    slug: "zuzu",
    logo: "/images/brands/pendente_zuzu-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Zuzu",
        tagline: "Figuras artesanais em cerâmica feitas à mão em Portugal",
        origin: "Porto, Portugal",
        philosophy:
          "Criar figuras únicas em cerâmica através de um processo totalmente manual, onde cada peça reflete expressão artística e cuidado artesanal.",
        story:
          "Conhecida por Zuzu, a artesã dedica-se à criação manual de pequenas figuras em cerâmica, acompanhando todas as etapas do processo — da modelação à cozedura, da pintura ao acabamento.\n\nEntre ímanes e pendentes, cada peça é desenvolvida como um objeto único, com personalidade própria e atenção minuciosa ao detalhe, refletindo um trabalho autoral e profundamente artesanal.\n\nO projeto nasce do prazer de criar personagens em cerâmica que cruzam humor, delicadeza e expressão artística, dando forma a peças irrepetíveis feitas lentamente, com tempo, técnica e intenção.",
      },
      en: {
        name: "Zuzu",
        tagline: "Handmade ceramic figures crafted in Portugal",
        origin: "Porto, Portugal",
        philosophy:
          "To create unique ceramic figures through a fully manual process, where each piece reflects artistic expression and careful craftsmanship.",
        story:
          "Known as Zuzu, the artisan is dedicated to manually creating small ceramic figures, closely following every stage of the process — from modelling and firing to painting and finishing.\n\nFrom magnets to pendants, each piece is developed as a unique object with its own personality and meticulous attention to detail, reflecting deeply artisanal, author‑driven work.\n\nThe project was born from the joy of creating ceramic characters that blend humour, delicacy and artistic expression, giving shape to unrepeatable pieces made slowly, with time, technique and intention.",
      },
      ko: {
        name: "Zuzu",
        tagline: "포르투갈에서 손으로 만드는 수제 세라믹 피규어",
        origin: "포르투, 포르투갈",
        philosophy:
          "전 과정이 손으로 이루어지는 제작 방식을 통해, 각 작품에 예술적 표현과 장인다운 섬세함이 담긴 유일한 세라믹 피규어를 만드는 것.",
        story:
          "Zuzu라는 이름으로 알려진 이 장인은, 작은 세라믹 피규어를 온전히 손으로 빚어내는 작업에 전념하고 있습니다. 성형부터 초벌·재벌 소성, 채색, 마감에 이르기까지 모든 단계를 직접 하나하나 챙깁니다.\n\n자석, 펜던트 등 형태는 다양하지만, 모든 작품은 각자 고유한 개성과 디테일을 지닌 하나뿐인 오브제로 완성됩니다. 그 안에는 작가로서의 시선과 깊이 있는 수공예 작업이 고스란히 반영되어 있습니다.\n\n이 프로젝트는 세라믹으로 유머와 섬세함, 예술적 표현을 조합한 작은 캐릭터들을 만들어 내는 즐거움에서 출발했습니다. 시간과 기술, 그리고 의도를 담아 천천히 빚어낸, 다시는 똑같이 만들 수 없는 작품들입니다.",
      },
      ja: {
        name: "Zuzu",
        tagline: "ポルトガルで一つひとつ手づくりされる陶器の小さなフィギュア",
        origin: "ポルト, ポルトガル",
        philosophy:
          "すべての工程を手作業で行い、芸術的な表現と職人ならではの丁寧さを一つひとつの作品に宿した、唯一無二の陶器フィギュアをつくること。",
        story:
          "Zuzu の名で知られるこの職人は、小さな陶器のフィギュアづくりに情熱を注いでいます。成形から焼成、ペイント、仕上げに至るまで、すべてのプロセスを自らの手で丁寧に進めています。\n\nマグネットやペンダントなど、形や用途はさまざまですが、どの作品もそれぞれに固有の個性と細部へのこだわりを持つ、たった一つのオブジェとして生まれます。そこには作り手のまなざしと、深く手仕事に根ざした表現が映し出されています。\n\nこのプロジェクトは、陶器という素材を通してユーモアと繊細さ、そしてアートとしての表現を組み合わせた小さなキャラクターを生み出す喜びから始まりました。時間と技術、意図を込めてゆっくりと形づくられた、同じものは二度とできない作品たちです。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Iman",
          },
          en: {
            name: "Magnet",
          },
          ko: {
            name: "자석",
          },
          ja: {
            name: "マグネット",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Pendente",
          },
          en: {
            name: "Pendant",
          },
          ko: {
            name: "펜던트",
          },
          ja: {
            name: "ペンダント",
          },
        },
      },
    ],
  },
  {
    slug: "porto-tiles",
    logo: "/images/brands/azulejo_pt-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Porto & Tiles",
        tagline: "Azulejos antigos originais e arte feita com peças históricas",
        origin: "Porto, Portugal",
        philosophy:
          "Preservar azulejos portugueses originais e transformamo-los em peças artísticas únicas que levam a história de Portugal para dentro de casa.",
        story:
          "A Porto & Tiles é uma marca que oferece azulejos portugueses originais localizada no coração do Porto, dedicada a preservar peças vintage e antigas que carregam séculos de história.\n\nCada azulejo é cuidadosamente selecionado para oferecer a possibilidade de levar para casa um fragmento autêntico do património português, seja na sua forma original ou transformado em obras de arte criadas a partir das próprias peças históricas.\n\nO projeto convida visitantes e amantes de design a conhecerem de perto estes azulejos únicos, celebrando a tradição cerâmica portuguesa e dando nova vida a materiais que continuam a contar histórias através do tempo.",
      },
      en: {
        name: "Porto & Tiles",
        tagline: "Original vintage tiles and art made from historic pieces",
        origin: "Porto, Portugal",
        philosophy:
          "To preserve original Portuguese tiles and transform them into unique art pieces that bring the history of Portugal into people’s homes.",
        story:
          "Porto & Tiles is a brand based in the heart of Porto, dedicated to offering original Portuguese tiles and preserving vintage and antique pieces that carry centuries of history.\n\nEach tile is carefully selected to give people the chance to take home an authentic fragment of Portuguese heritage, whether in its original form or transformed into artworks created from those historic pieces.\n\nThe project invites visitors and design lovers to discover these unique tiles up close, celebrating Portuguese ceramic tradition and giving new life to materials that continue to tell stories over time.",
      },
      ko: {
        name: "Porto & Tiles",
        tagline: "역사를 담은 포르투갈 빈티지 타일과, 그 조각들로 만든 아트",
        origin: "포르투, 포르투갈",
        philosophy:
          "오리지널 포르투갈 타일을 보존하고, 그것을 유일무이한 예술 작품으로 재탄생시켜, 포르투갈의 역사를 집 안으로 들이는 것.",
        story:
          "Porto & Tiles는 포르투 중심부에 위치한 브랜드로, 수 세기에 걸친 역사를 품은 빈티지·앤티크 포르투갈 타일을 보존하고 소개하는 데 힘쓰고 있습니다.\n\n각 타일은 신중하게 선별되며, 사람들로 하여금 이 나라의 문화유산을 실제로 집으로 가져갈 수 있는 기회를 제공합니다. 있는 그대로의 오리지널 타일일 수도 있고, 역사적 조각들을 활용해 새롭게 제작한 아트 피스일 수도 있습니다.\n\n이 프로젝트는 방문객과 디자인을 사랑하는 이들을 초대해, 이러한 유일한 타일들을 가까이에서 만나보게 합니다. 동시에 포르투갈 도자기 전통을 기념하고, 시간 속에서 여전히 이야기를 들려주는 재료들에 새로운 생명을 불어넣고 있습니다.",
      },
      ja: {
        name: "Porto & Tiles",
        tagline: "歴史あるポルトガルタイルと、その断片から生まれるアート作品",
        origin: "ポルト, ポルトガル",
        philosophy:
          "オリジナルのポルトガル製タイルを大切に守り、それらを唯一無二のアートピースへと生まれ変わらせることで、ポルトガルの歴史を暮らしの中に届けること。",
        story:
          "Porto & Tiles は、ポルトの中心部に拠点を置くブランドで、何世紀にもわたる歴史を刻んだポルトガルのヴィンテージタイルやアンティークタイルを扱い、その保存と紹介に力を注いでいます。\n\n一枚一枚のタイルは丁寧に選び抜かれ、ポルトガルの文化遺産そのものを自宅に迎え入れるような体験を提供します。そのままのオリジナルとして飾ることもあれば、歴史的なタイル片を用いて新たに制作されたアート作品として楽しむこともできます。\n\nこのプロジェクトは、訪れる人やデザインを愛する人びとに向けて、こうしたユニークなタイルとの出会いを提案しています。同時に、ポルトガルの陶磁器の伝統を称え、時を超えて物語を語り続ける素材に新たな命を吹き込んでいます。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Azulejo Original",
          },
          en: {
            name: "Original Tile",
          },
          ko: {
            name: "오리지널 타일",
          },
          ja: {
            name: "オリジナルタイル",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Iman",
          },
          en: {
            name: "Magnet",
          },
          ko: {
            name: "자석",
          },
          ja: {
            name: "マグネット",
          },
        },
      },
    ],
  },
  {
    slug: "beeju-clay",
    logo: "/images/brands/brincos_bc-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Beeju Clay",
        tagline: "Joias artesanais sustentáveis e hipoalergénicas feitas à mão",
        origin: "Lisboa, Portugal",
        philosophy:
          "Criar joias artesanais de forma consciente, reutilizando materiais e garantindo peças únicas, personalizáveis e hipoalergénicas.",
        story:
          "A Beeju Clay nasce da vontade de criar peças artesanais feitas à mão com uma abordagem consciente e responsável, unindo sustentabilidade, design autoral e atenção ao detalhe.\n\nUtilizando reutilização de materiais e processos de produção com desperdício mínimo, a marca desenvolve joias únicas em cerâmica polímera e aço inoxidável sem níquel, pensadas para serem seguras, duráveis e confortáveis.\n\nCom foco na exclusividade e na possibilidade de personalização, a Beeju Clay afirma-se como um projeto onde cada peça reflete escolhas cuidadas, criatividade e respeito pelo ambiente.",
      },
      en: {
        name: "Beeju Clay",
        tagline: "Sustainable, hypoallergenic handmade jewellery",
        origin: "Lisbon, Portugal",
        philosophy:
          "To create handcrafted jewellery in a conscious way, reusing materials and ensuring unique, customisable and hypoallergenic pieces.",
        story:
          "Beeju Clay was born from the desire to create handmade pieces with a conscious, responsible approach, bringing together sustainability, original design and attention to detail.\n\nBy reusing materials and adopting production processes with minimal waste, the brand develops unique jewellery in polymer clay and nickel‑free stainless steel, designed to be safe, durable and comfortable.\n\nWith a focus on exclusivity and customisation possibilities, Beeju Clay presents itself as a project where each piece reflects thoughtful choices, creativity and respect for the environment.",
      },
      ko: {
        name: "Beeju Clay",
        tagline: "지속 가능하고 저자극적인 핸드메이드 주얼리",
        origin: "리스본, 포르투갈",
        philosophy:
          "의식적인 방식으로 재료를 재사용하고, 각각이 유일하며 맞춤 제작이 가능하고, 알레르기 반응을 최소화한 수제 주얼리를 만드는 것.",
        story:
          "Beeju Clay는 책임감 있고 의식적인 접근 방식으로 수제 작품을 만들고자 하는 바람에서 출발한 브랜드입니다. 지속 가능성을 중시하면서, 작가적인 디자인과 디테일에 대한 섬세한 시선을 하나로 모읍니다.\n\n재료를 재사용하고, 폐기물을 최소화하는 생산 프로세스를 도입함으로써, 폴리머 클레이와 니켈 프리 스테인리스스틸로 만든 유니크한 주얼리를 선보입니다. 이 제품들은 안전하고, 오래 사용할 수 있으며, 편안하게 착용할 수 있도록 설계되어 있습니다.\n\nBeeju Clay는 오직 하나뿐인 디자인과 개인 맞춤 가능성에 초점을 맞추고 있으며, 각 작품은 신중한 선택과 창의성, 그리고 환경에 대한 존중을 그대로 담고 있는 프로젝트입니다.",
      },
      ja: {
        name: "Beeju Clay",
        tagline: "サステナブルで低アレルギーなハンドメイドジュエリー",
        origin: "リスボン, ポルトガル",
        philosophy:
          "素材をできるだけ再利用しながら、一点ものかつカスタマイズ可能で、肌にやさしいハンドメイドジュエリーを、意識的かつ責任あるかたちでつくること。",
        story:
          "Beeju Clay は、サステナビリティを大切にしつつ、手仕事ならではの作品を生み出したいという想いから誕生したブランドです。環境への配慮とオリジナルデザイン、そしてディテールへのこだわりを組み合わせています。\n\n素材の再利用や、廃棄を最小限に抑えた生産プロセスを取り入れることで、ポリマークレイとニッケルフリーのステンレススチールを用いたユニークなジュエリーを制作しています。安全で長く使え、快適に身につけられるよう設計されているのが特徴です。\n\nBeeju Clay は、唯一性とパーソナライズの可能性に焦点を当てたプロジェクトであり、一つひとつのピースに、慎重な素材選びとクリエイティビティ、そして環境への敬意が映し出されています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Brincos",
          },
          en: {
            name: "Earrings",
          },
          ko: {
            name: "귀걸이",
          },
          ja: {
            name: "イヤリング",
          },
        },
      },
    ],
  },
  {
    slug: "isabel-igrejas",
    logo: "/images/brands/boneca_ii-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Isabel Igrejas",
        tagline: "Bonecas artesanais feitas à mão em vários tamanhos",
        origin: "Porto, Portugal",
        philosophy:
          "Criamos bonecas artesanais feitas individualmente à mão, com atenção ao detalhe e respeito pelo tempo da criação.",
        story:
          "Isabel Igrejas dedica-se à criação manual de bonecas artesanais em diferentes tamanhos, desenvolvendo cada peça individualmente com o cuidado e a atenção que o trabalho feito à mão exige.\n\nCada boneca é construída uma a uma, num processo lento e detalhado que valoriza o acabamento, a expressão e a singularidade de cada criação.\n\nO projeto nasce do prazer em criar personagens delicadas e cheias de personalidade, transformando cada boneca num objeto único feito com tempo, técnica e dedicação.",
      },
      en: {
        name: "Isabel Igrejas",
        tagline: "Handmade artisan dolls in various sizes",
        origin: "Porto, Portugal",
        philosophy:
          "We create handmade dolls individually, with great attention to detail and respect for the time that true craftsmanship requires.",
        story:
          "Isabel Igrejas is dedicated to manually creating handcrafted dolls in different sizes, developing each piece individually with the care and attention that handwork demands.\n\nEach doll is built one by one, in a slow, detailed process that values finishing, expression and the uniqueness of every creation.\n\nThe project was born from the joy of creating delicate, characterful figures, turning each doll into a unique object made with time, technique and dedication.",
      },
      ko: {
        name: "Isabel Igrejas",
        tagline: "다양한 크기로 제작되는 핸드메이드 아티잔 인형",
        origin: "포르투, 포르투갈",
        philosophy:
          "진정한 수작업이 요구하는 시간과 과정을 존중하며, 각 인형을 하나씩 정성스럽게 만들고 디테일에 깊이 신경 쓰는 것.",
        story:
          "Isabel Igrejas는 여러 크기의 핸드메이드 인형을 오직 손으로 제작하는 데 전념하고 있습니다. 각 인형은 수작업 특유의 섬세함과 집중을 담아, 개별 작품으로 완성됩니다.\n\n모든 인형은 하나하나 천천히, 꼼꼼한 공정을 거쳐 만들어지며, 마감과 표정, 그리고 각 작품이 가진 유일한 개성을 무엇보다 중요하게 여깁니다.\n\n이 프로젝트는 섬세하면서도 개성이 뚜렷한 작은 캐릭터들을 만들어 내는 기쁨에서 시작되었습니다. 시간과 기술, 헌신을 담아 완성된 각 인형은, 세상에 하나뿐인 특별한 오브제로 탄생합니다.",
      },
      ja: {
        name: "Isabel Igrejas",
        tagline: "さまざまなサイズでつくられる、手づくりのアーティザンドール",
        origin: "ポルト, ポルトガル",
        philosophy:
          "手仕事に必要な時間と工程を大切にしながら、一体ずつ丁寧に制作し、細部にまで気を配った人形を生み出すこと。",
        story:
          "Isabel Igrejas は、さまざまなサイズのハンドメイドドールをすべて手作業で制作している作家です。どの人形も、手仕事ならではの繊細さと集中力をもって、一つひとつ個別の作品として仕上げられます。\n\n各ドールは、ゆっくりと丁寧なプロセスを経て生まれます。仕上がりの美しさや表情の豊かさ、一体ごとに異なる個性が何より大切にされています。\n\nこのプロジェクトは、繊細でありながら個性豊かな小さなキャラクターたちを生み出す楽しさから始まりました。時間と技術、そして献身を込めてつくられた人形は、それぞれが世界に一つだけの特別な存在となっています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Boneca Grande",
          },
          en: {
            name: "Large Doll",
          },
          ko: {
            name: "큰 인형",
          },
          ja: {
            name: "大きな人形",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Boneca Pequena",
          },
          en: {
            name: "Small Doll",
          },
          ko: {
            name: "작은 인형",
          },
          ja: {
            name: "小さな人形",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Porta-Chaves",
          },
          en: {
            name: "Keychain",
          },
          ko: {
            name: "키링",
          },
          ja: {
            name: "キーホルダー",
          },
        },
      },
    ],
  },
  {
    slug: "ponto-cruz",
    logo: "/images/brands/tote_loja-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Ponto Cruz Concept Store",
        tagline:
          "Produtos portugueses com design original criados em parceria com produtores locais",
        origin: "Porto, Portugal",
        philosophy:
          "Desenvolver produtos portugueses com design original em estreita colaboração com fábricas e pequenos produtores locais.",
        story:
          "A Ponto Cruz Concept Store nasce da vontade de se distinguir no retalho português, promovendo de forma próxima e autêntica o artigo nacional e o trabalho de fábricas e pequenos produtores.\n\nTodos os produtos são desenvolvidos em colaboração direta com os fornecedores, desde a conceção ao design final, garantindo peças originais que refletem qualidade, identidade e proximidade com quem produz.\n\nO projeto afirma-se como uma plataforma de valorização do fabrico português, criando ligações entre criadores, produtores e clientes que procuram objetos com história, autoria e carácter local.",
      },
      en: {
        name: "Ponto Cruz Concept Store",
        tagline:
          "Portuguese products with original design, created in partnership with local producers",
        origin: "Porto, Portugal",
        philosophy:
          "To develop Portuguese products with original design in close collaboration with factories and small local producers.",
        story:
          "Ponto Cruz Concept Store was born from the desire to stand out in Portuguese retail, promoting national products and the work of factories and small producers in a close, authentic way.\n\nAll products are developed in direct collaboration with suppliers, from concept to final design, ensuring original pieces that reflect quality, identity and a close relationship with those who make them.\n\nThe project positions itself as a platform that values Portuguese manufacturing, creating connections between creators, producers and customers who are looking for objects with history, authorship and a strong local character.",
      },
      ko: {
        name: "Ponto Cruz Concept Store",
        tagline: "지역 생산자와 협업해 만든, 오리지널 디자인의 포르투갈 제품",
        origin: "포르투, 포르투갈",
        philosophy:
          "포르투갈의 공장과 소규모 생산자들과 긴밀히 협력하여, 오리지널 디자인을 담은 포르투갈 제품을 개발하는 것.",
        story:
          "Ponto Cruz Concept Store는 포르투갈 리테일 시장에서 차별화된 존재가 되고자 하는 바람에서 시작되었습니다. 국산 제품과, 공장·소규모 생산자들의 노력을 가깝고 진정성 있는 방식으로 알리는 것이 목표입니다.\n\n모든 제품은 공급업체와의 직접적인 협업을 통해, 기획 단계에서부터 최종 디자인에 이르기까지 함께 개발됩니다. 이를 통해, 품질과 정체성, 그리고 생산자와의 긴밀한 관계를 반영한 오리지널 제품이 탄생합니다.\n\n이 프로젝트는 포르투갈 제조의 가치를 높이는 플랫폼으로 자리매김하고 있습니다. 역사와 작가성, 지역적 개성이 담긴 오브제를 찾는 고객과, 이를 만들어 내는 창작자·생산자들을 이어주는 다리가 되는 것이 목표입니다.",
      },
      ja: {
        name: "Ponto Cruz Concept Store",
        tagline:
          "地元の生産者とともに生み出す、オリジナルデザインのポルトガル製プロダクト",
        origin: "ポルト, ポルトガル",
        philosophy:
          "ポルトガル各地の工場や小さな生産者と密に協働しながら、オリジナルデザインのポルトガル製プロダクトを開発すること。",
        story:
          "Ponto Cruz Concept Store は、ポルトガルの小売の世界で独自の存在になりたいという思いからスタートしました。国産プロダクトと、工場・小規模生産者の仕事を、距離の近い誠実なかたちで紹介することを大切にしています。\n\nすべてのプロダクトは、コンセプトの段階から最終的なデザインに至るまで、サプライヤーとの直接的なコラボレーションによって生み出されます。その結果、品質とアイデンティティ、そして作り手とのつながりが感じられるオリジナルなアイテムが完成します。\n\nこのプロジェクトは、ポルトガル製造の価値を高めるプラットフォームとして、歴史や作家性、ローカルなキャラクターを備えたものを求める人々と、それを生み出すクリエイターや生産者とを結びつける役割を担っています。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "T-Shirt Original",
          },
          en: {
            name: "Original T‑shirt",
          },
          ko: {
            name: "오리지널 티셔츠",
          },
          ja: {
            name: "オリジナルTシャツ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Sweatshirt Original",
          },
          en: {
            name: "Original Sweatshirt",
          },
          ko: {
            name: "오리지널 스웨트셔츠",
          },
          ja: {
            name: "オリジナルスウェット",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Hoodie Original",
          },
          en: {
            name: "Original Hoodie",
          },
          ko: {
            name: "오리지널 후디",
          },
          ja: {
            name: "オリジナルパーカー",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Tote Bag Original",
          },
          en: {
            name: "Original Tote Bag",
          },
          ko: {
            name: "오리지널 토트백",
          },
          ja: {
            name: "オリジナルトートバッグ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Boné",
          },
          en: {
            name: "Cap",
          },
          ko: {
            name: "캡 모자",
          },
          ja: {
            name: "キャップ",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Boina",
          },
          en: {
            name: "Beret",
          },
          ko: {
            name: "베레모",
          },
          ja: {
            name: "ベレー帽",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Cachecol",
          },
          en: {
            name: "Scarf",
          },
          ko: {
            name: "머플러",
          },
          ja: {
            name: "マフラー",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Fronha de Almofada",
          },
          en: {
            name: "Cushion Cover",
          },
          ko: {
            name: "쿠션 커버",
          },
          ja: {
            name: "クッションカバー",
          },
        },
      },
    ],
  },
  {
    slug: "studio-nativo",
    logo: "/images/brands/postal_sn-1200.webp",
    "card-image":
      "/images/products/azulejo_quadrado/product_azulejo_aq-1200.webp",
    featured: true,
    translations: {
      pt: {
        name: "Studio Nativo",
        tagline: "Ilustrações criativas inspiradas na cidade do Porto",
        origin: "Porto, Portugal",
        philosophy:
          "Criar ilustrações autorais que celebram a identidade visual e cultural da cidade do Porto através da criatividade e do detalhe.",
        story:
          "O Studio Nativo nasce com o propósito de retratar a cidade do Porto através da ilustração, explorando os seus cenários, símbolos e atmosferas com uma abordagem criativa e autoral.\n\nCada obra procura captar a essência da cidade — das ruas às fachadas, das pontes ao quotidiano — reinterpretando-a com traço próprio e uma linguagem visual contemporânea.\n\nO projeto afirma-se como uma homenagem gráfica ao Porto, transformando lugares familiares em peças ilustradas que convidam a olhar a cidade com novos olhos.",
      },
      en: {
        name: "Studio Nativo",
        tagline: "Creative illustrations inspired by the city of Porto",
        origin: "Porto, Portugal",
        philosophy:
          "To create original illustrations that celebrate Porto’s visual and cultural identity through creativity and attention to detail.",
        story:
          "Studio Nativo was created with the purpose of portraying the city of Porto through illustration, exploring its scenes, symbols and atmospheres with a creative, author‑driven approach.\n\nEach piece seeks to capture the essence of the city — from its streets and façades to its bridges and everyday life — reinterpreting it with a distinctive line and a contemporary visual language.\n\nThe project positions itself as a graphic tribute to Porto, turning familiar places into illustrated pieces that invite us to look at the city with fresh eyes.",
      },
      ko: {
        name: "Studio Nativo",
        tagline: "포르투 도시에서 영감을 받은 크리에이티브 일러스트레이션",
        origin: "포르투, 포르투갈",
        philosophy:
          "창의성과 디테일을 바탕으로, 포르투의 시각적·문화적 정체성을 기념하는 오리지널 일러스트레이션을 만드는 것.",
        story:
          "Studio Nativo는 일러스트레이션을 통해 포르투라는 도시를 그려 내고자 하는 목적에서 시작된 스튜디오입니다. 도시의 풍경과 상징, 분위기를 작가적인 시선으로 탐구하며, 그림이라는 매체로 표현합니다.\n\n각 작품은 거리와 건물 외벽, 다리, 일상적인 장면들까지 포르투의 여러 얼굴을 담아내며, 고유한 선과 현대적인 시각 언어로 재해석합니다.\n\n이 프로젝트는 포르투에 바치는 그래픽 오마주로서, 익숙한 장소들을 새롭게 그려낸 일러스트레이션으로 보여주며, 도시를 다시 한 번 다른 눈으로 바라보도록 초대합니다.",
      },
      ja: {
        name: "Studio Nativo",
        tagline:
          "ポルトの街にインスピレーションを得たクリエイティブなイラストレーション",
        origin: "ポルト, ポルトガル",
        philosophy:
          "クリエイティビティとディテールへのまなざしを通して、ポルトの視覚的・文化的アイデンティティを讃えるオリジナルイラストを制作すること。",
        story:
          "Studio Nativo は、イラストレーションという手法を通じてポルトの街を描き出すことを目的に生まれたスタジオです。街の風景やシンボル、その場の空気感を、作家性のあるアプローチで掘り下げ、ビジュアルとして表現しています。\n\n各作品は、通りやファサード、橋、日々の暮らしといった、街を形づくるさまざまな側面を捉えながら、独自のラインとコンテンポラリーなビジュアル言語によって再解釈しています。\n\nこのプロジェクトは、ポルトへのグラフィックなオマージュとして、見慣れた場所をイラストレーション作品へと変換し、街を新しい目線で眺めてみるきっかけを与えてくれます。",
      },
    },
    products: [
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Postal",
          },
          en: {
            name: "Postcard",
          },
          ko: {
            name: "엽서",
          },
          ja: {
            name: "ポストカード",
          },
        },
      },
      {
        image: "/images/products/example-artisan/product-1.jpg",
        translations: {
          pt: {
            name: "Ilustração A5",
          },
          en: {
            name: "A5 Illustration",
          },
          ko: {
            name: "A5 일러스트",
          },
          ja: {
            name: "A5イラスト",
          },
        },
      },
    ],
  },
];
