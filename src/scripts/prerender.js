import { createServer } from "http";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { extname, join } from "path";
import puppeteer from "puppeteer";
import brandsData from "../data/brands.js";
import blogData from "../data/blog.js";

const distDir = join(process.cwd(), "dist");
const indexHtml = readFileSync(join(distDir, "index.html"), "utf8");
const langs = ["pt", "en", "ko", "ja"];
const staticPaths = [
  "",
  "/about",
  "/brands",
  "/visit",
  "/porto",
  "/contact",
  "/blog",
  "/sitemap",
];

const routes = langs.flatMap((lang) => [
  ...staticPaths.map((path) => `/${lang}${path}`),
  ...brandsData.map((brand) => `/${lang}/brands/${brand.slug}`),
  ...blogData.map((post) => `/${lang}/blog/${post.slug}`),
]);

const contentTypes = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

const server = createServer((req, res) => {
  const cleanUrl = decodeURIComponent(req.url.split("?")[0]);
  const filePath = join(distDir, cleanUrl === "/" ? "index.html" : cleanUrl);

  if (existsSync(filePath) && !filePath.endsWith("\\")) {
    const ext = extname(filePath);
    res.writeHead(200, { "Content-Type": contentTypes[ext] || "text/html" });
    res.end(readFileSync(filePath));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(indexHtml);
});

const listen = () =>
  new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server.address().port));
  });

const writeRouteHtml = (route, html) => {
  const targetDir = join(distDir, route.replace(/^\//, ""));
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(join(targetDir, "index.html"), html, "utf8");
};

const port = await listen();
const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();

  for (const route of routes) {
    await page.goto(`http://127.0.0.1:${port}${route}`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    await page.waitForSelector("main");
    const html = await page.content();
    writeRouteHtml(route, html);
    console.log(`Prerendered ${route}`);
  }
} finally {
  await browser.close();
  server.close();
}
