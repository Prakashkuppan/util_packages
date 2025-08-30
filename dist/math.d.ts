/**
 * Math utility functions for common mathematical operations
 */
/**
 * Clamps a number between min and max values
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Rounds a number to a specified number of decimal places
 */
export declare function round(value: number, decimals?: number): number;
/**
 * Generates a random number between min and max (inclusive)
 */
export declare function random(min: number, max: number): number;
/**
 * Generates a random float between min and max
 */
export declare function randomFloat(min: number, max: number): number;
/**
 * Calculates the percentage of a value relative to a total
 */
export declare function percentage(value: number, total: number): number;
/**
 * Calculates the percentage change between two values
 */
export declare function percentageChange(oldValue: number, newValue: number): number;
/**
 * Formats a number with thousand separators
 */
export declare function formatNumber(value: number, locale?: string): string;
/**
 * Formats a number as currency
 */
export declare function formatCurrency(value: number, currency?: string, locale?: string): string;
/**
 * Calculates the factorial of a number
 */
export declare function factorial(n: number): number;
/**
 * Calculates the greatest common divisor of two numbers
 */
export declare function gcd(a: number, b: number): number;
/**
 * Calculates the least common multiple of two numbers
 */
export declare function lcm(a: number, b: number): number;
/**
 * Checks if a number is prime
 */
export declare function isPrime(n: number): boolean;
/**
 * Generates an array of prime numbers up to a limit
 */
export declare function generatePrimes(limit: number): number[];
/**
 * Calculates the sum of an array of numbers
 */
export declare function sum(numbers: number[]): number;
/**
 * Calculates the average of an array of numbers
 */
export declare function average(numbers: number[]): number;
/**
 * Finds the minimum value in an array
 */
export declare function min(numbers: number[]): number;
/**
 * Finds the maximum value in an array
 */
export declare function max(numbers: number[]): number;
/**
 * Calculates the median of an array of numbers
 */
export declare function median(numbers: number[]): number;
/**
 * Calculates the standard deviation of an array of numbers
 */
export declare function standardDeviation(numbers: number[]): number;
/**
 * Converts degrees to radians
 */
export declare function degreesToRadians(degrees: number): number;
/**
 * Converts radians to degrees
 */
export declare function radiansToDegrees(radians: number): number;
/**
 * Calculates the distance between two points
 */
export declare function distance(x1: number, y1: number, x2: number, y2: number): number;
/**
 * Linear interpolation between two values
 */
export declare function lerp(start: number, end: number, t: number): number;
/**
 * Maps a value from one range to another
 */
export declare function map(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
//# sourceMappingURL=math.d.ts.map