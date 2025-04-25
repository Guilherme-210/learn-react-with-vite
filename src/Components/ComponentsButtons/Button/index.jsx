import styles from "./style.module.css"

export default function Button({ Content, Id, Title, Type, ClassName }) {
  const finalClassName = styles[ClassName]

  return (
    <button className={finalClassName} title={Title} id={Id} type={Type}>
      {Content}
    </button>
  )
}
