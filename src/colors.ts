/**
 * Color utility functions for color manipulation and conversion
 */

/**
 * Converts a hex color to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;
  
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
}

/**
 * Converts RGB values to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Converts RGB values to HSL
 */
export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    
    h /= 6;
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

/**
 * Converts HSL values to RGB
 */
export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  l /= 100;
  
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

/**
 * Converts a hex color to HSL
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number } | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  
  return rgbToHsl(rgb.r, rgb.g, rgb.b);
}

/**
 * Converts HSL values to hex
 */
export function hslToHex(h: number, s: number, l: number): string {
  const rgb = hslToRgb(h, s, l);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

/**
 * Calculates the luminance of a color
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculates the contrast ratio between two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Checks if two colors have sufficient contrast for accessibility
 */
export function hasSufficientContrast(color1: string, color2: string, ratio: number = 4.5): boolean {
  return getContrastRatio(color1, color2) >= ratio;
}

/**
 * Lightens a color by a percentage
 */
export function lighten(hex: string, percent: number): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  
  hsl.l = Math.min(100, hsl.l + percent);
  return hslToHex(hsl.h, hsl.s, hsl.l);
}

/**
 * Darkens a color by a percentage
 */
export function darken(hex: string, percent: number): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  
  hsl.l = Math.max(0, hsl.l - percent);
  return hslToHex(hsl.h, hsl.s, hsl.l);
}

/**
 * Saturates a color by a percentage
 */
export function saturate(hex: string, percent: number): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  
  hsl.s = Math.min(100, hsl.s + percent);
  return hslToHex(hsl.h, hsl.s, hsl.l);
}

/**
 * Desaturates a color by a percentage
 */
export function desaturate(hex: string, percent: number): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  
  hsl.s = Math.max(0, hsl.s - percent);
  return hslToHex(hsl.h, hsl.s, hsl.l);
}

/**
 * Rotates the hue of a color by degrees
 */
export function rotateHue(hex: string, degrees: number): string {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  
  hsl.h = (hsl.h + degrees) % 360;
  if (hsl.h < 0) hsl.h += 360;
  
  return hslToHex(hsl.h, hsl.s, hsl.l);
}

/**
 * Creates a complementary color
 */
export function complementary(hex: string): string {
  return rotateHue(hex, 180);
}

/**
 * Creates an analogous color palette
 */
export function analogous(hex: string, count: number = 3): string[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [hex];
  
  const colors: string[] = [hex];
  const step = 30;
  
  for (let i = 1; i < count; i++) {
    const hue = (hsl.h + i * step) % 360;
    colors.push(hslToHex(hue, hsl.s, hsl.l));
  }
  
  return colors;
}

/**
 * Creates a monochromatic color palette
 */
export function monochromatic(hex: string, count: number = 5): string[] {
  const hsl = hexToHsl(hex);
  if (!hsl) return [hex];
  
  const colors: string[] = [];
  const step = 100 / (count - 1);
  
  for (let i = 0; i < count; i++) {
    const lightness = Math.max(0, Math.min(100, i * step));
    colors.push(hslToHex(hsl.h, hsl.s, lightness));
  }
  
  return colors;
}

/**
 * Checks if a string is a valid hex color
 */
export function isValidHex(hex: string): boolean {
  return /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

/**
 * Generates a random hex color
 */
export function randomHex(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Converts a color to grayscale
 */
export function grayscale(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  const gray = Math.round(rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114);
  return rgbToHex(gray, gray, gray);
}

/**
 * Inverts a color
 */
export function invert(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  return rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b);
} 