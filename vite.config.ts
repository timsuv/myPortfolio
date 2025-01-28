import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/myPortfolio/',
  build: {
    outDir: 'dist', // Change this if needed
  },
})
