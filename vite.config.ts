import { defineConfig } from 'vite' 
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const ASSET_URL = process.env.ASSET_URL || '';

// https://vite.dev/config/
export default defineConfig({
  base: `${ASSET_URL}`,
  plugins: [
    react(),
    tailwindcss(),
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 3000
  }
})
