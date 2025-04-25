import "../style.css"

export default function InputEmail({ Obrigatory, PlaceHolder, InputText, InputId }) {
  let ValObrigatory = "*"

  if (!Obrigatory) {
    ValObrigatory = ""
  }

  return (
    <>
      <span>
        <label htmlFor="">
          {InputText}
          <span>{ValObrigatory}</span>
        </label>
      </span>
      <input
        type="email"
        name=""
        id={InputId}
        placeholder={PlaceHolder + ValObrigatory}
      />
    </>
  )
}
