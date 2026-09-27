import type { Intersticio } from '../types/military'
import ValidationStatus from './ValidationStatus'
import './IntersticioInfo.css'

interface IntersticioInfoProps {
  intersticio: Intersticio
}

const ROTULOS_TIPO: Record<Intersticio['tipo'], string> = {
  minimo: 'Tempo mínimo',
  referencia: 'Valor de referência',
  previstoEmNorma: 'Prazo previsto em norma',
  naoLocalizado: 'Não localizado em norma até o momento',
  naoAplicavel: 'Não aplicável',
  outro: 'Outro',
}

/**
 * Exibe um `Intersticio`.
 *
 * Regra de projeto: este componente NUNCA deve apresentar o valor
 * numérico isoladamente como "tempo cumprido = promoção". Por isso ele
 * sempre renderiza o `tipo` por extenso e um aviso fixo lembrando que
 * interstício é condição necessária, não suficiente — ver item 7 das
 * instruções do projeto.
 */
function IntersticioInfo({ intersticio }: IntersticioInfoProps) {
  const temValorNumerico =
    intersticio.tipo !== 'naoLocalizado' &&
    intersticio.tipo !== 'naoAplicavel' &&
    intersticio.valor !== undefined

  return (
    <div className="intersticio-info">
      <div className="intersticio-info__cabecalho">
        <span className="intersticio-info__tipo">{ROTULOS_TIPO[intersticio.tipo]}</span>
        <ValidationStatus status={intersticio.statusValidacao} compact />
      </div>

      {temValorNumerico && (
        <p className="intersticio-info__valor">
          {intersticio.valor} {intersticio.unidade ?? ''}
        </p>
      )}

      <p className="intersticio-info__descricao">{intersticio.descricao}</p>

      {intersticio.aplicabilidade && (
        <p className="intersticio-info__aplicabilidade">
          <strong>Aplicável a:</strong> {intersticio.aplicabilidade}
        </p>
      )}

      <p className="intersticio-info__aviso">
        O cumprimento do interstício, por si só, não garante a promoção. A promoção depende dos
        demais requisitos, critérios e condições previstos na legislação e regulamentação
        aplicáveis.
      </p>
    </div>
  )
}

export default IntersticioInfo
