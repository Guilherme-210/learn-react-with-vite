import React from "react"
import "./style.css" // Importe o arquivo CSS

function DataRow({ tipo, podeUsar }) {
  return (
    <tr>
      <td>{tipo}</td>
      <td>{podeUsar ? "✅ Sim" : "❌ Não"}</td>
    </tr>
  )
}

function DataTable() {
  const data = [
    { tipo: "Variáveis", podeUsar: true },
    { tipo: "Funções", podeUsar: true },
    { tipo: "Expressões (a + b)", podeUsar: true },
    { tipo: "if/else direto", podeUsar: false },
    { tipo: "Ternário", podeUsar: true },
    {
      tipo: "Objetos inteiros",
      podeUsar: false,
      observacao: "(Tem que acessar propriedades)",
    },
    { tipo: "Arrays", podeUsar: true, observacao: "(geralmente com .map())" },
  ]

  return (
    <div className="fieldset_table">
      <div className="div_table">
        <table className="data-table">
          {/* Aplique a classe 'data-table' */}
          <thead>
            <tr>
              <th>Tipo de dado</th>
              <th>Pode usar no JSX?</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <DataRow key={index} tipo={item.tipo} podeUsar={item.podeUsar} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable
