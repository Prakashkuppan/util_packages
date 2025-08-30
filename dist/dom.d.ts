/**
 * Copy text to clipboard
 * @param text - Text to copy
 * @returns Promise that resolves when text is copied
 */
export declare function copyToClipboard(text: string): Promise<void>;
/**
 * Download content as a file
 * @param content - File content (string, Blob, or ArrayBuffer)
 * @param fileName - Name of the file to download
 * @param type - MIME type of the file
 */
export declare function downloadFile(content: string | Blob | ArrayBuffer, fileName: string, type?: string): void;
//# sourceMappingURL=dom.d.ts.map