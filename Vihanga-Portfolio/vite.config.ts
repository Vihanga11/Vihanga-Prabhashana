import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // Expose to all network interfaces
    strictPort: true, // Fail if port is in use
  },
  build: {
    target: 'esnext',
    minify: 'esbuild', // Change to esbuild instead of terser
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react', 'swiper', 'react-masonry-css'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
