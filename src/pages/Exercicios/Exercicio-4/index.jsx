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

  function gerarSenha(ev) {
    ev.preventDefault()
    setPasswordText("Senha gerada")
  }

  return (
    <>
      <main>
        <h2>Gerador de senha</h2>

        <form>
          <input
            type="text"
            name=""
            id=""
            value={password}
            onChange={inputAction}
          />
          <PasswordGenerator
            Content={passwordText}
            Id=""
            Title="Gerador de senha"
            Type=""
            ClassName=""
            onClick={gerarSenha}
          />
          <CopyButton
            Content={copyText}
            Id=""
            Title="Botão de cópia"
            Type=""
            ClassName=""
            OnClick={copyPassword}
          />
        </form>
      </main>
    </>
  )
}
