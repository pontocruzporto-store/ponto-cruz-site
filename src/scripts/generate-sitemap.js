import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import brandsData from '../data/brands.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'https://pontocruzconceptstore.pt';
const LANGS = ['pt', 'en', 'ko', 'ja'];
const STATIC_PATHS = ['', '/about', '/brands', '/visit', '/porto', '/contact'];

const today = new Date().toISOString().slice(0, 10);

const urls = [];
for (const lang of LANGS) {
  for (const path of STATIC_PATHS) {
    urls.push({ loc: `${BASE_URL}/${lang}${path || ''}`, lastmod: today });
  }
  for (const brand of brandsData) {
    urls.push({ loc: `${BASE_URL}/${lang}/brands/${brand.slug}`, lastmod: today });
  }
}

const sitemapUrls = urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  )
  .join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;

const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

const publicDir = join(__dirname, '..', '..', 'public');
writeFileSync(join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
writeFileSync(join(publicDir, 'sitemap_index.xml'), sitemapIndexXml, 'utf8');
console.log('Generated public/sitemap.xml and public/sitemap_index.xml');