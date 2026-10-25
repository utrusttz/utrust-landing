// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

const robotsTxt = `# ============================================================================
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
`;

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
