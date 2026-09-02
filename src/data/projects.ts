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
import motorv8 from "../assets/projects/MotorV8.webp";
import stockpro from "../assets/projects/StockPro.webp";
import biotech from "../assets/projects/BioTech.webp";
import atelier from "../assets/projects/Atelier.webp";
import shopeasy from "../assets/projects/ShopEasy.webp";
import cinemateca from "../assets/projects/Cinemateca.webp";
import pulse from "../assets/projects/Pulse.webp";
import marvelworld from "../assets/projects/MarvelWorld.webp";
import nacar from "../assets/projects/Nacar.webp";
// La marca de cada sistema, sacada de su propio favicon o icono de aplicacion.
import faroLogo from "../assets/projects/logos/Faro.webp";
import motorv8Logo from "../assets/projects/logos/MotorV8.webp";
import stockproLogo from "../assets/projects/logos/StockPro.webp";
import biotechLogo from "../assets/projects/logos/BioTech.webp";
import shopeasyLogo from "../assets/projects/logos/ShopEasy.webp";
import cinematecaLogo from "../assets/projects/logos/Cinemateca.webp";
import pulseLogo from "../assets/projects/logos/Pulse.webp";
import marvelworldLogo from "../assets/projects/logos/MarvelWorld.webp";
import nacarLogo from "../assets/projects/logos/Nacar.webp";
import atelierLogo from "../assets/projects/logos/Atelier.webp";

export interface Project {
  /** identifica la tarjeta en el DOM y en la URL del filtro */
  slug: string;
  image: ImageMetadata;
  /** Marca del sistema, sobre chapa blanca en la pieza y en el panel. */
  logo: ImageMetadata;
  /** sitio publico, vacio si no lo tiene */
  link: string;
  /**
   * Entregado como ELBRUX, la marca propia. Marca la pieza en el mosaico.
   * Solo Faro y MotorV8: StockPro se entrego aparte, aunque comparta cliente
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
  /** Ano en que se construyo. Se muestra en la pieza y en el panel. */
  year: number;
  /**
   * Posicion en el mosaico. El array conserva el orden de i18n/content.ts, que
   * empareja por indice; la seccion ordena por `orden` despues de juntar ambos.
   *
   * Va de lo mas reciente a lo mas antiguo. No se deriva de `year` porque
   * dentro de un mismo ano el orden lo decide que se quiere ensenar primero,
   * no la fecha.
   *
   * El ancho de la pieza no se escribe aqui: lo reparte anchos() en
   * data/mosaico.ts segun cuantas haya a la vista, que con el filtro por
   * tecnologia no son siempre las diez.
   */
  orden: number;
}

export const PROJECTS: Project[] = [
  {
    slug: "faro",
    image: faro,
    logo: faroLogo,
    link: "",
    elbrux: true,
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    year: 2026,
    orden: 7,
  },
  {
    slug: "motorv8",
    image: motorv8,
    logo: motorv8Logo,
    link: "",
    elbrux: true,
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    year: 2026,
    orden: 6,
  },
  {
    slug: "stockpro",
    image: stockpro,
    logo: stockproLogo,
    link: "",
    tags: ["python", "tkinter", "sqlite"],
    transversal: ["git"],
    year: 2026,
    orden: 5,
  },
  {
    slug: "biotech",
    image: biotech,
    logo: biotechLogo,
    link: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap", "docker"],
    transversal: ["git", "html", "css", "node"],
    year: 2025,
    orden: 8,
  },
  {
    slug: "atelier",
    image: atelier,
    logo: atelierLogo,
    link: "",
    tags: ["java", "springboot", "postgresql", "react", "javascript", "bootstrap"],
    transversal: ["git", "html", "css", "node"],
    year: 2023,
    orden: 10,
  },
  {
    slug: "shopeasy",
    image: shopeasy,
    logo: shopeasyLogo,
    link: "https://shopeasy-app.web.app/",
    tags: ["ionic", "angular", "firebase", "typescript", "sass"],
    transversal: ["git", "html", "css", "node"],
    year: 2024,
    orden: 9,
  },
  {
    slug: "cinemateca",
    image: cinemateca,
    logo: cinematecaLogo,
    link: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    year: 2026,
    orden: 3,
  },
  {
    slug: "pulse",
    image: pulse,
    logo: pulseLogo,
    link: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    year: 2026,
    orden: 2,
  },
  {
    slug: "marvel-world",
    image: marvelworld,
    logo: marvelworldLogo,
    link: "",
    tags: ["python", "fastapi", "postgresql", "react", "tailwind", "docker"],
    transversal: ["git", "html", "css", "node"],
    year: 2026,
    orden: 4,
  },
  {
    slug: "nacar",
    image: nacar,
    logo: nacarLogo,
    link: "",
    tags: ["next", "react", "typescript", "prisma", "sqlite", "tailwind"],
    transversal: ["git", "html", "css", "node"],
    year: 2026,
    orden: 1,
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
