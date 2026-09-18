import { Link } from 'react-router-dom'
import './ForceCard.css'

interface ForceCardProps {
  titulo: string
  descricao: string
  to: string
}

function ForceCard({ titulo, descricao, to }: ForceCardProps) {
  return (
    <Link to={to} className="force-card">
      <h3 className="force-card__titulo">{titulo}</h3>
      <p className="force-card__descricao">{descricao}</p>
      <span className="force-card__link" aria-hidden="true">
        Ver carreiras →
      </span>
    </Link>
  )
}

export default ForceCard
