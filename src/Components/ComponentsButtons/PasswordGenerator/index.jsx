import styles from "./style.module.css"

export default function PasswordGenerator({ Content, Id, Title, Type, ClassName, onClick }) {
  const finalClassName = styles[ClassName]

  return (
    <>
      <button
        className={finalClassName}
        title={Title}
        id={Id}
        type={Type}
        onClick={onClick}
      >
        {Content}
      </button>
    </>
  )
}
