/**
 * Copyright 2018 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DEFAULT_SCREENSHOT_VIEWPORT = {
  width: 1280,
  height: 1024,
  deviceScaleFactor: 2,
};

const runners = {
  LH: {
    name: 'Lighthouse',
    url: 'https://developers.google.com/web/tools/lighthouse',
    desc: `Personalized advice on how to improve the performance, accessibility,
          PWA, SEO, and other best practices of your site.`,
    logo: 'img/lighthouse-logo.png',
    urlInputSelector: '#url',
    primary: true,
  },
  WPT: {
    name: 'WebPageTest',
    url: 'https://www.webpagetest.org/easy.php',
    desc: `Compare performance of one or more pages in a controlled
           lab environment, testing on real devices. Lighthouse is integrated
           into WebPageTest.`,
    urlInputSelector: '#url',
    primary: true,
  },
  PSI: {
    name: 'PageSpeed Insights',
    desc: `Run to see field data for your site, alongside suggestions for
           common optimizations to improve it.`,
    url: 'https://developers.google.com/speed/pagespeed/insights/',
    urlInputSelector: 'input[name="url"]',
    primary: true,
  },
  TMS: {
    name: 'Test My Site',
    url: 'https://testmysite.thinkwithgoogle.com/',
    desc: `Diagnose site performance across devices and learn about fixes for
           improving the experience. Combines WebPageTest and PageSpeed
           Insights.`,
    urlInputSelector: 'input[name="url-entry-input"]',
    primary: false,
  },
  SS: {
    name: 'Speed Scorecard &amp;<br>Impact Calculator',
    desc: `Compare your mobile site speed & revenue opportunity against peers
           in over 10 countries using data from Chrome UX Report & Google Analytics.`,
    url: 'https://www.thinkwithgoogle.com/feature/mobile/',
    primary: false,
  },
  PPTR: {
    name: 'Puppeteer',
    desc: `A Node library that provides a high-level API to control headless/full
           Chrome (or Chromium) over the DevTools Protocol.`,
    url: 'https://developers.google.com/web/tools/puppeteer/',
    primary: false,
  },
};

export {runners, DEFAULT_SCREENSHOT_VIEWPORT};
