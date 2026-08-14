// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // necesario para el sitemap y las URLs canonicas
  site: "https://portfolio-pabl0sk1.netlify.app",

  // Espanol en la raiz ("/") e ingles bajo "/en/". Dos URLs reales en vez de
  // intercambiar textos con JS: asi Google indexa la version inglesa aparte.
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // las paginas de gracias van con noindex: listarlas seria contradictorio
      filter: (page) => !/\/thanks\/?$/.test(page),
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-PY", en: "en" },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
