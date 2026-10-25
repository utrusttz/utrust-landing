// src/pages/llms.txt.ts
import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async () => {
  const filePath = path.resolve(process.cwd(), 'public/llms.txt');
  const content = fs.readFileSync(filePath, 'utf-8');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
