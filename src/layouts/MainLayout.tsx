import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './MainLayout.css'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
