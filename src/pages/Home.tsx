import PageContainer from '../components/PageContainer'
import ForceCard from '../components/ForceCard'
import './Home.css'

function Home() {
  return (
    <PageContainer>
      <section className="home-hero">
        <h1>Central do Militar</h1>
        <p className="home-hero__descricao">
          Plataforma gratuita de consulta e ferramentas para as carreiras das Forças Armadas
          brasileiras.
        </p>
      </section>

      <section className="home-forcas" aria-label="Forças Armadas">
        <div className="home-forcas__grid">
          <ForceCard
            titulo="Exército Brasileiro"
            descricao="Postos, graduações e progressão de carreira."
            to="/carreiras/exercito"
          />
          <ForceCard
            titulo="Marinha do Brasil"
            descricao="Postos, graduações e progressão de carreira."
            to="/carreiras/marinha"
          />
          <ForceCard
            titulo="Força Aérea Brasileira"
            descricao="Postos, graduações e progressão de carreira."
            to="/carreiras/aeronautica"
          />
        </div>
      </section>
    </PageContainer>
  )
}

export default Home
