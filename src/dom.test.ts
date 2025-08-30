import { copyToClipboard, downloadFile } from './dom';

// Mock DOM APIs
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: jest.fn(),
  },
  writable: true,
});

Object.defineProperty(window, 'isSecureContext', {
  value: true,
  writable: true,
});

// Mock document methods
Object.defineProperty(document, 'execCommand', {
  value: jest.fn(),
  writable: true,
});

Object.defineProperty(document.body, 'appendChild', {
  value: jest.fn(),
  writable: true,
});

Object.defineProperty(document.body, 'removeChild', {
  value: jest.fn(),
  writable: true,
});

// Mock URL.createObjectURL and URL.revokeObjectURL
Object.defineProperty(URL, 'createObjectURL', {
  value: jest.fn(() => 'blob:mock-url'),
  writable: true,
});

Object.defineProperty(URL, 'revokeObjectURL', {
  value: jest.fn(),
  writable: true,
});

describe('DOM Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('copyToClipboard', () => {
    it('should use modern clipboard API when available', async () => {
      const mockWriteText = jest.fn().mockResolvedValue(undefined);
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: mockWriteText },
        writable: true,
      });

      await copyToClipboard('test text');
      expect(mockWriteText).toHaveBeenCalledWith('test text');
    });

    it('should fallback to execCommand when clipboard API not available', async () => {
      Object.defineProperty(navigator, 'clipboard', {
        value: undefined,
        writable: true,
      });

      const mockAppendChild = jest.fn();
      const mockRemoveChild = jest.fn();
      const mockFocus = jest.fn();
      const mockSelect = jest.fn();

      const mockTextArea = {
        value: '',
        style: {},
        focus: mockFocus,
        select: mockSelect,
      };

      Object.defineProperty(document, 'createElement', {
        value: jest.fn(() => mockTextArea),
        writable: true,
      });

      Object.defineProperty(document.body, 'appendChild', {
        value: mockAppendChild,
        writable: true,
      });

      Object.defineProperty(document.body, 'removeChild', {
        value: mockRemoveChild,
        writable: true,
      });

      await copyToClipboard('test text');

      expect(mockAppendChild).toHaveBeenCalled();
      expect(mockFocus).toHaveBeenCalled();
      expect(mockSelect).toHaveBeenCalled();
      expect(mockRemoveChild).toHaveBeenCalled();
    });
  });

  describe('downloadFile', () => {
    it('should create blob and trigger download for string content', () => {
      const mockClick = jest.fn();
      const mockLink = {
        href: '',
        download: '',
        click: mockClick,
      };

      Object.defineProperty(document, 'createElement', {
        value: jest.fn(() => mockLink),
        writable: true,
      });

      downloadFile('test content', 'test.txt', 'text/plain');

      expect(URL.createObjectURL).toHaveBeenCalled();
      expect(mockClick).toHaveBeenCalled();
      expect(URL.revokeObjectURL).toHaveBeenCalled();
    });

    it('should handle blob content', () => {
      const mockClick = jest.fn();
      const mockLink = {
        href: '',
        download: '',
        click: mockClick,
      };

      Object.defineProperty(document, 'createElement', {
        value: jest.fn(() => mockLink),
        writable: true,
      });

      const blob = new Blob(['test'], { type: 'text/plain' });
      downloadFile(blob, 'test.txt');

      expect(URL.createObjectURL).toHaveBeenCalledWith(blob);
      expect(mockClick).toHaveBeenCalled();
    });

    it('should handle ArrayBuffer content', () => {
      const mockClick = jest.fn();
      const mockLink = {
        href: '',
        download: '',
        click: mockClick,
      };

      Object.defineProperty(document, 'createElement', {
        value: jest.fn(() => mockLink),
        writable: true,
      });

      const buffer = new ArrayBuffer(8);
      downloadFile(buffer, 'test.bin', 'application/octet-stream');

      expect(URL.createObjectURL).toHaveBeenCalled();
      expect(mockClick).toHaveBeenCalled();
    });
  });
}); 