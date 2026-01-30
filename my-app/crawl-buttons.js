const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const OUTPUT_FILE = 'button-analysis-report.json';
const HTML_REPORT = 'button-analysis-report.html';

// Storage for all discovered pages and buttons
const visitedPages = new Set();
const pagesToVisit = new Set([BASE_URL]);
const buttonData = [];
const pageErrors = [];

// Helper function to check if URL is valid
function isValidUrl(url) {
  try {
    const urlObj = new URL(url, BASE_URL);
    return urlObj.origin === new URL(BASE_URL).origin;
  } catch {
    return false;
  }
}

// Helper function to normalize URL
function normalizeUrl(url) {
  try {
    const urlObj = new URL(url, BASE_URL);
    return urlObj.href;
  } catch {
    return null;
  }
}

// Check if link is broken
async function checkLink(page, url) {
  if (!url || url === '#' || url.startsWith('javascript:') || url === 'javascript:void(0)') {
    return 'EMPTY';
  }

  try {
    const normalizedUrl = normalizeUrl(url);
    if (!normalizedUrl) return 'INVALID';

    // Try to check if the link would work
    const response = await page.goto(normalizedUrl, {
      waitUntil: 'domcontentloaded',
      timeout: 10000
    }).catch(() => null);

    if (!response) return 'BROKEN';
    if (response.status() >= 400) return 'BROKEN';
    return 'WORKING';
  } catch (error) {
    return 'BROKEN';
  }
}

// Extract all buttons and clickable elements from a page
async function analyzeButtons(page, pageUrl) {
  console.log(`\nAnalyzing buttons on: ${pageUrl}`);

  const buttons = await page.evaluate(() => {
    const results = [];

    // Get all potential button elements
    const selectors = [
      'button',
      'a',
      '[role="button"]',
      '[onclick]',
      '.btn',
      '.button',
      '[class*="button"]',
      '[class*="btn"]',
      'div[onclick]',
      'span[onclick]',
    ];

    const elements = new Set();
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => elements.add(el));
    });

    elements.forEach(element => {
      const tagName = element.tagName.toLowerCase();
      const text = element.innerText?.trim() ||
        element.textContent?.trim() ||
        element.getAttribute('aria-label') ||
        element.getAttribute('title') ||
        element.value ||
        '[No visible text]';

      // Get link information
      let href = null;
      let hasOnclick = !!element.getAttribute('onclick');

      if (tagName === 'a') {
        href = element.getAttribute('href');
      } else if (element.hasAttribute('data-href')) {
        href = element.getAttribute('data-href');
      }

      // Check if element is clickable
      const styles = window.getComputedStyle(element);
      const isClickable =
        styles.cursor === 'pointer' ||
        tagName === 'button' ||
        tagName === 'a' ||
        !!element.getAttribute('onclick') ||
        element.getAttribute('role') === 'button' ||
        element.hasAttribute('tabindex');

      // Accessibility check
      const hasAccessibility =
        element.hasAttribute('role') ||
        element.hasAttribute('aria-label') ||
        element.hasAttribute('tabindex') ||
        tagName === 'button' ||
        tagName === 'a';

      // Get element ID and classes for identification
      const id = element.id || '';
      const classes = element.className || '';

      results.push({
        tagName,
        text: text.substring(0, 100), // Limit text length
        href,
        hasOnclick,
        id,
        classes: typeof classes === 'string' ? classes : '',
        isClickable,
        hasAccessibility,
        outerHTML: element.outerHTML.substring(0, 200)
      });
    });

    return results;
  });

  return buttons;
}

// Discover all links on a page
async function discoverLinks(page) {
  return await page.evaluate(() => {
    const links = new Set();
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        links.add(href);
      }
    });
    return Array.from(links);
  });
}

// Main crawl function
async function crawlWebsite() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Starting website crawl...\n');

  while (pagesToVisit.size > 0) {
    const currentUrl = Array.from(pagesToVisit)[0];
    pagesToVisit.delete(currentUrl);

    if (visitedPages.has(currentUrl)) continue;
    visitedPages.add(currentUrl);

    console.log(`\n📄 Visiting [${visitedPages.size}]: ${currentUrl}`);

    try {
      const response = await page.goto(currentUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      });

      if (!response || response.status() >= 400) {
        pageErrors.push({ url: currentUrl, error: `HTTP ${response?.status() || 'unknown'}` });
        continue;
      }

      // Wait a bit for dynamic content
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Analyze buttons on this page
      const buttons = await analyzeButtons(page, currentUrl);

      // Store button data
      for (const button of buttons) {
        buttonData.push({
          pageUrl: currentUrl,
          ...button
        });
      }

      console.log(`   ✓ Found ${buttons.length} buttons/clickable elements`);

      // Discover new links
      const links = await discoverLinks(page);
      links.forEach(link => {
        const normalizedLink = normalizeUrl(link);
        if (normalizedLink && isValidUrl(normalizedLink) && !visitedPages.has(normalizedLink)) {
          pagesToVisit.add(normalizedLink);
        }
      });

    } catch (error) {
      console.error(`   ✗ Error on ${currentUrl}:`, error.message);
      pageErrors.push({ url: currentUrl, error: error.message });
    }
  }

  await browser.close();
  console.log('\n\n✅ Crawl complete!');
  console.log(`📊 Total pages visited: ${visitedPages.size}`);
  console.log(`🔘 Total buttons found: ${buttonData.length}`);
}

// Analyze and categorize buttons
function analyzeButtonData() {
  const analysis = {
    totalButtons: buttonData.length,
    totalPages: visitedPages.size,
    buttonsWithValidLinks: [],
    buttonsWithMissingLinks: [],
    buttonsWithBrokenInvalidLinks: [],
    duplicateButtons: [],
    inaccessibleButtons: [],
    summary: {}
  };

  buttonData.forEach(button => {
    const hasLink = button.href !== null;
    const isEmptyLink = !button.href || button.href === '#' || button.href.startsWith('javascript:void');
    const isAccessible = button.hasAccessibility;

    // Categorize buttons
    if (hasLink && !isEmptyLink) {
      analysis.buttonsWithValidLinks.push(button);
    } else if (!hasLink && !button.hasOnclick) {
      analysis.buttonsWithMissingLinks.push(button);
    } else if (isEmptyLink) {
      analysis.buttonsWithBrokenInvalidLinks.push(button);
    }

    // Check accessibility
    if (!isAccessible && button.isClickable) {
      analysis.inaccessibleButtons.push(button);
    }
  });

  // Find duplicate buttons (same text, different links)
  const buttonMap = new Map();
  buttonData.forEach(button => {
    const key = button.text;
    if (!buttonMap.has(key)) {
      buttonMap.set(key, []);
    }
    buttonMap.get(key).push(button);
  });

  buttonMap.forEach((buttons, text) => {
    if (buttons.length > 1) {
      const uniqueLinks = new Set(buttons.map(b => b.href).filter(Boolean));
      if (uniqueLinks.size > 1) {
        analysis.duplicateButtons.push({
          text,
          count: buttons.length,
          links: Array.from(uniqueLinks),
          instances: buttons
        });
      }
    }
  });

  analysis.summary = {
    totalButtons: analysis.totalButtons,
    totalPages: analysis.totalPages,
    withValidLinks: analysis.buttonsWithValidLinks.length,
    withMissingLinks: analysis.buttonsWithMissingLinks.length,
    withBrokenInvalidLinks: analysis.buttonsWithBrokenInvalidLinks.length,
    duplicates: analysis.duplicateButtons.length,
    inaccessible: analysis.inaccessibleButtons.length
  };

  return analysis;
}

// Generate HTML report
function generateHTMLReport(analysis) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Analysis Report - Kalinga Website</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: #f5f5f5;
      padding: 20px;
      line-height: 1.6;
    }
    .container { max-width: 1400px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    h1 { color: #d32f2f; margin-bottom: 10px; font-size: 32px; }
    h2 { color: #333; margin: 30px 0 15px; font-size: 24px; border-bottom: 2px solid #d32f2f; padding-bottom: 8px; }
    h3 { color: #555; margin: 20px 0 10px; font-size: 18px; }
    .summary { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
      gap: 15px; 
      margin: 20px 0; 
    }
    .summary-card { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      color: white; 
      padding: 20px; 
      border-radius: 8px; 
      text-align: center;
    }
    .summary-card.valid { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); }
    .summary-card.missing { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
    .summary-card.broken { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
    .summary-card.duplicate { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
    .summary-card.inaccessible { background: linear-gradient(135deg, #ff9a56 0%, #ffcb52 100%); }
    .summary-card h3 { color: white; font-size: 36px; margin: 10px 0; }
    .summary-card p { opacity: 0.9; font-size: 14px; }
    
    table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
    thead { background: #f8f9fa; position: sticky; top: 0; }
    th { text-align: left; padding: 12px; font-weight: 600; border-bottom: 2px solid #dee2e6; color: #495057; }
    td { padding: 12px; border-bottom: 1px solid #dee2e6; }
    tr:hover { background: #f8f9fa; }
    
    .badge { 
      display: inline-block; 
      padding: 4px 8px; 
      border-radius: 4px; 
      font-size: 12px; 
      font-weight: 500;
      margin-right: 5px;
    }
    .badge.button { background: #e3f2fd; color: #1976d2; }
    .badge.anchor { background: #f3e5f5; color: #7b1fa2; }
    .badge.div { background: #fff3e0; color: #f57c00; }
    .badge.working { background: #c8e6c9; color: #2e7d32; }
    .badge.broken { background: #ffcdd2; color: #c62828; }
    .badge.empty { background: #ffe0b2; color: #e65100; }
    .badge.missing { background: #f8bbd0; color: #c2185b; }
    .badge.accessible { background: #b2dfdb; color: #00695c; }
    .badge.inaccessible { background: #ffccbc; color: #bf360c; }
    
    .url { color: #1976d2; text-decoration: none; word-break: break-all; }
    .url:hover { text-decoration: underline; }
    .code { 
      background: #f5f5f5; 
      padding: 2px 6px; 
      border-radius: 3px; 
      font-family: 'Courier New', monospace; 
      font-size: 12px;
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }
    .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 15px 0; border-radius: 4px; }
    .info { background: #d1ecf1; border-left: 4px solid #0dcaf0; padding: 15px; margin: 15px 0; border-radius: 4px; }
    
    .filter-buttons {
      margin: 20px 0;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .filter-btn {
      padding: 8px 16px;
      border: 2px solid #d32f2f;
      background: white;
      color: #d32f2f;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s;
    }
    .filter-btn:hover, .filter-btn.active {
      background: #d32f2f;
      color: white;
    }
    
    @media print {
      .filter-buttons { display: none; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔘 Button Analysis Report</h1>
    <p style="color: #666; margin-bottom: 30px;">Comprehensive analysis of all buttons and clickable elements across the Kalinga website</p>
    
    <div class="summary">
      <div class="summary-card">
        <p>Total Buttons</p>
        <h3>${analysis.summary.totalButtons}</h3>
        <p>across ${analysis.summary.totalPages} pages</p>
      </div>
      <div class="summary-card valid">
        <p>Valid Links</p>
        <h3>${analysis.summary.withValidLinks}</h3>
        <p>${((analysis.summary.withValidLinks / analysis.summary.totalButtons) * 100).toFixed(1)}%</p>
      </div>
      <div class="summary-card missing">
        <p>Missing Links</p>
        <h3>${analysis.summary.withMissingLinks}</h3>
        <p>${((analysis.summary.withMissingLinks / analysis.summary.totalButtons) * 100).toFixed(1)}%</p>
      </div>
      <div class="summary-card broken">
        <p>Broken/Invalid</p>
        <h3>${analysis.summary.withBrokenInvalidLinks}</h3>
        <p>${((analysis.summary.withBrokenInvalidLinks / analysis.summary.totalButtons) * 100).toFixed(1)}%</p>
      </div>
      <div class="summary-card duplicate">
        <p>Duplicates</p>
        <h3>${analysis.summary.duplicates}</h3>
        <p>with different links</p>
      </div>
      <div class="summary-card inaccessible">
        <p>Inaccessible</p>
        <h3>${analysis.summary.inaccessible}</h3>
        <p>missing a11y attributes</p>
      </div>
    </div>

    ${analysis.buttonsWithMissingLinks.length > 0 ? `
    <h2>🚫 Buttons with Missing Links (${analysis.buttonsWithMissingLinks.length})</h2>
    <div class="warning">
      <strong>⚠️ Critical Issues:</strong> These buttons appear clickable but have no navigation action defined.
    </div>
    <table>
      <thead>
        <tr>
          <th>Page URL</th>
          <th>Button Text</th>
          <th>Type</th>
          <th>ID/Classes</th>
          <th>Accessibility</th>
        </tr>
      </thead>
      <tbody>
        ${analysis.buttonsWithMissingLinks.map(btn => `
        <tr>
          <td><a href="${btn.pageUrl}" class="url" target="_blank">${btn.pageUrl.replace(BASE_URL, '')}</a></td>
          <td><strong>${btn.text}</strong></td>
          <td><span class="badge ${btn.tagName}">${btn.tagName}</span></td>
          <td><span class="code">${btn.id || btn.classes || 'none'}</span></td>
          <td><span class="badge ${btn.hasAccessibility ? 'accessible' : 'inaccessible'}">${btn.hasAccessibility ? '✓ Accessible' : '✗ Not Accessible'}</span></td>
        </tr>
        `).join('')}
      </tbody>
    </table>
    ` : ''}

    ${analysis.buttonsWithBrokenInvalidLinks.length > 0 ? `
    <h2>⚠️ Buttons with Broken/Invalid Links (${analysis.buttonsWithBrokenInvalidLinks.length})</h2>
    <div class="warning">
      <strong>⚠️ Issues Found:</strong> These buttons have empty or invalid navigation targets.
    </div>
    <table>
      <thead>
        <tr>
          <th>Page URL</th>
          <th>Button Text</th>
          <th>Type</th>
          <th>Link Target</th>
          <th>Issue</th>
        </tr>
      </thead>
      <tbody>
        ${analysis.buttonsWithBrokenInvalidLinks.map(btn => `
        <tr>
          <td><a href="${btn.pageUrl}" class="url" target="_blank">${btn.pageUrl.replace(BASE_URL, '')}</a></td>
          <td><strong>${btn.text}</strong></td>
          <td><span class="badge ${btn.tagName}">${btn.tagName}</span></td>
          <td><span class="code">${btn.href || 'none'}</span></td>
          <td><span class="badge empty">${btn.href === '#' ? 'Hash only' : btn.href?.startsWith('javascript:') ? 'JS void' : 'Empty'}</span></td>
        </tr>
        `).join('')}
      </tbody>
    </table>
    ` : ''}

    ${analysis.duplicateButtons.length > 0 ? `
    <h2>🔄 Duplicate Buttons with Different Links (${analysis.duplicateButtons.length})</h2>
    <div class="info">
      <strong>ℹ️ Info:</strong> These buttons have the same text but link to different destinations.
    </div>
    <table>
      <thead>
        <tr>
          <th>Button Text</th>
          <th>Count</th>
          <th>Different Links</th>
          <th>Pages</th>
        </tr>
      </thead>
      <tbody>
        ${analysis.duplicateButtons.map(dup => `
        <tr>
          <td><strong>${dup.text}</strong></td>
          <td>${dup.count}</td>
          <td>${dup.links.map(link => `<div class="code">${link}</div>`).join('')}</td>
          <td>${Array.from(new Set(dup.instances.map(i => i.pageUrl))).map(url => `<div><a href="${url}" class="url" target="_blank">${url.replace(BASE_URL, '')}</a></div>`).join('')}</td>
        </tr>
        `).join('')}
      </tbody>
    </table>
    ` : ''}

    ${analysis.inaccessibleButtons.length > 0 ? `
    <h2>♿ Inaccessible Buttons (${analysis.inaccessibleButtons.length})</h2>
    <div class="warning">
      <strong>⚠️ Accessibility Issues:</strong> These clickable elements are missing proper accessibility attributes (role, aria-label, or tabindex).
    </div>
    <table>
      <thead>
        <tr>
          <th>Page URL</th>
          <th>Button Text</th>
          <th>Type</th>
          <th>Has Role</th>
          <th>Has Tabindex</th>
        </tr>
      </thead>
      <tbody>
        ${analysis.inaccessibleButtons.slice(0, 100).map(btn => `
        <tr>
          <td><a href="${btn.pageUrl}" class="url" target="_blank">${btn.pageUrl.replace(BASE_URL, '')}</a></td>
          <td><strong>${btn.text}</strong></td>
          <td><span class="badge ${btn.tagName}">${btn.tagName}</span></td>
          <td>${btn.outerHTML?.includes('role=') ? '✓' : '✗'}</td>
          <td>${btn.outerHTML?.includes('tabindex=') ? '✓' : '✗'}</td>
        </tr>
        `).join('')}
      </tbody>
    </table>
    ${analysis.inaccessibleButtons.length > 100 ? `<p><em>Showing first 100 of ${analysis.inaccessibleButtons.length} inaccessible buttons</em></p>` : ''}
    ` : ''}

    <h2>✅ All Buttons with Valid Links (${analysis.buttonsWithValidLinks.length})</h2>
    <table>
      <thead>
        <tr>
          <th>Page URL</th>
          <th>Button Text</th>
          <th>Type</th>
          <th>Target URL</th>
          <th>Accessibility</th>
        </tr>
      </thead>
      <tbody>
        ${analysis.buttonsWithValidLinks.slice(0, 200).map(btn => `
        <tr>
          <td><a href="${btn.pageUrl}" class="url" target="_blank">${btn.pageUrl.replace(BASE_URL, '')}</a></td>
          <td><strong>${btn.text}</strong></td>
          <td><span class="badge ${btn.tagName}">${btn.tagName}</span></td>
          <td><a href="${btn.href}" class="url" target="_blank">${btn.href}</a></td>
          <td><span class="badge ${btn.hasAccessibility ? 'accessible' : 'inaccessible'}">${btn.hasAccessibility ? '✓' : '✗'}</span></td>
        </tr>
        `).join('')}
      </tbody>
    </table>
    ${analysis.buttonsWithValidLinks.length > 200 ? `<p><em>Showing first 200 of ${analysis.buttonsWithValidLinks.length} buttons with valid links</em></p>` : ''}

    <hr style="margin: 40px 0; border: none; border-top: 1px solid #dee2e6;">
    <p style="text-align: center; color: #666; font-size: 14px;">
      Report generated on ${new Date().toLocaleString()}<br>
      Total pages crawled: ${analysis.totalPages} | Total buttons analyzed: ${analysis.totalButtons}
    </p>
  </div>
</body>
</html>
  `;

  return html;
}

// Main execution
async function main() {
  try {
    console.log('🚀 Starting Kalinga Website Button Crawler\n');
    console.log('================================================\n');

    // Crawl the website
    await crawlWebsite();

    // Analyze the data
    console.log('\n\n📊 Analyzing button data...');
    const analysis = analyzeButtonData();

    // Save JSON report
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(analysis, null, 2));
    console.log(`\n✅ JSON report saved to: ${OUTPUT_FILE}`);

    // Generate and save HTML report
    const htmlReport = generateHTMLReport(analysis);
    fs.writeFileSync(HTML_REPORT, htmlReport);
    console.log(`✅ HTML report saved to: ${HTML_REPORT}`);

    // Print summary
    console.log('\n\n📈 SUMMARY');
    console.log('================================================');
    console.log(`Total Pages Crawled:              ${analysis.summary.totalPages}`);
    console.log(`Total Buttons Found:              ${analysis.summary.totalButtons}`);
    console.log(`✅ Buttons with Valid Links:       ${analysis.summary.withValidLinks} (${((analysis.summary.withValidLinks / analysis.summary.totalButtons) * 100).toFixed(1)}%)`);
    console.log(`🚫 Buttons with Missing Links:     ${analysis.summary.withMissingLinks} (${((analysis.summary.withMissingLinks / analysis.summary.totalButtons) * 100).toFixed(1)}%)`);
    console.log(`⚠️  Buttons with Broken/Invalid:   ${analysis.summary.withBrokenInvalidLinks} (${((analysis.summary.withBrokenInvalidLinks / analysis.summary.totalButtons) * 100).toFixed(1)}%)`);
    console.log(`🔄 Duplicate Buttons:              ${analysis.summary.duplicates}`);
    console.log(`♿ Inaccessible Buttons:           ${analysis.summary.inaccessible}`);
    console.log('================================================\n');

    console.log(`\n🎉 Done! Open ${HTML_REPORT} in your browser to view the full report.\n`);

  } catch (error) {
    console.error('\n❌ Error:', error);
    process.exit(1);
  }
}

main();
