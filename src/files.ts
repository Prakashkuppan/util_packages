/**
 * File utility functions for file handling and manipulation
 */

/**
 * Formats file size in human-readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Gets file extension from filename
 */
export function getFileExtension(filename: string): string {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
}

/**
 * Removes file extension from filename
 */
export function removeFileExtension(filename: string): string {
  return filename.replace(/\.[^/.]+$/, '');
}

/**
 * Gets filename without path
 */
export function getFilename(path: string): string {
  return path.split(/[\\/]/).pop() || '';
}

/**
 * Gets directory path from full path
 */
export function getDirectory(path: string): string {
  const parts = path.split(/[\\/]/);
  parts.pop();
  return parts.join('/');
}

/**
 * Normalizes file path (removes duplicate slashes, resolves . and ..)
 */
export function normalizePath(path: string): string {
  return path.replace(/[\\/]+/g, '/').replace(/\/\.\//g, '/').replace(/\/\.\.\//g, '/');
}

/**
 * Joins path segments
 */
export function joinPath(...segments: string[]): string {
  return segments
    .map(segment => segment.replace(/^\/+|\/+$/g, ''))
    .filter(Boolean)
    .join('/');
}

/**
 * Checks if path is absolute
 */
export function isAbsolutePath(path: string): boolean {
  return /^[\/\\]|[a-zA-Z]:[\/\\]/.test(path);
}

/**
 * Checks if path is relative
 */
export function isRelativePath(path: string): boolean {
  return !isAbsolutePath(path);
}

/**
 * MIME type detection based on file extension
 */
export function getMimeType(filename: string): string {
  const ext = getFileExtension(filename).toLowerCase();
  
  const mimeTypes: Record<string, string> = {
    // Images
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',
    'bmp': 'image/bmp',
    
    // Documents
    'pdf': 'application/pdf',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls': 'application/vnd.ms-excel',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'ppt': 'application/vnd.ms-powerpoint',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'txt': 'text/plain',
    'rtf': 'application/rtf',
    
    // Archives
    'zip': 'application/zip',
    'rar': 'application/vnd.rar',
    '7z': 'application/x-7z-compressed',
    'tar': 'application/x-tar',
    'gz': 'application/gzip',
    
    // Audio
    'mp3': 'audio/mpeg',
    'wav': 'audio/wav',
    'ogg': 'audio/ogg',
    'm4a': 'audio/mp4',
    'flac': 'audio/flac',
    
    // Video
    'mp4': 'video/mp4',
    'avi': 'video/x-msvideo',
    'mov': 'video/quicktime',
    'wmv': 'video/x-ms-wmv',
    'flv': 'video/x-flv',
    'webm': 'video/webm',
    
    // Code
    'html': 'text/html',
    'htm': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'ts': 'application/typescript',
    'json': 'application/json',
    'xml': 'application/xml',
    'sql': 'application/sql',
    'php': 'application/x-httpd-php',
    'py': 'text/x-python',
    'java': 'text/x-java-source',
    'cpp': 'text/x-c++src',
    'c': 'text/x-csrc',
    'cs': 'text/x-csharp',
    'rb': 'text/x-ruby',
    'go': 'text/x-go',
    'rs': 'text/x-rust',
    'swift': 'text/x-swift',
    'kt': 'text/x-kotlin',
    
    // Fonts
    'ttf': 'font/ttf',
    'otf': 'font/otf',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'eot': 'application/vnd.ms-fontobject'
  };
  
  return mimeTypes[ext] || 'application/octet-stream';
}

/**
 * Checks if file is an image
 */
export function isImage(filename: string): boolean {
  const mimeType = getMimeType(filename);
  return mimeType.startsWith('image/');
}

/**
 * Checks if file is a video
 */
export function isVideo(filename: string): boolean {
  const mimeType = getMimeType(filename);
  return mimeType.startsWith('video/');
}

/**
 * Checks if file is an audio file
 */
export function isAudio(filename: string): boolean {
  const mimeType = getMimeType(filename);
  return mimeType.startsWith('audio/');
}

/**
 * Checks if file is a document
 */
export function isDocument(filename: string): boolean {
  const mimeType = getMimeType(filename);
  return mimeType.includes('document') || 
         mimeType.includes('pdf') || 
         mimeType.includes('text/') ||
         mimeType.includes('application/');
}

/**
 * Checks if file is an archive
 */
export function isArchive(filename: string): boolean {
  const mimeType = getMimeType(filename);
  return mimeType.includes('zip') || 
         mimeType.includes('rar') || 
         mimeType.includes('compressed') ||
         mimeType.includes('tar') ||
         mimeType.includes('gzip');
}

/**
 * Checks if file is executable
 */
export function isExecutable(filename: string): boolean {
  const ext = getFileExtension(filename).toLowerCase();
  const executableExts = ['exe', 'msi', 'app', 'dmg', 'deb', 'rpm', 'sh', 'bat', 'cmd'];
  return executableExts.includes(ext);
}

/**
 * Sanitizes filename (removes invalid characters)
 */
export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[<>:"/\\|?*]/g, '_')
    .replace(/\s+/g, '_')
    .replace(/_{2,}/g, '_')
    .replace(/^_+|_+$/g, '');
}

/**
 * Generates a unique filename
 */
export function generateUniqueFilename(originalName: string, suffix: string = ''): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const ext = getFileExtension(originalName);
  const name = removeFileExtension(originalName);
  
  return `${name}_${timestamp}_${random}${suffix}${ext ? '.' + ext : ''}`;
}

/**
 * Checks if filename is valid
 */
export function isValidFilename(filename: string): boolean {
  const invalidChars = /[<>:"/\\|?*\x00-\x1f]/;
  const reservedNames = /^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(\.|$)/i;
  
  return !invalidChars.test(filename) && 
         !reservedNames.test(filename) && 
         filename.length > 0 && 
         filename.length <= 255;
}

/**
 * Gets file category based on extension
 */
export function getFileCategory(filename: string): string {
  if (isImage(filename)) return 'image';
  if (isVideo(filename)) return 'video';
  if (isAudio(filename)) return 'audio';
  if (isDocument(filename)) return 'document';
  if (isArchive(filename)) return 'archive';
  if (isExecutable(filename)) return 'executable';
  
  const ext = getFileExtension(filename).toLowerCase();
  if (['html', 'css', 'js', 'ts', 'json', 'xml', 'sql', 'php', 'py', 'java', 'cpp', 'c', 'cs', 'rb', 'go', 'rs', 'swift', 'kt'].includes(ext)) {
    return 'code';
  }
  
  return 'other';
} 