import styles from "../style.module.css"

export default function ValidatePassword({ inputLabel, InputId, minLength }) {
  return (
    <div className={styles.InputSpan}>
      <span>
        <label htmlFor={InputId} className="LabelSenha">
          {inputLabel}
          <span>*</span>
        </label>
      </span>
      <input
        required
        type="password"
        className="ValidatePassword"
        name="ValidatePassword"
        id={InputId}
        placeholder={`Confirm your password*`}
        aria-label="Confirm your password"
        minLength={minLength}
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$"
        title="Senha deve conter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma minúscula e um número."
      />
    </div>
  )
}
