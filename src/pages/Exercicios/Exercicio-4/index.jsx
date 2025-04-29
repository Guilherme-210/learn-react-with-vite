import PasswordGenerator from "../../../Components/ComponentsButtons/PasswordGenerator"
import CopyButton from "../../../Components/ComponentsButtons/CopyButton"
import DeleteButton from "../../../Components/ComponentsButtons/DeleteButton"
import { useState } from "react"
import styles from "./style.module.css"

export default function GeradorDeSenha() {
  const [password, setPassword] = useState("")
  const [passwordSize, setPasswordSize] = useState(12)

  function inputAction(ev) {
    setPassword(ev.target.value)
  }

  return (
    <main className={styles.Content}>
      <h2 className={styles.Title}>Gerador de senha</h2>

      <form className={styles.Form}>
        <div className={styles.divFlexRow}>
          <label htmlFor="passwordSize">Tamanho da senha:</label>
          <input
            id="passwordSize"
            name="passwordSize"
            type="number"
            placeholder="Quantos caracteres? (De 1 a 100)"
            min={1}
            value={passwordSize}
            onChange={(ev) => setPasswordSize(Number(ev.target.value))}
          />
        </div>
        <div className={styles.divFlexColumn}>
          <label htmlFor="InputPassword">
            Sua nova senha com {passwordSize} caracteres:
          </label>
          <div className={styles.divFlexRow}>
            <input
              type="text"
              name="InputPassword"
              id="InputPassword"
              placeholder="Sua senha aparecerá aqui..."
              value={password}
              onChange={inputAction}
              readOnly
            />
            <DeleteButton setPassword={setPassword} />
          </div>
        </div>
        <div className={styles.divFlexRow}>
          <PasswordGenerator
            setPassword={setPassword}
            passwordSize={passwordSize}
          />
          <CopyButton password={password} />
        </div>
      </form>
    </main>
  )
}
