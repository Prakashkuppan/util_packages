import { formatNumber, formatCurrency, clamp, round, random, factorial, gcd, lcm, isPrime } from './math';

describe('Math Utilities', () => {
  describe('formatNumber', () => {
    it('should format numbers with thousand separators', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1234.56)).toBe('1,234.56');
      expect(formatNumber(0)).toBe('0');
    });

    it('should handle different locales', () => {
      expect(formatNumber(1000, 'de-DE')).toBe('1.000');
      // French locale uses non-breaking space, so we check it contains the expected parts
      const frenchResult = formatNumber(1000, 'fr-FR');
      expect(frenchResult).toContain('1');
      expect(frenchResult).toContain('000');
    });
  });

  describe('formatCurrency', () => {
    it('should format USD currency correctly', () => {
      expect(formatCurrency(1000, 'USD')).toBe('$1,000.00');
      expect(formatCurrency(1234.56, 'USD')).toBe('$1,234.56');
      expect(formatCurrency(0, 'USD')).toBe('$0.00');
    });

    it('should handle different currencies', () => {
      expect(formatCurrency(1000, 'EUR')).toBe('€1,000.00');
      expect(formatCurrency(1000, 'GBP')).toBe('£1,000.00');
    });
  });

  describe('clamp', () => {
    it('should clamp values within range', () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(15, 0, 10)).toBe(10);
    });
  });

  describe('round', () => {
    it('should round numbers to specified decimals', () => {
      expect(round(3.14159, 2)).toBe(3.14);
      expect(round(3.14159, 0)).toBe(3);
      expect(round(3.5, 0)).toBe(4);
    });
  });

  describe('random', () => {
    it('should generate random integers within range', () => {
      const result = random(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    });
  });

  describe('factorial', () => {
    it('should calculate factorial correctly', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
      expect(factorial(10)).toBe(3628800);
    });

    it('should return NaN for negative numbers', () => {
      expect(factorial(-1)).toBe(NaN);
    });
  });

  describe('gcd', () => {
    it('should calculate greatest common divisor', () => {
      expect(gcd(48, 18)).toBe(6);
      expect(gcd(12, 8)).toBe(4);
      expect(gcd(7, 13)).toBe(1);
    });
  });

  describe('lcm', () => {
    it('should calculate least common multiple', () => {
      expect(lcm(12, 18)).toBe(36);
      expect(lcm(8, 12)).toBe(24);
      expect(lcm(7, 13)).toBe(91);
    });
  });

  describe('isPrime', () => {
    it('should identify prime numbers correctly', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(25)).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(-1)).toBe(false);
    });
  });
}); 