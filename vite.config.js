import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  port: 3333
})

// import { defineConfig } from 'vite';
// import base64 from 'vite-plugin-base64';

// export default defineConfig({
//   plugins: [base64()],
//   port: 1111
// });
