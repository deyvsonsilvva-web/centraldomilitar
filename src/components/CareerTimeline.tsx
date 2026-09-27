import type { PostoOuGraduacao } from '../types/military'
import RankCard from './RankCard'
import './CareerTimeline.css'

interface CareerTimelineProps {
  /** Postos/graduações já ordenados por `posicaoHierarquica` crescente. */
  postos: PostoOuGraduacao[]
}

/**
 * Mostra visualmente a trajetória possível entre postos/graduações de
 * uma carreira (item 5 das instruções do projeto — "Progressão").
 *
 * Implementada como uma lista responsiva (flex-wrap) em vez de uma
 * tabela horizontal larga, para funcionar em telas pequenas sem scroll
 * horizontal obrigatório — ver item 11 do Prompt 02.
 */
function CareerTimeline({ postos }: CareerTimelineProps) {
  if (postos.length === 0) {
    return <p className="career-timeline__vazio">Nenhum posto/graduação registrado até o momento.</p>
  }

  return (
    <ol className="career-timeline">
      {postos.map((posto, indice) => (
        <li key={posto.id} className="career-timeline__item">
          <RankCard posto={posto} variante="resumido" />
          {indice < postos.length - 1 && (
            <span className="career-timeline__conector" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  )
}

export default CareerTimeline
