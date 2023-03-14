import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
    open: true,
  },
  resolve: {
    alias: {
      '@': './src',
    },
    preserveSymlinks: true,
  },
})
