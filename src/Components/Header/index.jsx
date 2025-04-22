import reactLogo from "../../assets/react.svg"
import viteLogo from "/vite.svg"
import "./style.css"

export default function Header() {
  return (
    <>
      <header>
        <div className="div-logo">
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>

        <div className="nav">
          <nav>
            <a className="nav_pages" href="/" rel="noopener noreferrer">
              <i className="fi fi-rr-angle-left"></i>
            </a>
            <a className="nav_pages" href="/" rel="noopener noreferrer">
              <ion-icon name="home"></ion-icon>
            </a>
            <a className="nav_pages" href="/" rel="noopener noreferrer">
              <i className="fi fi-rr-angle-right"></i>
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
