import styles from "../style.module.css"

export default function InputPhone({
  Obrigatory = { Boolean },
  inputLabel,
  InputId,
}) {
  const requiredMark = Obrigatory ? <span>*</span> : ""

  return (
    <div className={styles.InputPhone}>
      <div className={styles.InputSpan}>
        <span>
          <label htmlFor={InputId}>DDI{requiredMark}</label>
        </span>
        <input
          type="tel"
          placeholder="+55"
          pattern="^\+\d{1,4}$"
          title="Digite o código internacional, exemplo: +55, +1, +351"
          required
        />
      </div>
      <div className={styles.InputSpan}>
        <span>
          <label htmlFor={InputId}>Phone{requiredMark}</label>
        </span>
        <input
          type="tel"
          name={inputLabel}
          id={InputId}
          required={Obrigatory}
        />
      </div>
    </div>
  )
}
