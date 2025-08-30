/**
 * Array utility functions for common array operations
 */

/**
 * Chunks an array into smaller arrays of specified size
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) return [];
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Removes duplicate values from an array
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Groups array items by a key function
 */
export function groupBy<T, K extends string | number>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return array.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<K, T[]>);
}

/**
 * Flattens a nested array
 */
export function flatten<T>(array: T[][]): T[] {
  return array.reduce((flat, item) => flat.concat(item), [] as T[]);
}

/**
 * Finds the intersection of multiple arrays
 */
export function intersection<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];
  
  return arrays.reduce((intersection, array) => 
    intersection.filter(item => array.includes(item))
  );
}

/**
 * Finds the difference between two arrays
 */
export function difference<T>(array1: T[], array2: T[]): T[] {
  return array1.filter(item => !array2.includes(item));
}

/**
 * Sorts an array by multiple criteria
 */
export function sortBy<T>(
  array: T[],
  ...criteria: Array<keyof T | ((a: T, b: T) => number)>
): T[] {
  return [...array].sort((a, b) => {
    for (const criterion of criteria) {
      if (typeof criterion === 'function') {
        const result = criterion(a, b);
        if (result !== 0) return result;
      } else {
        if (a[criterion] < b[criterion]) return -1;
        if (a[criterion] > b[criterion]) return 1;
      }
    }
    return 0;
  });
}

/**
 * Creates a range array from start to end
 */
export function range(start: number, end: number, step: number = 1): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * Removes falsy values from an array
 */
export function compact<T>(array: T[]): Exclude<T, null | undefined | false | 0 | ''>[] {
  return array.filter(Boolean) as Exclude<T, null | undefined | false | 0 | ''>[];
} 