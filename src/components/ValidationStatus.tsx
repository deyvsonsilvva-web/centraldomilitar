import type { StatusValidacao } from '../types/sources'
import './ValidationStatus.css'

interface ValidationStatusProps {
  status: StatusValidacao
  /** Exibe apenas o indicador visual, sem o texto do rótulo (mantém o texto para leitores de tela). */
  compact?: boolean
}

const ROTULOS: Record<StatusValidacao, string> = {
  verificado: 'Verificado',
  parcialmenteVerificado: 'Parcialmente verificado',
  pendenteVerificacao: 'Pendente de verificação',
  desatualizado: 'Possivelmente desatualizado',
}

const DESCRICOES: Record<StatusValidacao, string> = {
  verificado: 'Conferido diretamente contra fonte oficial vigente.',
  parcialmenteVerificado: 'Parte da informação confirmada; parte ainda depende de confirmação.',
  pendenteVerificacao: 'Ainda não confirmado contra fonte oficial — não deve ser tratado como definitivo.',
  desatualizado: 'Há indício de alteração normativa posterior ainda não incorporada.',
}

/**
 * Selo genérico (não específico de nenhuma Força) que comunica o grau de
 * confiabilidade de uma informação. Nunca deve ser omitido quando uma
 * informação factual é exibida — ver item 6 do Prompt 02.
 */
function ValidationStatus({ status, compact = false }: ValidationStatusProps) {
  return (
    <span
      className={`validation-status validation-status--${status}`}
      title={DESCRICOES[status]}
    >
      <span className="validation-status__dot" aria-hidden="true" />
      {!compact && <span className="validation-status__rotulo">{ROTULOS[status]}</span>}
      {compact && <span className="sr-only">{ROTULOS[status]}</span>}
    </span>
  )
}

export default ValidationStatus
