import DeleteButton from "../../ComponentsButtons/DeleteButton"

export default function InputPasswordGenerete({
  passwordSize,
  password,
  setPassword,
  styles,
}) {
  function inputAction(ev) {
    setPassword(ev.target.value)
  }

  return (
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
  )
}
