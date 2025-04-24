import "./style.css"

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
      <div className="code_container">
        <div className="code_header">
          <span className="code_title">{CodeRote}</span>
          <div className="code_actions">
            <button
              className="copy_btn"
              onClick={() => handleCopy(CodeContent)}
            >
              📋 Copiar
            </button>
          </div>
        </div>
        <pre className="code_block">
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
