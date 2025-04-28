import styles from "../style.module.css"

export default function InputPassword({ inputLabel, InputId, minLength }) {
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
        className="InputPassword"
        name="InputPassword"
        id={InputId}
        placeholder={`Enter your password*`}
        aria-label="Enter your password"
        minLength={minLength}
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$"
        title="Senha deve conter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma minúscula e um número."
      />
    </div>
  )
}
