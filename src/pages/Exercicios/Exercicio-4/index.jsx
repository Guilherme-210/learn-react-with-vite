import PasswordGenerator from "../../../Components/ComponentsButtons/PasswordGenerator/index.jsx"
import CopyButton from "../../../Components/ComponentsButtons/CopyButton/index.jsx"
import DeleteButton from "../../../Components/ComponentsButtons/DeleteButton/index.jsx"
import { useState } from "react"
import styles from "./style.module.css"

export default function GeradorDeSenha() {
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordText, setPasswordText] = useState("Gerar senha")
  const [deleteText, setDeleteText] = useState("Deletar")
  const [password, setPassword] = useState("")

  function inputAction(ev) {
    setPassword(ev.target.value)
    setCopyText("Copiar")
  }

  function delPassword(ev) {
    ev.preventDefault()
    navigator.clipboard.writeText(password)

    if (copyText === "Copiar") {
      setDeleteText("Deletado")
      setPassword("")
      console.log("Senha apagada com sucesso!")
    }

    setTimeout(() => {
      setDeleteText("Deletar")
    }, 1000 * 2)
  }

  function copyPassword(ev) {
    ev.preventDefault()
    navigator.clipboard.writeText(password)

    if (copyText === "Copiar") {
      setCopyText("Copiado")
      console.log("Senha copiada com sucesso!")
    }

    setTimeout(() => {
      setCopyText("Copiar")
    }, 1000 * 3)
  }

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

      if (passwordText === "Gerar senha") {
        setPasswordText("Senha gerada")
      }

      setTimeout(() => {
        setPasswordText("Gerar senha")
      }, 1000 * 5)
      console.log("Senha gerada com sucesso!")
    } catch (error) {
      console.error(`Erro ao gerar a senha: ${error}`)
    }
  }

  return (
    <>
      <main className={styles.Content}>
        <h2 className={styles.Title}>Gerador de senha</h2>

        <form className={styles.Form}>
          <div className={styles.divFlexRow}>
            <input
              type="text"
              name="Input senha"
              id="InputSenha"
              placeholder="Sua senha aparecerá aqui..."
              value={password}
              onChange={inputAction}
              readOnly
            />
            <DeleteButton
              Content={deleteText}
              ClassName="deletButton"
              onClick={delPassword}
            />
          </div>
          <div className={styles.divFlexRow}>
            <PasswordGenerator
              Content={passwordText}
              ClassName="ButtonGenerate"
              onClick={generatePassword}
            />
            <CopyButton
              Content={copyText}
              ClassName="ButtonGenerate"
              onClick={copyPassword}
            />
          </div>
        </form>
      </main>
    </>
  )
}
