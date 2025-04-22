import "./style.css"

export default function Button({ Content, Id, Href }) {
  return (
    <a href={Href} target="blank" rel="noopener noreferrer">
      <button id={Id}>{Content}</button>
    </a>
  )
}
