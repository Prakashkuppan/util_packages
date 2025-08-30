/**
 * Validation utility functions for common data validation
 */

/**
 * Validates email format
 */
export function isEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format (basic)
 */
export function isPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

/**
 * Validates URL format
 */
export function isURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates if string contains only numbers
 */
export function isNumeric(value: string): boolean {
  return /^\d+$/.test(value);
}

/**
 * Validates if string contains only letters
 */
export function isAlpha(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}

/**
 * Validates if string contains only letters and numbers
 */
export function isAlphanumeric(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value);
}

/**
 * Validates if value is a valid date
 */
export function isDate(value: any): boolean {
  if (value instanceof Date) return !isNaN(value.getTime());
  if (typeof value === 'string') {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
  return false;
}

/**
 * Validates if value is empty or null
 */
export function isEmpty(value: any): boolean {
  if (value == null) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/**
 * Validates if value is a positive number
 */
export function isPositive(value: number): boolean {
  return typeof value === 'number' && value > 0;
}

/**
 * Validates if value is a negative number
 */
export function isNegative(value: number): boolean {
  return typeof value === 'number' && value < 0;
}

/**
 * Validates if value is an integer
 */
export function isInteger(value: any): boolean {
  return Number.isInteger(value);
}

/**
 * Validates if value is a valid credit card number (Luhn algorithm)
 */
export function isCreditCard(value: string): boolean {
  const clean = value.replace(/\s+/g, '');
  if (!/^\d{13,19}$/.test(clean)) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = clean.length - 1; i >= 0; i--) {
    let digit = parseInt(clean.charAt(i));
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

/**
 * Validates if value is a valid IPv4 address
 */
export function isIPv4(value: string): boolean {
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipv4Regex.test(value);
}

/**
 * Validates if value is a valid IPv6 address
 */
export function isIPv6(value: string): boolean {
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipv6Regex.test(value);
}

/**
 * Validates if value is a valid postal code (US format)
 */
export function isPostalCode(value: string): boolean {
  const postalRegex = /^\d{5}(-\d{4})?$/;
  return postalRegex.test(value);
}

/**
 * Validates if value is a valid social security number (US format)
 */
export function isSSN(value: string): boolean {
  const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
  return ssnRegex.test(value);
} 