import PasswordGenerator from "../../../Components/ComponentsButtons/PasswordGenerator"
import CopyButton from "../../../Components/ComponentsButtons/CopyButton"
import { useState } from "react"
import styles from "./style.module.css"
import InputPasswordSize from "../../../Components/FormComponents/InputPasswordSize/index.jsx"
import InputPasswordGenerete from "../../../Components/FormComponents/InputPasswordGenerete/index.jsx"

export default function GeradorDeSenha() {
  const [password, setPassword] = useState("")
  const [passwordSize, setPasswordSize] = useState(12)

  return (
    <main className={styles.Content}>
      <h2 className={styles.Title}>Gerador de senha</h2>

      <form className={styles.Form}>
        <InputPasswordSize
          passwordSize={passwordSize}
          setPasswordSize={setPasswordSize}
          styles={styles}
        />
        <InputPasswordGenerete
          passwordSize={passwordSize}
          password={password}
          setPassword={setPassword}
          styles={styles}
          setPasswordSize={setPasswordSize}
        />
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
