import "../style.css"

export default function InputName({ InputText, Obrigatory, PlaceHolder }) {
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
      <input type="text" placeholder={PlaceHolder + ValObrigatory} />
    </>
  )
}
