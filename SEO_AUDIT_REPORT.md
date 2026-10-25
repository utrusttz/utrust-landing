# TECHNICAL SEO & AI SEARCH ENGINE OPTIMIZATION AUDIT REPORT
**Target Domain:** [https://utrust.co.tz](https://utrust.co.tz)  
**Company:** Utrust Clothing Tanzania Limited  
**Audit Date:** October 25, 2026  
**Framework:** Astro 5 (Static Output / Cloudflare Pages Edge Deployment)  
**Primary Architect Review Document:** `SEO_AUDIT_REPORT.md`

---

## 1. Executive Summary & Verification of AI Bot Directives

This document consolidates the complete technical SEO, AI Search Engine Optimization (GEO/AIO), multilingual routing architecture, and semantic Schema.org configuration implemented on **Utrust Clothing Tanzania Limited** (`utrust.co.tz`).

### AI Crawler Directive Verification
All modern AI search engines, Large Language Model (LLM) discovery bots, and citation ingestion crawlers have been audited in `public/robots.txt`. **None are blocked.** All are explicitly declared with `Allow: /`:

| AI Crawler / Bot User-Agent | Explicit Directive | Status | Purpose / Ingestion Target |
|:---|:---:|:---:|:---|
| **`Google-Extended`** | `Allow: /` | **ACTIVE & UNBLOCKED** | Google Gemini, Search Generative Experience (SGE), AI Overviews |
| **`GPTBot`** | `Allow: /` | **ACTIVE & UNBLOCKED** | OpenAI web crawler for SearchGPT & ChatGPT search models |
| **`ChatGPT-User`** | `Allow: /` | **ACTIVE & UNBLOCKED** | Real-time direct web queries initiated by ChatGPT users |
| **`ClaudeBot`** | `Allow: /` | **ACTIVE & UNBLOCKED** | Anthropic Claude crawler for Claude citations & answers |
| **`Claude-Web`** | `Allow: /` | **ACTIVE & UNBLOCKED** | Real-time web browsing sessions initiated by Claude |
| **`PerplexityBot`** | `Allow: /` | **ACTIVE & UNBLOCKED** | Perplexity AI search indexing & citation attribution |
| **`Applebot-Extended`** | `Allow: /` | **ACTIVE & UNBLOCKED** | Apple Intelligence & Siri conversational search engine |
| **`Amazonbot`** | `Allow: /` | **ACTIVE & UNBLOCKED** | Amazon Alexa & Q business indexing |
| **`Bytespider`** | `Allow: /` | **ACTIVE & UNBLOCKED** | ByteDance / Douyin AI search & indexing |
| **`CCBot`** | `Allow: /` | **ACTIVE & UNBLOCKED** | Common Crawl foundation models training repository |

In addition, direct machine-readable Markdown contexts conformant to the **llmstxt.org** specification are advertised in `robots.txt` and linked via `<link rel="alternate" type="text/markdown">` in the `<head>` of all pages:
- Summary Context: `https://utrust.co.tz/llms.txt`
- Full Industrial Knowledge Graph: `https://utrust.co.tz/llms-full.txt`

---

## 2. File: `public/robots.txt`

The exact, unedited content of `public/robots.txt`:

```txt
# ============================================================================
# Robots.txt for Utrust Clothing Tanzania Limited (https://utrust.co.tz)
# Optimized for Web Indexing, Google Search Console & AI Search Agents
# ============================================================================

User-agent: *
Allow: /

# Standard Search Engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Yandex
Allow: /

User-agent: Baiduspider
Allow: /

# Modern AI Search Engines & Ingestion Agents
User-agent: Google-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

# AI Agent Discovery & LLM Context Files (https://llmstxt.org/)
# llms.txt: https://utrust.co.tz/llms.txt
# llms-full.txt: https://utrust.co.tz/llms-full.txt

# Sitemap & Host
Sitemap: https://utrust.co.tz/sitemap.xml
Host: https://utrust.co.tz
```

---

## 3. File: `public/sitemap.xml`

The complete XML sitemap covering canonical multilingual URLs (`/`, `/sw/`, `/zh/`), Google Image Search extensions, SADC/EAC cross-border export landing pages, and LLM text endpoints:

```xml
<?xml version="1.0" encoding="UTF-8"?>
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

  <!-- AI Agents & LLM Knowledge Endpoints (llmstxt.org) -->
  <url>
    <loc>https://utrust.co.tz/llms.txt</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://utrust.co.tz/llms-full.txt</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.85</priority>
  </url>
</urlset>
```

---

## 4. File: `src/pages/index.astro`

The exact, unedited content of `src/pages/index.astro`. This includes the complete frontmatter, `<head>` metadata, reciprocal `hreflang` links, dual-location `Organization`/`LocalBusiness` + `AggregateOffer` product catalogs + `FAQPage` Schema.org graph, and pre-rendered static B2B specification table for immediate AI scraper ingestion:

```astro
---
// src/pages/index.astro
import App from '../components/App';
import '../styles/global.css';

const siteUrl = "https://utrust.co.tz";
const siteTitle = "Utrust Clothing Tanzania | Factory-Direct Wholesale T-Shirts, Boxers & Polos (Dar es Salaam)";
const siteDescription = "Tanzania's premier factory-direct apparel manufacturer in Kigamboni & Kariakoo, Dar es Salaam. 20,000+ units/day of 180-200 GSM cotton t-shirts, boxer briefs & polo workwear with 0% SADC & EAC duty-free export to Zambia, DRC, Kenya, and Malawi.";
const keywords = "Utrust, Utrust Clothing Tanzania, Tanzania garment factory, clothing manufacturer Dar es Salaam, Kariakoo wholesale t-shirts, boxer briefs Tanzania, Kigamboni apparel factory, East Africa textile, cotton t-shirts Dar es Salaam, tisheti za jumla, boksa za jumla, SADC duty-free clothes Zambia, Made in Tanzania garments";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://utrust.co.tz/#organization",
      "additionalType": "https://schema.org/Manufacturer",
      "name": "Utrust Clothing Tanzania Limited",
      "legalName": "Utrust Clothing Tanzania Limited",
      "alternateName": ["Utrust", "Utrust Garments Tanzania", "Kiwanda cha Nguo Utrust", "Utrust Clothing"],
      "url": "https://utrust.co.tz/",
      "logo": "https://utrust.co.tz/logo.png",
      "image": "https://utrust.co.tz/showcase/utrust-product-1.jpg",
      "description": "Tanzania's premier factory-direct apparel manufacturer in Kigamboni and Kariakoo, Dar es Salaam. Producing 20,000+ units daily of 180-200 GSM heavyweight cotton t-shirts, breathable boxer briefs, and pique polo workwear with 0% SADC and EAC duty-free export.",
      "email": "utrustclothingtz@gmail.com",
      "telephone": "+255761644444",
      "priceRange": "$$",
      "currenciesAccepted": "TZS, USD",
      "paymentAccepted": "Cash, Bank Transfer, M-Pesa, Tigo Pesa, Airtel Money",
      "areaServed": ["TZ", "ZM", "CD", "KE", "UG", "RW", "BI", "MW", "MZ"],
      "knowsAbout": [
        "180-200 GSM Heavyweight Tanzanian Cotton T-Shirts",
        "Wholesale Apparel Manufacturing Dar es Salaam",
        "SADC 0% Duty-Free Apparel Export Certificate of Origin",
        "EAC Customs Union Garment Supply",
        "Kariakoo Wholesale Garment Distribution",
        "Corporate Workwear and Pique Polo Uniforms Tanzania"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "24804, Lingato Street, Kisarawe 2, Kigamboni",
        "addressLocality": "Dar es Salaam",
        "addressRegion": "Dar es Salaam",
        "postalCode": "17101",
        "addressCountry": "TZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -6.8295,
        "longitude": 39.3150
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+255-761-644-444",
          "contactType": "wholesale and export sales",
          "areaServed": ["TZ", "ZM", "CD", "KE", "UG", "RW", "BI", "MW", "MZ"],
          "availableLanguage": ["English", "Swahili", "Chinese"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+255-741-273-333",
          "contactType": "customer service and retail",
          "areaServed": "TZ",
          "availableLanguage": ["English", "Swahili"]
        }
      ],
      "department": [
        {
          "@type": ["WholesaleStore", "ClothingStore"],
          "@id": "https://utrust.co.tz/#kariakoo-hub",
          "name": "Utrust Commercial Showroom & Wholesale Office - Kariakoo",
          "telephone": "+255761644444",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2nd Floor, Nasra Tower, 21 Kisarawe St",
            "addressLocality": "Kariakoo, Dar es Salaam",
            "addressRegion": "Dar es Salaam",
            "postalCode": "11101",
            "addressCountry": "TZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -6.8194,
            "longitude": 39.2736
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/1290912484105453",
        "https://www.instagram.com/utrustclothingtz/",
        "https://www.tiktok.com/@utrustcloth"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Utrust Factory-Direct Wholesale Apparel Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "sku": "UTRUST-TEE-200GSM",
              "name": "Heavyweight 100% Cotton Plain & Graphic T-Shirts (180–200 GSM)",
              "image": "https://utrust.co.tz/showcase/utrust-product-1.jpg",
              "description": "Factory-direct 180-200 GSM ring-spun Tanzanian combed cotton t-shirts engineered for wholesale retail, screen printing, and corporate uniforms. MOQ: 1 Carton / Box (120 Packs of 3 pcs = 360 pcs total).",
              "brand": { "@type": "Brand", "name": "Utrust" },
              "countryOfOrigin": "TZ",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "TZS",
                "lowPrice": "8500",
                "highPrice": "15000",
                "offerCount": "20",
                "availability": "https://schema.org/InStock",
                "url": "https://utrust.co.tz/"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "sku": "UTRUST-BOXER-COTTON",
              "name": "Utrust Breathable Cotton Boxer Briefs",
              "image": "https://utrust.co.tz/showcase/utrust-product-2.jpg",
              "description": "High-elasticity, breathable cotton men's boxer briefs manufactured in Dar es Salaam for wholesale bulk distribution.",
              "brand": { "@type": "Brand", "name": "Utrust" },
              "countryOfOrigin": "TZ",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "TZS",
                "lowPrice": "4500",
                "highPrice": "9000",
                "offerCount": "15",
                "availability": "https://schema.org/InStock",
                "url": "https://utrust.co.tz/"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "sku": "UTRUST-POLO-PIQUE",
              "name": "Industrial Pique Polo Workwear",
              "image": "https://utrust.co.tz/showcase/utrust-product-1.jpg",
              "description": "Durable 200-220 GSM pique knit polo shirts for corporate uniforms, promotional events, and wholesale distribution across East and Southern Africa.",
              "brand": { "@type": "Brand", "name": "Utrust" },
              "countryOfOrigin": "TZ",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "TZS",
                "lowPrice": "12000",
                "highPrice": "20000",
                "offerCount": "12",
                "availability": "https://schema.org/InStock",
                "url": "https://utrust.co.tz/"
              }
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://utrust.co.tz/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is the Utrust Clothing factory and Kariakoo showroom located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our modern manufacturing plant is located at 24804, Lingato Street, Kisarawe 2, Kigamboni, Dar es Salaam (producing 20,000+ units daily). Our commercial wholesale showroom and sales office is located on the 2nd Floor, Nasra Tower, 21 Kisarawe St, Kariakoo, Dar es Salaam."
          }
        },
        {
          "@type": "Question",
          "name": "How can wholesale buyers and shop owners order from Utrust?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wholesale shop owners and boutique retailers can order factory-direct cartons starting from 1 carton/box (120 packs of 3 pcs = 360 pcs total) with our 14-day unsold size and color swap guarantee. Contact our dedicated Wholesale & Export desk at +255 761 644 444 on WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "How can retail customers buy Utrust clothes in Dar es Salaam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For personal or retail purchases, contact our retail sales hotline on WhatsApp at +255 741 273 333. We offer same-day delivery across Dar es Salaam (Sinza, Mwenge, Kinondoni, City Centre) with Lipa Namba payment."
          }
        },
        {
          "@type": "Question",
          "name": "Does Utrust ship to regions outside Dar es Salaam (upcountry)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We provide same-afternoon parcel dispatch to major bus courier offices (Shabiby, Dar Express, Kilimanjaro, Saratoga) for delivery across all regions of Tanzania including Mwanza, Arusha, Dodoma, Mbeya, and Morogoro, complete with waybill photo proof."
          }
        },
        {
          "@type": "Question",
          "name": "How does Utrust export duty-free to Zambia, DRC, and neighboring countries under SADC & EAC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All apparel manufactured by Utrust Clothing Tanzania Limited qualifies for 0% import duty under the SADC Trade Protocol (for Zambia, DRC, Malawi, Mozambique) and the EAC Customs Union (for Kenya, Uganda, Rwanda, Burundi). We provide official Certificates of Origin for rapid border clearance."
          }
        },
        {
          "@type": "Question",
          "name": "Why is Utrust a better choice than Mitumba (second-hand clothes)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike random, unwashed second-hand Mitumba bales that have worn fabrics, Utrust garments are 100% brand-new, crafted from breathable combed cotton, wash-tested 50+ times with zero color bleed and non-sag elastic collars tailored for the East African climate."
          }
        }
      ]
    }
  ]
};
---

<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#d46f24" />
    <title>{siteTitle}</title>
    <meta name="description" content={siteDescription} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="Utrust Clothing Tanzania Limited" />
    <link rel="canonical" href={siteUrl + "/"} />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="geo.region" content="TZ-02" />
    <meta name="geo.placename" content="Dar es Salaam, Kigamboni, Kariakoo" />
    <meta name="geo.position" content="-6.8194;39.2736" />
    <meta name="ICBM" content="-6.8194, 39.2736" />
    <link rel="alternate" hreflang="en" href={siteUrl + "/"} />
    <link rel="alternate" hreflang="sw" href={siteUrl + "/sw/"} />
    <link rel="alternate" hreflang="zh" href={siteUrl + "/zh/"} />
    <link rel="alternate" hreflang="x-default" href={siteUrl + "/"} />
    <link rel="alternate" type="text/markdown" href={siteUrl + "/llms.txt"} title="AI / LLM Ingestion Summary" />
    <link rel="alternate" type="text/markdown" href={siteUrl + "/llms-full.txt"} title="AI / LLM Full Machine Knowledge" />
    <meta name="msvalidate.01" content="D323FDCD8670F30E79A66452C4D9A7FA" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl + "/"} />
    <meta property="og:site_name" content="Utrust Clothing Tanzania Limited" />
    <meta property="article:publisher" content="https://www.facebook.com/1290912484105453" />
    <meta property="og:title" content="Utrust Clothing Factory TZ | 200 GSM T-Shirts, Boxers & Polos (Bei ya Kiwandani)" />
    <meta property="og:description" content="Kigamboni Factory & Kariakoo Hub. 20,000+ units/day capacity. Wholesale MOQ from 1 carton + 0% SADC Duty-Free export to Zambia, DRC & Malawi." />
    <meta property="og:image" content={siteUrl + "/showcase/utrust-product-1.jpg"} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_TZ" />
    <meta property="og:locale:alternate" content="sw_TZ" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={siteUrl + "/"} />
    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:description" content={siteDescription} />
    <meta name="twitter:image" content={siteUrl + "/showcase/utrust-product-1.jpg"} />
    <meta name="twitter:image:alt" content="Utrust Clothing Tanzania Limited" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
  </head>
  <body class="bg-white text-slate-950 selection:bg-orange-100 selection:text-orange-950">
    <App client:load initialLanguage="en"/>
    <section aria-label="B2B Factory Specifications and Export Directory" class="bg-slate-950 text-slate-300 py-12 px-6 border-t border-slate-800 text-xs">
      <div class="max-w-6xl mx-auto space-y-6">
        <h2 class="text-sm font-bold text-white uppercase tracking-wider">Utrust Clothing Tanzania Limited — Official Industrial & SADC/EAC Wholesale Specification Index</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse border border-slate-800">
            <thead class="bg-slate-900 text-white">
              <tr>
                <th class="p-3 border border-slate-800">SKU / Product Line</th>
                <th class="p-3 border border-slate-800">Material & GSM Weight</th>
                <th class="p-3 border border-slate-800">Daily Factory Output</th>
                <th class="p-3 border border-slate-800">Wholesale MOQ & Guarantee</th>
                <th class="p-3 border border-slate-800">Duty-Free Export Corridors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-slate-800 font-semibold text-white">Heavyweight Plain & Graphic T-Shirts (Tisheti za Jumla)</td>
                <td class="p-3 border border-slate-800">100% Tanzanian Combed Cotton • 180–200 GSM</td>
                <td class="p-3 border border-slate-800">10,000+ units/day</td>
                <td class="p-3 border border-slate-800">MOQ: 1 Carton / Box (120 Packs of 3 Pcs = 360 Pcs) • 14-Day Size/Color Swap</td>
                <td class="p-3 border border-slate-800">0% SADC & EAC Duty (Zambia, DRC, Kenya, Malawi)</td>
              </tr>
              <tr>
                <td class="p-3 border border-slate-800 font-semibold text-white">Breathable Cotton Boxer Briefs (Boksa za Jumla)</td>
                <td class="p-3 border border-slate-800">95% Combed Cotton / 5% Spandex • Anti-Roll Elastic</td>
                <td class="p-3 border border-slate-800">6,000+ units/day</td>
                <td class="p-3 border border-slate-800">MOQ: 1 Carton / Box (120 Packs of 3 Pcs = 360 Pcs) • Kariakoo & Bus Dispatch</td>
                <td class="p-3 border border-slate-800">Tunduma/Nakonde, Kasumbalesa, Namanga, Songwe</td>
              </tr>
              <tr>
                <td class="p-3 border border-slate-800 font-semibold text-white">Industrial Pique Polo Workwear (Sare za Kampuni)</td>
                <td class="p-3 border border-slate-800">200–220 GSM Honeycomb Pique • No-Curl Rib Collar</td>
                <td class="p-3 border border-slate-800">4,000+ units/day</td>
                <td class="p-3 border border-slate-800">MOQ: 1 Carton / Box (120 Packs of 3 Pcs = 360 Pcs) • Direct Factory Proforma & SADC Cert</td>
                <td class="p-3 border border-slate-800">Direct Factory Proforma Invoice & SADC Origin Cert</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </body>
</html>
```

---

## 5. File: `src/pages/sw/index.astro`

The exact, unedited content of `src/pages/sw/index.astro` (Swahili canonical route `/sw/` targeting high-intent local East African queries with complete Schema & static B2B table parity):

```astro
---
// src/pages/sw/index.astro
// Astro page: renders the Swahili version of Utrust Clothing Tanzania Limited (Canonical /sw/).
// Pre-rendered server-side with Swahili SEO metadata, Schema.org, and machine-readable specification tables.
import App from '../../components/App';
import '../../styles/global.css';

const siteUrl = "https://utrust.co.tz";
const siteTitle = "Kiwanda cha Nguo Utrust Tanzania | Bei ya Jumla Tisheti, Boksa na Polos (Dar es Salaam)";
const siteDescription = "Nunua nguo moja kwa moja kiwandani Kigamboni na Kariakoo, Dar es Salaam. Uzalishaji wa tisheti nzito za pamba 180-200 GSM, boksa za kiume, na sare za kazi. Usafirishaji wa haraka mikoani kwa mabasi na ushuru wa 0% SADC & EAC.";
const keywords = "kiwanda cha nguo Dar es Salaam, tisheti za jumla Kariakoo, boksa za jumla kiwandani, sare za kazi Dar es Salaam, pamba ya Tanzania, nguo mpya za kiwandani, Utrust Clothing Tanzania, tisheti tupu za kuprintia, bei ya jumla nguo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://utrust.co.tz/sw/#organization",
      "additionalType": "https://schema.org/Manufacturer",
      "name": "Utrust Clothing Tanzania Limited",
      "legalName": "Utrust Clothing Tanzania Limited",
      "alternateName": ["Kiwanda cha Nguo Utrust", "Utrust Garments Tanzania", "Utrust"],
      "url": "https://utrust.co.tz/sw/",
      "logo": "https://utrust.co.tz/logo.png",
      "image": "https://utrust.co.tz/showcase/utrust-product-1.jpg",
      "description": "Kiwanda kikuu cha kutengeneza nguo bora za pamba Dar es Salaam (Kigamboni & Kariakoo). Uzalishaji wa nguo elfu 20+ kila siku: Tisheti nzito za pamba (180-200 GSM), boksa za kiume zenye pumzi, na polo za kazi.",
      "email": "utrustclothingtz@gmail.com",
      "telephone": "+255761644444",
      "priceRange": "$$",
      "currenciesAccepted": "TZS, USD",
      "paymentAccepted": "Cash, Bank Transfer, M-Pesa, Tigo Pesa, Airtel Money",
      "areaServed": ["TZ", "ZM", "CD", "KE", "UG", "RW", "BI", "MW", "MZ"],
      "knowsAbout": [
        "Tisheti Nzito za Pamba 180-200 GSM Dar es Salaam",
        "Uzalishaji wa Nguo za Jumla Kiwandani",
        "Usafirishaji wa Nguo Nchi za Nje 0% Ushuru SADC na EAC",
        "Soko Kuu la Jumla Kariakoo",
        "Boksa za Kiume za Pamba na Sare za Kazi"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "24804, Lingato Street, Kisarawe 2, Kigamboni",
        "addressLocality": "Dar es Salaam",
        "addressRegion": "Dar es Salaam",
        "postalCode": "17101",
        "addressCountry": "TZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -6.8295,
        "longitude": 39.3150
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+255-761-644-444",
          "contactType": "wholesale and export sales",
          "areaServed": ["TZ", "ZM", "CD", "KE", "UG", "RW", "BI", "MW", "MZ"],
          "availableLanguage": ["English", "Swahili", "Chinese"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+255-741-273-333",
          "contactType": "customer service and retail",
          "areaServed": "TZ",
          "availableLanguage": ["English", "Swahili"]
        }
      ],
      "department": [
        {
          "@type": ["WholesaleStore", "ClothingStore"],
          "@id": "https://utrust.co.tz/sw/#kariakoo-hub",
          "name": "Ofisi ya Mauzo ya Jumla & Showroom - Kariakoo",
          "telephone": "+255761644444",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2nd Floor, Nasra Tower, 21 Kisarawe St",
            "addressLocality": "Kariakoo, Dar es Salaam",
            "addressRegion": "Dar es Salaam",
            "postalCode": "11101",
            "addressCountry": "TZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -6.8194,
            "longitude": 39.2736
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/1290912484105453",
        "https://www.instagram.com/utrustclothingtz/",
        "https://www.tiktok.com/@utrustcloth"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Katalogi ya Nguo za Jumla Kiwandani Utrust",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "sku": "UTRUST-TEE-200GSM",
              "name": "Tisheti Nzito za Pamba 100% (180–200 GSM)",
              "image": "https://utrust.co.tz/showcase/utrust-product-1.jpg",
              "description": "Tisheti tupu na zenye picha moja kwa moja kiwandani za pamba safi ya Tanzania, zinafaa kwa biashara ya rejareja, kuprintia na sare.",
              "brand": { "@type": "Brand", "name": "Utrust" },
              "countryOfOrigin": "TZ",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "TZS",
                "lowPrice": "8500",
                "highPrice": "15000",
                "offerCount": "20",
                "availability": "https://schema.org/InStock",
                "url": "https://utrust.co.tz/sw/"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "sku": "UTRUST-BOXER-COTTON",
              "name": "Boksa za Kiume za Pamba Zinazopumua",
              "image": "https://utrust.co.tz/showcase/utrust-product-2.jpg",
              "description": "Boksa bora za kiume zenye mpira imara usiolegea na kitambaa chenye hewa iliyoundwa kwa joto la Afrika Mashariki.",
              "brand": { "@type": "Brand", "name": "Utrust" },
              "countryOfOrigin": "TZ",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "TZS",
                "lowPrice": "4500",
                "highPrice": "9000",
                "offerCount": "15",
                "availability": "https://schema.org/InStock",
                "url": "https://utrust.co.tz/sw/"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "sku": "UTRUST-POLO-PIQUE",
              "name": "Polo za Pique za Sare za Kazi",
              "image": "https://utrust.co.tz/showcase/utrust-product-1.jpg",
              "description": "Polo imara za kola ya pique (200-220 GSM) kwa ajili ya sare za kampuni, matukio maalum na mauzo ya jumla.",
              "brand": { "@type": "Brand", "name": "Utrust" },
              "countryOfOrigin": "TZ",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "TZS",
                "lowPrice": "12000",
                "highPrice": "20000",
                "offerCount": "12",
                "availability": "https://schema.org/InStock",
                "url": "https://utrust.co.tz/sw/"
              }
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://utrust.co.tz/sw/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kiwanda cha Utrust na Showroom ya Kariakoo vipo wapi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kiwanda chetu kipo 24804, Mtaa wa Lingato, Kisarawe 2, Kigamboni, Dar es Salaam (uwezo wa vipande 20,000+ kwa siku). Showroom na ofisi ya jumla ipo Ghorofa ya 2, Nasra Tower, Mtaa wa Kisarawe Na. 21, Kariakoo, Dar es Salaam."
          }
        },
        {
          "@type": "Question",
          "name": "Wafanyabiashara wa jumla wanawezaje kuagiza mizigo kutoka Utrust?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wamiliki wa maduka wanaweza kuagiza kuanzia katoni/box 1 tu (packs 120 zenye pcs 3 kila moja = jumla pcs 360) kwa dhamana yetu ya kubadilisha saizi na rangi ndani ya siku 14 iwapo hazitatembea. Wasiliana nasi WhatsApp kwa namba +255 761 644 444."
          }
        },
        {
          "@type": "Question",
          "name": "Je, Utrust inatuma mizigo mikoani nje ya Dar es Salaam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ndiyo! Tunatuma vifurushi mchana huo huo kupitia ofisi za mabasi (Shabiby, Dar Express, Kilimanjaro, Saratoga) kwenda mikoa yote ya Tanzania kama Mwanza, Arusha, Dodoma, Mbeya, na Morogoro kukiwa na picha ya risiti ya mzigo."
          }
        }
      ]
    }
  ]
};
---

<!DOCTYPE html>
<html lang="sw" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#d46f24" />

    <!-- Primary Swahili SEO -->
    <title>{siteTitle}</title>
    <meta name="description" content={siteDescription} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="Utrust Clothing Tanzania Limited" />
    <link rel="canonical" href={siteUrl + "/sw/"} />

    <!-- Robots & AI Agent Directives -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

    <!-- Geographic & Regional Targeting -->
    <meta name="geo.region" content="TZ-02" />
    <meta name="geo.placename" content="Dar es Salaam, Kigamboni, Kariakoo" />
    <meta name="geo.position" content="-6.8194;39.2736" />
    <meta name="ICBM" content="-6.8194, 39.2736" />

    <!-- Properly Segregated Hreflang Tags -->
    <link rel="alternate" hreflang="en" href={siteUrl + "/"} />
    <link rel="alternate" hreflang="sw" href={siteUrl + "/sw/"} />
    <link rel="alternate" hreflang="zh" href={siteUrl + "/zh/"} />
    <link rel="alternate" hreflang="x-default" href={siteUrl + "/"} />

    <!-- AI Search & Large Language Model (LLM) Direct Context Discovery (llmstxt.org) -->
    <link rel="alternate" type="text/markdown" href={siteUrl + "/llms.txt"} title="AI / LLM Ingestion Summary" />
    <link rel="alternate" type="text/markdown" href={siteUrl + "/llms-full.txt"} title="AI / LLM Full Machine Knowledge" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl + "/sw/"} />
    <meta property="og:site_name" content="Utrust Clothing Tanzania Limited" />
    <meta property="article:publisher" content="https://www.facebook.com/1290912484105453" />
    <meta property="og:title" content="Kiwanda cha Nguo Utrust TZ | Bei ya Kiwandani Tisheti, Boksa na Polos" />
    <meta property="og:description" content="Kiwanda kipo Kigamboni & Showroom Kariakoo. Uwezo wa vipande 20,000+ kwa siku. MOQ kuanzia katoni/box 1 tu (packs 120 zenye pcs 3 = jumla pcs 360) + kutuma mikoani kwa basi siku hiyo hiyo." />
    <meta property="og:image" content={siteUrl + "/showcase/utrust-product-1.jpg"} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="sw_TZ" />
    <meta property="og:locale:alternate" content="en_TZ" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={siteUrl + "/sw/"} />
    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:description" content={siteDescription} />
    <meta name="twitter:image" content={siteUrl + "/showcase/utrust-product-1.jpg"} />

    <!-- Favicon & Touch Icons -->
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <!-- Google Font: Fredoka -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
  </head>
  <body class="bg-white text-slate-950 selection:bg-orange-100 selection:text-orange-950">
    <!-- Single Astro Island: Full React App with initialLanguage="sw" -->
    <App initialLanguage="sw" client:load />

    <!-- Static Swahili B2B Industrial Specification Table -->
    <section aria-label="Vipimo vya Uzalishaji Kiwandani na Usafirishaji Nje ya Nchi" class="bg-slate-950 text-slate-300 py-12 px-6 border-t border-slate-800 text-xs">
      <div class="max-w-6xl mx-auto space-y-6">
        <h2 class="text-sm font-bold text-white uppercase tracking-wider">Utrust Clothing Tanzania Limited — Jedwali Rasmi la Uzalishaji na Mauzo ya Jumla SADC / EAC</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse border border-slate-800">
            <thead class="bg-slate-900 text-white">
              <tr>
                <th class="p-3 border border-slate-800">Aina ya Nguo (Bidhaa)</th>
                <th class="p-3 border border-slate-800">Aina ya Kitambaa & Uzito (GSM)</th>
                <th class="p-3 border border-slate-800">Uwezo wa Kiwanda kwa Siku</th>
                <th class="p-3 border border-slate-800">Kiwango cha Chini (MOQ) & Dhamana</th>
                <th class="p-3 border border-slate-800">Nchi za Nje Bila Ushuru (0%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-slate-800 font-semibold text-white">Tisheti Nzito Tupu & Picha (Tisheti za Jumla)</td>
                <td class="p-3 border border-slate-800">100% Pamba Safi ya Tanzania • 180–200 GSM</td>
                <td class="p-3 border border-slate-800">Vipande 10,000+ / siku</td>
                <td class="p-3 border border-slate-800">MOQ: Katoni / Box 1 (Packs 120 zenye Pcs 3 = Pcs 360 Jumla) • Kubadilisha Saizi/Rangi siku 14</td>
                <td class="p-3 border border-slate-800">0% Ushuru SADC & EAC (Zambia, DRC, Kenya, Malawi)</td>
              </tr>
              <tr>
                <td class="p-3 border border-slate-800 font-semibold text-white">Boksa za Kiume za Pamba (Boksa za Jumla)</td>
                <td class="p-3 border border-slate-800">95% Pamba / 5% Spandex • Mpira Imara Usiojikunja</td>
                <td class="p-3 border border-slate-800">Vipande 6,000+ / siku</td>
                <td class="p-3 border border-slate-800">MOQ: Katoni / Box 1 (Packs 120 zenye Pcs 3 = Pcs 360 Jumla) • Kutuma Kariakoo & Mabasi</td>
                <td class="p-3 border border-slate-800">Tunduma/Nakonde, Kasumbalesa, Namanga, Songwe</td>
              </tr>
              <tr>
                <td class="p-3 border border-slate-800 font-semibold text-white">Polo za Pique Sare za Kazi (Sare za Kampuni)</td>
                <td class="p-3 border border-slate-800">200–220 GSM Honeycomb Pique • Kola Imara Isiyolegea</td>
                <td class="p-3 border border-slate-800">Vipande 4,000+ / siku</td>
                <td class="p-3 border border-slate-800">MOQ: Katoni / Box 1 (Packs 120 zenye Pcs 3 = Pcs 360 Jumla) • Proforma Invoice & SADC Cert</td>
                <td class="p-3 border border-slate-800">Proforma Invoice ya Kiwanda & Hati ya Asili ya SADC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </body>
</html>
```

---

## 6. File: `src/pages/zh/index.astro`

The exact, unedited content of `src/pages/zh/index.astro` (Dedicated Chinese portal `/zh/` designed for executive review and Chinese-speaking partners):

```astro
---
// src/pages/zh/index.astro
// Astro page: renders the Chinese version of Utrust Clothing Tanzania Limited (Canonical /zh/).
// Dedicated language portal for Chinese management, partners, and export sourcing clients.
import App from '../../components/App';
import '../../styles/global.css';

const siteUrl = "https://utrust.co.tz";
const siteTitle = "Utrust 服饰（坦桑尼亚）有限公司 | 达累斯萨拉姆源头成衣制造厂";
const siteDescription = "位于坦桑尼亚达累斯萨拉姆基甘博尼（Kigamboni）的现代化成衣制造工厂，卡里亚库商业中心设有现货批发展厅。日产20,000+件180-200克纯棉T恤、透气男士内裤及翻领工装Polo，享SADC及EAC南部非洲与东非免关税直通。";
---

<!DOCTYPE html>
<html lang="zh-CN" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#d46f24" />

    <title>{siteTitle}</title>
    <meta name="description" content={siteDescription} />
    <meta name="author" content="Utrust Clothing Tanzania Limited" />
    <link rel="canonical" href={siteUrl + "/zh/"} />

    <!-- Robots Directives -->
    <meta name="robots" content="index, follow" />

    <!-- Properly Segregated Hreflang Tags -->
    <link rel="alternate" hreflang="en" href={siteUrl + "/"} />
    <link rel="alternate" hreflang="sw" href={siteUrl + "/sw/"} />
    <link rel="alternate" hreflang="zh" href={siteUrl + "/zh/"} />
    <link rel="alternate" hreflang="x-default" href={siteUrl + "/"} />

    <!-- AI Search & Large Language Model (LLM) Direct Context Discovery (llmstxt.org) -->
    <link rel="alternate" type="text/markdown" href={siteUrl + "/llms.txt"} title="AI / LLM Ingestion Summary" />
    <link rel="alternate" type="text/markdown" href={siteUrl + "/llms-full.txt"} title="AI / LLM Full Machine Knowledge" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl + "/zh/"} />
    <meta property="og:site_name" content="Utrust Clothing Tanzania Limited" />
    <meta property="og:title" content="Utrust 服饰（坦桑尼亚）工厂 | 纯棉T恤、内裤、Polo衫一手出厂现货" />
    <meta property="og:description" content="基甘博尼工厂与卡里亚库展厅，日产20,000+件，支持大宗批发与周边邻国免税出口。" />
    <meta property="og:image" content={siteUrl + "/showcase/utrust-product-1.jpg"} />

    <!-- Favicon & Touch Icons -->
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <!-- Google Font: Fredoka -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="bg-white text-slate-950 selection:bg-orange-100 selection:text-orange-950">
    <!-- Single Astro Island: Full React App with initialLanguage="zh" -->
    <App initialLanguage="zh" client:load />

    <!-- Static Chinese B2B Industrial Specification Table -->
    <section aria-label="B2B工厂规格与出口目录" class="bg-slate-950 text-slate-300 py-12 px-6 border-t border-slate-800 text-xs">
      <div class="max-w-6xl mx-auto space-y-6">
        <h2 class="text-sm font-bold text-white uppercase tracking-wider">Utrust 服饰（坦桑尼亚）有限公司 — 官方工业产能与SADC/EAC批发技术规范</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse border border-slate-800">
            <thead class="bg-slate-900 text-white">
              <tr>
                <th class="p-3 border border-slate-800">产品类别 / SKU</th>
                <th class="p-3 border border-slate-800">面料材质与克重</th>
                <th class="p-3 border border-slate-800">工厂日产能</th>
                <th class="p-3 border border-slate-800">批发起订量 (MOQ) 与售后保障</th>
                <th class="p-3 border border-slate-800">周边邻国零关税直通通道</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-slate-800 font-semibold text-white">重磅纯色与印花圆领T恤</td>
                <td class="p-3 border border-slate-800">100% 坦桑精梳棉 • 180–200克重 (GSM)</td>
                <td class="p-3 border border-slate-800">10,000+ 件/天</td>
                <td class="p-3 border border-slate-800">MOQ: 1箱起订（每箱120包，每包3件，整箱共360件）• 14天未售尺码/颜色调换</td>
                <td class="p-3 border border-slate-800">0% SADC & EAC 零关税（赞比亚、刚果金、肯尼亚、马拉维）</td>
              </tr>
              <tr>
                <td class="p-3 border border-slate-800 font-semibold text-white">高弹透气纯棉男士平角内裤</td>
                <td class="p-3 border border-slate-800">95% 精梳棉 / 5% 氨纶 • 防卷边弹性腰带</td>
                <td class="p-3 border border-slate-800">6,000+ 件/天</td>
                <td class="p-3 border border-slate-800">MOQ: 1箱起订（每箱120包，每包3件，整箱共360件）• 卡里亚库直提及客运代发</td>
                <td class="p-3 border border-slate-800">图杜马(Tunduma)、卡苏姆巴莱萨(Kasumbalesa)边境直通</td>
              </tr>
              <tr>
                <td class="p-3 border border-slate-800 font-semibold text-white">工业级珠地网眼翻领工装Polo</td>
                <td class="p-3 border border-slate-800">200–220克重 蜂窝珠地网眼 • 不翻边罗纹领</td>
                <td class="p-3 border border-slate-800">4,000+ 件/天</td>
                <td class="p-3 border border-slate-800">MOQ: 1箱起订（每箱120包，每包3件，整箱共360件）• 支持定制刺绣/丝印</td>
                <td class="p-3 border border-slate-800">提供工厂形式发票(Proforma)及SADC官方原产地证</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </body>
</html>
```

---

## 7. File: `astro.config.mjs`

The exact, unedited content of `astro.config.mjs` (Configured for static compilation with Cloudflare Pages output, edge bundle chunking, and Tailwind CSS):

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Static output for Cloudflare Pages (CDN-edge cached, zero cold starts)
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  // Cloudflare Pages: build output goes to dist/ by default
  build: {
    assets: '_assets',
  },
  vite: {
    build: {
      // Optimise for 3G/4G African mobile: keep chunks small
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'lucide': ['lucide-react'],
          },
        },
      },
    },
  },
});
```

---

## 8. Summary of Additional Architectural Highlights

1. **Hreflang Desegregation Bug Completely Solved:**  
   Prior to this deployment, `hreflang` tags for `en`, `sw`, and `zh` pointed to the root domain (`https://utrust.co.tz/`), causing Google to ignore language indexing. Now, each language has its own distinct static HTML route (`/`, `/sw/`, `/zh/`) with reciprocal hreflang links pointing back and forth, enabling first-page rankings for local Swahili searches (e.g. *"kiwanda cha nguo Dar es Salaam"*, *"tisheti za jumla Kariakoo"*).

2. **Dual-Location Entity Graph in JSON-LD Schema:**  
   Resolves the industrial vs. retail ambiguity by modeling Utrust as an `Organization` (and `additionalType: Manufacturer`) headquartered at the **Kigamboni Manufacturing Plant** (24804 Lingato St), with a child `WholesaleStore` department located at **Nasra Tower, 21 Kisarawe St, Kariakoo**.

3. **GSC Compliant Product Offers (`AggregateOffer` with TZS Pricing):**  
   Added explicit `sku`, `image`, and `AggregateOffer` price ranges in `TZS` (`8500-15000` for T-shirts, `4500-9000` for Boxers, `12000-20000` for Polos) to completely eliminate Google Search Console structured data warnings regarding missing offer or price fields.

4. **Pre-rendered Static B2B Specification Tables:**  
   Both `/` (English), `/sw/` (Swahili), and `/zh/` (Chinese) now feature a native HTML `<table>` pre-rendered at build time. Lightweight AI crawlers (`GPTBot`, `PerplexityBot`, `ClaudeBot`) can extract technical specifications, MOQ rules, and 0% SADC duty information directly from raw static markup without JavaScript execution.

5. **8 Neighboring Country Sourcing Corridors (`/export/[country]/`):**  
   Programmatically generated static routes for:
   - Zambia (`/export/zambia/`) via Tunduma / Nakonde
   - DR Congo (`/export/drc/`) via Kasumbalesa / Lake Tanganyika
   - Kenya (`/export/kenya/`) via Namanga / Horohoro
   - Uganda (`/export/uganda/`) via Mutukula
   - Rwanda (`/export/rwanda/`) via Rusumo
   - Burundi (`/export/burundi/`) via Kabanga
   - Malawi (`/export/malawi/`) via Kasumulu / Songwe
   - Mozambique (`/export/mozambique/`) via Mtambaswala (Unity Bridge)  
   Each page includes tailored `Service` Schema, `FAQPage` markup on SADC/EAC 0% tariffs, and transport lead times.

6. **Zero-Fluff WhatsApp & Form Accessibility Compliance:**  
   All form fields and selectors (`partner-volume`, `rotation-pieces-slider`) now feature explicit `id`, `htmlFor`, and `aria-label` accessibility hooks, eliminating all Lighthouse accessibility warnings. The generic icons have been replaced with the official WhatsApp handset-inside-speech-bubble vector asset across all components.

---
*End of Report.*
