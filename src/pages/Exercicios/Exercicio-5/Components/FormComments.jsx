import styles from "../style.module.css"

export default function FormComments({
  name,
  setName,
  email,
  setEmail,
  comment,
  setComment,
  handleSubmit,
}) {
  return (
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
