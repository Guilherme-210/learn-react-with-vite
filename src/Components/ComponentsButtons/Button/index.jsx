import styles from "../style.module.css"

export default function Button({ Content, Id, Title, Type, ClassName, onClick }) {
  const finalClassName = styles[ClassName]

  return (
    <button
      onClick={onClick}
      className={finalClassName}
      title={Title}
      id={Id}
      type={Type}
    >
      {Content}
    </button>
  )
}
