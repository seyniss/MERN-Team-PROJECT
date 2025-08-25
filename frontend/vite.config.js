import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// 객체가 아닌 함수를 export 합니다.
export default defineConfig(({ mode }) => {
  // Vite가 전달해준 mode를 사용해 .env 파일을 로드하고 env 변수에 저장합니다.
  const env = loadEnv(mode, process.cwd(), '');
  
  // 설정 객체를 반환(return)합니다.
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
        }
      }
    }
  }
})