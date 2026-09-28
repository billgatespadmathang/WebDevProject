import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' agar aset tetap benar saat di-deploy ke GitHub Pages (subfolder repo)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
