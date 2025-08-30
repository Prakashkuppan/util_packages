/**
 * File utility functions for file handling and manipulation
 */
/**
 * Formats file size in human-readable format
 */
export declare function formatFileSize(bytes: number): string;
/**
 * Gets file extension from filename
 */
export declare function getFileExtension(filename: string): string;
/**
 * Removes file extension from filename
 */
export declare function removeFileExtension(filename: string): string;
/**
 * Gets filename without path
 */
export declare function getFilename(path: string): string;
/**
 * Gets directory path from full path
 */
export declare function getDirectory(path: string): string;
/**
 * Normalizes file path (removes duplicate slashes, resolves . and ..)
 */
export declare function normalizePath(path: string): string;
/**
 * Joins path segments
 */
export declare function joinPath(...segments: string[]): string;
/**
 * Checks if path is absolute
 */
export declare function isAbsolutePath(path: string): boolean;
/**
 * Checks if path is relative
 */
export declare function isRelativePath(path: string): boolean;
/**
 * MIME type detection based on file extension
 */
export declare function getMimeType(filename: string): string;
/**
 * Checks if file is an image
 */
export declare function isImage(filename: string): boolean;
/**
 * Checks if file is a video
 */
export declare function isVideo(filename: string): boolean;
/**
 * Checks if file is an audio file
 */
export declare function isAudio(filename: string): boolean;
/**
 * Checks if file is a document
 */
export declare function isDocument(filename: string): boolean;
/**
 * Checks if file is an archive
 */
export declare function isArchive(filename: string): boolean;
/**
 * Checks if file is executable
 */
export declare function isExecutable(filename: string): boolean;
/**
 * Sanitizes filename (removes invalid characters)
 */
export declare function sanitizeFilename(filename: string): string;
/**
 * Generates a unique filename
 */
export declare function generateUniqueFilename(originalName: string, suffix?: string): string;
/**
 * Checks if filename is valid
 */
export declare function isValidFilename(filename: string): boolean;
/**
 * Gets file category based on extension
 */
export declare function getFileCategory(filename: string): string;
//# sourceMappingURL=files.d.ts.map