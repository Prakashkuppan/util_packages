/**
 * Storage utility functions for localStorage and sessionStorage
 */

/**
 * Local storage wrapper with error handling
 */
export const localStorage = {
  /**
   * Sets an item in localStorage
   */
  set(key: string, value: any): boolean {
    try {
      const serialized = JSON.stringify(value);
      window.localStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
      return false;
    }
  },

  /**
   * Gets an item from localStorage
   */
  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    } catch (error) {
      console.warn('Failed to read from localStorage:', error);
      return defaultValue || null;
    }
  },

  /**
   * Removes an item from localStorage
   */
  remove(key: string): boolean {
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove from localStorage:', error);
      return false;
    }
  },

  /**
   * Clears all items from localStorage
   */
  clear(): boolean {
    try {
      window.localStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
      return false;
    }
  },

  /**
   * Gets all keys from localStorage
   */
  keys(): string[] {
    try {
      return Object.keys(window.localStorage);
    } catch (error) {
      console.warn('Failed to get localStorage keys:', error);
      return [];
    }
  },

  /**
   * Checks if localStorage is available
   */
  isAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
};

/**
 * Session storage wrapper with error handling
 */
export const sessionStorage = {
  /**
   * Sets an item in sessionStorage
   */
  set(key: string, value: any): boolean {
    try {
      const serialized = JSON.stringify(value);
      window.sessionStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      console.warn('Failed to save to sessionStorage:', error);
      return false;
    }
  },

  /**
   * Gets an item from sessionStorage
   */
  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    } catch (error) {
      console.warn('Failed to read from sessionStorage:', error);
      return defaultValue || null;
    }
  },

  /**
   * Removes an item from sessionStorage
   */
  remove(key: string): boolean {
    try {
      window.sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Failed to remove from sessionStorage:', error);
      return false;
    }
  },

  /**
   * Clears all items from sessionStorage
   */
  clear(): boolean {
    try {
      window.sessionStorage.clear();
      return true;
    } catch (error) {
      console.warn('Failed to clear sessionStorage:', error);
      return false;
    }
  },

  /**
   * Gets all keys from sessionStorage
   */
  keys(): string[] {
    try {
      return Object.keys(window.sessionStorage);
    } catch (error) {
      console.warn('Failed to get sessionStorage keys:', error);
      return [];
    }
  },

  /**
   * Checks if sessionStorage is available
   */
  isAvailable(): boolean {
    try {
      const test = '__sessionStorage_test__';
      window.sessionStorage.setItem(test, test);
      window.sessionStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
};

/**
 * Cookie utility functions
 */
export const cookies = {
  /**
   * Sets a cookie
   */
  set(name: string, value: string, options: {
    expires?: Date | number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
  } = {}): void {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    
    if (options.expires) {
      if (typeof options.expires === 'number') {
        const date = new Date();
        date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
        cookie += `; expires=${date.toUTCString()}`;
      } else {
        cookie += `; expires=${options.expires.toUTCString()}`;
      }
    }
    
    if (options.path) cookie += `; path=${options.path}`;
    if (options.domain) cookie += `; domain=${options.domain}`;
    if (options.secure) cookie += '; secure';
    if (options.sameSite) cookie += `; samesite=${options.sameSite}`;
    
    document.cookie = cookie;
  },

  /**
   * Gets a cookie value
   */
  get(name: string): string | null {
    const nameEQ = `${encodeURIComponent(name)}=`;
    const cookies = document.cookie.split(';');
    
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    
    return null;
  },

  /**
   * Removes a cookie
   */
  remove(name: string, options: { path?: string; domain?: string } = {}): void {
    this.set(name, '', { ...options, expires: new Date(0) });
  }
}; 