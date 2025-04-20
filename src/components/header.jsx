import reactLogo from "../assets/react.svg"
import viteLogo from "/vite.svg"
import "./Header.css"

export default function Header() {
  return (
    <div>
      <div>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </div>
  )
}
