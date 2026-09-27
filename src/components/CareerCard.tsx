import { Link } from 'react-router-dom'
import type { Carreira } from '../types/military'
import ValidationStatus from './ValidationStatus'
import './CareerCard.css'

interface CareerCardProps {
  carreira: Carreira
  /** Rota interna para a página de detalhe da carreira, se já existir. */
  to?: string
}

const ROTULO_CATEGORIA: Record<Carreira['categoria'], string> = {
  oficial: 'Oficiais',
  praca: 'Praças',
}

/**
 * Card de resumo de uma `Carreira`. Genérico e independente de Força —
 * usado tanto para carreiras de oficiais quanto de praças, de qualquer
 * uma das três Forças.
 */
function CareerCard({ carreira, to }: CareerCardProps) {
  const conteudo = (
    <>
      <div className="career-card__cabecalho">
        <span className="career-card__categoria">{ROTULO_CATEGORIA[carreira.categoria]}</span>
        <ValidationStatus status={carreira.statusValidacao} compact />
      </div>
      <h3 className="career-card__nome">{carreira.nome}</h3>
      <p className="career-card__descricao">{carreira.descricao}</p>
      <p className="career-card__contagem">
        {carreira.itens.length}{' '}
        {carreira.itens.length === 1 ? 'posto/graduação' : 'postos/graduações'}
      </p>
    </>
  )

  if (to) {
    return (
      <Link to={to} className="career-card career-card--link">
        {conteudo}
      </Link>
    )
  }

  return <div className="career-card">{conteudo}</div>
}

export default CareerCard
