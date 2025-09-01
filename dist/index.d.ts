/**
 * Object utility functions for common object operations
 */
/**
 * Creates a deep clone of an object
 */
declare function deepClone<T>(obj: T): T;
/**
 * Merges multiple objects deeply
 */
declare function deepMerge<T extends Record<string, any>>(...objects: T[]): T;
/**
 * Picks specified keys from an object
 */
declare function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
/**
 * Omits specified keys from an object
 */
declare function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
/**
 * Checks if an object is empty
 */
declare function isEmpty(obj: any): boolean;
/**
 * Gets nested object property safely
 */
declare function get(obj: any, path: string, defaultValue?: any): any;
/**
 * Sets nested object property safely
 */
declare function set(obj: any, path: string, value: any): any;
/**
 * Flattens a nested object
 */
declare function flatten(obj: any, prefix?: string): Record<string, any>;
/**
 * Inverts object keys and values
 */
declare function invert(obj: Record<string, any>): Record<string, any>;
/**
 * Creates an object from key-value pairs
 */
declare function fromPairs(pairs: [string, any][]): Record<string, any>;
/**
 * Converts object to key-value pairs
 */
declare function toPairs(obj: Record<string, any>): [string, any][];

/**
 * Storage utility functions for localStorage and sessionStorage
 */
/**
 * Local storage wrapper with error handling
 */
declare const localStorage: {
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
declare const sessionStorage: {
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
declare const cookies: {
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

/**
 * File utility functions for file handling and manipulation
 */
/**
 * Formats file size in human-readable format
 */
declare function formatFileSize(bytes: number): string;
/**
 * Gets file extension from filename
 */
declare function getFileExtension(filename: string): string;
/**
 * Removes file extension from filename
 */
declare function removeFileExtension(filename: string): string;
/**
 * Gets filename without path
 */
declare function getFilename(path: string): string;
/**
 * Gets directory path from full path
 */
declare function getDirectory(path: string): string;
/**
 * Normalizes file path (removes duplicate slashes, resolves . and ..)
 */
declare function normalizePath(path: string): string;
/**
 * Joins path segments
 */
declare function joinPath(...segments: string[]): string;
/**
 * Checks if path is absolute
 */
declare function isAbsolutePath(path: string): boolean;
/**
 * Checks if path is relative
 */
declare function isRelativePath(path: string): boolean;
/**
 * MIME type detection based on file extension
 */
declare function getMimeType(filename: string): string;
/**
 * Checks if file is an image
 */
declare function isImage(filename: string): boolean;
/**
 * Checks if file is a video
 */
declare function isVideo(filename: string): boolean;
/**
 * Checks if file is an audio file
 */
declare function isAudio(filename: string): boolean;
/**
 * Checks if file is a document
 */
declare function isDocument(filename: string): boolean;
/**
 * Checks if file is an archive
 */
declare function isArchive(filename: string): boolean;
/**
 * Checks if file is executable
 */
declare function isExecutable(filename: string): boolean;
/**
 * Sanitizes filename (removes invalid characters)
 */
declare function sanitizeFilename(filename: string): string;
/**
 * Generates a unique filename
 */
declare function generateUniqueFilename(originalName: string, suffix?: string): string;
/**
 * Checks if filename is valid
 */
declare function isValidFilename(filename: string): boolean;
/**
 * Gets file category based on extension
 */
declare function getFileCategory(filename: string): string;

/**
 * Format a date according to the specified format
 * @param date - Date to format (Date object or date string)
 * @param format - Format string (default: "DD MMM YYYY")
 * @returns Formatted date string
 */
declare function formatDate(date: Date | string, format?: string): string;
/**
 * Get a human-readable time ago string
 * @param date - Date to calculate time ago from
 * @returns Time ago string
 */
declare function timeAgo(date: Date | string): string;

/**
 * Capitalize the first letter of a string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
declare function capitalize(str: string): string;
/**
 * Convert a string to a URL-friendly slug
 * @param str - String to convert to slug
 * @returns Slugified string
 */
declare function slugify(str: string): string;

export { capitalize, cookies, deepClone, deepMerge, flatten as flattenObject, formatDate, formatFileSize, fromPairs, generateUniqueFilename, getDirectory, getFileCategory, getFileExtension, getFilename, getMimeType, get as getObject, invert as invertObject, isAbsolutePath, isArchive, isAudio, isDocument, isEmpty, isExecutable, isImage, isRelativePath, isValidFilename, isVideo, joinPath, localStorage, normalizePath, omit, pick, removeFileExtension, sanitizeFilename, sessionStorage, set, slugify, timeAgo, toPairs };
