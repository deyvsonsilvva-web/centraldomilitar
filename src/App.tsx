import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AppRoutes from './routes/AppRoutes'

// import.meta.env.BASE_URL reflete automaticamente o `base` definido em
// vite.config.ts ('/centraldomilitar/' em produção, '/' em desenvolvimento).
// Usar a mesma fonte para o Vite e para o Router evita que os dois valores
// fiquem dessincronizados por engano.
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
