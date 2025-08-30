/**
 * Format a date according to the specified format
 * @param date - Date to format (Date object or date string)
 * @param format - Format string (default: "DD MMM YYYY")
 * @returns Formatted date string
 */
export function formatDate(date: Date | string, format: string = "DD MMM YYYY"): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date');
  }
  
  const day = dateObj.getDate().toString().padStart(2, '0');
  const monthShort = dateObj.toLocaleDateString('en-US', { month: 'short' });
  const monthNumber = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  
  return format
    .replace(/DD/g, day)
    .replace(/MMM/g, monthShort)
    .replace(/MM/g, monthNumber.toString().padStart(2, '0'))
    .replace(/YYYY/g, year.toString());
}

/**
 * Get a human-readable time ago string
 * @param date - Date to calculate time ago from
 * @returns Time ago string
 */
export function timeAgo(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  }
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  }
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
  }
  
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  }
  
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
} 