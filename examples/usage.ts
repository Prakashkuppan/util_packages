import {
  formatCurrency,
  addCommas,
  formatDate,
  timeAgo,
  capitalize,
  slugify,
  debounce,
  throttle,
  copyToClipboard,
  downloadFile
} from '../src/index';

// Numbers examples
console.log('=== Numbers Utilities ===');
console.log('Currency formatting:');
console.log(formatCurrency(1000));           // ₹1,000.00
console.log(formatCurrency(1000, 'USD'));   // $1,000.00
console.log(formatCurrency(1234.56));       // ₹1,234.56

console.log('\nComma addition:');
console.log(addCommas(10000));              // 10,000
console.log(addCommas(1234.56));            // 1,234.56
console.log(addCommas('100000'));           // 1,00,000

// Dates examples
console.log('\n=== Dates Utilities ===');
console.log('Date formatting:');
console.log(formatDate(new Date()));                    // Current date in "DD MMM YYYY" format
console.log(formatDate('2025-08-22'));                 // 22 Aug 2025
console.log(formatDate(new Date(), 'YYYY-MM-DD'));     // Current date in "YYYY-MM-DD" format

console.log('\nTime ago:');
const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
console.log(timeAgo(fiveMinutesAgo));                  // 5 minutes ago
console.log(timeAgo(twoDaysAgo));                      // 2 days ago

// Strings examples
console.log('\n=== Strings Utilities ===');
console.log('Capitalization:');
console.log(capitalize('prakash'));                    // Prakash
console.log(capitalize('hello world'));                // Hello world

console.log('\nSlugification:');
console.log(slugify('Frontend Utils Package'));        // frontend-utils-package
console.log(slugify('User@123'));                      // user123

// Performance examples
console.log('\n=== Performance Utilities ===');
console.log('Debounce and throttle functions created');

// Example of debounced search
const debouncedSearch = debounce((query: string) => {
  console.log(`Searching for: ${query}`);
}, 300);

// Example of throttled scroll handler
const throttledScroll = throttle(() => {
  console.log('Scroll event handled');
}, 100);

// Simulate some calls
debouncedSearch('test');
debouncedSearch('test2');
debouncedSearch('test3');

throttledScroll();
throttledScroll();
throttledScroll();

// DOM examples
console.log('\n=== DOM Utilities ===');
console.log('DOM utilities available for browser use');

// Example of clipboard usage (would work in browser)
// await copyToClipboard('Text to copy');

// Example of file download (would work in browser)
// downloadFile('File content', 'filename.txt', 'text/plain');

// Wait for debounced function to execute
setTimeout(() => {
  console.log('\n=== Demo Complete ===');
  console.log('All utility functions demonstrated successfully!');
}, 500); 