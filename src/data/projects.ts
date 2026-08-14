/**
 * Datos de los proyectos que no dependen del idioma.
 * El titulo y la descripcion viven en i18n/content.ts, en el mismo orden.
 *
 * `tags` es lo que permite cruzar Stack y Proyectos: al pulsar una tecnologia
 * se filtran las tarjetas que la usan.
 */
import type { TechKey } from "./tech";

export interface Project {
  /** identifica la tarjeta en el DOM y en la URL del filtro */
  slug: string;
  image: string;
  /** sitio publico, vacio si no lo tiene */
  link: string;
  /** ruta del caso de estudio, sin prefijo de idioma; vacio si no hay */
  caseStudy: string;
  tags: TechKey[];
}

export const PROJECTS: Project[] = [
  {
    slug: "faro",
    image: "/projects/Faro.webp",
    link: "",
    caseStudy: "/proyectos/faro",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
  },
  {
    slug: "timon",
    image: "/projects/Timon.webp",
    link: "",
    caseStudy: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
  },
  {
    slug: "stockpro",
    image: "/projects/StockPro.webp",
    link: "",
    caseStudy: "",
    tags: ["python", "sqlite"],
  },
  {
    slug: "biotech",
    image: "/projects/BioTech.webp",
    link: "",
    caseStudy: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap", "docker"],
  },
  {
    slug: "atelier",
    image: "/projects/Atelier.webp",
    link: "",
    caseStudy: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap"],
  },
  {
    slug: "shopeasy",
    image: "/projects/ShopEasy.webp",
    link: "https://shopeasy-app.web.app/",
    caseStudy: "",
    tags: ["ionic", "angular", "firebase", "typescript", "html", "sass"],
  },
];

/** Cuantos proyectos usan cada tecnologia */
export function contarPorTech(): Partial<Record<TechKey, number>> {
  const cuenta: Partial<Record<TechKey, number>> = {};
  for (const p of PROJECTS) {
    for (const t of p.tags) cuenta[t] = (cuenta[t] ?? 0) + 1;
  }
  return cuenta;
}
