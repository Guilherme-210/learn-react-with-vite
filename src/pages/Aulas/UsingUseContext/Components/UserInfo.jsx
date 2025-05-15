import { useContext } from "react"
import UseContext from "../Contexts/UseContext"
import styles from "../styles.module.css"

export default function UserInfo() {
  const user = useContext(UseContext)

  return (
    <div className={styles.userContainer}>
      <div>
        <img
          src={user.avatar}
          alt={user.avatarAlt}
          className={styles.userAvatar}
        />
      </div>
      <div className={styles.userInfo}>
        <h2>Informações do usuário</h2>
        <p>
          <span>Nome:</span> {user.name}
        </p>

        <p>
          <span>Idade:</span> {user.age}
        </p>

        <p>
          <span>Bio:</span> {user.bio}
        </p>

        <p>
          <span>Telefone:</span> {user.phone}
        </p>

        <p>
          <span>Email:</span> {user.email}
        </p>

        <p>
          <span>Cidade:</span> {user.address.city}-{user.address.state}
        </p>

        <p>
          <span>Rua:</span> {user.address.street} {user.address.number}
        </p>

        <p>
          <span>Hobies:</span> {user.hobbies.map((hobby) => hobby).join(", ")}
        </p>

        <p>
          <span>Profição:</span> {user.profession}
        </p>
      </div>
    </div>
  )
}