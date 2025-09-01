// Essential utilities - Core functionality only

// Object utilities
export {
  deepClone,
  deepMerge,
  pick,
  omit,
  isEmpty,
  get as getObject,
  set,
  flatten as flattenObject,
  invert as invertObject,
  fromPairs,
  toPairs
} from './objects';

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