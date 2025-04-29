import PasswordGenerator from "../../../Components/ComponentsButtons/PasswordGenerator"
import CopyButton from "../../../Components/ComponentsButtons/CopyButton"
import { useState } from "react"
import styles from "./style.module.css"
import InputPasswordSize from "../../../Components/FormComponents/InputPasswordSize/index.jsx"
import ShowInput from "../../../Components/FormComponents/InputShowInput/index.jsx"
import InputPasswordGenerete from "../../../Components/FormComponents/InputPasswordGenerete/index.jsx"

export default function GeradorDeSenha() {
  const [password, setPassword] = useState("")
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  return (
    <main className={styles.Content}>
      <h2 className={styles.Title}>Gerador de senha</h2>

      <form className={styles.Form}>
        <ShowInput
          showInput={showInput}
          setShowInput={setShowInput}
          styles={styles}
        />
        {showInput && (
          <InputPasswordSize
            passwordSize={passwordSize}
            setPasswordSize={setPasswordSize}
            styles={styles}
          />
        )}
        <InputPasswordGenerete
          passwordSize={passwordSize}
          password={password}
          setPassword={setPassword}
          styles={styles}
          setPasswordSize={setPasswordSize}
          showInput={showInput}
          setShowInput={setShowInput}
        />
        <div className={styles.divFlexRow}>
          <PasswordGenerator
            showInput={showInput}
            setShowInput={setShowInput}
            setPassword={setPassword}
            passwordSize={passwordSize}
          />
          <CopyButton password={password} />
        </div>
      </form>
    </main>
  )
}
