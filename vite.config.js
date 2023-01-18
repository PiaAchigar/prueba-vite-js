import { defineConfig } from 'vite'
import vanilla from '@vitejs/plugin-vanilla'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanilla()],
  base:"/prueba-vite-js/"
})
