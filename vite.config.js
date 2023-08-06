import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.VITE_REACT_APP_EMAILJS_SERVICE_ID': JSON.stringify(process.env.VITE_REACT_APP_EMAILJS_SERVICE_ID),
        'process.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID),
        'process.env.VITE_REACT_APP_EMAILJS_USER_ID': JSON.stringify(process.env.VITE_REACT_APP_EMAILJS_USER_ID),
      },
    }),
  ],
});
