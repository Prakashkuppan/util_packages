/**
 * Color utility functions for color manipulation and conversion
 */
/**
 * Converts a hex color to RGB
 */
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
/**
 * Converts RGB values to hex
 */
export declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * Converts RGB values to HSL
 */
export declare function rgbToHsl(r: number, g: number, b: number): {
    h: number;
    s: number;
    l: number;
};
/**
 * Converts HSL values to RGB
 */
export declare function hslToRgb(h: number, s: number, l: number): {
    r: number;
    g: number;
    b: number;
};
/**
 * Converts a hex color to HSL
 */
export declare function hexToHsl(hex: string): {
    h: number;
    s: number;
    l: number;
} | null;
/**
 * Converts HSL values to hex
 */
export declare function hslToHex(h: number, s: number, l: number): string;
/**
 * Calculates the luminance of a color
 */
export declare function getLuminance(r: number, g: number, b: number): number;
/**
 * Calculates the contrast ratio between two colors
 */
export declare function getContrastRatio(color1: string, color2: string): number;
/**
 * Checks if two colors have sufficient contrast for accessibility
 */
export declare function hasSufficientContrast(color1: string, color2: string, ratio?: number): boolean;
/**
 * Lightens a color by a percentage
 */
export declare function lighten(hex: string, percent: number): string;
/**
 * Darkens a color by a percentage
 */
export declare function darken(hex: string, percent: number): string;
/**
 * Saturates a color by a percentage
 */
export declare function saturate(hex: string, percent: number): string;
/**
 * Desaturates a color by a percentage
 */
export declare function desaturate(hex: string, percent: number): string;
/**
 * Rotates the hue of a color by degrees
 */
export declare function rotateHue(hex: string, degrees: number): string;
/**
 * Creates a complementary color
 */
export declare function complementary(hex: string): string;
/**
 * Creates an analogous color palette
 */
export declare function analogous(hex: string, count?: number): string[];
/**
 * Creates a monochromatic color palette
 */
export declare function monochromatic(hex: string, count?: number): string[];
/**
 * Checks if a string is a valid hex color
 */
export declare function isValidHex(hex: string): boolean;
/**
 * Generates a random hex color
 */
export declare function randomHex(): string;
/**
 * Converts a color to grayscale
 */
export declare function grayscale(hex: string): string;
/**
 * Inverts a color
 */
export declare function invert(hex: string): string;
//# sourceMappingURL=colors.d.ts.map