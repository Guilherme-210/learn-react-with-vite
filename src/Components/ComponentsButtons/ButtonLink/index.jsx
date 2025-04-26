import styles from "./style.module.css"

export default function ButtonLink({
  Content,
  Id,
  Href,
  Title,
  Type,
  ClassName,
}) {
  const finalClassName = styles[ClassName]

  return (
    <div>
      <a
        href={Href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.LinkButton}
      >
        <button className={finalClassName} title={Title} id={Id} type={Type}>
          {Content}
        </button>
      </a>
    </div>
  )
}
