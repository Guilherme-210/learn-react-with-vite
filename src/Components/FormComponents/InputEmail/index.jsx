import styles from "../style.module.css"

export default function InputEmail({ Obrigatory, inputLabel, InputId }) {
  const requiredMark = Obrigatory ? "*" : ""

  return (
    <div className={styles.InputSpan}>
      <span>
        <label htmlFor={InputId} className="LabelEmail">
          {inputLabel}
          <span>{requiredMark}</span>
        </label>
      </span>
      <input
        required
        // required={Obrigatory}
        type="email"
        className="InputEmail"
        name=""
        id={InputId}
        placeholder={`Enter your ${inputLabel}${requiredMark}`}
      />
    </div>
  )
}
