import styles from "./style.module.css"

export default function ButtonLibrary({ type, content, id }) {
  return (
    <div className={styles.contentButton}>
      <button id={id} type={type}>
        {content}
      </button>
    </div>
  )
}
