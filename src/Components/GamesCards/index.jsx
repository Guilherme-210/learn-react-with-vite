import styles from "./style.module.css"

export default function GamesCards({ Games }) {
  return (
    <>
      <section className={styles.gameCard} id={Games.id}>
        <div className={styles.gameContent}>
          <div className={styles.contentImg}>
            <img
              src={Games.coverImage}
              alt={`Capa de ${Games.title}`}
              className={styles.gameCover}
            />
          </div>
          <div className={styles.gameInfo}>
            <h2 className={styles.gameTitle}>{Games.title}</h2>
            <p>
              <strong>Ano:</strong> {Games.releaseYear}
            </p>
            <p>
              <strong>Gênero:</strong> {Games.genre}
            </p>
            <p>
              <strong>Desenvolvedora:</strong> {Games.developer}
            </p>
            <p>
              <strong>Plataforma:</strong> {Games.platform}
            </p>
            <p className={styles.gameDescription}>{Games.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}
