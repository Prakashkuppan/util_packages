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
export declare function request<T = any>(url: string, options?: RequestOptions): Promise<HttpResponse<T>>;
/**
 * GET request helper
 */
export declare function get<T = any>(url: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * POST request helper
 */
export declare function post<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * PUT request helper
 */
export declare function put<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * DELETE request helper
 */
export declare function del<T = any>(url: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * PATCH request helper
 */
export declare function patch<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<HttpResponse<T>>;
/**
 * URL utility functions
 */
export declare const url: {
    /**
     * Parses a URL and returns its components
     */
    parse(urlString: string): URL;
    /**
     * Builds a URL from components
     */
    build(base: string, params?: Record<string, any>): string;
    /**
     * Gets query parameters from a URL
     */
    getParams(urlString: string): Record<string, string>;
    /**
     * Adds query parameters to a URL
     */
    addParams(urlString: string, params: Record<string, any>): string;
    /**
     * Removes query parameters from a URL
     */
    removeParams(urlString: string, params: string[]): string;
    /**
     * Joins URL parts
     */
    join(...parts: string[]): string;
    /**
     * Checks if a URL is absolute
     */
    isAbsolute(urlString: string): boolean;
    /**
     * Checks if a URL is relative
     */
    isRelative(urlString: string): boolean;
};
/**
 * Query string utility functions
 */
export declare const queryString: {
    /**
     * Parses a query string into an object
     */
    parse(query: string): Record<string, string>;
    /**
     * Stringifies an object into a query string
     */
    stringify(params: Record<string, any>): string;
};
//# sourceMappingURL=network.d.ts.map