import { useState } from "react"
import FormLibrary from "./Components/form"
import CardGame from "./Components/CardGame"
import styles from "./style.module.css"

export default function GameLibrary() {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")
  const [textAlt, setTextAlt] = useState("")
  const [textarea, setTextarea] = useState("")
  const [themes, setThemes] = useState([])
  const [gameLibrary, setGameLibrary] = useState(() => {
    const storageGames = localStorage.getItem("obc-game-lib")
    if (!storageGames) return []
    return JSON.parse(storageGames)
  }, [
    {
      id: 1746143914588,
      title: "Gog of War Ragnarok",
      urlCover:
        "https://m.media-amazon.com/images/I/8136lnf0n2L._AC_UF1000,1000_QL80_.jpg",
      textAlt: "Capa do jogo God of War Ragnarok",
      descripition:
        "Foi desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment. Foi lançado em 9 de novembro de 2022 para PlayStation 4 e PlayStation 5. ",
      themes: ["Ação", "Aventura", "Terror", "RPG", "Corrida", "Esportes"],
    },
    {
      id: 1746143918402,
      title: "Dying Light",
      urlCover:
        "https://upload.wikimedia.org/wikipedia/pt/4/4c/Dying_Light_jogo_capa.jpg?20220211113247",
      textAlt: "Capa do jogo God of War Ragnarok",
      descripition: `Dying Light é um jogo eletrônico de survival horror onde se retrata um apocalipse zumbi. Foi produzido pela Techland e publicado pela Warner Bros. Interactive Entertainment, seu anúncio aconteceu em maio de 2013, e eventualmente foi lançado em janeiro de 2015.`,
      themes: ["Ação", "Aventura", "Terror", "RPG", "Corrida", "Esportes"],
    },
  ])

  const removeGame = (id) => {
    setGameLibrary((state) => {
      const newState = state.filter((game) => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const Game = {
      id: Date.now(),
      title: title,
      urlCover: cover,
      textAlt: textAlt,
      descripition: textarea,
      themes: themes,
    }
    console.log(Game)

    // gameLibrary.unshift(Game)
    setGameLibrary((state) => {
      const newState = [Game, ...state]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))

      return newState
    })

    setTitle("")
    setCover("")
    setTextAlt("")
    setTextarea("")
  }

  return (
    <main>
      <div className={styles.content}>
        <h2>Biblioteca de jogos</h2>
        <div className={styles.contentForm}>
          <FormLibrary
            handleSubmit={handleSubmit}
            title={title}
            cover={cover}
            textAlt={textAlt}
            textarea={textarea}
            setTitle={setTitle}
            setCover={setCover}
            setTextAlt={setTextAlt}
            setTextarea={setTextarea}
            themes={themes}
            setThemes={setThemes}
          />
        </div>
        <div className={styles.contentCardsImages}>
          {gameLibrary.map((Game) => (
            <CardGame
              key={Game.id}
              Game={Game}
              onClick={() => removeGame(Game.id)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
