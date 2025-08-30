/**
 * Validation utility functions for common data validation
 */
/**
 * Validates email format
 */
export declare function isEmail(email: string): boolean;
/**
 * Validates phone number format (basic)
 */
export declare function isPhone(phone: string): boolean;
/**
 * Validates URL format
 */
export declare function isURL(url: string): boolean;
/**
 * Validates if string contains only numbers
 */
export declare function isNumeric(value: string): boolean;
/**
 * Validates if string contains only letters
 */
export declare function isAlpha(value: string): boolean;
/**
 * Validates if string contains only letters and numbers
 */
export declare function isAlphanumeric(value: string): boolean;
/**
 * Validates if value is a valid date
 */
export declare function isDate(value: any): boolean;
/**
 * Validates if value is empty or null
 */
export declare function isEmpty(value: any): boolean;
/**
 * Validates if value is a positive number
 */
export declare function isPositive(value: number): boolean;
/**
 * Validates if value is a negative number
 */
export declare function isNegative(value: number): boolean;
/**
 * Validates if value is an integer
 */
export declare function isInteger(value: any): boolean;
/**
 * Validates if value is a valid credit card number (Luhn algorithm)
 */
export declare function isCreditCard(value: string): boolean;
/**
 * Validates if value is a valid IPv4 address
 */
export declare function isIPv4(value: string): boolean;
/**
 * Validates if value is a valid IPv6 address
 */
export declare function isIPv6(value: string): boolean;
/**
 * Validates if value is a valid postal code (US format)
 */
export declare function isPostalCode(value: string): boolean;
/**
 * Validates if value is a valid social security number (US format)
 */
export declare function isSSN(value: string): boolean;
//# sourceMappingURL=validation.d.ts.map