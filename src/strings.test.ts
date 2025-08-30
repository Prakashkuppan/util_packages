import { capitalize, slugify } from './strings';

describe('Strings Utilities', () => {
  describe('capitalize', () => {
    it('should capitalize first letter of a string', () => {
      expect(capitalize('prakash')).toBe('Prakash');
      expect(capitalize('hello world')).toBe('Hello world');
    });

    it('should handle already capitalized strings', () => {
      expect(capitalize('Prakash')).toBe('Prakash');
      expect(capitalize('HELLO')).toBe('Hello');
    });

    it('should handle edge cases', () => {
      expect(capitalize('')).toBe('');
      expect(capitalize('a')).toBe('A');
      expect(capitalize('123')).toBe('123');
    });
  });

  describe('slugify', () => {
    it('should convert string to URL-friendly slug', () => {
      expect(slugify('Frontend Utils Package')).toBe('frontend-utils-package');
      expect(slugify('Hello World!')).toBe('hello-world');
    });

    it('should handle special characters', () => {
      expect(slugify('User@123')).toBe('user123');
      expect(slugify('C++ Programming')).toBe('c-programming');
    });

    it('should handle multiple spaces and hyphens', () => {
      expect(slugify('  multiple   spaces  ')).toBe('multiple-spaces');
      expect(slugify('multiple---hyphens')).toBe('multiple-hyphens');
    });

    it('should handle edge cases', () => {
      expect(slugify('')).toBe('');
      expect(slugify('   ')).toBe('');
      expect(slugify('---')).toBe('');
    });
  });
}); 