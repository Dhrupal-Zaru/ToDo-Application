import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': {
        target: 'https://todo-app-fzy3.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/tasks': {
        target: 'https://todo-app-fzy3.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
