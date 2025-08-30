/**
 * Copy text to clipboard
 * @param text - Text to copy
 * @returns Promise that resolves when text is copied
 */
export async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) {
    // Use modern clipboard API
    await navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    
    document.body.removeChild(textArea);
  }
}

/**
 * Download content as a file
 * @param content - File content (string, Blob, or ArrayBuffer)
 * @param fileName - Name of the file to download
 * @param type - MIME type of the file
 */
export function downloadFile(
  content: string | Blob | ArrayBuffer,
  fileName: string,
  type: string = 'text/plain'
): void {
  let blob: Blob;
  
  if (typeof content === 'string') {
    blob = new Blob([content], { type });
  } else if (content instanceof ArrayBuffer) {
    blob = new Blob([content], { type });
  } else {
    blob = content;
  }
  
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
} 