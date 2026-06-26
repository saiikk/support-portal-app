import '@testing-library/jest-dom'

const storage: Record<string, string> = {}

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (key: string) => storage[key] ?? null,

    setItem: (key: string, value: string) => {
      storage[key] = value
    },

    removeItem: (key: string) => {
      delete storage[key]
    },

    clear: () => {
      Object.keys(storage).forEach((key) => delete storage[key])
    },
  },
  writable: true,
})