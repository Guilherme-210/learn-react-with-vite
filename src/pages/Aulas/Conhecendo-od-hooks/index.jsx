import { useState, useEffect, useRef } from "react"
import useContador from "../../../hooks/useContador/index.js"
import "./style.css"
import Code from "../../../Components/Code"

export default function ConhecendoHooks() {
  const {
    contadorCustom,
    incrementarCustom,
    decrementarCustom,
    resetarCustom,
  } = useContador(5)
  const [contador, setContador] = useState(0)
  const [mensagem, setMensagem] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`
  }, [contador])

  function incrementar() {
    setContador((prev) => prev + 1)
  }

  function decrementar() {
    setContador(contador - 1)
  }

  function limparMensagem() {
    setMensagem("")
  }

  function focoNoInput() {
    inputRef.current.focus()
  }

  return (
    <main className="container">
      <h2>🎯 Conhecendo Melhor os Hooks🎣</h2>

      <section>
        <h3>🧠 O que são Hooks?</h3>
        <p>
          Hooks são funções especiais do React que permitem "ligar" o estado e
          outras funcionalidades do React em componentes funcionais. Antes
          deles, a gente só conseguia fazer isso usando Classes! 😱
        </p>
      </section>

      <section>
        <h3>🔵 useState</h3>
        <p>
          Permite adicionar estado a componentes funcionais. Tipo uma variável
          mágica que quando muda, a tela atualiza! 🪄
        </p>
        <div className="exemplo">
          <p>Contador: {contador}</p>
          <button onClick={incrementar}>Clique aqui!</button>
          <button onClick={decrementar}>Decrementar</button>
        </div>
      </section>

      <section>
        <Code
          CodeTitle="Exemplo do código a cima:"
          CodeRote={"index.jsx"}
          CodeContent={`export default function ConhecendoHooks() {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador((prev) => prev + 1)
  }

  function decrementar() {
    setContador(contador - 1)
  }
  const inputRef = useRef(null)

  return (
    <div className="exemplo">
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Clique aqui!</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}`}
        />
      </section>

      <section>
        <h3>🟣 useEffect</h3>
        <p>
          Permite executar efeitos colaterais — como buscar dados, alterar o DOM
          ou sincronizar com algo externo. Se não fosse o useEffect, era cada
          gambiarra que dava medo. 😵‍💫
        </p>
        <p>(Repara que o título da página muda conforme você clica! 👆)</p>
      </section>

      <section>
        <h3>🟠 useRef</h3>
        <p>
          Cria uma referência mutável que não causa re-render. Tipo um "acesso
          direto" a elementos DOM.
        </p>
        <div className="exemplo">
          <input ref={inputRef} placeholder="Clique no botão para focar" />
          <button onClick={focoNoInput}>Focar no input</button>
        </div>
      </section>

      <section>
        <Code
          CodeTitle="Exemplo do código a cima:"
          CodeRote={"index.jsx"}
          CodeContent={`export default function ConhecendoHooks() {
  const inputRef = useRef(null)

  function focoNoInput() {
    inputRef.current.focus()
  }

  return (
    <div className="exemplo">
      <input ref={inputRef} placeholder="Clique no botão para focar" />
      <button onClick={focoNoInput}>Focar no input</button>
    </div>
  )
}`}
        />
      </section>

      <section>
        <h3>useState com Texto</h3>
        <div className="exemplo">
          <input
            type="text"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite algo aqui..."
          />
          <p>
            Sua mensagem: <strong>{mensagem || "Nada digitado ainda"}</strong>
          </p>
          <button onClick={limparMensagem}>Limpar Mensagem</button>
        </div>
      </section>

      <section>
        <Code
          CodeTitle="Exemplo do código a cima:"
          CodeRote={"index.jsx"}
          CodeContent={`export default function ConhecendoHooks() {
  const [mensagem, setMensagem] = useState("")
  const inputRef = useRef(null)

  function limparMensagem() {
    setMensagem("")
  }

  return (
    <div className="exemplo">
      <input
        type="text"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Digite algo aqui..."
      />
      <p>
        Sua mensagem: <strong>{mensagem || "Nada digitado ainda"}</strong>
      </p>
      <button onClick={limparMensagem}>Limpar Mensagem</button>
    </div>
  )
}`}
        />
      </section>

      <h2>Custom Hook: useContador 🚀</h2>
      <section>
        <h3>🔥 O que é um Hook Custom?</h3>
        <p>
          Um custom hook nada mais é do que uma função que usa outros hooks do
          React (tipo useState, useEffect, etc.) pra reaproveitar lógica em
          vários componentes.
        </p>

        <h3>Valor Atual: {contadorCustom}</h3>

        <div>
          <button onClick={incrementarCustom}>Incrementar</button>
          <button onClick={decrementarCustom}>Decrementar</button>
          <button onClick={resetarCustom}>Resetar</button>
        </div>
      </section>

      <section>
        <Code
          CodeRote={"./hooks/index.js"}
          CodeContent={`import { useState } from "react"

export function useContador(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial)

  const incrementar = () => setContador((prev) => prev + 1)
  const decrementar = () => setContador((prev) => prev - 1)
  const resetar = () => setContador(valorInicial)

  return { contador, incrementar, decrementar, resetar }
}`}
        />
        <Code
          CodeRote={"./index.jsx"}
          CodeContent={`import { useContador } from "./useContador"

export default function PaginaComHookCustom() {
  const { contador, incrementar, decrementar, resetar } = useContador(5)

  return (
    <main style={mainStyle}>
      <h1>Custom Hook: useContador 🚀</h1>
      
      <section style={sectionStyle}>
        <h2>Valor Atual: {contador}</h2>

        <div>
          <button onClick={incrementar} style={buttonStyle}>Incrementar</button>
          <button onClick={decrementar} style={buttonStyle}>Decrementar</button>
          <button onClick={resetar} style={buttonStyle}>Resetar</button>
        </div>
      </section>
    </main>
  )
}`}
        />
      </section>
    </main>
  )
}
