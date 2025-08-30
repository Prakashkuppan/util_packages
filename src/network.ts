/**
 * Network utility functions for HTTP requests and URL handling
 */

/**
 * HTTP request options interface
 */
export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
  credentials?: RequestCredentials;
}

/**
 * HTTP response interface
 */
export interface HttpResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  ok: boolean;
}

/**
 * Makes an HTTP request
 */
export async function request<T = any>(
  url: string,
  options: RequestOptions = {}
): Promise<HttpResponse<T>> {
  const {
    method = 'GET',
    headers = {},
    body,
    timeout = 30000,
    credentials = 'same-origin'
  } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined,
      credentials,
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const responseHeaders: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    let data: T;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text() as T;
    }

    return {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
      ok: response.ok
    };
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * GET request helper
 */
export function get<T = any>(url: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>> {
  return request<T>(url, { ...options, method: 'GET' });
}

/**
 * POST request helper
 */
export function post<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>> {
  return request<T>(url, { ...options, method: 'POST', body: data });
}

/**
 * PUT request helper
 */
export function put<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>> {
  return request<T>(url, { ...options, method: 'PUT', body: data });
}

/**
 * DELETE request helper
 */
export function del<T = any>(url: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>> {
  return request<T>(url, { ...options, method: 'DELETE' });
}

/**
 * PATCH request helper
 */
export function patch<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>> {
  return request<T>(url, { ...options, method: 'PATCH', body: data });
}

/**
 * URL utility functions
 */
export const url = {
  /**
   * Parses a URL and returns its components
   */
  parse(urlString: string): URL {
    return new URL(urlString);
  },

  /**
   * Builds a URL from components
   */
  build(base: string, params: Record<string, any> = {}): string {
    const url = new URL(base);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
    
    return url.toString();
  },

  /**
   * Gets query parameters from a URL
   */
  getParams(urlString: string): Record<string, string> {
    const url = new URL(urlString);
    const params: Record<string, string> = {};
    
    url.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    
    return params;
  },

  /**
   * Adds query parameters to a URL
   */
  addParams(urlString: string, params: Record<string, any>): string {
    const url = new URL(urlString);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
    
    return url.toString();
  },

  /**
   * Removes query parameters from a URL
   */
  removeParams(urlString: string, params: string[]): string {
    const url = new URL(urlString);
    
    params.forEach(param => {
      url.searchParams.delete(param);
    });
    
    return url.toString();
  },

  /**
   * Joins URL parts
   */
  join(...parts: string[]): string {
    return parts
      .map(part => part.replace(/^\/+|\/+$/g, ''))
      .filter(Boolean)
      .join('/');
  },

  /**
   * Checks if a URL is absolute
   */
  isAbsolute(urlString: string): boolean {
    return /^https?:\/\//.test(urlString);
  },

  /**
   * Checks if a URL is relative
   */
  isRelative(urlString: string): boolean {
    return !this.isAbsolute(urlString);
  }
};

/**
 * Query string utility functions
 */
export const queryString = {
  /**
   * Parses a query string into an object
   */
  parse(query: string): Record<string, string> {
    const params: Record<string, string> = {};
    const searchParams = new URLSearchParams(query);
    
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    
    return params;
  },

  /**
   * Stringifies an object into a query string
   */
  stringify(params: Record<string, any>): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        searchParams.set(key, String(value));
      }
    });
    
    return searchParams.toString();
  }
}; 