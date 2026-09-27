import type { Fonte } from '../types/sources'
import './SourceReference.css'

interface SourceReferenceProps {
  fontes: Fonte[]
  /** Título da seção (ex.: "Fontes", "Legislação"). */
  titulo?: string
}

/**
 * Lista genérica de fontes (`Fonte[]`) de uma informação. Usado tanto
 * para "Fontes" quanto para "Legislação relacionada", já que ambas
 * compartilham a mesma estrutura.
 *
 * Quando não há nenhuma fonte registrada, exibe isso explicitamente em
 * vez de simplesmente não renderizar nada — omitir a ausência de fonte
 * seria enganoso.
 */
function SourceReference({ fontes, titulo = 'Fontes' }: SourceReferenceProps) {
  if (fontes.length === 0) {
    return (
      <div className="source-reference source-reference--vazio">
        <h4 className="source-reference__titulo">{titulo}</h4>
        <p className="source-reference__vazio-texto">Nenhuma fonte registrada até o momento.</p>
      </div>
    )
  }

  return (
    <div className="source-reference">
      <h4 className="source-reference__titulo">{titulo}</h4>
      <ul className="source-reference__lista">
        {fontes.map((fonte, indice) => (
          <li key={`${fonte.titulo}-${indice}`} className="source-reference__item">
            <span className="source-reference__item-titulo">
              {fonte.url ? (
                <a href={fonte.url} target="_blank" rel="noreferrer noopener">
                  {fonte.titulo}
                </a>
              ) : (
                fonte.titulo
              )}
            </span>
            <span className="source-reference__item-meta">
              {fonte.orgao}
              {fonte.referencia ? ` — ${fonte.referencia}` : ''}
              {fonte.artigoOuSecao ? ` (${fonte.artigoOuSecao})` : ''}
            </span>
            <span className="source-reference__item-datas">
              {fonte.dataPublicacao && <>Publicado em {fonte.dataPublicacao} · </>}
              Verificado em {fonte.dataVerificacao}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SourceReference
