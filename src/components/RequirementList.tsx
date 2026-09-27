import type { Requisito } from '../types/military'
import ValidationStatus from './ValidationStatus'
import './RequirementList.css'

interface RequirementListProps {
  requisitos: Requisito[]
}

/**
 * Lista de requisitos (`Requisito[]`) para acesso, habilitação ou
 * promoção. Cada item deixa explícito se é obrigatório ou não e qual seu
 * status de validação individual — requisitos não são todos igualmente
 * confirmados apenas por pertencerem ao mesmo posto/graduação.
 */
function RequirementList({ requisitos }: RequirementListProps) {
  if (requisitos.length === 0) {
    return <p className="requirement-list__vazio">Nenhum requisito registrado até o momento.</p>
  }

  return (
    <ul className="requirement-list">
      {requisitos.map((requisito) => (
        <li key={requisito.id} className="requirement-list__item">
          <div className="requirement-list__item-linha">
            <span
              className={
                requisito.obrigatorio
                  ? 'requirement-list__badge requirement-list__badge--obrigatorio'
                  : 'requirement-list__badge requirement-list__badge--opcional'
              }
            >
              {requisito.obrigatorio ? 'Obrigatório' : 'Não obrigatório'}
            </span>
            <ValidationStatus status={requisito.statusValidacao} compact />
          </div>
          <p className="requirement-list__descricao">{requisito.descricao}</p>
        </li>
      ))}
    </ul>
  )
}

export default RequirementList
