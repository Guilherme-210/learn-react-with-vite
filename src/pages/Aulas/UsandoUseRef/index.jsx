import { useRef, useState } from "react"
import styles from "./style.module.css"
import RefExample from "./RefExample.jsx"

export default function UsingUseRef() {
  let variable = 0
  const ref = useRef(0)
  let [state, setState] = useState(0)

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }

  return (
    <main>
      <h2>Exemplo de uso do useRef</h2>
      <p>
        O useRef é um hook do React que permite criar referências mutáveis que
        persistem durante o ciclo de vida do componente. Ele é útil para acessar
        diretamente elementos DOM ou armazenar valores que não requerem
        re-renderização quando alterados.
      </p>
      <hr />
      <div className={styles.main}>
        <div className={styles.container}>
          <p>Variável: {variable}</p>{" "}
          <button onClick={() => variable++}>Aumentar Variável</button>
        </div>
        <div className={styles.container}>
          <p>Ref: {ref.current}</p>{" "}
          <button onClick={() => ref.current++}>Aumentar Ref</button>
        </div>
        <div className={styles.container}>
          <p>State: {state}</p>
          <button onClick={() => setState((state) => state + 1)}>
            Aumentar State
          </button>
        </div>
      </div>
      <button onClick={showValues}>Exibir valores</button>
      <hr />
      <p>
        No exemplo abaixo, temos um campo de entrada de texto e um botão. Ao
        clicar no botão, o foco é definido no campo de entrada e a cor de fundo
        do campo é alterada.
      </p>
      <hr />
      <RefExample />
    </main>
  )
}
