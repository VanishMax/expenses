import { defineConfig } from 'vite'; // eslint-disable-line
import vue from '@vitejs/plugin-vue'; // eslint-disable-line
import { VitePWA } from 'vite-plugin-pwa'; // eslint-disable-line

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {},
      workbox: {},
    }),
  ],
});
