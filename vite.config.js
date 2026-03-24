import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api/live': {
        target: 'https://live.sudaksh.in',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/live/, '/live'),
      },
    },
  },
})