import { useEffect, useState } from "react"
import styles from "./styles.module.css"

function Counter({ counter2, setCounter2 }) {
  useEffect(() => {
    console.log("useEffect chamado")
    console.log(`Contador atualizado: ${counter2}`)

    return () => {
      console.log("useEffect retornado")
      console.log("Componente desmontado")
    }
  }, [])

  return (
    <>
      <h2></h2>
      <button onClick={() => setCounter2((count) => count + 1)}>
        Contador: <span>{counter2}</span>
      </button>
    </>
  )
}

export default function UsingUseEffect() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [show, setShow] = useState(false)

  return (
    <main>
      <div className={styles.container}>
        <h2 className={styles.title}>Conhecendo o useEffect()</h2>
        <p>
          O <code>useEffect</code> é um hook do React que permite executar efeitos colaterais em componentes funcionais. 
          Ele pode ser usado para buscar dados, configurar assinaturas ou manipular o DOM diretamente.
        </p>
        <button onClick={() => setCounter((count) => count + 1)}>
          Contador: {counter}
        </button>
      </div>
      <hr className={styles.divider} />
      <div className={styles.container}>
        <div>
          <label htmlFor="show">Exibir</label>
          <input
            type="checkbox"
            id="show"
            value={show}
            onChange={() => setShow((state) => !state)}
          />
        </div>
        {show && (
          <div>
            <h2>Componente filho</h2>
            <p>
              Este componente utiliza o <code>useEffect</code> para monitorar mudanças no estado do contador e 
              executar ações como logs no console. Ele também demonstra o retorno de limpeza do <code>useEffect</code>, 
              que é executado quando o componente é desmontado.
            </p>
            <p>Contador: {counter2}</p>
            <Counter counter2={counter2} setCounter2={setCounter2} />
          </div>
        )}
      </div>
    </main>
  )
}
