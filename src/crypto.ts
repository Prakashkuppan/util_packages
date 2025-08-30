/**
 * Crypto utility functions for hashing, encryption, and security
 */

/**
 * Generates a random string of specified length
 */
export function randomString(length: number, charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

/**
 * Generates a random UUID v4
 */
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Generates a random hex string
 */
export function randomHexString(length: number): string {
  const bytes = new Uint8Array(length / 2);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Creates a simple hash from a string
 */
export function simpleHash(str: string): number {
  let hash = 0;
  if (str.length === 0) return hash;
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash);
}

/**
 * Creates an MD5 hash (using Web Crypto API if available)
 */
export async function md5(data: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('MD5', dataBuffer);
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
  
  // Fallback to simple hash
  return simpleHash(data).toString(16);
}

/**
 * Creates a SHA-256 hash
 */
export async function sha256(data: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
  
  throw new Error('Web Crypto API not available');
}

/**
 * Creates a SHA-512 hash
 */
export async function sha512(data: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-512', dataBuffer);
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
  
  throw new Error('Web Crypto API not available');
}

/**
 * Creates a HMAC-SHA256 signature
 */
export async function hmacSha256(data: string, key: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder();
    const keyBuffer = encoder.encode(key);
    const dataBuffer = encoder.encode(data);
    
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signature = await crypto.subtle.sign('HMAC', cryptoKey, dataBuffer);
    return Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
  
  throw new Error('Web Crypto API not available');
}

/**
 * Encodes a string to base64
 */
export function base64Encode(str: string): string {
  if (typeof btoa !== 'undefined') {
    return btoa(str);
  }
  
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str).toString('base64');
  }
  
  throw new Error('Base64 encoding not available');
}

/**
 * Decodes a base64 string
 */
export function base64Decode(str: string): string {
  if (typeof atob !== 'undefined') {
    return atob(str);
  }
  
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str, 'base64').toString();
  }
  
  throw new Error('Base64 decoding not available');
}

/**
 * Encodes a string to base64 URL-safe format
 */
export function base64UrlEncode(str: string): string {
  return base64Encode(str)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

/**
 * Decodes a base64 URL-safe string
 */
export function base64UrlDecode(str: string): string {
  // Add padding back
  while (str.length % 4) {
    str += '=';
  }
  
  return base64Decode(str
    .replace(/-/g, '+')
    .replace(/_/g, '/')
  );
}

/**
 * Generates a secure password with specified criteria
 */
export function generatePassword(options: {
  length?: number;
  includeUppercase?: boolean;
  includeLowercase?: boolean;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
} = {}): string {
  const {
    length = 12,
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = true
  } = options;
  
  let charset = '';
  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeNumbers) charset += '0123456789';
  if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  if (charset === '') {
    throw new Error('At least one character set must be included');
  }
  
  return randomString(length, charset);
}

/**
 * Checks password strength
 */
export function checkPasswordStrength(password: string): {
  score: number;
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;
  
  if (password.length < 8) {
    feedback.push('Password should be at least 8 characters long');
  } else if (password.length >= 12) {
    score += 2;
  } else {
    score += 1;
  }
  
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push('Include lowercase letters');
  
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push('Include uppercase letters');
  
  if (/[0-9]/.test(password)) score += 1;
  else feedback.push('Include numbers');
  
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  else feedback.push('Include special characters');
  
  if (/(.)\1{2,}/.test(password)) {
    score -= 1;
    feedback.push('Avoid repeated characters');
  }
  
  return { score: Math.max(0, score), feedback };
}

/**
 * Creates a simple encryption key from a password
 */
export function deriveKey(password: string, salt: string = 'default-salt'): string {
  const combined = password + salt;
  let hash = 0;
  
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  return Math.abs(hash).toString(16);
}

/**
 * Simple XOR encryption (not cryptographically secure)
 */
export function xorEncrypt(data: string, key: string): string {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return base64Encode(result);
}

/**
 * Simple XOR decryption (not cryptographically secure)
 */
export function xorDecrypt(encryptedData: string, key: string): string {
  const data = base64Decode(encryptedData);
  let result = '';
  for (let i = 0; i < data.length; i++) {
    const charCode = data.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
  }
  return result;
} 