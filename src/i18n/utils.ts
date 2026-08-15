import { ui, DEFAULT_LANG, type Lang, type UIKey } from "./ui";

/** Saca el idioma de la URL: "/en/..." es ingles, cualquier otra cosa espanol. */
export function getLangFromUrl(url: URL): Lang {
  const [, segmento] = url.pathname.split("/");
  return segmento === "en" ? "en" : DEFAULT_LANG;
}

/** Devuelve la funcion de traduccion para un idioma. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[DEFAULT_LANG][key];
  };
}

/**
 * Prefija una ruta con el idioma. El espanol vive en la raiz, asi que solo
 * el ingles lleva prefijo: ruta("/#stack", "en") -> "/en/#stack"
 */
export function localizePath(path: string, lang: Lang): string {
  const limpia = path.startsWith("/") ? path : `/${path}`;
  return lang === DEFAULT_LANG ? limpia : `/${lang}${limpia}`;
}

/** El idioma contrario, para el boton de cambio. */
export function otherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}

/**
 * Rutas cuyo segmento se traduce, sin el prefijo de idioma. Ahora mismo no hay
 * ninguna, pero el mecanismo se queda: sin el, una pagina como /proyectos/faro
 * llevaria a /en/proyectos/faro al cambiar de idioma, que no existe.
 */
const RUTAS_EQUIVALENTES: Record<Lang, string>[] = [];

/**
 * Version localizada de una ruta, teniendo en cuenta los segmentos que se
 * traducen. La ruta de entrada se escribe siempre en su forma espanola.
 *   pathForLang("/thanks", "en") -> "/en/thanks"
 */
export function pathForLang(rutaEs: string, lang: Lang): string {
  const limpia = rutaEs.replace(/\/$/, "") || "/";
  const equivalente = RUTAS_EQUIVALENTES.find((r) => r.es === limpia)?.[lang];
  return localizePath(equivalente ?? limpia, lang);
}

/**
 * Misma pagina en el otro idioma, conservando la ruta.
 * "/en/thanks" -> "/thanks"   |   "/" -> "/en/"
 */
export function switchLangPath(pathname: string, lang: Lang): string {
  const sinPrefijo =
    (pathname.replace(/^\/en(?=\/|$)/, "") || "/").replace(/\/$/, "") || "/";
  const destino = otherLang(lang);

  const equivalente = RUTAS_EQUIVALENTES.find(
    (r) => r[lang] === sinPrefijo
  )?.[destino];

  return localizePath(equivalente ?? sinPrefijo, destino);
}

/** Codigo de idioma completo para og:locale y hreflang. */
export const LOCALE_TAG: Record<Lang, string> = {
  es: "es_PY",
  en: "en_US",
};

export const HREFLANG: Record<Lang, string> = {
  es: "es",
  en: "en",
};
