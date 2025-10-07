import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    server: {
      proxy: {
        [env.VITE_API_BASE_URL]: {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  }
})
