import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import reaat from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
     react(),  
    tailwindcss(),
  ],
})