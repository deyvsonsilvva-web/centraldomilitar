import PageContainer from '../components/PageContainer'
import './EmDesenvolvimento.css'

interface EmDesenvolvimentoProps {
  titulo: string
  mensagem?: string
}

// Página reutilizável para qualquer rota cujo conteúdo ainda não foi
// desenvolvido. Nunca deve apresentar dado militar fictício — apenas o
// aviso de que o módulo está em preparação (ver Prompt 01, item 13).
function EmDesenvolvimento({ titulo, mensagem }: EmDesenvolvimentoProps) {
  return (
    <PageContainer>
      <div className="em-desenvolvimento">
        <h1>{titulo}</h1>
        <p>
          {mensagem ??
            'Este módulo está sendo preparado. As informações serão disponibilizadas após validação das fontes oficiais.'}
        </p>
      </div>
    </PageContainer>
  )
}

export default EmDesenvolvimento
