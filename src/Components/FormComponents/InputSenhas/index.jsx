import styles from "../style.module.css"

export default function InputPassword({ inputLabel, InputId }) {
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
        className="InputSenha"
        name=""
        id={InputId}
        placeholder={`Enter your password*`}
        aria-label="Enter your password"
      />
    </div>
  )
}
