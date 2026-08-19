/**
 * Reparto de anchos del mosaico de proyectos.
 *
 * Vive aparte de data/projects.ts porque lo usa tambien el script del
 * navegador: projects.ts importa las capturas con astro:assets, y arrastrarlo
 * al cliente se llevaria las imagenes al bundle.
 */

/** Columnas del mosaico en escritorio */
export const COLUMNAS = 3;

/**
 * Ancho, en columnas, de cada una de las `n` piezas visibles.
 *
 * Las filas son de dos piezas, una ancha y otra estrecha, alternando el lado
 * para que el mosaico no quede en escalera. Con un numero impar de piezas la
 * ultima fila lleva tres iguales: es lo unico que cierra las tres columnas sin
 * dejar hueco ni una pieza suelta.
 *
 * Se calcula en vez de venir escrito en cada proyecto porque el filtro por
 * tecnologia cambia cuantas piezas hay a la vista. Con anchos fijos, filtrar
 * obligaba a mandarlas todas a una columna.
 */
export function anchos(n: number): (1 | 2)[] {
  // con n impar las tres ultimas van a su propia fila; el resto, de dos en dos
  const enPares = n % 2 === 0 ? n : Math.max(n - COLUMNAS, 0);
  const reparto: (1 | 2)[] = [];

  for (let i = 0; i < enPares; i += 2) {
    const anchaPrimero = (i / 2) % 2 === 0;
    reparto.push(anchaPrimero ? 2 : 1, anchaPrimero ? 1 : 2);
  }

  // la fila de tres del final, y el caso de una sola pieza filtrada
  while (reparto.length < n) reparto.push(1);

  return reparto;
}
