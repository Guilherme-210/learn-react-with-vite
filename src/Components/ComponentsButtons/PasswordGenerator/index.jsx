// src/Components/ComponentsButtons/PasswordGenerator/index.jsx
import { useState } from "react"
import styles from "../style.module.css"

export default function PasswordGenerator({ setPassword }) {
  const [passwordText, setPasswordText] = useState("Gerar senha")

  function generatePassword(ev, size = 12) {
    ev.preventDefault()

    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-`~[]{}|;':\",./<>?"
    let result = ""

    try {
      if (size > 100) {
        throw new Error("Senha muito longa! Escolha até 100 caracteres.")
      }

      for (let i = 0; i < size; i++) {
        result += caracteres.charAt(
          Math.floor(Math.random() * caracteres.length)
        )
      }
      setPassword(result)

      setPasswordText("Senha gerada")

      setTimeout(() => {
        setPasswordText("Gerar senha")
      }, 5000)
      console.log("Senha gerada com sucesso!")
    } catch (error) {
      console.error(`Erro ao gerar a senha: ${error}`)
    }
  }

  return (
    <button className={styles.ButtonGenerate} onClick={generatePassword}>
      {passwordText}
    </button>
  )
}
