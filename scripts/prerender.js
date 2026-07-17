const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const http = require("http");
const handler = require("serve-handler");

const ROUTES = ["/", "/contact"];
const BUILD_DIR = path.resolve(__dirname, "../build");
const PORT = 3456;

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((request, response) => {
      return handler(request, response, {
        public: BUILD_DIR,
        rewrites: [{ source: "**", destination: "/index.html" }],
      });
    });
    server.listen(PORT, () => {
      console.log(`[prerender] Local server running at http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log("[prerender] Launching headless browser...");

  const server = await startServer();

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`[prerender] Rendering ${url}`);

    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Wait for any content to appear in #root (handle Suspense fallback)
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          if (!root) return false;
          // Wait until there's meaningful content beyond just the loading spinner
          const text = root.innerText || "";
          return text.length > 50;
        },
        { timeout: 15000 }
      );

      // Extra wait for Helmet to inject meta tags
      await new Promise((r) => setTimeout(r, 2000));

      const html = await page.content();

      // Write prerendered HTML
      const filename = route === "/" ? "index.html" : `${route.slice(1)}.html`;
      const filePath = path.join(BUILD_DIR, filename);
      fs.writeFileSync(filePath, html, "utf-8");
      console.log(`[prerender] Wrote ${filePath}`);
    } catch (err) {
      console.error(`[prerender] Error rendering ${route}:`, err.message);
      // Still try to capture whatever rendered
      const html = await page.content();
      const filename = route === "/" ? "index.html" : `${route.slice(1)}.html`;
      const filePath = path.join(BUILD_DIR, filename);
      fs.writeFileSync(filePath, html, "utf-8");
      console.log(`[prerender] Wrote ${filePath} (with errors)`);
    }
  }

  await browser.close();
  server.close();
  console.log("[prerender] Done. All routes prerendered.");
}

prerender().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
