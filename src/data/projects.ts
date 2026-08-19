/**
 * Datos de los proyectos que no dependen del idioma.
 * El titulo y la descripcion viven en i18n/content.ts, en el mismo orden.
 *
 * `tags` es lo que permite cruzar Stack y Proyectos: al pulsar una tecnologia
 * se filtran las tarjetas que la usan.
 */
import type { TechKey } from "./tech";
// Las capturas se importan en vez de referenciarse por ruta: asi las procesa
// astro:assets y cada pantalla recibe el tamano que le toca. En public/ se
// servian tal cual, siempre a 1280 px.
import faro from "../assets/projects/Faro.webp";
import timon from "../assets/projects/Timon.webp";
import stockpro from "../assets/projects/StockPro.webp";
import biotech from "../assets/projects/BioTech.webp";
import atelier from "../assets/projects/Atelier.webp";
import shopeasy from "../assets/projects/ShopEasy.webp";
import cinemateca from "../assets/projects/Cinemateca.webp";
import pulse from "../assets/projects/Pulse.webp";
import marvelworld from "../assets/projects/MarvelWorld.webp";

export interface Project {
  /** identifica la tarjeta en el DOM y en la URL del filtro */
  slug: string;
  image: ImageMetadata;
  /** sitio publico, vacio si no lo tiene */
  link: string;
  /**
   * Entregado como ELBRUX, la marca propia. Marca la pieza en el mosaico.
   * Solo Faro y Timon: StockPro se entrego aparte, aunque comparta cliente
   * y epoca.
   */
  elbrux?: true;
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
   * Posicion en el mosaico. El array conserva el orden de i18n/content.ts, que
   * empareja por indice; la seccion ordena por `orden` despues de juntar ambos.
   *
   * El ancho de la pieza no se escribe aqui: lo reparte anchos() en
   * data/mosaico.ts segun cuantas haya a la vista, que con el filtro por
   * tecnologia no son siempre las nueve.
   */
  orden: number;
}

export const PROJECTS: Project[] = [
  {
    slug: "faro",
    image: faro,
    link: "",
    elbrux: true,
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    orden: 4,
  },
  {
    slug: "timon",
    image: timon,
    link: "",
    elbrux: true,
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    orden: 5,
  },
  {
    slug: "stockpro",
    image: stockpro,
    link: "",
    tags: ["python", "tkinter", "sqlite"],
    transversal: ["git"],
    orden: 6,
  },
  {
    slug: "biotech",
    image: biotech,
    link: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap", "docker"],
    transversal: ["git", "html", "css", "node"],
    orden: 7,
  },
  {
    slug: "atelier",
    image: atelier,
    link: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap"],
    transversal: ["git", "html", "css", "node"],
    orden: 8,
  },
  {
    slug: "shopeasy",
    image: shopeasy,
    link: "https://shopeasy-app.web.app/",
    tags: ["ionic", "angular", "firebase", "typescript", "sass"],
    transversal: ["git", "html", "css", "node"],
    orden: 9,
  },
  {
    slug: "cinemateca",
    image: cinemateca,
    link: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    orden: 1,
  },
  {
    slug: "pulse",
    image: pulse,
    link: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    orden: 2,
  },
  {
    slug: "marvel-world",
    image: marvelworld,
    link: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    orden: 3,
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
