import styles from "./style.module.css"
import Button from "../../../Components/ComponentsButtons/ButtonLink/index.jsx"

export default function BibliotecaReact() {
  const valTitle = [
    "React",
    "Crie interfaces de usuário de componentes",
    "Escreva componentes com código e marcação",
    "Próximos passos",
  ]

  return (
    <>
      <main className={styles.Main}>
        <section>
          <img src="/public/react.png" alt="Imagem do o logo react" />
          <h2>{valTitle[0]}</h2>
          <p>A biblioteca para interfaces de usuário web e nativas.</p>
          <div className="DivButtons">
            <Button
              ClassName="ButtonGenerate"
              Href="https://react.dev/learn"
              Id="IdReact"
              Content="Aprenda React"
            />
            <Button
              ClassName="ButtonGenerate"
              Href="https://react.dev/reference/react"
              Id="IdAPI"
              Content="Referência da API"
            />
          </div>
        </section>
        <hr />
        <section>
          <h2>{valTitle[1]}</h2>
          <p>
            React permite que você construa interfaces de usuário a partir de
            pedaços individuais chamados componentes.
          </p>
        </section>
        <hr />
        <section>
          <h2>{valTitle[2]}</h2>
          <p>
            Componentes React são funções JavaScript. A sintaxe de marcação é
            chamada de JSX. É uma extensão da sintaxe JavaScript popularizada
            pelo React e o uso das chaves para escrever o codigo em JavaScript.
          </p>
        </section>
        <hr />
        <section>
          <h2>{valTitle[3]}</h2>
          <ul>
            <li>
              <input type="checkbox" />
              Uso de dados dinâmicos no JSX
            </li>
            <li>
              <input type="checkbox" />
              Criação de novos componentes
            </li>
            <li>
              <input type="checkbox" />
              Estilização de componentes
            </li>
            <li>
              <input type="checkbox" />
              Reutilização de componentes
            </li>
            <li>
              <input type="checkbox" />
              Uso de props e children
            </li>
            <li>
              <input type="checkbox" />
              Uso de eventos do JavaScript
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
