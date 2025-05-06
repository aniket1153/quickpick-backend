// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Replace with your backend server's address
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
