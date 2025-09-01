# FastFront

A lightweight utility package with storage, file, date, and string utilities for modern web applications.

## 🚀 Features

- **Storage**: localStorage, sessionStorage, and cookie utilities
- **Files**: File handling, MIME types, and path utilities
- **Dates**: Date formatting and time ago calculations
- **Strings**: Capitalization and slugification

## 📦 Installation

```bash
npm install fastfront
```

## 🔧 Usage

### Storage

```typescript
import { localStorage, sessionStorage, cookies } from 'fastfront';

// Local storage with error handling
localStorage.set('user', { name: 'John', age: 30 });
const user = localStorage.get('user');     // { name: 'John', age: 30 }
localStorage.remove('user');
localStorage.clear();

// Session storage
sessionStorage.set('token', 'abc123');
const token = sessionStorage.get('token'); // 'abc123'

// Cookies
cookies.set('sessionId', 'xyz789', { expires: 7, secure: true });
const sessionId = cookies.get('sessionId'); // 'xyz789'
cookies.remove('sessionId');
```

### Files

```typescript
import { formatFileSize, getFileExtension, getMimeType, isImage, isVideo, sanitizeFilename } from 'fastfront';

// File information
formatFileSize(1024);                     // '1 KB'
getFileExtension('document.pdf');         // 'pdf'
getMimeType('image.jpg');                 // 'image/jpeg'

// File type checking
isImage('photo.png');                      // true
isVideo('movie.mp4');                      // true
isDocument('report.pdf');                  // true

// File path utilities
getFilename('/path/to/file.txt');         // 'file.txt'
getDirectory('/path/to/file.txt');        // '/path/to'
normalizePath('path//to///file.txt');     // 'path/to/file.txt'
joinPath('path', 'to', 'file.txt');       // 'path/to/file.txt'

// File name utilities
sanitizeFilename('file<>:"/\\|?*.txt');   // 'file_______.txt'
generateUniqueFilename('document.pdf');    // 'document_1234567890_abc123.pdf'
```

### Dates

```typescript
import { formatDate, timeAgo } from 'fastfront';

// Format dates
formatDate(new Date());                    // "22 Aug 2025"
formatDate('2025-08-22');                 // "22 Aug 2025"
formatDate(new Date(), 'YYYY-MM-DD');     // "2025-Aug-22"

// Time ago
timeAgo(new Date('2025-08-22T11:55:00Z')); // "5 minutes ago"
timeAgo('2025-08-20T12:00:00Z');           // "2 days ago"
```

### Strings

```typescript
import { capitalize, slugify } from 'fastfront';

// Capitalize strings
capitalize('prakash');                    // "Prakash"
capitalize('hello world');                // "Hello world"

// Create slugs
slugify('Frontend Utils Package');        // "frontend-utils-package"
slugify('User@123');                      // "user123"
```

## 🏗️ Building

```bash
npm run build
```

This creates:
- `dist/index.js` - CommonJS bundle
- `dist/index.esm.js` - ES Module bundle
- `dist/index.umd.js` - UMD bundle
- `dist/index.d.ts` - TypeScript declarations

## 📚 API Reference

### Storage

#### `localStorage.set(key, value)`
Sets a value in localStorage with error handling.

#### `localStorage.get(key)`
Gets a value from localStorage with error handling.

#### `localStorage.remove(key)`
Removes a value from localStorage.

#### `localStorage.clear()`
Clears all localStorage data.

#### `sessionStorage.set(key, value)`
Sets a value in sessionStorage.

#### `sessionStorage.get(key)`
Gets a value from sessionStorage.

#### `cookies.set(name, value, options?)`
Sets a cookie with options.

#### `cookies.get(name)`
Gets a cookie value.

#### `cookies.remove(name)`
Removes a cookie.

### Files

#### `formatFileSize(bytes)`
Formats file size in human-readable format.

#### `getFileExtension(filename)`
Extracts file extension from filename.

#### `getMimeType(filename)`
Gets MIME type based on file extension.

#### `isImage(filename)`
Checks if file is an image.

#### `isVideo(filename)`
Checks if file is a video.

#### `sanitizeFilename(filename)`
Sanitizes filename for safe storage.

### Dates

#### `formatDate(date, format?)`
Formats a date according to the specified format.

#### `timeAgo(date)`
Gets a human-readable time ago string.

### Strings

#### `capitalize(str)`
Capitalizes the first letter of a string.

#### `slugify(str)`
Converts a string to a URL-friendly slug.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

For support and questions, please open an issue on GitHub. 