import styles from "../style.module.css"

export default function InputBirth({
  inputLabel,
  InputId,
  Obrigatory = { Boolean },
}) {
  const requiredMark = Obrigatory ? <span>*</span> : ""

  return (
    <div className={styles.InputSpan}>
      <label htmlFor={inputLabel}>
        {inputLabel}
        {requiredMark}
      </label>
      <input
        required={Obrigatory}
        type="date"
        className="InputBirth"
        name="birth"
        id={InputId}
      />
    </div>
  )
}
