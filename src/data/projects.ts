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
  /**
   * Posicion y tamano en el mosaico. El array conserva el orden de
   * i18n/content.ts, que empareja por indice; la seccion ordena por `orden`
   * despues de juntar ambos. Los `span` de cada fila suman 3, que son las
   * columnas del mosaico: si no suman, quedan huecos.
   */
  orden: number;
  span: 1 | 2;
}

export const PROJECTS: Project[] = [
  {
    slug: "faro",
    image: "/projects/Faro.webp",
    link: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    orden: 1,
    span: 2,
  },
  {
    slug: "timon",
    image: "/projects/Timon.webp",
    link: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    orden: 4,
    span: 2,
  },
  {
    slug: "stockpro",
    image: "/projects/StockPro.webp",
    link: "",
    tags: ["python", "tkinter", "sqlite"],
    transversal: ["git"],
    orden: 2,
    span: 1,
  },
  {
    slug: "biotech",
    image: "/projects/BioTech.webp",
    link: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap", "docker"],
    transversal: ["git", "html", "css", "node"],
    orden: 5,
    span: 2,
  },
  {
    slug: "atelier",
    image: "/projects/Atelier.webp",
    link: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap"],
    transversal: ["git", "html", "css", "node"],
    orden: 3,
    span: 1,
  },
  {
    slug: "shopeasy",
    image: "/projects/ShopEasy.webp",
    link: "https://shopeasy-app.web.app/",
    tags: ["ionic", "angular", "firebase", "typescript", "sass"],
    transversal: ["git", "html", "css", "node"],
    orden: 6,
    span: 1,
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
