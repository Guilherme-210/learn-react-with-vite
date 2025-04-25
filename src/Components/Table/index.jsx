import React from "react"
import style from "./style.module.css"

function DataRow({ tipo, podeUsar }) {
  return (
    <tr>
      <td>{tipo}</td>
      <td style={{ color: podeUsar ? "green" : "red" }}>
        {podeUsar ? "✅ Sim" : "❌ Não"}
      </td>
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
    <div className={style.fieldsetTable}>
      <div className={style.divTable}>
        <table className={style.dataTable}>
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
