const puppeteer = require('puppeteer')

async function init(){
    // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.w3schools.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});
  await page.waitForSelector('body');
  console.log('o site carregou')

  // await browser.close();
}
init()