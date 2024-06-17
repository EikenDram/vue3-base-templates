import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import Unfonts from 'unplugin-fonts/vite'
import mkcert from 'vite-plugin-mkcert'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    Vuetify(),
    Components(),
    Unfonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
    mkcert(),
    vueJsx(),
    VueDevTools()
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  },
  server: {
    port: 3000,
    proxy: {
      '^/identity': {
        target: 'https://localhost:5001/',
        secure: false,
        changeOrigin: true
      },
      '^/api': {
        target: 'https://localhost:5001/',
        secure: false,
        changeOrigin: true
      }
    },
  }
})