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
  /** lo que caracteriza al proyecto; se muestra como etiquetas de color */
  tags: TechKey[];
  /**
   * Usado tambien, pero transversal a casi todo: no distingue al proyecto.
   * Node entra aqui y no en `tags` a proposito: fue cadena de build (Vite,
   * Angular CLI), nunca backend. Como transversal no aparece en las tarjetas
   * y el contador va en gris, asi que no sugiere experiencia de servidor.
   * Va en una linea discreta en vez de como etiqueta, porque "HTML" junto a
   * "Row-Level Security" no aporta nada y llena la tarjeta de ruido.
   * Cuenta igual para el contador y para el filtro.
   */
  transversal: TechKey[];
}

export const PROJECTS: Project[] = [
  {
    slug: "faro",
    image: "/projects/Faro.webp",
    link: "",
    caseStudy: "/proyectos/faro",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
  },
  {
    slug: "timon",
    image: "/projects/Timon.webp",
    link: "",
    caseStudy: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
  },
  {
    slug: "stockpro",
    image: "/projects/StockPro.webp",
    link: "",
    caseStudy: "",
    tags: ["python", "sqlite"],
    transversal: ["git"],
  },
  {
    slug: "biotech",
    image: "/projects/BioTech.webp",
    link: "",
    caseStudy: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap", "docker"],
    transversal: ["git", "html", "css", "node"],
  },
  {
    slug: "atelier",
    image: "/projects/Atelier.webp",
    link: "",
    caseStudy: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap"],
    transversal: ["git", "html", "css", "node"],
  },
  {
    slug: "shopeasy",
    image: "/projects/ShopEasy.webp",
    link: "https://shopeasy-app.web.app/",
    caseStudy: "",
    tags: ["ionic", "angular", "firebase", "typescript", "sass"],
    transversal: ["git", "html", "css", "node"],
  },
];

/** Cuantos proyectos usan cada tecnologia */
export function contarPorTech(): Partial<Record<TechKey, number>> {
  const cuenta: Partial<Record<TechKey, number>> = {};
  for (const p of PROJECTS) {
    for (const t of [...p.tags, ...p.transversal]) {
      cuenta[t] = (cuenta[t] ?? 0) + 1;
    }
  }
  return cuenta;
}

/** Tecnologias que aparecen solo como transversales, nunca como caracteristicas */
export function esTransversal(tech: TechKey): boolean {
  const enTags = PROJECTS.some((p) => p.tags.includes(tech));
  const enTransversal = PROJECTS.some((p) => p.transversal.includes(tech));
  return enTransversal && !enTags;
}
