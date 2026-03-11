---
name: html-slidedeck-to-pdf
description: Converts an HTML slide deck into a properly formatted PDF where each slide becomes one page. Use when the user asks to export, print, or convert an HTML presentation or slide deck to PDF, or when they say "turn this into a PDF" pointing at an HTML file.
---

# HTML Slide Deck → PDF Export

Converts an HTML slide deck into a properly formatted PDF. Each `.slide` element becomes one page at 1280×720 (16:9). Slides that overflow are automatically scaled down to fit.

## Prerequisites

Check that `node` is available:
```bash
node --version
```

If not installed, ask the user to install Node.js first.

## Process

### Step 1 — Install puppeteer

Install in the directory where the script will live (can be separate from the HTML file — just update the paths in the script):
```bash
cd <directory-for-script>
npm install puppeteer
```

This creates `node_modules/`, `package.json`, and `package-lock.json` in that directory. Let the user know these were created and offer to add them to `.gitignore` if the folder is a git repo.

### Step 2 — Write the export script

Create `export-pdf.js` in the same directory as the HTML file:

```javascript
const puppeteer = require('puppeteer');
const path = require('path');

const HTML_FILE = path.resolve(__dirname, 'YOUR_FILE.html');  // ← update
const OUTPUT_PDF = path.resolve(__dirname, 'YOUR_FILE.pdf');  // ← update

const SLIDE_WIDTH  = 1280;
const SLIDE_HEIGHT = 720;
const SCALE = 2; // 2x for sharp text

(async () => {
  console.log('Launching browser…');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT, deviceScaleFactor: SCALE });

  console.log(`Loading ${HTML_FILE}…`);
  await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle0' });

  // Show all animated elements, hide any fixed nav/progress elements
  await page.evaluate(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    });
    const nav = document.getElementById('slide-nav');
    if (nav) nav.style.display = 'none';
  });

  const slideIds = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.slide')).map(el => el.id)
  );
  console.log(`Found ${slideIds.length} slides.`);

  const slideBuffers = [];

  for (let i = 0; i < slideIds.length; i++) {
    const id = slideIds[i];

    // Auto-scale slides whose content overflows 720px
    const zoomFactor = await page.evaluate((slideId, maxH) => {
      const el = document.getElementById(slideId);
      const h = el.scrollHeight;
      if (h > maxH) {
        const scale = maxH / h;
        el.style.transformOrigin = 'top left';
        el.style.transform = `scale(${scale})`;
        el.style.width = `${100 / scale}%`;
        return scale;
      }
      return 1;
    }, id, SLIDE_HEIGHT);

    const label = zoomFactor < 1 ? ` [zoomed to ${Math.round(zoomFactor * 100)}%]` : '';
    console.log(`  Capturing slide ${i + 1}/${slideIds.length} (#${id})${label}…`);

    const slideTop = await page.evaluate((slideId) => {
      const el = document.getElementById(slideId);
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
      return Math.round(el.getBoundingClientRect().top + window.scrollY);
    }, id);

    await new Promise(r => setTimeout(r, 120));

    const screenshot = await page.screenshot({
      type: 'png',
      clip: { x: 0, y: slideTop, width: SLIDE_WIDTH, height: SLIDE_HEIGHT },
    });

    slideBuffers.push(screenshot);

    if (zoomFactor < 1) {
      await page.evaluate((slideId) => {
        const el = document.getElementById(slideId);
        el.style.transform = '';
        el.style.transformOrigin = '';
        el.style.width = '';
      }, id);
    }
  }

  console.log('Assembling PDF…');
  const imagesDataUrls = slideBuffers.map(buf =>
    'data:image/png;base64,' + buf.toString('base64')
  );

  const pdfPage = await browser.newPage();
  const html = `<!DOCTYPE html>
<html><head><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page { size: ${SLIDE_WIDTH}px ${SLIDE_HEIGHT}px; margin: 0; }
  body { background: #000; }
  .page { width: ${SLIDE_WIDTH}px; height: ${SLIDE_HEIGHT}px; page-break-after: always; break-after: page; overflow: hidden; }
  .page:last-child { page-break-after: avoid; break-after: avoid; }
  img { width: 100%; height: 100%; display: block; object-fit: fill; }
</style></head><body>
${imagesDataUrls.map(src => `<div class="page"><img src="${src}"></div>`).join('\n')}
</body></html>`;

  await pdfPage.setViewport({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT });
  await pdfPage.setContent(html, { waitUntil: 'networkidle0' });
  await pdfPage.pdf({
    path: OUTPUT_PDF,
    width: `${SLIDE_WIDTH}px`,
    height: `${SLIDE_HEIGHT}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log(`\nPDF saved to: ${OUTPUT_PDF}`);
})();
```

Update the two filename constants at the top to match the actual HTML file.

### Step 3 — Run the script

```bash
cd <directory-containing-script>
node export-pdf.js
```

The PDF is saved to wherever `OUTPUT_PDF` points in the script.

### Step 4 — Re-run after any HTML changes

The script is idempotent — re-running overwrites the PDF. No cleanup needed between runs.

## Notes

- **Slide selector**: The script targets elements with class `.slide`. If the deck uses a different class, update `document.querySelectorAll('.slide')` accordingly.
- **Nav/progress elements**: The script hides `#slide-nav`. If the deck has other fixed UI elements, add selectors to the `page.evaluate` block that hides them.
- **Scroll-reveal animations**: The script forces `.reveal` elements to their visible state. If the deck uses a different animation class, add it to that same block.
- **Aspect ratio**: Default is 1280×720 (16:9). For other ratios, update `SLIDE_WIDTH` and `SLIDE_HEIGHT`.
- **node_modules**: Offer to add to `.gitignore` — `node_modules/`, `package.json`, `package-lock.json` are not worth committing for a one-off export script.
