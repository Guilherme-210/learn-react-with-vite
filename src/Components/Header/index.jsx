import reactLogo from "../../assets/react.svg"
import viteLogo from "/vite.svg"
import styles from "./style.module.css"

export default function Header({ currentPage }) {
  return (
    <header className={styles.Header}>
      <ContentLogoNav />

      <h1 className={styles.TitlePage}>Vite + React {currentPage}</h1>

      <ContentNavPages />
    </header>
  )
}

export function ContentLogoNav() {
  return (
    <div className={styles.DivLogo}>
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        <img src={viteLogo} className={styles.logo} alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img
          src={reactLogo}
          className={`${styles.logo} ${styles.react}`}
          alt="React logo"
        />
      </a>
    </div>
  )
}

export function ContentNavPages() {
  return (
    <div className={styles.nav}>
      <nav>
        <a className={styles.NavPages} href="/" rel="noopener noreferrer">
          <i className="fi fi-rr-angle-left"></i>
        </a>
        <a className={styles.NavPages} href="/" rel="noopener noreferrer">
          <ion-icon name="home"></ion-icon>
        </a>
        <a className={styles.NavPages} href="/" rel="noopener noreferrer">
          <i className="fi fi-rr-angle-right"></i>
        </a>
      </nav>
    </div>
  )
}