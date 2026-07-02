import {vi, afterEach} from 'vitest'
import {cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/vitest"

vi.stubGlobal('fetch', fetch);
// vi.stubGlobal('AbortController', AbortController);
// vi.stubGlobal('AbortSignal', AbortSignal);
// vi.stubGlobal('Request', Request);
// vi.stubGlobal('Response', Response);
// vi.stubGlobal('Headers', Headers);

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.useRealTimers();
});
