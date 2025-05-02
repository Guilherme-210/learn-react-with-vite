import styles from "./style.module.css"

export default function ButtonLibrary({ type, content, id, onClick }) {
  return (
    <div className={styles.contentButton}>
      <button id={id} type={type} onClick={onClick}>
        {content}
      </button>
    </div>
  )
}
