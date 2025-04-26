import Portifolio from "../../../Components/Portifolio/index.jsx"
import { Perfils } from "../../../data/Exercicio3-DatabasePortifolio/DataBasePortifolio.js"
import styles from "./style.module.css"

export default function PortifolioPage() {
  return (
    <>
      <main className={styles.Main}>
        <div
          className={styles.Div}
        >
          {Perfils.map((Perfil, index) => (
            <Portifolio Perfil={Perfil} key={index} />
          ))}
        </div>
      </main>
    </>
  )
}
