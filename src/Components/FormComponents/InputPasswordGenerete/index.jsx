import DeleteButton from "../../ComponentsButtons/DeleteButton"
import RestartButton from "../../ComponentsButtons/RestartButton/index.jsx"

export default function InputPasswordGenerete({
  passwordSize,
  password,
  setPassword,
  styles,
  setPasswordSize,
  showInput,
  setShowInput,
}) {
  function inputAction(ev) {
    setPassword(ev.target.value)
  }

  return (
    <div className={styles.divFlexColumn}>
      <label htmlFor="InputPassword">
        Sua nova senha com {showInput ? passwordSize : 12} caracteres:
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
        <RestartButton
          setPassword={setPassword}
          setPasswordSize={setPasswordSize}
          showInput={showInput}
          setShowInput={setShowInput}
        />
      </div>
    </div>
  )
}
