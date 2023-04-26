const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  setTimeout(async () => {
    await page.screenshot({ path: 'example3.png' });
    await browser.close();
  }, 1000);
  
})();