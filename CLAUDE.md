# Portfolio de Pablo Mysskoski Ocampos

Portfolio personal bilingüe (español / inglés) en Astro 5 + Tailwind 4.
Desplegado en Netlify desde `main`: cada push a `main` publica.

- Producción: https://portfolio-pabl0sk1.netlify.app
- El repositorio es **público**: no subir aquí datos personales que no estén ya
  en el sitio (el teléfono, por ejemplo, no está publicado en la web).

## Comandos

```bash
pnpm dev        # desarrollo
pnpm build      # build de producción a dist/
pnpm preview    # sirve dist/ para revisar el build real
npx astro check # tipos y diagnósticos (debe dar 0 errores antes de commitear)
```

Se usa **pnpm**. Hubo un momento con tres lockfiles conviviendo (bun,
npm, pnpm) y cada `install` daba un árbol distinto; ahora solo hay
`pnpm-lock.yaml`.

## Estructura

```
src/
  consts.ts              Fuente única de contacto y URLs del sitio
  i18n/
    ui.ts                Textos de interfaz (es / en)
    content.ts           Contenido largo: experiencia, proyectos, sobre mí
    utils.ts             getLangFromUrl, useTranslations, localizePath...
  components/
    HomePage.astro       Cuerpo de la portada, compartido por ambos idiomas
    Container.astro      Renderiza <section id> con scroll-m-20
  layouts/Layout.astro   <head>, SEO, tema, área de scroll y scrollbar
  pages/
    index|thanks|404     Español, en la raíz
    en/                  Inglés, mismas páginas
```

**El marcado no se duplica entre idiomas.** Cada componente detecta el idioma
con `getLangFromUrl(Astro.url)` y saca los textos del diccionario. Para añadir
un idioma: una entrada en `ui.ts` y `content.ts`, y una carpeta en `pages/`.

**Las URLs de contacto salen siempre de `consts.ts`.** Antes estaban escritas a
mano en cada componente y llegó a haber dos LinkedIn distintos, uno roto.

## Decisiones que no son obvias

Cada una de estas resuelve un bug concreto. Cambiarlas sin leer el porqué
reintroduce el problema.

### El scroll vive en `#scroll-area`, no en el `<body>`

`margin-top` en `::-webkit-scrollbar-track` **solo lo respeta Chrome en
contenedores con overflow propio**. En la barra del documento el navegador la
pinta a lo alto completo de la ventana y no hay CSS que la recorte. Por eso la
página scrollea dentro de `#scroll-area`.

El contenedor ocupa la ventana entera (`inset: 0`) y el hueco inicial lo da su
`padding-top`, **no** su posición. Si se cambia a `top: var(--header-h)` la
barra también queda bien, pero el contenido deja de pasar por detrás del header
y se pierde el efecto cristal del `backdrop-blur`.

Como el scroll no es el de la ventana, el script del header usa `scroller`
(el contenedor) y no `window.scrollY` para el resaltado, el "final de página" y
el botón de inicio.

`--header-h` la fija el script con el alto real del header, así el recorte se
ajusta solo en cada breakpoint. Los valores en CSS son solo para evitar un
salto durante la carga.

### El resaltado del menú se calcula por geometría, no con IntersectionObserver

Había un `threshold: 0.5`, que exige tener visible la mitad de la sección a la
vez. Una sección de 3966 px no puede ocupar la mitad de una pantalla de 844 px,
así que en móvil no se disparaba nunca y fallaban 3 de 5 secciones.

Además, la línea de detección tiene que quedar **por debajo** del punto donde
aterriza la sección al pulsar un enlace (su `scroll-margin-top`). Si no, queda
resaltada la anterior hasta que sigas bajando.

### Firefox y `::-webkit-scrollbar` no pueden convivir

Desde Chrome 121, declarar `scrollbar-width` **desactiva por completo** las
reglas `::-webkit-scrollbar`. Por eso las propiedades de Firefox van aisladas
en `@supports not selector(::-webkit-scrollbar)`.

### El tema se aplica en un script bloqueante del `<head>`

Si se difiere, la página parpadea en claro antes de pasar a oscuro.

El tema es **por clase** (`html.dark`), no por `prefers-color-scheme`. Para
imágenes que cambian con el tema hay que usar dos `<img>` con `dark:hidden` /
`hidden dark:block` (ver el logo de ELBRUX en `ExperienceItem.astro`).
`<picture>` con media queries **no funcionaría**: no ve la clase.

### Modelo 3D

- El `.glb` está comprimido con **Draco**, no con Meshopt: `model-viewer` trae
  ubicación por defecto para el decoder de Draco pero **no incluye ninguno para
  Meshopt**, y el modelo no cargaba.
- El decoder se aloja en `public/draco/` en vez de bajarlo de `gstatic.com`.
- `model-viewer` está en `optimizeDeps.exclude`: el pre-bundling de Vite se
  atraganta con él y `astro dev` devuelve 504.
- `tsconfig.json` excluye `public/`: si no, TypeScript intenta analizar los
  560 KB de JavaScript de Emscripten del decoder y agota la memoria de
  `astro check`.

### Tooltips del header

Usan `group-has-[:focus-visible]` y no `group-focus-within`, porque al hacer
clic con el ratón el botón conserva el foco y el tooltip se quedaba pegado.

Los del grupo derecho llevan `right-0`: creciendo hacia la derecha se salían
del nav y provocaban scroll horizontal en pantallas chicas.

## Reglas de contenido

Decisiones de Pablo, no preferencias de estilo.

**Jerarquía del stack** — ordenada por evidencia real, no por gusto. Antes
Laravel y Next.js estaban por encima de Java pese a no aparecer en ningún
proyecto ni puesto.

| Grupo | Contenido |
|---|---|
| Stack principal | Python, FastAPI, React, Tailwind, Node.js, PostgreSQL, Docker, Git |
| También trabajo con | Java, Spring Boot, PHP, MySQL, Angular, Bootstrap, TypeScript, JavaScript, HTML, CSS, SQLite, Firebase |
| Conozco, en aprendizaje | Laravel, Next.js |

- **Sobre mí**: habla solo de Pablo. Sin nombres de empresas y sin el stack de
  aprendizaje. Eso va en Experiencia, que es donde corresponde.
- **Proyectos**: ninguno muestra repositorio ni etiqueta de estado. Solo
  Shop Easy enlaza a su sitio. Los repos de Faro, Timón y StockPro son privados
  y un enlace daría 404.
- **ELBRUX**: emprendimiento de **dos socios**. Se dice "socio", nunca "primo":
  la relación familiar es irrelevante y resta profesionalidad. En el portfolio
  el cargo es "Cofundador y Desarrollador Full Stack"; en el CV el rol técnico
  va primero, para que no domine la lectura de fundador.
- **Capturas de proyectos**: llevan difuminados los datos confidenciales de
  clientes (nombre de la empresa y neto de nómina en Faro, nombre del taller en
  Timón, cifras internas en BioTech, nombres de clientes finales en Atelier).
  Si se reemplaza una captura, revisar esto de nuevo.

## Iconos

Se generan desde el paquete `simple-icons` para que sean los logos reales.
**ChatGPT y Oracle están dibujados a mano** porque los retiraron de la
librería por marca registrada.

## Netlify

Hay **dos formularios**: `contact` (es) y `contact-en` (en), para que cada uno
redirija a su página de gracias. Netlify los detecta al construir; tras un
deploy conviene confirmar que aparecen los dos en el panel.

## Al probar con navegador

- Este entorno usa **barras de scroll superpuestas**, que ignoran por completo
  el estilo `::-webkit-scrollbar`. El aspecto de la barra no se puede verificar
  aquí, hay que mirarlo en un navegador de escritorio real.
- Al medir scroll, **esperar a que se detenga** en vez de usar un `setTimeout`
  fijo: con `scroll-behavior: smooth` un delay fijo mide a mitad de camino y da
  falsos negativos.
- `astro preview` cambia de puerto si el suyo está ocupado. Conviene cerrar los
  procesos de Node al terminar; llegó a haber diez servidores huérfanos y las
  pruebas apuntaban a uno viejo sin darse cuenta.

## Antes de commitear

1. `npx astro check` → 0 errores
2. `pnpm build` → 6 páginas
3. Si se tocó contenido, revisar que el CV siga en línea con el portfolio
   (ver `cv/README.md`)
