import styles from "../style.module.css"

export default function CopyButton({ Content, ClassName, onClick }) {
  const finalClassName = styles[ClassName]

  return (
    <>
      <button
        className={finalClassName}
        title="Botão de cópia"
        id="CopyButton"
        type="button"
        onClick={onClick}
      >
        {Content}
      </button>
    </>
  )
}
