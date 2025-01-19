import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

dotenv.config({path: './.env'})

// console.log(process.env.VITE_FRONT_PORT)
// https://vite.dev/config/
export default defineConfig({
  root: './front',
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_FRONT_PORT) || 5507,
  }
})
