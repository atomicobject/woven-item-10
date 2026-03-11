const puppeteer = require('puppeteer');
const path = require('path');

const HTML_FILE = path.resolve(__dirname, '../../solution-definition/delivery/2026-03-11-discovery-presentation-slide-deck.html');
const OUTPUT_PDF = path.resolve(__dirname, '../../solution-definition/delivery/2026-03-11-discovery-presentation-slide-deck.pdf');

const SLIDE_WIDTH  = 1280;
const SLIDE_HEIGHT = 720;
const SCALE = 2; // 2x for sharp text — clip coords stay in CSS pixels

(async () => {
  console.log('Launching browser…');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    deviceScaleFactor: SCALE,
  });

  console.log(`Loading ${HTML_FILE}…`);
  await page.goto(`file://${HTML_FILE}`, { waitUntil: 'networkidle0' });

  // Show all animated elements, hide nav pill
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

    // Check if the slide overflows 720px and calculate a zoom-out factor if needed
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

    if (zoomFactor < 1) {
      console.log(`  Capturing slide ${i + 1}/${slideIds.length} (#${id}) [zoomed to ${Math.round(zoomFactor * 100)}%]…`);
    } else {
      console.log(`  Capturing slide ${i + 1}/${slideIds.length} (#${id})…`);
    }

    // Scroll the slide to the very top of the viewport
    const slideTop = await page.evaluate((slideId) => {
      const el = document.getElementById(slideId);
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
      return Math.round(el.getBoundingClientRect().top + window.scrollY);
    }, id);

    // Ensure scroll and any transform reflow has settled
    await new Promise(r => setTimeout(r, 120));

    // Clip to exactly one slide's worth of viewport
    const screenshot = await page.screenshot({
      type: 'png',
      clip: {
        x: 0,
        y: slideTop,
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
      },
    });

    slideBuffers.push(screenshot);

    // Reset any zoom applied
    if (zoomFactor < 1) {
      await page.evaluate((slideId) => {
        const el = document.getElementById(slideId);
        el.style.transform = '';
        el.style.transformOrigin = '';
        el.style.width = '';
      }, id);
    }
  }

  // Assemble screenshots into a PDF
  console.log('Assembling PDF…');
  const imagesDataUrls = slideBuffers.map(buf =>
    'data:image/png;base64,' + buf.toString('base64')
  );

  const pdfPage = await browser.newPage();

  const html = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page {
    size: ${SLIDE_WIDTH}px ${SLIDE_HEIGHT}px;
    margin: 0;
  }
  body { background: #000; }
  .page {
    width: ${SLIDE_WIDTH}px;
    height: ${SLIDE_HEIGHT}px;
    page-break-after: always;
    break-after: page;
    overflow: hidden;
  }
  .page:last-child { page-break-after: avoid; break-after: avoid; }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: fill;
  }
</style>
</head>
<body>
${imagesDataUrls.map(src => `<div class="page"><img src="${src}"></div>`).join('\n')}
</body>
</html>`;

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
