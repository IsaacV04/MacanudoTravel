import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    allowedHosts: [
      'macanudo-travel.loca.lt', // El dominio que te dio localtunnel
      '.loca.lt'                 // Esto permite cualquier subdominio de localtunnel
    ]
  }
})
