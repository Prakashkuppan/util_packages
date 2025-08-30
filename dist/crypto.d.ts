/**
 * Crypto utility functions for hashing, encryption, and security
 */
/**
 * Generates a random string of specified length
 */
export declare function randomString(length: number, charset?: string): string;
/**
 * Generates a random UUID v4
 */
export declare function uuid(): string;
/**
 * Generates a random hex string
 */
export declare function randomHexString(length: number): string;
/**
 * Creates a simple hash from a string
 */
export declare function simpleHash(str: string): number;
/**
 * Creates an MD5 hash (using Web Crypto API if available)
 */
export declare function md5(data: string): Promise<string>;
/**
 * Creates a SHA-256 hash
 */
export declare function sha256(data: string): Promise<string>;
/**
 * Creates a SHA-512 hash
 */
export declare function sha512(data: string): Promise<string>;
/**
 * Creates a HMAC-SHA256 signature
 */
export declare function hmacSha256(data: string, key: string): Promise<string>;
/**
 * Encodes a string to base64
 */
export declare function base64Encode(str: string): string;
/**
 * Decodes a base64 string
 */
export declare function base64Decode(str: string): string;
/**
 * Encodes a string to base64 URL-safe format
 */
export declare function base64UrlEncode(str: string): string;
/**
 * Decodes a base64 URL-safe string
 */
export declare function base64UrlDecode(str: string): string;
/**
 * Generates a secure password with specified criteria
 */
export declare function generatePassword(options?: {
    length?: number;
    includeUppercase?: boolean;
    includeLowercase?: boolean;
    includeNumbers?: boolean;
    includeSymbols?: boolean;
}): string;
/**
 * Checks password strength
 */
export declare function checkPasswordStrength(password: string): {
    score: number;
    feedback: string[];
};
/**
 * Creates a simple encryption key from a password
 */
export declare function deriveKey(password: string, salt?: string): string;
/**
 * Simple XOR encryption (not cryptographically secure)
 */
export declare function xorEncrypt(data: string, key: string): string;
/**
 * Simple XOR decryption (not cryptographically secure)
 */
export declare function xorDecrypt(encryptedData: string, key: string): string;
//# sourceMappingURL=crypto.d.ts.map