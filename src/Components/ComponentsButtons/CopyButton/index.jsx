import styles from "./style.module.css"

export default function CopyButton({ Content, Id, Title, Type, ClassName, OnClick }) {
  const finalClassName = styles[ClassName]

  return (
    <>
      <button
        className={finalClassName}
        title={Title}
        id={Id}
        type={Type}
        onClick={OnClick}
      >
        {Content}
      </button>
    </>
  )
}
