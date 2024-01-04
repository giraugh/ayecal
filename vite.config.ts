import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      ayecal: resolve(__dirname, '/src/index.ts'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ayecal',
      fileName: 'ayecal',
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
})
