/**
 * Async utility functions for handling promises and asynchronous operations
 */
/**
 * Delays execution for specified milliseconds
 */
export declare function delay(ms: number): Promise<void>;
/**
 * Retries a function with exponential backoff
 */
export declare function retry<T>(fn: () => Promise<T>, maxAttempts?: number, baseDelay?: number): Promise<T>;
/**
 * Executes multiple promises with concurrency limit
 */
export declare function concurrent<T>(tasks: (() => Promise<T>)[], concurrency?: number): Promise<T[]>;
/**
 * Creates a promise that resolves after a timeout
 */
export declare function timeout<T>(promise: Promise<T>, ms: number): Promise<T>;
/**
 * Executes a function and returns both result and execution time
 */
export declare function measureTime<T>(fn: () => Promise<T>): Promise<{
    result: T;
    time: number;
}>;
/**
 * Creates a debounced async function
 */
export declare function debounceAsync<T extends (...args: any[]) => Promise<any>>(fn: T, delay: number): (...args: Parameters<T>) => Promise<ReturnType<T>>;
/**
 * Creates a throttled async function
 */
export declare function throttleAsync<T extends (...args: any[]) => Promise<any>>(fn: T, delay: number): (...args: Parameters<T>) => Promise<ReturnType<T>>;
/**
 * Executes promises in sequence
 */
export declare function sequence<T>(tasks: (() => Promise<T>)[]): Promise<T[]>;
/**
 * Creates a promise that can be resolved/rejected externally
 */
export declare function createDeferred<T>(): {
    promise: Promise<T>;
    resolve: (value: T) => void;
    reject: (reason?: any) => void;
};
/**
 * Executes a function with retry on specific errors
 */
export declare function retryOnError<T>(fn: () => Promise<T>, shouldRetry: (error: Error) => boolean, maxAttempts?: number): Promise<T>;
/**
 * Creates a promise that resolves when a condition is met
 */
export declare function waitFor(condition: () => boolean, checkInterval?: number, timeout?: number): Promise<void>;
//# sourceMappingURL=async.d.ts.map