import PasswordGenerator from "../../../Components/ComponentsButtons/PasswordGenerator/index.jsx"
import CopyButton from "../../../Components/ComponentsButtons/CopyButton/index.jsx"
import { useState } from "react"

export default function GeradorDeSenha() {
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordText, setPasswordText] = useState("Gerar senha")
  const [password, setPassword] = useState("")

  function inputAction(ev) {
    setPassword(ev.target.value)
    setCopyText("Copiar")
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
      <main>
        <h2>Gerador de senha</h2>

        <form>
          <input
            type="text"
            name="Input senha"
            id="InputSenha"
            placeholder="Sua senha aparecerá aqui..."
            value={password}
            onChange={inputAction}
          />
          <PasswordGenerator
            Content={passwordText}
            ClassName=""
            onClick={generatePassword}
          />
          <CopyButton Content={copyText} ClassName="" onClick={copyPassword} />
        </form>
      </main>
    </>
  )
}
