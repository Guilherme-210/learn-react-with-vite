import { useState } from "react"
import styles from "../style.module.css"

export default function ButtonFollow({
  Content,
  Id,
  Title,
  Type,
  ClassName,
  NameVal,
}) {
  const finalClassName = styles[ClassName]
  const [followText, setFollowText] = useState(Content)

  function follow() {
    if (followText == "Seguir") {
      console.log(`Voce esta seguindo ${NameVal}`)
      setFollowText("Seguindo")
    } else {
      console.log(`Voce deixou de seguir ${NameVal}`)
      setFollowText("Seguir")
    }
  }

  return (
    <button className={finalClassName} title={Title} id={Id} type={Type} onClick={follow} >
      {followText}
    </button>
  )
}
