// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  prefetch: true,
  image: {
    remotePatterns: [{
      hostname: "raw.githubusercontent.com",
      protocol: "https",
      pathname: "/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/*"
    }]
  },
  experimental: {
    contentLayer: true,
    contentIntellisense: true,
    contentCollectionCache: true,
  }
});