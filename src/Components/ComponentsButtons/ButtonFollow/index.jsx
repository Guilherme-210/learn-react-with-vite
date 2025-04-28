import styles from "./style.module.css"

export default function ButtonFollow({ Content, Id, Title, Type, ClassName, NameVal }) {
  const finalClassName = styles[ClassName]

  function follow() {
    console.log(`Voce agora esta seguindo ${NameVal}`)
  }

  return (
    <button
      className={finalClassName}
      title={Title}
      id={Id}
      type={Type}
      onClick={follow}
    >
      {Content}
    </button>
  )
}
