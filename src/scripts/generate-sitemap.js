import { statSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import brandsData from "../data/brands.js";
import blogData from "../data/blog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = "https://pontocruzconceptstore.pt";
const LANGS = ["pt", "en", "ko", "ja"];
const toDate = (date) => date.toISOString().slice(0, 10);
const sourceDate = (relativePath) =>
  toDate(statSync(join(__dirname, "..", relativePath)).mtime);
const latestDate = (...dates) => dates.sort().at(-1);

const brandsLastmod = sourceDate("data/brands.js");
const blogLastmod = latestDate(
  sourceDate("data/blog.js"),
  ...blogData.map((post) => post.date),
);

const STATIC_PATHS = [
  { path: "", lastmod: sourceDate("pages/Home.jsx") },
  { path: "/about", lastmod: sourceDate("pages/About.jsx") },
  { path: "/brands", lastmod: brandsLastmod },
  { path: "/visit", lastmod: sourceDate("pages/Visit.jsx") },
  { path: "/porto", lastmod: sourceDate("pages/Porto.jsx") },
  { path: "/contact", lastmod: sourceDate("pages/Contact.jsx") },
  { path: "/blog", lastmod: blogLastmod },
  { path: "/sitemap", lastmod: latestDate(brandsLastmod, blogLastmod, sourceDate("pages/Sitemap.jsx")) },
];

const routeGroups = [
  ...STATIC_PATHS,
  ...brandsData.map((brand) => ({
    path: `/brands/${brand.slug}`,
    lastmod: brandsLastmod,
  })),
  ...blogData.map((post) => ({
    path: `/blog/${post.slug}`,
    lastmod: post.date || blogLastmod,
  })),
];

const urls = [];
for (const group of routeGroups) {
  for (const lang of LANGS) {
    const path = group.path || "";
    urls.push({
      lang,
      path,
      loc: `${BASE_URL}/${lang}${path}`,
      lastmod: group.lastmod,
    });
  }
}

const alternates = (path) =>
  [
    ...LANGS.map(
      (lang) =>
        `    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}${path}"/>`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/pt${path}"/>`,
  ].join("\n");

const sitemapUrls = urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${u.path ? "0.8" : "1.0"}</priority>\n${alternates(u.path)}\n  </url>`
  )
  .join("\n");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls}
</urlset>`;

const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${latestDate(...routeGroups.map((group) => group.lastmod))}</lastmod>
  </sitemap>
</sitemapindex>`;

const publicDir = join(__dirname, '..', '..', 'public');
writeFileSync(join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
writeFileSync(join(publicDir, "sitemap_index.xml"), sitemapIndexXml, "utf8");
console.log("Generated public/sitemap.xml and public/sitemap_index.xml");
