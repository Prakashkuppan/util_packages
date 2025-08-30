// Jest setup file for DOM testing environment
import '@testing-library/jest-dom';

// Mock window.URL for tests
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'URL', {
    value: {
      createObjectURL: () => 'blob:mock-url',
      revokeObjectURL: () => {},
    },
    writable: true,
  });
} 