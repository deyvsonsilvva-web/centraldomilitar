import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import EmDesenvolvimento from '../pages/EmDesenvolvimento'

// Nesta etapa (fundação técnica), todas as rotas de conteúdo ainda não
// desenvolvido apontam para a página "Em desenvolvimento". Nenhuma delas
// contém dado militar factual — ver regra do Prompt 01, item 12.
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />

      <Route path="/carreiras" element={<EmDesenvolvimento titulo="Carreiras" />} />
      <Route
        path="/carreiras/exercito"
        element={<EmDesenvolvimento titulo="Carreiras — Exército Brasileiro" />}
      />
      <Route
        path="/carreiras/marinha"
        element={<EmDesenvolvimento titulo="Carreiras — Marinha do Brasil" />}
      />
      <Route
        path="/carreiras/aeronautica"
        element={<EmDesenvolvimento titulo="Carreiras — Força Aérea Brasileira" />}
      />

      <Route path="/remuneracao" element={<EmDesenvolvimento titulo="Remuneração" />} />
      <Route path="/calculadoras" element={<EmDesenvolvimento titulo="Calculadoras" />} />
      <Route path="/legislacao" element={<EmDesenvolvimento titulo="Legislação" />} />
      <Route path="/concursos" element={<EmDesenvolvimento titulo="Concursos" />} />

      <Route
        path="*"
        element={
          <EmDesenvolvimento
            titulo="Página não encontrada"
            mensagem="A página que você procura não existe ou foi movida."
          />
        }
      />
    </Routes>
  )
}

export default AppRoutes
