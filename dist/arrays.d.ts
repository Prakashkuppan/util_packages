/**
 * Array utility functions for common array operations
 */
/**
 * Chunks an array into smaller arrays of specified size
 */
export declare function chunk<T>(array: T[], size: number): T[][];
/**
 * Removes duplicate values from an array
 */
export declare function unique<T>(array: T[]): T[];
/**
 * Shuffles an array using Fisher-Yates algorithm
 */
export declare function shuffle<T>(array: T[]): T[];
/**
 * Groups array items by a key function
 */
export declare function groupBy<T, K extends string | number>(array: T[], keyFn: (item: T) => K): Record<K, T[]>;
/**
 * Flattens a nested array
 */
export declare function flatten<T>(array: T[][]): T[];
/**
 * Finds the intersection of multiple arrays
 */
export declare function intersection<T>(...arrays: T[][]): T[];
/**
 * Finds the difference between two arrays
 */
export declare function difference<T>(array1: T[], array2: T[]): T[];
/**
 * Sorts an array by multiple criteria
 */
export declare function sortBy<T>(array: T[], ...criteria: Array<keyof T | ((a: T, b: T) => number)>): T[];
/**
 * Creates a range array from start to end
 */
export declare function range(start: number, end: number, step?: number): number[];
/**
 * Removes falsy values from an array
 */
export declare function compact<T>(array: T[]): Exclude<T, null | undefined | false | 0 | ''>[];
//# sourceMappingURL=arrays.d.ts.map