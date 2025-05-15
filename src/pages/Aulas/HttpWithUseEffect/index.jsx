import { useEffect, useState } from "react"
import styles from "./styles.module.css"

async function FetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await response.json()
  return data.results
}

export default function HttpWithUseEffect() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonShown, setPokemonShown] = useState(null)

  // Nenhum codigo que altere o state deve ser colocado na raiz do componente, pos se nao ele entrata em loop de renderização
  // =================================================================
  // FetchPokemon().then((data) => {
  //   console.log("requisição realizada")
  //   console.log(data)
  //   setPokemons(data)
  // })

  // Pra fazer a requisição HTTP, o ideal é usar o useEffect, que é um hook do React que permite executar efeitos colaterais em componentes funcionais.
  // O useEffect é chamado após a renderização do componente, e pode ser usado para fazer requisições HTTP, manipular o DOM, entre outras coisas.
  // O useEffect recebe dois parâmetros: uma função que contém o código a ser executado, e um array de dependências. O array de dependências é usado para controlar quando o efeito deve ser executado.
  // Se o array de dependências estiver vazio, o efeito será executado apenas uma vez, após a primeira renderização do componente. Se o array de dependências contiver variáveis, o efeito será executado sempre que essas variáveis mudarem.
  // ============ Metodo usado na aula ===============
  useEffect(() => {
    //   FetchPokemon().then((data) => {
    //     console.log("requisição realizada")
    //     console.log(data)
    //     setPokemons(data)
    // })
  }, [])

  // =========== Metodo usado useEffect ==============
  // const [shownDetails, setShownDetails] = useState(null)
  // useEffect(() => {
  //   if (url) {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("Pokémon encontrado!")
  //         console.log(data)
  //         setPokemonShown(data)
  //       })
  //   }
  // }, [shownDetails])

  // Outra forma de fazer a requisição HTTP é usando o if removendo o useEffect e complexidade desnecessaria da aplicação
  // ============ Metodo simplificado ==============
  if (pokemons.length === 0) {
    FetchPokemon().then((data) => {
      console.log("requisição realizada")
      console.log(data)
      setPokemons(data)
    })
  }

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
              // onClick={() => setShownDetails(pokemon.url)}
              onClick={() => shownDetails(pokemon.url)}
              key={pokemon.url}
              className={styles.pokemonCard}
            >
              <h3>{pokemon.name}</h3>
              {/* <button onClick={() => setShownDetails(pokemon.url)}> */}
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
