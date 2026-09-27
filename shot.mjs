import { chromium } from 'playwright-core';
import fs from 'fs';

fs.mkdirSync('shots', { recursive: true });
const browser = await chromium.launch({ ignoreDefaultArgs: ['--hide-scrollbars'] });

// desktop clone check
const page = await browser.newPage({ viewport: { width: 1363, height: 633 } });
await page.goto('http://localhost:3100', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: 'shots/top.png' });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(300);
await page.screenshot({ path: 'shots/bottom.png' });
console.log('docHeight', await page.evaluate(() => document.documentElement.scrollHeight));
await page.evaluate(() => window.scrollTo(0, 0));
await page.click('.card-btn');
await page.waitForTimeout(400);
await page.setViewportSize({ width: 1358, height: 585 });
await page.waitForTimeout(300);
await page.screenshot({ path: 'shots/modal.png' });
await page.close();

// tablet
const tab = await browser.newPage({ viewport: { width: 820, height: 1000 } });
await tab.goto('http://localhost:3100', { waitUntil: 'networkidle' });
await tab.waitForTimeout(500);
await tab.screenshot({ path: 'shots/tablet.png', fullPage: true });
await tab.close();

// phone
const ph = await browser.newPage({ viewport: { width: 390, height: 844 } });
await ph.goto('http://localhost:3100', { waitUntil: 'networkidle' });
await ph.waitForTimeout(500);
await ph.screenshot({ path: 'shots/mobile.png', fullPage: true });
// drawer open
await ph.click('.burger');
await ph.waitForTimeout(400);
await ph.screenshot({ path: 'shots/mobile_drawer.png' });
await ph.mouse.click(360, 500);
await ph.waitForTimeout(400);
// modal on phone
await ph.click('.card-btn');
await ph.waitForTimeout(400);
await ph.screenshot({ path: 'shots/mobile_modal.png' });
await ph.close();

await browser.close();
console.log('shots done');
