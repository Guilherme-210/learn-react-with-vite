import styles from "../style.module.css"

export default function PasswordGenerator({ Content, ClassName, onClick }) {
  const finalClassName = styles[ClassName]

  return (
    <>
      <button
        className={finalClassName}
        title="Gerador de senha"
        id="generatePassword"
        type="button"
        onClick={onClick}
      >
        {Content}
      </button>
    </>
  )
}
