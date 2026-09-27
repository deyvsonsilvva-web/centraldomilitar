import type { PostoOuGraduacao } from '../types/military'
import ValidationStatus from './ValidationStatus'
import RequirementList from './RequirementList'
import IntersticioInfo from './IntersticioInfo'
import SourceReference from './SourceReference'
import './RankCard.css'

interface RankCardProps {
  posto: PostoOuGraduacao
  /**
   * Controla o nível de detalhe exibido.
   * - `resumido` (padrão): nome, abreviatura, categoria e status — para uso em `CareerTimeline`.
   * - `completo`: inclui requisitos, interstício, critérios, cursos, observações e fontes.
   */
  variante?: 'resumido' | 'completo'
}

/**
 * Card genérico para um posto (oficiais) ou graduação (praças).
 *
 * Genérico e independente de Força: recebe todo o conteúdo via `posto` e
 * não pressupõe nenhuma regra específica do Exército, Marinha ou
 * Aeronáutica.
 */
function RankCard({ posto, variante = 'resumido' }: RankCardProps) {
  return (
    <article className="rank-card" aria-label={posto.nome}>
      <header className="rank-card__cabecalho">
        <div>
          <p className="rank-card__categoria">{posto.categoria === 'oficial' ? 'Oficial' : 'Praça'}</p>
          <h3 className="rank-card__nome">{posto.nome}</h3>
          <p className="rank-card__abreviatura">{posto.abreviatura}</p>
        </div>
        <ValidationStatus status={posto.statusValidacao} compact />
      </header>

      {variante === 'completo' && (
        <div className="rank-card__detalhes">
          {posto.intersticio && (
            <section className="rank-card__secao">
              <h4 className="rank-card__secao-titulo">Interstício</h4>
              <IntersticioInfo intersticio={posto.intersticio} />
            </section>
          )}

          {posto.requisitos && posto.requisitos.length > 0 && (
            <section className="rank-card__secao">
              <h4 className="rank-card__secao-titulo">Requisitos</h4>
              <RequirementList requisitos={posto.requisitos} />
            </section>
          )}

          {posto.criterios && posto.criterios.length > 0 && (
            <section className="rank-card__secao">
              <h4 className="rank-card__secao-titulo">Critérios de promoção</h4>
              <ul className="rank-card__lista-criterios">
                {posto.criterios.map((criterio) => (
                  <li key={criterio.id} className="rank-card__item-criterio">
                    <div className="rank-card__item-criterio-linha">
                      <ValidationStatus status={criterio.statusValidacao} compact />
                    </div>
                    <p className="rank-card__item-criterio-descricao">{criterio.descricao}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {posto.cursos && posto.cursos.length > 0 && (
            <section className="rank-card__secao">
              <h4 className="rank-card__secao-titulo">Cursos relevantes</h4>
              <ul className="rank-card__lista-cursos">
                {posto.cursos.map((curso) => (
                  <li key={curso.id}>
                    {curso.nome}
                    {curso.sigla ? ` (${curso.sigla})` : ''}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {posto.observacoes && (
            <section className="rank-card__secao">
              <h4 className="rank-card__secao-titulo">Observações</h4>
              <p className="rank-card__observacoes">{posto.observacoes}</p>
            </section>
          )}

          <SourceReference fontes={posto.fontes} titulo="Fontes" />
          {posto.legislacao && posto.legislacao.length > 0 && (
            <SourceReference fontes={posto.legislacao} titulo="Legislação relacionada" />
          )}
        </div>
      )}
    </article>
  )
}

export default RankCard
