import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{js,ts,jsx,tsx}'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
