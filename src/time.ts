/**
 * Time utility functions for timezone handling, time calculations, and formatting
 */

/**
 * Gets the current timestamp in milliseconds
 */
export function now(): number {
  return Date.now();
}

/**
 * Gets the current timestamp in seconds
 */
export function nowSeconds(): number {
  return Math.floor(Date.now() / 1000);
}

/**
 * Formats a timestamp as a relative time string
 */
export function formatRelativeTime(timestamp: number | Date, now: number | Date = Date.now()): string {
  const time = timestamp instanceof Date ? timestamp.getTime() : timestamp;
  const current = now instanceof Date ? now.getTime() : now;
  const diff = current - time;
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  
  if (years > 0) return `${years} year${years === 1 ? '' : 's'} ago`;
  if (months > 0) return `${months} month${months === 1 ? '' : 's'} ago`;
  if (weeks > 0) return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  if (days > 0) return `${days} day${days === 1 ? '' : 's'} ago`;
  if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  if (minutes > 0) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  if (seconds > 0) return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
  
  return 'just now';
}

/**
 * Formats a timestamp as a human-readable date string
 */
export function formatDate(timestamp: number | Date, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
  const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
  
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  return format
    .replace('YYYY', year.toString())
    .replace('MM', month.toString().padStart(2, '0'))
    .replace('DD', day.toString().padStart(2, '0'))
    .replace('HH', hours.toString().padStart(2, '0'))
    .replace('mm', minutes.toString().padStart(2, '0'))
    .replace('ss', seconds.toString().padStart(2, '0'));
}

/**
 * Gets the start of a day (midnight)
 */
export function startOfDay(date: Date = new Date()): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Gets the end of a day (23:59:59.999)
 */
export function endOfDay(date: Date = new Date()): Date {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Gets the start of a week (Sunday)
 */
export function startOfWeek(date: Date = new Date()): Date {
  const result = new Date(date);
  const day = result.getDay();
  result.setDate(result.getDate() - day);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Gets the end of a week (Saturday)
 */
export function endOfWeek(date: Date = new Date()): Date {
  const result = new Date(date);
  const day = result.getDay();
  result.setDate(result.getDate() + (6 - day));
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Gets the start of a month
 */
export function startOfMonth(date: Date = new Date()): Date {
  const result = new Date(date);
  result.setDate(1);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Gets the end of a month
 */
export function endOfMonth(date: Date = new Date()): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + 1, 0);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Adds time to a date
 */
export function addTime(date: Date, amount: number, unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date {
  const result = new Date(date);
  
  switch (unit) {
    case 'milliseconds':
      result.setTime(result.getTime() + amount);
      break;
    case 'seconds':
      result.setTime(result.getTime() + amount * 1000);
      break;
    case 'minutes':
      result.setTime(result.getTime() + amount * 60 * 1000);
      break;
    case 'hours':
      result.setTime(result.getTime() + amount * 60 * 60 * 1000);
      break;
    case 'days':
      result.setDate(result.getDate() + amount);
      break;
    case 'weeks':
      result.setDate(result.getDate() + amount * 7);
      break;
    case 'months':
      result.setMonth(result.getMonth() + amount);
      break;
    case 'years':
      result.setFullYear(result.getFullYear() + amount);
      break;
  }
  
  return result;
}

/**
 * Subtracts time from a date
 */
export function subtractTime(date: Date, amount: number, unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date {
  return addTime(date, -amount, unit);
}

/**
 * Gets the difference between two dates
 */
export function getTimeDifference(date1: Date, date2: Date, unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'days'): number {
  const diff = Math.abs(date1.getTime() - date2.getTime());
  
  switch (unit) {
    case 'milliseconds':
      return diff;
    case 'seconds':
      return Math.floor(diff / 1000);
    case 'minutes':
      return Math.floor(diff / (1000 * 60));
    case 'hours':
      return Math.floor(diff / (1000 * 60 * 60));
    case 'days':
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    default:
      return diff;
  }
}

/**
 * Checks if a date is today
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

/**
 * Checks if a date is yesterday
 */
export function isYesterday(date: Date): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return date.toDateString() === yesterday.toDateString();
}

/**
 * Checks if a date is tomorrow
 */
export function isTomorrow(date: Date): boolean {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return date.toDateString() === tomorrow.toDateString();
}

/**
 * Checks if a date is in the past
 */
export function isPast(date: Date): boolean {
  return date < new Date();
}

/**
 * Checks if a date is in the future
 */
export function isFuture(date: Date): boolean {
  return date > new Date();
}

/**
 * Gets the timezone offset in minutes
 */
export function getTimezoneOffset(date: Date = new Date()): number {
  return date.getTimezoneOffset();
}

/**
 * Gets the timezone name
 */
export function getTimezoneName(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return 'Unknown';
  }
}

/**
 * Converts a date to a different timezone
 */
export function convertTimezone(date: Date, targetTimezone: string): Date {
  try {
    const options = { timeZone: targetTimezone };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
    
    const year = parseInt(parts.find(p => p.type === 'year')?.value || '0');
    const month = parseInt(parts.find(p => p.type === 'month')?.value || '0') - 1;
    const day = parseInt(parts.find(p => p.type === 'day')?.value || '0');
    const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '0');
    const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0');
    const second = parseInt(parts.find(p => p.type === 'second')?.value || '0');
    
    return new Date(year, month, day, hour, minute, second);
  } catch {
    return date; // Return original date if conversion fails
  }
}

/**
 * Gets the number of days in a month
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Checks if a year is a leap year
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Gets the day of the year (1-366)
 */
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

/**
 * Gets the week of the year (1-53)
 */
export function getWeekOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + start.getDay() + 1) / 7);
}

/**
 * Formats a duration in milliseconds to a human-readable string
 */
export function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
  if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  if (seconds > 0) return `${seconds}s`;
  
  return `${ms}ms`;
}

/**
 * Parses a duration string (e.g., "2h 30m") to milliseconds
 */
export function parseDuration(duration: string): number {
  const regex = /(\d+)([dhms])/g;
  let totalMs = 0;
  let match;
  
  while ((match = regex.exec(duration)) !== null) {
    const value = parseInt(match[1]);
    const unit = match[2];
    
    switch (unit) {
      case 'd':
        totalMs += value * 24 * 60 * 60 * 1000;
        break;
      case 'h':
        totalMs += value * 60 * 60 * 1000;
        break;
      case 'm':
        totalMs += value * 60 * 1000;
        break;
      case 's':
        totalMs += value * 1000;
        break;
    }
  }
  
  return totalMs;
} 