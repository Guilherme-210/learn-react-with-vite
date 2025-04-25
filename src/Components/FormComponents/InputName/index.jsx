import "../style.module.css"

export default function InputName({ inputLabel, Obrigatory, InputId }) {
  const requiredMark = Obrigatory ? "*" : ""

  return (
    <div className="InputSpan">
      <span>
        <label htmlFor={InputId} className="LabelName">
          {inputLabel}
          <span>{requiredMark}</span>
        </label>
      </span>
      <input
        required
        type="text"
        className="InputName"
        name=""
        id={InputId}
        placeholder={`Enter your ${inputLabel}${requiredMark}`}
      />
    </div>
  )
}
