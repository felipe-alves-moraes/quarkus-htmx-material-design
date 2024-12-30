import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    lib: {
      entry: './main.js',
      name: 'libs',
      fileName: 'main'
    }
  },
  // depending on your application, base can also be "/"
  base: '',
  plugins: [tsconfigPaths()],
  server: {},
})