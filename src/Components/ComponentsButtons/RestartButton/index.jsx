import { useState } from "react"
import styles from "../style.module.css"

export default function RestartButton({
  setPassword,
  setPasswordSize,
  setShowInput,
}) {
  const [deleteText, setDeleteText] = useState("Reiniciar")

  function delPassword(ev) {
    ev.preventDefault()

    setPassword("")
    setPasswordSize("")
    setShowInput(false)
    document.getElementById("showInput").checked = false
    console.log("Sistema reiniciado com sucesso!")

    setDeleteText("Reiniciado")

    setTimeout(() => {
      setDeleteText("Reiniciar")
    }, 2000)
  }

  return (
    <button className={styles.DeletButton} onClick={delPassword}>
      {deleteText}
    </button>
  )
}
