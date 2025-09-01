// Essential utilities - Core functionality only

// Storage utilities
export { localStorage, sessionStorage, cookies } from './storage';

// File utilities
export {
  formatFileSize,
  getFileExtension,
  removeFileExtension,
  getFilename,
  getDirectory,
  normalizePath,
  joinPath,
  isAbsolutePath,
  isRelativePath,
  getMimeType,
  isImage,
  isVideo,
  isAudio,
  isDocument,
  isArchive,
  isExecutable,
  sanitizeFilename,
  generateUniqueFilename,
  isValidFilename,
  getFileCategory
} from './files';

// Date utilities
export { formatDate, timeAgo } from './dates';

// String utilities
export { capitalize, slugify } from './strings'; 