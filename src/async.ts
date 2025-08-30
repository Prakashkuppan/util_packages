/**
 * Async utility functions for handling promises and asynchronous operations
 */

/**
 * Delays execution for specified milliseconds
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Retries a function with exponential backoff
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxAttempts) {
        throw lastError;
      }
      
      const delayMs = baseDelay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
  
  throw lastError!;
}

/**
 * Executes multiple promises with concurrency limit
 */
export async function concurrent<T>(
  tasks: (() => Promise<T>)[],
  concurrency: number = 5
): Promise<T[]> {
  const results: T[] = [];
  const running: Promise<void>[] = [];
  
  for (const task of tasks) {
    if (running.length >= concurrency) {
      await Promise.race(running);
    }
    
    const promise = task().then(result => {
      results.push(result);
      const index = running.indexOf(promise);
      if (index > -1) {
        running.splice(index, 1);
      }
    });
    
    running.push(promise);
  }
  
  await Promise.all(running);
  return results;
}

/**
 * Creates a promise that resolves after a timeout
 */
export function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => 
      setTimeout(() => reject(new Error('Operation timed out')), ms)
    )
  ]);
}

/**
 * Executes a function and returns both result and execution time
 */
export async function measureTime<T>(fn: () => Promise<T>): Promise<{ result: T; time: number }> {
  const start = performance.now();
  const result = await fn();
  const time = performance.now() - start;
  return { result, time };
}

/**
 * Creates a debounced async function
 */
export function debounceAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timeoutId: NodeJS.Timeout;
  let pendingPromise: Promise<ReturnType<T>> | null = null;
  
  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    if (pendingPromise) {
      clearTimeout(timeoutId);
    }
    
    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(async () => {
        try {
          const result = await fn(...args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}

/**
 * Creates a throttled async function
 */
export function throttleAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let lastCall = 0;
  let pendingPromise: Promise<ReturnType<T>> | null = null;
  
  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    const now = Date.now();
    
    if (now - lastCall < delay) {
      if (pendingPromise) {
        return pendingPromise;
      }
    }
    
    lastCall = now;
    pendingPromise = fn(...args);
    
    pendingPromise.finally(() => {
      pendingPromise = null;
    });
    
    return pendingPromise;
  };
}

/**
 * Executes promises in sequence
 */
export async function sequence<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {
  const results: T[] = [];
  
  for (const task of tasks) {
    const result = await task();
    results.push(result);
  }
  
  return results;
}

/**
 * Creates a promise that can be resolved/rejected externally
 */
export function createDeferred<T>(): {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
} {
  let resolve: (value: T) => void;
  let reject: (reason?: any) => void;
  
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  
  return { promise, resolve: resolve!, reject: reject! };
}

/**
 * Executes a function with retry on specific errors
 */
export async function retryOnError<T>(
  fn: () => Promise<T>,
  shouldRetry: (error: Error) => boolean,
  maxAttempts: number = 3
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (!shouldRetry(lastError) || attempt === maxAttempts) {
        throw lastError;
      }
    }
  }
  
  throw lastError!;
}

/**
 * Creates a promise that resolves when a condition is met
 */
export function waitFor(
  condition: () => boolean,
  checkInterval: number = 100,
  timeout: number = 10000
): Promise<void> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    const check = () => {
      if (condition()) {
        resolve();
        return;
      }
      
      if (Date.now() - startTime > timeout) {
        reject(new Error('Wait condition timeout'));
        return;
      }
      
      setTimeout(check, checkInterval);
    };
    
    check();
  });
} 