import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite para o Central do Militar.
// O `base` precisa corresponder ao caminho do repositório no GitHub Pages,
// já que a aplicação NÃO será publicada na raiz do domínio.
export default defineConfig({
  base: '/centraldomilitar/',
  plugins: [react()],
})
