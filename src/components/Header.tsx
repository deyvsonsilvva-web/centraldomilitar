import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import type { NavItem } from '../types/navigation'
import './Header.css'

const navItems: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Carreiras', path: '/carreiras' },
  { label: 'Remuneração', path: '/remuneracao' },
  { label: 'Calculadoras', path: '/calculadoras' },
  { label: 'Legislação', path: '/legislacao' },
  { label: 'Concursos', path: '/concursos' },
  { label: 'Sobre', path: '/sobre' },
]

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__brand" end onClick={() => setMenuAberto(false)}>
          Central do Militar
        </NavLink>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>

        <nav
          id="menu-principal"
          className={menuAberto ? 'header__nav header__nav--aberto' : 'header__nav'}
          aria-label="Navegação principal"
        >
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    isActive
                      ? 'header__nav-link header__nav-link--active'
                      : 'header__nav-link'
                  }
                  onClick={() => setMenuAberto(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
