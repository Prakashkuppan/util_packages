/**
 * Storage utility functions for localStorage and sessionStorage
 */
/**
 * Local storage wrapper with error handling
 */
export declare const localStorage: {
    /**
     * Sets an item in localStorage
     */
    set(key: string, value: any): boolean;
    /**
     * Gets an item from localStorage
     */
    get<T>(key: string, defaultValue?: T): T | null;
    /**
     * Removes an item from localStorage
     */
    remove(key: string): boolean;
    /**
     * Clears all items from localStorage
     */
    clear(): boolean;
    /**
     * Gets all keys from localStorage
     */
    keys(): string[];
    /**
     * Checks if localStorage is available
     */
    isAvailable(): boolean;
};
/**
 * Session storage wrapper with error handling
 */
export declare const sessionStorage: {
    /**
     * Sets an item in sessionStorage
     */
    set(key: string, value: any): boolean;
    /**
     * Gets an item from sessionStorage
     */
    get<T>(key: string, defaultValue?: T): T | null;
    /**
     * Removes an item from sessionStorage
     */
    remove(key: string): boolean;
    /**
     * Clears all items from sessionStorage
     */
    clear(): boolean;
    /**
     * Gets all keys from sessionStorage
     */
    keys(): string[];
    /**
     * Checks if sessionStorage is available
     */
    isAvailable(): boolean;
};
/**
 * Cookie utility functions
 */
export declare const cookies: {
    /**
     * Sets a cookie
     */
    set(name: string, value: string, options?: {
        expires?: Date | number;
        path?: string;
        domain?: string;
        secure?: boolean;
        sameSite?: "strict" | "lax" | "none";
    }): void;
    /**
     * Gets a cookie value
     */
    get(name: string): string | null;
    /**
     * Removes a cookie
     */
    remove(name: string, options?: {
        path?: string;
        domain?: string;
    }): void;
};
//# sourceMappingURL=storage.d.ts.map