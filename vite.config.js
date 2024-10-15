import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/News-Application/', // The name of your GitHub repository
  plugins: [react()],
})
