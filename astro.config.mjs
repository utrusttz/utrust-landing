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
