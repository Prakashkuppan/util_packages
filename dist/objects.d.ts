/**
 * Object utility functions for common object operations
 */
/**
 * Creates a deep clone of an object
 */
export declare function deepClone<T>(obj: T): T;
/**
 * Merges multiple objects deeply
 */
export declare function deepMerge<T extends Record<string, any>>(...objects: T[]): T;
/**
 * Picks specified keys from an object
 */
export declare function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
/**
 * Omits specified keys from an object
 */
export declare function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
/**
 * Checks if an object is empty
 */
export declare function isEmpty(obj: any): boolean;
/**
 * Gets nested object property safely
 */
export declare function get(obj: any, path: string, defaultValue?: any): any;
/**
 * Sets nested object property safely
 */
export declare function set(obj: any, path: string, value: any): any;
/**
 * Flattens a nested object
 */
export declare function flatten(obj: any, prefix?: string): Record<string, any>;
/**
 * Inverts object keys and values
 */
export declare function invert(obj: Record<string, any>): Record<string, any>;
/**
 * Creates an object from key-value pairs
 */
export declare function fromPairs(pairs: [string, any][]): Record<string, any>;
/**
 * Converts object to key-value pairs
 */
export declare function toPairs(obj: Record<string, any>): [string, any][];
//# sourceMappingURL=objects.d.ts.map