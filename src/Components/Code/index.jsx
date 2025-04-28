import styles from "./style.module.css"

export default function Code({ CodeContent, CodeRote, CodeTitle }) {
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
      <details className={styles.CodeDetails}>
        <summary className={styles.CodeSummary}>{CodeTitle}</summary>
        <div className={styles.div_details}>
          <div className={styles.code_container}>
            <div className={styles.code_header}>
              <span className={styles.code_title}>{CodeRote}</span>
              <div className={styles.code_actions}>
                <button
                  className={styles.copy_btn}
                  onClick={() => handleCopy(CodeContent)}
                  aria-label="Copiar código para área de transferência"
                >
                  📋 Copiar
                </button>
              </div>
            </div>
            <pre className={styles.code_block}>
              <code id="code_text">{CodeContent}</code>
            </pre>
          </div>
        </div>
      </details>
    </>
  )
}
