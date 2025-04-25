import "../style.module.css"

export default function ValidatePassword({ inputLabel, InputId }) {
  return (
    <div className="InputSpan">
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
        placeholder={`Confirm your password*`}
        aria-label="Confirm your password"
      />
    </div>
  )
}
