import styles from "./styles.module.css"

export default function UsingUseContext() {
  return (
    <main className={styles.main}>
      <div className={styles.containsExplanation}>
        <h2>Usando useContext</h2>
        <p>Essa página é um exemplo de uso do hook useContext.</p>
        <p>
          O objetivo é mostrar como usar o useContext para compartilhar dados
          entre componentes.
        </p>
        <p>
          O código abaixo mostra como usar o useContext para compartilhar dados
          entre componentes.
        </p>
      </div>

      <h2>Pokémon</h2>
      <div className={styles.containsRequest}>
        <div className={styles.pokemonList}></div>
        <div className={styles.pokemonDetails}></div>
      </div>
    </main>
  )
}
