// src/Components/ComponentsButtons/CopyButton/index.jsx
import { useState } from "react"
import styles from "../style.module.css"

export default function CopyButton({ password }) {
  const [copyText, setCopyText] = useState("Copiar")

  function copyPassword(ev) {
    ev.preventDefault()
    navigator.clipboard.writeText(password)

    setCopyText("Copiado")
    console.log("Senha copiada com sucesso!")

    setTimeout(() => {
      setCopyText("Copiar")
    }, 3000)
  }

  return (
    <button className={styles.ButtonGenerate} onClick={copyPassword}>
      {copyText}
    </button>
  )
}
