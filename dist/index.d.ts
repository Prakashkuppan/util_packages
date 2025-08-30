/**
 * Format a date according to the specified format
 * @param date - Date to format (Date object or date string)
 * @param format - Format string (default: "DD MMM YYYY")
 * @returns Formatted date string
 */
declare function formatDate$1(date: Date | string, format?: string): string;
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

/**
 * Debounce a function call
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
declare function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void;
/**
 * Throttle a function call
 * @param fn - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 */
declare function throttle<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void;

/**
 * Copy text to clipboard
 * @param text - Text to copy
 * @returns Promise that resolves when text is copied
 */
declare function copyToClipboard(text: string): Promise<void>;
/**
 * Download content as a file
 * @param content - File content (string, Blob, or ArrayBuffer)
 * @param fileName - Name of the file to download
 * @param type - MIME type of the file
 */
declare function downloadFile(content: string | Blob | ArrayBuffer, fileName: string, type?: string): void;

/**
 * Array utility functions for common array operations
 */
/**
 * Chunks an array into smaller arrays of specified size
 */
declare function chunk<T>(array: T[], size: number): T[][];
/**
 * Removes duplicate values from an array
 */
declare function unique<T>(array: T[]): T[];
/**
 * Shuffles an array using Fisher-Yates algorithm
 */
declare function shuffle<T>(array: T[]): T[];
/**
 * Groups array items by a key function
 */
declare function groupBy<T, K extends string | number>(array: T[], keyFn: (item: T) => K): Record<K, T[]>;
/**
 * Flattens a nested array
 */
declare function flatten$1<T>(array: T[][]): T[];
/**
 * Finds the intersection of multiple arrays
 */
declare function intersection<T>(...arrays: T[][]): T[];
/**
 * Finds the difference between two arrays
 */
declare function difference<T>(array1: T[], array2: T[]): T[];
/**
 * Sorts an array by multiple criteria
 */
declare function sortBy<T>(array: T[], ...criteria: Array<keyof T | ((a: T, b: T) => number)>): T[];
/**
 * Creates a range array from start to end
 */
declare function range(start: number, end: number, step?: number): number[];
/**
 * Removes falsy values from an array
 */
declare function compact<T>(array: T[]): Exclude<T, null | undefined | false | 0 | ''>[];

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
declare function isEmpty$1(obj: any): boolean;
/**
 * Gets nested object property safely
 */
declare function get$1(obj: any, path: string, defaultValue?: any): any;
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
declare function invert$1(obj: Record<string, any>): Record<string, any>;
/**
 * Creates an object from key-value pairs
 */
declare function fromPairs(pairs: [string, any][]): Record<string, any>;
/**
 * Converts object to key-value pairs
 */
declare function toPairs(obj: Record<string, any>): [string, any][];

/**
 * Validation utility functions for common data validation
 */
/**
 * Validates email format
 */
declare function isEmail(email: string): boolean;
/**
 * Validates phone number format (basic)
 */
declare function isPhone(phone: string): boolean;
/**
 * Validates URL format
 */
declare function isURL(url: string): boolean;
/**
 * Validates if string contains only numbers
 */
declare function isNumeric(value: string): boolean;
/**
 * Validates if string contains only letters
 */
declare function isAlpha(value: string): boolean;
/**
 * Validates if string contains only letters and numbers
 */
declare function isAlphanumeric(value: string): boolean;
/**
 * Validates if value is a valid date
 */
declare function isDate(value: any): boolean;
/**
 * Validates if value is empty or null
 */
declare function isEmpty(value: any): boolean;
/**
 * Validates if value is a positive number
 */
declare function isPositive(value: number): boolean;
/**
 * Validates if value is a negative number
 */
declare function isNegative(value: number): boolean;
/**
 * Validates if value is an integer
 */
declare function isInteger(value: any): boolean;
/**
 * Validates if value is a valid credit card number (Luhn algorithm)
 */
declare function isCreditCard(value: string): boolean;
/**
 * Validates if value is a valid IPv4 address
 */
declare function isIPv4(value: string): boolean;
/**
 * Validates if value is a valid IPv6 address
 */
declare function isIPv6(value: string): boolean;
/**
 * Validates if value is a valid postal code (US format)
 */
declare function isPostalCode(value: string): boolean;
/**
 * Validates if value is a valid social security number (US format)
 */
declare function isSSN(value: string): boolean;

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
 * Network utility functions for HTTP requests and URL handling
 */
/**
 * HTTP request options interface
 */
interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: any;
    timeout?: number;
    credentials?: RequestCredentials;
}
/**
 * HTTP response interface
 */
interface HttpResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    ok: boolean;
}
/**
 * Makes an HTTP request
 */
declare function request<T = any>(url: string, options?: RequestOptions): Promise<HttpResponse<T>>;
/**
 * GET request helper
 */
declare function get<T = any>(url: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * POST request helper
 */
declare function post<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * PUT request helper
 */
declare function put<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * DELETE request helper
 */
declare function del<T = any>(url: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * PATCH request helper
 */
declare function patch<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * URL utility functions
 */
declare const url: {
    /**
     * Parses a URL and returns its components
     */
    parse(urlString: string): URL;
    /**
     * Builds a URL from components
     */
    build(base: string, params?: Record<string, any>): string;
    /**
     * Gets query parameters from a URL
     */
    getParams(urlString: string): Record<string, string>;
    /**
     * Adds query parameters to a URL
     */
    addParams(urlString: string, params: Record<string, any>): string;
    /**
     * Removes query parameters from a URL
     */
    removeParams(urlString: string, params: string[]): string;
    /**
     * Joins URL parts
     */
    join(...parts: string[]): string;
    /**
     * Checks if a URL is absolute
     */
    isAbsolute(urlString: string): boolean;
    /**
     * Checks if a URL is relative
     */
    isRelative(urlString: string): boolean;
};
/**
 * Query string utility functions
 */
declare const queryString: {
    /**
     * Parses a query string into an object
     */
    parse(query: string): Record<string, string>;
    /**
     * Stringifies an object into a query string
     */
    stringify(params: Record<string, any>): string;
};

/**
 * Math utility functions for common mathematical operations
 */
/**
 * Clamps a number between min and max values
 */
declare function clamp(value: number, min: number, max: number): number;
/**
 * Rounds a number to a specified number of decimal places
 */
declare function round(value: number, decimals?: number): number;
/**
 * Generates a random number between min and max (inclusive)
 */
declare function random(min: number, max: number): number;
/**
 * Generates a random float between min and max
 */
declare function randomFloat(min: number, max: number): number;
/**
 * Calculates the percentage of a value relative to a total
 */
declare function percentage(value: number, total: number): number;
/**
 * Calculates the percentage change between two values
 */
declare function percentageChange(oldValue: number, newValue: number): number;
/**
 * Formats a number with thousand separators
 */
declare function formatNumber(value: number, locale?: string): string;
/**
 * Calculates the factorial of a number
 */
declare function factorial(n: number): number;
/**
 * Calculates the greatest common divisor of two numbers
 */
declare function gcd(a: number, b: number): number;
/**
 * Calculates the least common multiple of two numbers
 */
declare function lcm(a: number, b: number): number;
/**
 * Checks if a number is prime
 */
declare function isPrime(n: number): boolean;
/**
 * Generates an array of prime numbers up to a limit
 */
declare function generatePrimes(limit: number): number[];
/**
 * Calculates the sum of an array of numbers
 */
declare function sum(numbers: number[]): number;
/**
 * Calculates the average of an array of numbers
 */
declare function average(numbers: number[]): number;
/**
 * Finds the minimum value in an array
 */
declare function min(numbers: number[]): number;
/**
 * Finds the maximum value in an array
 */
declare function max(numbers: number[]): number;
/**
 * Calculates the median of an array of numbers
 */
declare function median(numbers: number[]): number;
/**
 * Calculates the standard deviation of an array of numbers
 */
declare function standardDeviation(numbers: number[]): number;
/**
 * Converts degrees to radians
 */
declare function degreesToRadians(degrees: number): number;
/**
 * Converts radians to degrees
 */
declare function radiansToDegrees(radians: number): number;
/**
 * Calculates the distance between two points
 */
declare function distance(x1: number, y1: number, x2: number, y2: number): number;
/**
 * Linear interpolation between two values
 */
declare function lerp(start: number, end: number, t: number): number;
/**
 * Maps a value from one range to another
 */
declare function map(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number;

/**
 * Color utility functions for color manipulation and conversion
 */
/**
 * Converts a hex color to RGB
 */
declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
/**
 * Converts RGB values to hex
 */
declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * Converts RGB values to HSL
 */
declare function rgbToHsl(r: number, g: number, b: number): {
    h: number;
    s: number;
    l: number;
};
/**
 * Converts HSL values to RGB
 */
declare function hslToRgb(h: number, s: number, l: number): {
    r: number;
    g: number;
    b: number;
};
/**
 * Converts a hex color to HSL
 */
declare function hexToHsl(hex: string): {
    h: number;
    s: number;
    l: number;
} | null;
/**
 * Converts HSL values to hex
 */
declare function hslToHex(h: number, s: number, l: number): string;
/**
 * Calculates the luminance of a color
 */
declare function getLuminance(r: number, g: number, b: number): number;
/**
 * Calculates the contrast ratio between two colors
 */
declare function getContrastRatio(color1: string, color2: string): number;
/**
 * Checks if two colors have sufficient contrast for accessibility
 */
declare function hasSufficientContrast(color1: string, color2: string, ratio?: number): boolean;
/**
 * Lightens a color by a percentage
 */
declare function lighten(hex: string, percent: number): string;
/**
 * Darkens a color by a percentage
 */
declare function darken(hex: string, percent: number): string;
/**
 * Saturates a color by a percentage
 */
declare function saturate(hex: string, percent: number): string;
/**
 * Desaturates a color by a percentage
 */
declare function desaturate(hex: string, percent: number): string;
/**
 * Rotates the hue of a color by degrees
 */
declare function rotateHue(hex: string, degrees: number): string;
/**
 * Creates a complementary color
 */
declare function complementary(hex: string): string;
/**
 * Creates an analogous color palette
 */
declare function analogous(hex: string, count?: number): string[];
/**
 * Creates a monochromatic color palette
 */
declare function monochromatic(hex: string, count?: number): string[];
/**
 * Checks if a string is a valid hex color
 */
declare function isValidHex(hex: string): boolean;
/**
 * Generates a random hex color
 */
declare function randomHex(): string;
/**
 * Converts a color to grayscale
 */
declare function grayscale(hex: string): string;
/**
 * Inverts a color
 */
declare function invert(hex: string): string;

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
 * Async utility functions for handling promises and asynchronous operations
 */
/**
 * Delays execution for specified milliseconds
 */
declare function delay(ms: number): Promise<void>;
/**
 * Retries a function with exponential backoff
 */
declare function retry<T>(fn: () => Promise<T>, maxAttempts?: number, baseDelay?: number): Promise<T>;
/**
 * Executes multiple promises with concurrency limit
 */
declare function concurrent<T>(tasks: (() => Promise<T>)[], concurrency?: number): Promise<T[]>;
/**
 * Creates a promise that resolves after a timeout
 */
declare function timeout<T>(promise: Promise<T>, ms: number): Promise<T>;
/**
 * Executes a function and returns both result and execution time
 */
declare function measureTime<T>(fn: () => Promise<T>): Promise<{
    result: T;
    time: number;
}>;
/**
 * Creates a debounced async function
 */
declare function debounceAsync<T extends (...args: any[]) => Promise<any>>(fn: T, delay: number): (...args: Parameters<T>) => Promise<ReturnType<T>>;
/**
 * Creates a throttled async function
 */
declare function throttleAsync<T extends (...args: any[]) => Promise<any>>(fn: T, delay: number): (...args: Parameters<T>) => Promise<ReturnType<T>>;
/**
 * Executes promises in sequence
 */
declare function sequence<T>(tasks: (() => Promise<T>)[]): Promise<T[]>;
/**
 * Creates a promise that can be resolved/rejected externally
 */
declare function createDeferred<T>(): {
    promise: Promise<T>;
    resolve: (value: T) => void;
    reject: (reason?: any) => void;
};
/**
 * Executes a function with retry on specific errors
 */
declare function retryOnError<T>(fn: () => Promise<T>, shouldRetry: (error: Error) => boolean, maxAttempts?: number): Promise<T>;
/**
 * Creates a promise that resolves when a condition is met
 */
declare function waitFor(condition: () => boolean, checkInterval?: number, timeout?: number): Promise<void>;

/**
 * Crypto utility functions for hashing, encryption, and security
 */
/**
 * Generates a random string of specified length
 */
declare function randomString(length: number, charset?: string): string;
/**
 * Generates a random UUID v4
 */
declare function uuid(): string;
/**
 * Generates a random hex string
 */
declare function randomHexString(length: number): string;
/**
 * Creates a simple hash from a string
 */
declare function simpleHash(str: string): number;
/**
 * Creates an MD5 hash (using Web Crypto API if available)
 */
declare function md5(data: string): Promise<string>;
/**
 * Creates a SHA-256 hash
 */
declare function sha256(data: string): Promise<string>;
/**
 * Creates a SHA-512 hash
 */
declare function sha512(data: string): Promise<string>;
/**
 * Creates a HMAC-SHA256 signature
 */
declare function hmacSha256(data: string, key: string): Promise<string>;
/**
 * Encodes a string to base64
 */
declare function base64Encode(str: string): string;
/**
 * Decodes a base64 string
 */
declare function base64Decode(str: string): string;
/**
 * Encodes a string to base64 URL-safe format
 */
declare function base64UrlEncode(str: string): string;
/**
 * Decodes a base64 URL-safe string
 */
declare function base64UrlDecode(str: string): string;
/**
 * Generates a secure password with specified criteria
 */
declare function generatePassword(options?: {
    length?: number;
    includeUppercase?: boolean;
    includeLowercase?: boolean;
    includeNumbers?: boolean;
    includeSymbols?: boolean;
}): string;
/**
 * Checks password strength
 */
declare function checkPasswordStrength(password: string): {
    score: number;
    feedback: string[];
};
/**
 * Creates a simple encryption key from a password
 */
declare function deriveKey(password: string, salt?: string): string;
/**
 * Simple XOR encryption (not cryptographically secure)
 */
declare function xorEncrypt(data: string, key: string): string;
/**
 * Simple XOR decryption (not cryptographically secure)
 */
declare function xorDecrypt(encryptedData: string, key: string): string;

/**
 * Time utility functions for timezone handling, time calculations, and formatting
 */
/**
 * Gets the current timestamp in milliseconds
 */
declare function now(): number;
/**
 * Gets the current timestamp in seconds
 */
declare function nowSeconds(): number;
/**
 * Formats a timestamp as a relative time string
 */
declare function formatRelativeTime(timestamp: number | Date, now?: number | Date): string;
/**
 * Formats a timestamp as a human-readable date string
 */
declare function formatDate(timestamp: number | Date, format?: string): string;
/**
 * Gets the start of a day (midnight)
 */
declare function startOfDay(date?: Date): Date;
/**
 * Gets the end of a day (23:59:59.999)
 */
declare function endOfDay(date?: Date): Date;
/**
 * Gets the start of a week (Sunday)
 */
declare function startOfWeek(date?: Date): Date;
/**
 * Gets the end of a week (Saturday)
 */
declare function endOfWeek(date?: Date): Date;
/**
 * Gets the start of a month
 */
declare function startOfMonth(date?: Date): Date;
/**
 * Gets the end of a month
 */
declare function endOfMonth(date?: Date): Date;
/**
 * Adds time to a date
 */
declare function addTime(date: Date, amount: number, unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date;
/**
 * Subtracts time from a date
 */
declare function subtractTime(date: Date, amount: number, unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date;
/**
 * Gets the difference between two dates
 */
declare function getTimeDifference(date1: Date, date2: Date, unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days'): number;
/**
 * Checks if a date is today
 */
declare function isToday(date: Date): boolean;
/**
 * Checks if a date is yesterday
 */
declare function isYesterday(date: Date): boolean;
/**
 * Checks if a date is tomorrow
 */
declare function isTomorrow(date: Date): boolean;
/**
 * Checks if a date is in the past
 */
declare function isPast(date: Date): boolean;
/**
 * Checks if a date is in the future
 */
declare function isFuture(date: Date): boolean;
/**
 * Gets the timezone offset in minutes
 */
declare function getTimezoneOffset(date?: Date): number;
/**
 * Gets the timezone name
 */
declare function getTimezoneName(): string;
/**
 * Converts a date to a different timezone
 */
declare function convertTimezone(date: Date, targetTimezone: string): Date;
/**
 * Gets the number of days in a month
 */
declare function getDaysInMonth(year: number, month: number): number;
/**
 * Checks if a year is a leap year
 */
declare function isLeapYear(year: number): boolean;
/**
 * Gets the day of the year (1-366)
 */
declare function getDayOfYear(date: Date): number;
/**
 * Gets the week of the year (1-53)
 */
declare function getWeekOfYear(date: Date): number;
/**
 * Formats a duration in milliseconds to a human-readable string
 */
declare function formatDuration(ms: number): string;
/**
 * Parses a duration string (e.g., "2h 30m") to milliseconds
 */
declare function parseDuration(duration: string): number;

export { addTime, analogous, average, base64Decode, base64Encode, base64UrlDecode, base64UrlEncode, capitalize, checkPasswordStrength, chunk, clamp, compact, complementary, concurrent, convertTimezone, cookies, copyToClipboard, createDeferred, darken, debounce, debounceAsync, deepClone, deepMerge, degreesToRadians, del, delay, deriveKey, desaturate, difference, distance, downloadFile, endOfDay, endOfMonth, endOfWeek, factorial, flatten$1 as flatten, flatten as flattenObject, formatDate$1 as formatDate, formatDuration, formatFileSize, formatNumber, formatRelativeTime, formatDate as formatTimeDate, fromPairs, gcd, generatePassword, generatePrimes, generateUniqueFilename, getContrastRatio, getDayOfYear, getDaysInMonth, getDirectory, getFileCategory, getFileExtension, getFilename, getLuminance, getMimeType, get$1 as getObject, getTimeDifference, getTimezoneName, getTimezoneOffset, getWeekOfYear, grayscale, groupBy, hasSufficientContrast, hexToHsl, hexToRgb, hmacSha256, hslToHex, hslToRgb, get as httpGet, intersection, invert, invert$1 as invertObject, isAbsolutePath, isAlpha, isAlphanumeric, isArchive, isAudio, isCreditCard, isDate, isDocument, isEmail, isEmpty$1 as isEmpty, isEmpty as isEmptyValue, isExecutable, isFuture, isIPv4, isIPv6, isImage, isInteger, isLeapYear, isNegative, isNumeric, isPast, isPhone, isPositive, isPostalCode, isPrime, isRelativePath, isSSN, isToday, isTomorrow, isURL, isValidFilename, isValidHex, isVideo, isYesterday, joinPath, lcm, lerp, lighten, localStorage, map, max, md5, measureTime, median, min, monochromatic, normalizePath, now, nowSeconds, omit, parseDuration, patch, percentage, percentageChange, pick, post, put, queryString, radiansToDegrees, random, randomFloat, randomHex, randomHexString, randomString, range, removeFileExtension, request, retry, retryOnError, rgbToHex, rgbToHsl, rotateHue, round, sanitizeFilename, saturate, sequence, sessionStorage, set, sha256, sha512, shuffle, simpleHash, slugify, sortBy, standardDeviation, startOfDay, startOfMonth, startOfWeek, subtractTime, sum, throttle, throttleAsync, timeAgo, timeout, toPairs, unique, url, uuid, waitFor, xorDecrypt, xorEncrypt };
