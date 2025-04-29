import PasswordGenerator from "../../../Components/ComponentsButtons/PasswordGenerator"
import CopyButton from "../../../Components/ComponentsButtons/CopyButton"
import DeleteButton from "../../../Components/ComponentsButtons/DeleteButton"
import { useState } from "react"
import styles from "./style.module.css"

export default function GeradorDeSenha() {
  const [password, setPassword] = useState("")

  function inputAction(ev) {
    setPassword(ev.target.value)
  }

  return (
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
          <DeleteButton setPassword={setPassword} />
        </div>
        <div className={styles.divFlexRow}>
          <PasswordGenerator setPassword={setPassword} />
          <CopyButton password={password} />
        </div>
      </form>
    </main>
  )
}
