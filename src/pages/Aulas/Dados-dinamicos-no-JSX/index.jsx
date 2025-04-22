import Code from "./components/Code/Code.jsx"
import Table from "./components/Table/Table.jsx"
import "./style.css"

export default function DadosDinamicos() {
  let T2 = 0,
    t = 0

  const valTitle = [
    '🎯 O que são "Dados Dinâmicos no JSX"?',
    "🧠 O que é o JSX mesmo?",
    "🧩 Como inserir dados dinâmicos?",
    "✅ Exemplo Simples com Variáveis",
    "⚙️ Usando Expressões JavaScript",
    "🎭 Renderização Condicional (Ex: Ternário)",
    "🔁 Usando Arrays com .map() para Listas",
    "🚨 Regras importantes:",
    "🧪 Resumo Rápido.",
  ]

  const valText = [
    "Quando a gente fala em dados dinâmicos no JSX, estamos falando da capacidade do React de misturar HTML com JavaScript, permitindo inserir valores, variáveis, funções e até expressões diretamente no HTML que estamos escrevendo.",

    "O JSX (JavaScript XML) é uma sintaxe que parece HTML, mas que roda no JavaScript. Ele é o jeito que usamos pra escrever a interface no React. E o mais massa: dentro dele, dá pra usar lógica JS.",

    "Usamos chaves {} dentro do JSX pra indicar que vamos usar código JavaScript. Aí dentro dessas chaves, você pode colocar:",
  ]

  return (
    <>
      <main>
        {/* fieldset 1: O que são... */}
        <fieldset>
          <legend>{valTitle[T2++]}</legend>
          <p>{valText[t++]}</p>
        </fieldset>

        {/* fieldset 2: O que e... */}
        <fieldset>
          <legend>{valTitle[T2++]}</legend>
          <p>{valText[t++]}</p>
        </fieldset>

        {/* fieldset 3: Como inserir dados... */}
        <fieldset>
          <legend>{valTitle[T2++]}</legend>
          <p>{valText[t]}</p>
          <div className="div_fieldset">
            <ul>
              <li>Variáveis</li>
              <li>Operações</li>
              <li>Funções</li>
              <li>Ternários (condições simples)</li>
              <li>Arrays (inclusive com .map(), por exemplo</li>
            </ul>
          </div>
        </fieldset>

        {/* fieldset 4: Exemplo Simples... */}
        <fieldset>
          <legend>{valTitle[T2++]}</legend>

          <Code
            CodeRote="index.jsx"
            CodeContent='const nome = "Guilherme"

function App() {
  return &lt;h1&gt;Olá, {nome}!&lt;/h1&gt;
}'
          />
          <p>
            Saída na tela: <code>Olá, Guilherme!</code>
          </p>
        </fieldset>

        {/* fieldset 5: Usando Expressões... */}
        <fieldset>
          <legend>{valTitle[T2++]}</legend>

          <Code
            CodeRote="index.jsx"
            CodeContent="const a = 5
const b = 10

function App() {
  return &lt;p&gt;A soma é: {a + b}&lt;/p&gt;
}"
          />
          <p>
            Isso renderiza na tela:
            <code>A soma é: 15</code>
          </p>
        </fieldset>

        {/* fieldset 6: Renderização Condicional... */}
        <fieldset>
          <legend>{valTitle[T2++]}</legend>

          <Code
            CodeRote="index.jsx"
            CodeContent="const logado = true

function App() {
  return (
    &lt;div&gt;
      {logado ? &lt;p&gt;Bem-vindo!&lt;/p&gt; : &lt;p&gt;Por favor, faça login.&lt;/p&gt;}
    &lt;/div&gt;
  )
}"
          />
          <p>
            Mostra uma mensagem diferente dependendo do valor de{" "}
            <code>logado</code>.
          </p>
        </fieldset>

        {/* fieldset 7: Usando Arrays... */}
        <fieldset>
          <legend>{valTitle[T2++]}</legend>

          <Code
            CodeRote="index.jsx"
            CodeContent='const linguagens = ["HTML", "CSS", "JavaScript"]

function App() {
  return (
    <ul>
      {linguagens.map((lang, index) => (
        <li key={index}>{lang}</li>
      ))}
    </ul>
  )
}'
          />
          <p>Isso exibe uma lista com os nomes das linguagens.</p>
        </fieldset>

        {/* fieldset 8: Regras importantes: */}
        <fieldset>
          <legend>{valTitle[T2++]}</legend>
          <div className="div_fieldset">
            <ol>
              <li>Sempre use chaves {} pra inserir dados dinâmicos no JSX.</li>
              <li>
                Não dá pra usar estruturas de controle como if direto (usa
                ternário ou lógica fora do JSX).
              </li>
              <li>
                Sempre coloque key nos elementos de listas (tipo no .map()).
              </li>
              <li>
                JSX só aceita retornar um único elemento pai (pode usar uma
                &lt;div&gt; ou &lt;&gt;&lt;/&gt; - os "fragments").
              </li>
            </ol>
          </div>
        </fieldset>

        {/* fieldset 9: Resumo Rápido. */}

        <fieldset className="fieldset_table">
          <legend>{valTitle[T2++]}</legend>    
            <Table />
        </fieldset>
      </main>
    </>
  )
}
