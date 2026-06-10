import { chromium } from "playwright";
import { mkdirSync } from "fs";

const root = process.env.ROOT || "http://127.0.0.1:8096";
mkdirSync("gig/assets", { recursive: true });
const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"] });

// 1) 크몽 대표 썸네일 (1200x900)
{
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(`${root}/gig/cover.html`, { waitUntil: "networkidle" });
  await p.waitForTimeout(500);
  await p.screenshot({ path: "gig/assets/thumbnail.png" });
  console.log("thumbnail.png");
  await ctx.close();
}

// 2) 샘플 히어로 캡처 (1280 wide, 위에서 880px)
const samples = ["clinic", "academy", "saas", "dental", "coach"];
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const p = await ctx.newPage();
  for (const s of samples) {
    await p.goto(`${root}/samples/${s}.html`, { waitUntil: "networkidle" });
    await p.waitForTimeout(400);
    await p.screenshot({ path: `gig/assets/portfolio-${s}.png`, clip: { x: 0, y: 0, width: 1280, height: 880 } });
    console.log(`portfolio-${s}.png`);
  }
  await ctx.close();
}
await browser.close();
console.log("done");
