import styles from "./styles.module.css"
import GuilhermeAvatar from "../../../assets/Portifolio/avatar-guilherme.png"
import UseContext from "./Contexts/UseContext"
import UserInfo from "./Components/UserInfo"

const user = {
  name: "Guilherme Reis",
  avatar: GuilhermeAvatar,
  avatarAlt: "Avatar do desenvolvedor Guilherme Reis",
  bio: "Desenvolvedor front-end com foco em React e boas práticas.",
  phone: "+55 (12) 12345-1234",
  email: "email.exemplo.gmail.com",
  age: 29,
  address: {
    street: "Rua Dos Exemplos",
    number: 123,
    city: "São Paulo",
    state: "SP",
  },
  hobbies: ["programar", "jogar", "ler"],
  profession: "Desenvolvedor",
}

export default function UsingUseContext() {
  return (
    <main className={styles.main}>
      <section className={styles.containsExplanation}>
        <h2>Sobre o UseContext</h2>
        <h3>Esta seção não tem acesso ao Context</h3>
        <p>Essa página é um exemplo de uso do hook useContext.</p>
        <p>
          O objetivo é mostrar como usar o useContext para compartilhar dados
          entre componentes.
        </p>
        <p>
          O código abaixo mostra como usar o useContext para compartilhar dados
          entre componentes.
        </p>
      </section>

      <section className={styles.containsUseContext}>
        <UseContext.Provider value={user}>
          <h2>Usando Context</h2>
          <UserInfo />
        </UseContext.Provider>
      </section>
    </main>
  )
}
