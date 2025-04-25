import styles from "./style.module.css"

export default function Code({ CodeContent, CodeRote }) {
  function handleCopy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Código copiado! 🥳 
${text}`)
      })
      .catch((err) => {
        console.error("Erro ao copiar:", err)
      })
  }

  return (
    <>
      <div className={styles.code_container}>
        <div className={styles.code_header}>
          <span className={styles.code_title}>{CodeRote}</span>
          <div className={styles.code_actions}>
            <button
              className={styles.copy_btn}
              onClick={() => handleCopy(CodeContent)}
            >
              📋 Copiar
            </button>
          </div>
        </div>
        <pre className={styles.code_block}>
          <code
            id="
code_text"
          >
            {CodeContent}
          </code>
        </pre>
      </div>
    </>
  )
}
