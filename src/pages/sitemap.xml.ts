// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Core Canonical Language Routes -->
  <url>
    <loc>https://utrust.co.tz/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://utrust.co.tz/" />
    <xhtml:link rel="alternate" hreflang="sw" href="https://utrust.co.tz/sw/" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://utrust.co.tz/zh/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://utrust.co.tz/" />
    <image:image>
      <image:loc>https://utrust.co.tz/showcase/utrust-product-1.jpg</image:loc>
      <image:title>Utrust Cotton Front-Pattern T-Shirt Made in Tanzania</image:title>
      <image:caption>Brand-new export quality garments manufactured in Kigamboni, Dar es Salaam</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://utrust.co.tz/showcase/utrust-product-2.jpg</image:loc>
      <image:title>Utrust Premium Breathable Boxer Briefs</image:title>
      <image:caption>Everyday comfort underwear crafted for tropical East African heat</image:caption>
    </image:image>
  </url>

  <url>
    <loc>https://utrust.co.tz/sw/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://utrust.co.tz/" />
    <xhtml:link rel="alternate" hreflang="sw" href="https://utrust.co.tz/sw/" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://utrust.co.tz/zh/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://utrust.co.tz/" />
  </url>

  <url>
    <loc>https://utrust.co.tz/zh/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://utrust.co.tz/" />
    <xhtml:link rel="alternate" hreflang="sw" href="https://utrust.co.tz/sw/" />
    <xhtml:link rel="alternate" hreflang="zh" href="https://utrust.co.tz/zh/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://utrust.co.tz/" />
  </url>

  <!-- Regional SADC & EAC Cross-Border Export Corridors -->
  <url>
    <loc>https://utrust.co.tz/export/zambia/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://utrust.co.tz/export/drc/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://utrust.co.tz/export/kenya/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://utrust.co.tz/export/uganda/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://utrust.co.tz/export/rwanda/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://utrust.co.tz/export/burundi/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://utrust.co.tz/export/malawi/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://utrust.co.tz/export/mozambique/</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
</urlset>
`;

export const GET: APIRoute = () => {
  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
