import styles from "../style.module.css"

export default function DeleteButton({ Content, ClassName, onClick }) {
  const finalClassName = styles[ClassName]

  return (
    <>
      <button
        className={finalClassName}
        title="Apagar texto"
        id="DeleteButton"
        type="button"
        onClick={onClick}
      >
        {Content}
      </button>
    </>
  )
}
