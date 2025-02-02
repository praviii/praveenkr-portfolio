import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ✅ Import path module

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ Alias for src
    },
  },
  plugins: [react()],
  base: '/praveenkr-portfolio/', // ✅ Correct base for GitHub Pages
});
