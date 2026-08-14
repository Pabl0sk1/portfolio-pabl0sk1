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
 * Misma pagina en el otro idioma, conservando la ruta.
 * "/en/thanks" -> "/thanks"   |   "/thanks" -> "/en/thanks"
 */
export function switchLangPath(pathname: string, lang: Lang): string {
  const sinPrefijo = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return localizePath(sinPrefijo, otherLang(lang));
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
