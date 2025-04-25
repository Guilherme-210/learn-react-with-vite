import Portifolio from "../../../Components/Portifolio/index.jsx"
import { Perfils } from "../../../data/Exercicio3-DatabasePortifolio/DataBasePortifolio.js"

export default function PortifolioPage() {
  return (
    <>
      <main>
        {/* <Portifolio Perfil={Perfils} /> */}
        {/* <Portifolio Perfil={Perfils[1]} /> */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gap: "2rem",
          }}
        >
          {Perfils.map((Perfil) => (
            <Portifolio Perfil={Perfil} />
          ))}
        </div>
      </main>
    </>
  )
}
