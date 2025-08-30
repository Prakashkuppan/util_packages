/**
 * Object utility functions for common object operations
 */

/**
 * Creates a deep clone of an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as T;
  if (typeof obj === 'object') {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  return obj;
}

/**
 * Merges multiple objects deeply
 */
export function deepMerge<T extends Record<string, any>>(...objects: T[]): T {
  if (objects.length === 0) return {} as T;
  if (objects.length === 1) return objects[0];

  return objects.reduce((result, obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          result[key] = deepMerge((result[key] as Record<string, any>) || {}, obj[key] as Record<string, any>);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }, {} as T);
}

/**
 * Picks specified keys from an object
 */
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Omits specified keys from an object
 */
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj } as Omit<T, K>;
  keys.forEach(key => {
    delete (result as any)[key];
  });
  return result;
}

/**
 * Checks if an object is empty
 */
export function isEmpty(obj: any): boolean {
  if (obj == null) return true;
  if (Array.isArray(obj) || typeof obj === 'string') return obj.length === 0;
  if (obj instanceof Map || obj instanceof Set) return obj.size === 0;
  if (obj && typeof obj === 'object') return Object.keys(obj).length === 0;
  return false;
}

/**
 * Gets nested object property safely
 */
export function get(obj: any, path: string, defaultValue?: any): any {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result == null || typeof result !== 'object') {
      return defaultValue;
    }
    result = result[key];
  }
  
  return result !== undefined ? result : defaultValue;
}

/**
 * Sets nested object property safely
 */
export function set(obj: any, path: string, value: any): any {
  const keys = path.split('.');
  const result = { ...obj };
  let current = result;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
  return result;
}

/**
 * Flattens a nested object
 */
export function flatten(obj: any, prefix = ''): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        Object.assign(result, flatten(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  
  return result;
}

/**
 * Inverts object keys and values
 */
export function invert(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}

/**
 * Creates an object from key-value pairs
 */
export function fromPairs(pairs: [string, any][]): Record<string, any> {
  const result: Record<string, any> = {};
  pairs.forEach(([key, value]) => {
    result[key] = value;
  });
  return result;
}

/**
 * Converts object to key-value pairs
 */
export function toPairs(obj: Record<string, any>): [string, any][] {
  return Object.entries(obj);
} 