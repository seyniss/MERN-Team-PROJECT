import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/api'로 시작하는 모든 요청을 백엔드 서버(target)로 전달
      '/api': {
        target: env.VITE_API_URL, // 백엔드 서버 주소
        changeOrigin: true, // cross-origin 요청을 위해 필수로 추가
      }
    }
  }
})
