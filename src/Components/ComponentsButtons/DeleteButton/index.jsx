// src/Components/ComponentsButtons/DeleteButton/index.jsx
import { useState } from "react"
import styles from "../style.module.css"

export default function DeleteButton({ setPassword }) {
  const [deleteText, setDeleteText] = useState("Deletar")

  function delPassword(ev) {
    ev.preventDefault()
    setPassword("")
    console.log("Senha apagada com sucesso!")

    setDeleteText("Deletado")

    setTimeout(() => {
      setDeleteText("Deletar")
    }, 2000)
  }

  return (
    <button className={styles.DeletButton} onClick={delPassword}>
      {deleteText}
    </button>
  )
}
