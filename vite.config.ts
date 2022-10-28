import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const port = (env.VITE_PORT || 3000) as number

  return {
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
        { find: /^~/, replacement: '' },
      ],
    },

    plugins: [react(), splitVendorChunkPlugin()],
    define: {
      'process.env': { ...process.env, ...loadEnv(mode, process.cwd()) },
    },
    server: { port, host: true },

    optimizeDeps: {
      // include: ['@ant-design/colors', '@ant-design/icons', 'iconsax-react'],
      include: ['iconsax-react'],
    },
    assetsInclude: ['**/*.svg'],
    build: {
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-venders': ['react', 'react-dom'],
          },
        },
      },
    },
    css: {
      modules: { localsConvention: 'camelCaseOnly' },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: { '@ant-prefix': 'utility-billing' },
        },
      },
    },
    // mode: process.env ==== 'development'
    // base: '/billing/',
  }
})
