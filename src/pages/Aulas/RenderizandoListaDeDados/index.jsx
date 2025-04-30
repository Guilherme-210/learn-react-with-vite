import GamesDataBase from "../../../data/GamesList/DataBaseGamesList.js"
import GamesCards from "../../../Components/GamesCards/index.jsx"
import styles from "./style.module.css"

export default function RenderizandoLista() {
  return (
    <>
      <main className={styles.content}>
        {GamesDataBase.map((Games, index) => (
          <div key={index}>
            <GamesCards Games={Games} />
          </div>
        ))}
      </main>
    </>
  )
}
