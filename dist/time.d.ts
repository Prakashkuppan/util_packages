/**
 * Time utility functions for timezone handling, time calculations, and formatting
 */
/**
 * Gets the current timestamp in milliseconds
 */
export declare function now(): number;
/**
 * Gets the current timestamp in seconds
 */
export declare function nowSeconds(): number;
/**
 * Formats a timestamp as a relative time string
 */
export declare function formatRelativeTime(timestamp: number | Date, now?: number | Date): string;
/**
 * Formats a timestamp as a human-readable date string
 */
export declare function formatDate(timestamp: number | Date, format?: string): string;
/**
 * Gets the start of a day (midnight)
 */
export declare function startOfDay(date?: Date): Date;
/**
 * Gets the end of a day (23:59:59.999)
 */
export declare function endOfDay(date?: Date): Date;
/**
 * Gets the start of a week (Sunday)
 */
export declare function startOfWeek(date?: Date): Date;
/**
 * Gets the end of a week (Saturday)
 */
export declare function endOfWeek(date?: Date): Date;
/**
 * Gets the start of a month
 */
export declare function startOfMonth(date?: Date): Date;
/**
 * Gets the end of a month
 */
export declare function endOfMonth(date?: Date): Date;
/**
 * Adds time to a date
 */
export declare function addTime(date: Date, amount: number, unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date;
/**
 * Subtracts time from a date
 */
export declare function subtractTime(date: Date, amount: number, unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date;
/**
 * Gets the difference between two dates
 */
export declare function getTimeDifference(date1: Date, date2: Date, unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days'): number;
/**
 * Checks if a date is today
 */
export declare function isToday(date: Date): boolean;
/**
 * Checks if a date is yesterday
 */
export declare function isYesterday(date: Date): boolean;
/**
 * Checks if a date is tomorrow
 */
export declare function isTomorrow(date: Date): boolean;
/**
 * Checks if a date is in the past
 */
export declare function isPast(date: Date): boolean;
/**
 * Checks if a date is in the future
 */
export declare function isFuture(date: Date): boolean;
/**
 * Gets the timezone offset in minutes
 */
export declare function getTimezoneOffset(date?: Date): number;
/**
 * Gets the timezone name
 */
export declare function getTimezoneName(): string;
/**
 * Converts a date to a different timezone
 */
export declare function convertTimezone(date: Date, targetTimezone: string): Date;
/**
 * Gets the number of days in a month
 */
export declare function getDaysInMonth(year: number, month: number): number;
/**
 * Checks if a year is a leap year
 */
export declare function isLeapYear(year: number): boolean;
/**
 * Gets the day of the year (1-366)
 */
export declare function getDayOfYear(date: Date): number;
/**
 * Gets the week of the year (1-53)
 */
export declare function getWeekOfYear(date: Date): number;
/**
 * Formats a duration in milliseconds to a human-readable string
 */
export declare function formatDuration(ms: number): string;
/**
 * Parses a duration string (e.g., "2h 30m") to milliseconds
 */
export declare function parseDuration(duration: string): number;
//# sourceMappingURL=time.d.ts.map