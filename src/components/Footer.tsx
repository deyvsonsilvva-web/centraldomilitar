import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} Central do Militar.</p>
        <p className="footer__aviso">
          Plataforma informativa e independente, sem vínculo oficial com as Forças Armadas.
        </p>
      </div>
    </footer>
  )
}

export default Footer
