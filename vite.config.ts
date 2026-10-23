import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 상대 경로로 빌드해서 어떤 정적 호스팅(서브 경로 포함)에도 그대로 올릴 수 있게 함
  base: './',
})
