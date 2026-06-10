import { chromium } from "playwright";
import { mkdirSync } from "fs";

const base = process.env.BASE || "http://127.0.0.1:8088/samples";
const pages = ["index", "clinic", "academy", "saas"];
const viewports = [
  { tag: "desktop", width: 1280, height: 900 },
  { tag: "mobile", width: 390, height: 844 },
];
mkdirSync("shots", { recursive: true });

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"] });
for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(`${base}/${p}.html`, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);
    await page.screenshot({ path: `shots/${p}-${vp.tag}.png`, fullPage: true });
    console.log(`shot: ${p}-${vp.tag}.png`);
  }
  await ctx.close();
}
await browser.close();
console.log("done");
