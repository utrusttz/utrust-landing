#!/usr/bin/env node
/**
 * Bing Webmaster API + IndexNow SEO Synchronization Script
 * for Utrust Clothing Tanzania Limited (utrust.co.tz)
 */

const SITE_URL = 'https://utrust.co.tz/';
const HOST = 'utrust.co.tz';
const API_KEY = process.env.BING_API_KEY || '0c309bcdd14f41388e4c7cd825b7f437';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

const SITEMAP_FEEDS = [
  'https://utrust.co.tz/sitemap.xml',
];

const TARGET_URLS = [
  'https://utrust.co.tz/',
  'https://utrust.co.tz/sw/',
  'https://utrust.co.tz/zh/',
];

async function bingApiPost(method, bodyObj) {
  const url = `https://ssl.bing.com/webmaster/api.svc/json/${method}?apikey=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(bodyObj),
  });
  const text = await res.text();
  return { status: res.status, body: text };
}

async function bingApiGet(method, params = {}) {
  const qs = new URLSearchParams({ ...params, apikey: API_KEY }).toString();
  const url = `https://ssl.bing.com/webmaster/api.svc/json/${method}?${qs}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function main() {
  console.log('================================================================');
  console.log('  Utrust Clothing — Bing Webmaster API & IndexNow SEO Sync');
  console.log('================================================================\n');

  // 1. Submit Sitemaps
  console.log('1. Submitting Sitemaps to Bing Webmaster API (SubmitFeed)...');
  for (const feedUrl of SITEMAP_FEEDS) {
    const res = await bingApiPost('SubmitFeed', {
      siteUrl: SITE_URL,
      feedUrl,
    });
    console.log(`   -> ${feedUrl} [HTTP ${res.status}] ${res.body}`);
  }

  // 2. Verify Feeds
  console.log('\n2. Verifying registered feeds in Bing Webmaster Tools (GetFeeds)...');
  const feedsData = await bingApiGet('GetFeeds', { siteUrl: SITE_URL });
  const registeredFeeds = feedsData?.d || [];
  console.log(`   -> Total registered feeds: ${registeredFeeds.length}`);
  for (const f of registeredFeeds) {
    console.log(`      • ${f.Url} (Status: ${f.Status})`);
  }

  // 3. Direct URL Submission Quota
  console.log('\n3. Checking Bing Webmaster API URL Submission Quota...');
  const quotaData = await bingApiGet('GetUrlSubmissionQuota', { siteUrl: SITE_URL });
  const dailyQuota = quotaData?.d?.DailyQuota ?? 0;
  const monthlyQuota = quotaData?.d?.MonthlyQuota ?? 0;
  console.log(`   -> Remaining Quota: Daily = ${dailyQuota}, Monthly = ${monthlyQuota}`);

  if (dailyQuota > 0) {
    console.log(`   -> Submitting URL via SubmitUrl...`);
    const submitRes = await bingApiPost('SubmitUrl', {
      siteUrl: SITE_URL,
      url: SITE_URL,
    });
    console.log(`   -> SubmitUrl response: [HTTP ${submitRes.status}] ${submitRes.body}`);
  }

  // 4. IndexNow Protocol Push
  console.log('\n4. Pushing URL via IndexNow (Bing & IndexNow central)...');
  const payload = {
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: TARGET_URLS,
  };

  const [bingRes, indexNowRes] = await Promise.all([
    fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    }),
    fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    }),
  ]);

  console.log(`   -> Bing IndexNow: HTTP ${bingRes.status} (202 = Accepted)`);
  console.log(`   -> IndexNow.org:  HTTP ${indexNowRes.status} (200 = Success)`);

  console.log('\n================================================================');
  console.log('  Utrust Bing SEO & IndexNow Sync Complete!');
  console.log('================================================================');
}

main().catch(err => {
  console.error('Fatal error in bing-seo-sync:', err);
  process.exit(1);
});
