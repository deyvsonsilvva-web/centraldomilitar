import PageContainer from '../components/PageContainer'
import './Sobre.css'

function Sobre() {
  return (
    <PageContainer>
      <div className="sobre">
        <h1>Sobre o projeto</h1>
        <p>
          O Central do Militar é uma plataforma gratuita e independente que reúne, em um só
          lugar, informações sobre carreiras, postos, graduações e progressão nas Forças Armadas
          brasileiras — Exército, Marinha e Aeronáutica.
        </p>
        <p>
          O objetivo é transformar informações complexas, hoje espalhadas em leis, decretos e
          regulamentos, em uma experiência simples, clara e verificável, sempre com indicação
          das fontes oficiais utilizadas.
        </p>
        <p>
          O projeto está em desenvolvimento contínuo e não possui vínculo oficial com nenhuma
          das Forças Armadas.
        </p>
      </div>
    </PageContainer>
  )
}

export default Sobre
