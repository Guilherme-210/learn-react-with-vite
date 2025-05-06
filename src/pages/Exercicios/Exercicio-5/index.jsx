import { useState } from "react"
import styles from "./style.module.css"

export default function FeedDeComentarios() {
  const [comments, setComments] = useState(() => {
    try {
      const storageComments = localStorage.getItem("obc-Comment-lib")
      return storageComments ? JSON.parse(storageComments) : []
    } catch (error) {
      console.error("Erro ao carregar os comentários:", error)
      return []
    }
  })

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const deleteComment = (id) => {
    console.log("Deletndo comentario!")
    try {
      setComments((state) => {
        const newState = state.filter((comment) => comment.id !== id)
        localStorage.setItem("obc-Comment-lib", JSON.stringify(newState))
        return newState
      })
      console.log("Comentário deletado com sucesso!")
      console.log("ID do comentário deletado:", id)
    } catch (error) {
      console.error("Erro ao deletar o comentário:", error)
    }
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const Comment = {
      id: Date.now(),
      name: name,
      email: email,
      Comment: comment,
    }
    console.log(Comment)

    setComments((state) => {
      const newState = [Comment, ...state]
      localStorage.setItem("obc-Comment-lib", JSON.stringify(newState))

      return newState
    })

    setName("")
    setEmail("")
    setComment("")
  }

  return (
    <main className={styles.content}>
      <div className={styles.contentExplanation}>
        <h1>Feed de Comentários</h1>
        <p>Essa página é um exercício de renderização de lista.</p>
        <p>O objetivo é criar uma lista de comentários.</p>
        <p>
          Os comentários devem ser renderizados a partir de um array de objetos.
        </p>
        <p>Cada objeto deve conter as seguintes propriedades:</p>
        <ul>
          <li>nome</li>
          <li>Email</li>
          <li>comentario</li>
        </ul>
      </div>

      <div className={styles.contentForm}>
        <div className={styles.divForm}>
          <h2>Comentários</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.divInput}>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome do usuário..."
                minLength="3"
                value={name}
                onChange={(ev) => {
                  setName(ev.target.value)
                }}
                required
              />
            </div>

            <br />

            <div className={styles.divInput}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail do usuário..."
                minLength="3"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value)
                }}
                required
              />
            </div>

            <br />

            <div className={styles.divTextarea}>
              <label htmlFor="comment">Comentário:</label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Comentario do usuário..."
                minLength="3"
                value={comment}
                onChange={(ev) => {
                  setComment(ev.target.value)
                }}
                required
              ></textarea>
            </div>
            <br />
            <button type="submit">
              Enviar
            </button>
          </form>
        </div>

        <div className={styles.divComments}>
          <h2>Lista de Comentários</h2>
          <div className={styles.divList}>
            {comments.length === 0 ? (
              <div>
                <p>Nenhum comentário encontrado.</p>
                <p>Seja o primeiro a comentar!</p>
              </div>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  id={comment.id}
                  className={styles.comment}
                >
                  <h2>{comment.name}</h2>
                  <a href={`mailto:${comment.email}`}>{comment.email}</a>
                  <p>{comment.Comment}</p>
                  <button onClick={() => deleteComment(comment.id)}>
                    Apagar comentário
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
