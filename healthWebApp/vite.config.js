import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Aquí defines la configuración del import map
  // dentro del objeto que pasas a defineConfig
  // No necesitas separarlos, todo va dentro del mismo objeto
  imports: {
    "react": "/lib/react/umd/react.development.js",
    "react-dom": "/lib/react-dom/umd/react-dom.development.js",
    "react-dom/client": "/lib/react-dom/path-for-client-file.js"
  }
})
