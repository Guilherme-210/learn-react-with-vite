import styles from "../style.module.css"

export default function InputName({ inputLabel, Obrigatory = { Boolean }, InputId }) {
  const requiredMark = Obrigatory ? "*" : ""

  return (
    <div className={styles.InputSpan}>
      <span>
        <label htmlFor={InputId} className="LabelName">
          {inputLabel}
          <span>{requiredMark}</span>
        </label>
      </span>
      <input
        // required
        required={Obrigatory}
        type="text"
        className="InputName"
        name="InputName"
        id={InputId}
        autocomplete="given-name"
        placeholder={`Enter your ${inputLabel}${requiredMark}`}
      />
    </div>
  )
}
