import { useEffect, useState } from "react"
import styles from "./styles.module.css"

export default function HttpWithUseEffect() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonShown, setPokemonShown] = useState(null)

  if (pokemons.length === 0) {
    FetchPokemon().then((data) => {
      console.log("requisição realizada")
      console.log(data)
      setPokemons(data)
    })
  }

  useEffect(() => {
    //   FetchPokemon().then((data) => {
    //     console.log("requisição realizada")
    //     console.log(data)
    //     setPokemons(data)
    // })
  }, [])

  const shownDetails = async (url) => {
    const data = await fetch(url).then((res) => res.json())
    console.log("Pokémon encontrado!")
    console.log(data)
    setPokemonShown(data)
  }

  return (
    <main>
      <div className={styles.containsExplanation}>
        <h2>HTTP com useEffect</h2>
        <p>
          Essa página é um exemplo de requisição HTTP utilizando o hook
          useEffect.
        </p>
        <p>
          O objetivo é mostrar como fazer uma requisição HTTP e exibir os dados
          na tela.
        </p>
        <p>
          O código abaixo faz uma requisição para a API do{" "}
          <a
            href="https://pokeapi.co/api/v2/pokemon"
            target="_blank"
            rel="noreferrer"
          >
            https://pokeapi.co/api/v2/pokemon
          </a>{" "}
          e exibe os dados na tela.
        </p>
      </div>

      <div className={styles.containsRequest}>
        <h2>Pokémon</h2>

        <div className={styles.pokemonList}>
          {pokemons.map((pokemon) => (
            <div
              onClick={() => shownDetails(pokemon.url)}
              key={pokemon.url}
              className={styles.pokemonCard}
            >
              <h3>{pokemon.name}</h3>
              <button onClick={() => shownDetails(pokemon.url)}>
                ver detalhes
              </button>
            </div>
          ))}
        </div>

        <div className={styles.pokemonDetails}>
          {pokemonShown && (
            <div>
              <h2>{pokemonShown.name}</h2>
              <img src={pokemonShown.sprites.front_default} alt="" />
              <div className="stat">
                <b>Tipo: </b>
                {pokemonShown.types.map(({ type }) => (
                  <span key={type.name}>{type.name} </span>
                ))}
              </div>
              <div className="stat">
                <b>Altura: </b>
                {pokemonShown.height / 10} m
              </div>
              <div className="stat">
                <b>Peso: </b>
                {pokemonShown.weight / 10} Kg
              </div>
              <div className="stat">
                <b>Atributos</b>
                <ul>
                  {pokemonShown.stats.map(({ base_stat, stat }) => (
                    <li key={stat.name}>
                      {stat.name}: {base_stat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="stat">
                <b>Habilidades</b>
                <ul>
                  {pokemonShown.abilities.map(({ ability, is_hidden }) => (
                    <li key={ability.name}>
                      {ability.name}
                      {is_hidden && " (secreta)"}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

async function FetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await response.json()
  return data.results
}
