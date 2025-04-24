export default function Button({ Content, Id, Href, Title }) {
  return (
    <a href={Href} target="_blank" rel="noopener noreferrer">
      <button title={Title} id={Id}>
        {Content}
      </button>
    </a>
  )
}
