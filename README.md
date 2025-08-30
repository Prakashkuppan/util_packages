# FastFront

A comprehensive utility package with array, object, validation, storage, network, math, color, file, date, string, performance, and DOM utilities for modern web applications.

## 🚀 Features

- **Arrays**: Chunking, unique values, shuffling, grouping, and more
- **Objects**: Deep cloning, merging, picking, omitting, and manipulation
- **Validation**: Email, phone, URL, credit card, and data validation
- **Storage**: localStorage, sessionStorage, and cookie utilities
- **Network**: HTTP requests, URL parsing, and query string handling
- **Math**: Mathematical operations, statistics, and number formatting
- **Colors**: Color conversion, manipulation, and palette generation
- **Files**: File handling, MIME types, and path utilities
- **Dates**: Date formatting and time ago calculations
- **Strings**: Capitalization and slugification
- **Performance**: Debounce and throttle functions
- **DOM**: Clipboard operations and file downloads

## 📦 Installation

```bash
npm install fastfront
```

## 🔧 Usage

### Arrays

```typescript
import { chunk, unique, shuffle, groupBy, flatten, intersection, difference, sortBy, range, compact } from 'fastfront';

// Chunk array into smaller arrays
chunk([1, 2, 3, 4, 5, 6], 2);           // [[1, 2], [3, 4], [5, 6]]

// Remove duplicates
unique([1, 2, 2, 3, 3, 4]);              // [1, 2, 3, 4]

// Shuffle array
shuffle([1, 2, 3, 4, 5]);                // [3, 1, 5, 2, 4] (random)

// Group by key
groupBy(['apple', 'banana', 'cherry'], str => str.length);
// { 5: ['apple'], 6: ['banana', 'cherry'] }

// Flatten nested arrays
flatten([[1, 2], [3, 4], [5]]);          // [1, 2, 3, 4, 5]

// Find intersection
intersection([1, 2, 3], [2, 3, 4]);      // [2, 3]

// Find difference
difference([1, 2, 3], [2, 3, 4]);       // [1]

// Sort by multiple criteria
sortBy([{name: 'John', age: 30}, {name: 'Jane', age: 25}], 'age', 'name');

// Create range
range(1, 5);                              // [1, 2, 3, 4, 5]

// Remove falsy values
compact([0, 1, false, 2, '', 3, null]);  // [1, 2, 3]
```

### Objects

```typescript
import { deepClone, deepMerge, pick, omit, isEmpty, getObject, set, flattenObject, invertObject, fromPairs, toPairs } from 'fastfront';

// Deep clone object
const cloned = deepClone({ user: { name: 'John', age: 30 } });

// Deep merge objects
deepMerge({ a: 1 }, { b: 2 }, { a: 3 }); // { a: 3, b: 2 }

// Pick specific keys
pick({ name: 'John', age: 30, email: 'john@example.com' }, ['name', 'age']);
// { name: 'John', age: 30 }

// Omit specific keys
omit({ name: 'John', age: 30, email: 'john@example.com' }, ['email']);
// { name: 'John', age: 30 }

// Check if empty
isEmpty({});                              // true
isEmpty([]);                              // true
isEmpty('');                              // true

// Get nested property safely
getObject({ user: { profile: { name: 'John' } } }, 'user.profile.name'); // 'John'

// Set nested property safely
set({}, 'user.profile.name', 'John');     // { user: { profile: { name: 'John' } } }

// Flatten nested object
flattenObject({ a: { b: { c: 1 } } });   // { 'a.b.c': 1 }

// Invert keys and values
invertObject({ a: 1, b: 2 });            // { '1': 'a', '2': 'b' }

// Convert between objects and pairs
toPairs({ a: 1, b: 2 });                 // [['a', 1], ['b', 2]]
fromPairs([['a', 1], ['b', 2]]);         // { a: 1, b: 2 }
```

### Validation

```typescript
import { isEmail, isPhone, isURL, isCreditCard, isIPv4, isIPv6, isPostalCode, isSSN } from 'fastfront';

// Email validation
isEmail('user@example.com');              // true
isEmail('invalid-email');                 // false

// Phone validation
isPhone('+1-555-123-4567');              // true
isPhone('555-123-4567');                 // true

// URL validation
isURL('https://example.com');             // true
isURL('not-a-url');                      // false

// Credit card validation (Luhn algorithm)
isCreditCard('4532015112830366');         // true

// IP address validation
isIPv4('192.168.1.1');                   // true
isIPv6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // true

// Postal code validation (US format)
isPostalCode('12345');                    // true
isPostalCode('12345-6789');               // true

// Social Security Number validation (US format)
isSSN('123-45-6789');                    // true
```

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

### Network

```typescript
import { request, httpGet, post, put, del, patch, url, queryString } from 'fastfront';

// HTTP requests
const response = await httpGet('https://api.example.com/users');
const newUser = await post('https://api.example.com/users', { name: 'John' });
const updatedUser = await put('https://api.example.com/users/1', { name: 'Jane' });
await del('https://api.example.com/users/1');

// URL utilities
url.parse('https://example.com/path?q=test'); // URL object
url.build('https://example.com', { q: 'test' }); // 'https://example.com/?q=test'
url.getParams('https://example.com/?q=test&page=1'); // { q: 'test', page: '1' }

// Query string utilities
queryString.parse('q=test&page=1');       // { q: 'test', page: '1' }
queryString.stringify({ q: 'test', page: 1 }); // 'q=test&page=1'
```

### Math

```typescript
import { clamp, round, random, factorial, gcd, lcm, isPrime, sum, average, median, standardDeviation } from 'fastfront';

// Number manipulation
clamp(15, 0, 10);                        // 10
round(3.14159, 2);                       // 3.14
random(1, 100);                          // Random integer 1-100

// Mathematical operations
factorial(5);                             // 120
gcd(48, 18);                              // 6
lcm(12, 18);                              // 36
isPrime(17);                              // true

// Statistics
sum([1, 2, 3, 4, 5]);                    // 15
average([1, 2, 3, 4, 5]);                // 3
median([1, 2, 3, 4, 5]);                 // 3
standardDeviation([1, 2, 3, 4, 5]);      // 1.58...

// Number formatting
formatNumber(1000, 'de-DE');              // '1.000'
formatCurrency(1000, 'EUR');              // '€1,000.00'
```

### Colors

```typescript
import { hexToRgb, rgbToHex, hexToHsl, hslToHex, getContrastRatio, lighten, darken, complementary } from 'fastfront';

// Color conversion
hexToRgb('#ff0000');                      // { r: 255, g: 0, b: 0 }
rgbToHex(255, 0, 0);                      // '#ff0000'
hexToHsl('#ff0000');                      // { h: 0, s: 100, l: 50 }
hslToHex(0, 100, 50);                    // '#ff0000'

// Color manipulation
lighten('#ff0000', 20);                   // Lighter red
darken('#ff0000', 20);                    // Darker red
complementary('#ff0000');                 // Complementary color

// Color analysis
getContrastRatio('#ffffff', '#000000');   // 21 (high contrast)
hasSufficientContrast('#ffffff', '#000000'); // true

// Color palettes
analogous('#ff0000', 5);                  // Analogous colors
monochromatic('#ff0000', 5);              // Monochromatic palette
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

### Performance

```typescript
import { debounce, throttle } from 'fastfront';

// Debounce function calls
const debouncedSearch = debounce((query) => {
  // API call here
}, 300);

// Throttle function calls
const throttledScroll = throttle(() => {
  // Handle scroll event
}, 100);
```

### DOM

```typescript
import { copyToClipboard, downloadFile } from 'fastfront';

// Copy to clipboard
await copyToClipboard('Text to copy');

// Download files
downloadFile('File content', 'filename.txt', 'text/plain');
downloadFile(blob, 'image.png', 'image/png');
```

## 🧪 Testing

```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
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

### Numbers

#### `formatCurrency(value, currency?)`
Formats a number as currency with the specified currency code.

- **Parameters:**
  - `value` (number): The number to format
  - `currency` (string, optional): Currency code (default: "INR")
- **Returns:** Formatted currency string

#### `addCommas(value)`
Adds commas to a number for better readability.

- **Parameters:**
  - `value` (number | string): The number to format
- **Returns:** String with commas added

### Dates

#### `formatDate(date, format?)`
Formats a date according to the specified format.

- **Parameters:**
  - `date` (Date | string): Date to format
  - `format` (string, optional): Format string (default: "DD MMM YYYY")
- **Returns:** Formatted date string

#### `timeAgo(date)`
Gets a human-readable time ago string.

- **Parameters:**
  - `date` (Date | string): Date to calculate time ago from
- **Returns:** Time ago string

### Strings

#### `capitalize(str)`
Capitalizes the first letter of a string.

- **Parameters:**
  - `str` (string): String to capitalize
- **Returns:** Capitalized string

#### `slugify(str)`
Converts a string to a URL-friendly slug.

- **Parameters:**
  - `str` (string): String to convert to slug
- **Returns:** Slugified string

### Performance

#### `debounce(fn, delay)`
Debounces a function call.

- **Parameters:**
  - `fn` (Function): Function to debounce
  - `delay` (number): Delay in milliseconds
- **Returns:** Debounced function

#### `throttle(fn, delay)`
Throttles a function call.

- **Parameters:**
  - `fn` (Function): Function to throttle
  - `delay` (number): Delay in milliseconds
- **Returns:** Throttled function

### DOM

#### `copyToClipboard(text)`
Copies text to clipboard.

- **Parameters:**
  - `text` (string): Text to copy
- **Returns:** Promise that resolves when text is copied

#### `downloadFile(content, fileName, type?)`
Downloads content as a file.

- **Parameters:**
  - `content` (string | Blob | ArrayBuffer): File content
  - `fileName` (string): Name of the file to download
  - `type` (string, optional): MIME type of the file

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