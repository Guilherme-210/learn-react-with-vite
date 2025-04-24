import Card from "../../../Components/execicio2-card/index.jsx"
import StarWarsMovies from "../../../data/Exercicio2-ArrayStarWars/StarWarsMovies.js"
import "./style.css"

export default function MainPage() {
  return (
    <>
      <main>
        <section className="section-description">
          <h2>Exercício 2 - Criando um Componente Card</h2>
          <p>
            Em um novo projeto React, crie um componente chamado “Card”. O
            componente deverá ser criado em um arquivo separado do “App.jsx” e
            deverá ser estilizado de acordo com a imagem abaixo.
          </p>
        </section>

        <section className="section-cards">
          {StarWarsMovies.map((filme, index) => (
            <Card
              key={index}
              ImgFilme={filme.cover}
              TitleFilme={filme.title}
              DescriptionFilme={filme.description}
              Alt={filme.Alt}
              index={index}
            />
          ))}
        </section>
      </main>
    </>
  )
}
