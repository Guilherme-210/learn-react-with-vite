import Header from "./Components/Header/index.jsx"
import Footer from "./Components/Footer/index.jsx"

import DadosDinamicos from "./pages/Aulas/Dados-dinamicos-no-JSX/index.jsx"
import BibliotecaReact from "./pages/Exercicios/Exercicio-1/index.jsx"
import CardsStarWars from "./pages/Exercicios/Exercicio-2/index.jsx"
import PortifolioPage from "./pages/Exercicios/Exercicio-3/index.jsx"
import FormPage from "./pages/Treinos/Fromulario/index.jsx"

export default function App() {
  return (
    <>
      <Header />
      <FormPage />
      <Footer />
    </>
  )
}
