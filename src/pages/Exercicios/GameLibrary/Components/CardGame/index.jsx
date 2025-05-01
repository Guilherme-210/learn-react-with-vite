import styles from "./style.module.css"

export default function CardGame({ Game }) {
  return (
    <div className={styles.contentCard}>
      <div className={styles.divImage}>
        <img
          className={styles.gameImage}
          src={Game.urlCover}
          alt={Game.textAlt}
        />
      </div>
      <div className={styles.divContent}>
        <h3>{Game.title}</h3>
        <p>{Game.descripition}</p>
      </div>
    </div>
  )
}
