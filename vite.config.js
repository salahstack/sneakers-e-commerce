// vite.config.js
import react from '@vitejs/plugin-react';
import path from 'path';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-redux'],
    },
  },
};
