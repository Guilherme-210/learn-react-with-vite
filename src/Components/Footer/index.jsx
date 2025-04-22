import "./style.css"

export default function Footer() {
  return (
    <>
      <footer>
        <p>© 2025 Desenvolvido por Guilherme Reis.</p>
        <br />
        <nav className="Nav-Footer">
          <a
            href="https://github.com/Guilherme-210"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acesse o meu GitHub <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href="https://github.com/Guilherme-210/learn-react-with-vite.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acesse o diretorio
          </a>
        </nav>
      </footer>
    </>
  )
}
