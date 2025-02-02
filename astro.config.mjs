// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import tailwindcss from "@tailwindcss/vite";
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['index2'], // Replace with the actual dependency causing issues
    },
    plugins: [tailwindcss()],
  },

  integrations: [sanity(
    {
      projectId: 'u7rfiyeh',
      dataset: 'production',
      useCdn: false, // See note on using the CDN
      apiVersion: "2025-01-28", // insert the current date to access the latest version of the API
      studioBasePath: '/studio' // If you want to access the Studio on a route
    }
  ), react()],

  adapter: netlify(),
});