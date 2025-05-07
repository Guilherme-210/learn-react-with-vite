import styles from "../style.module.css"

export default function FormComments({
  name,
  setName,
  email,
  setEmail,
  comment,
  setComment,
  handleSubmit,
  DDD,
  setDDD,
  tellVal,
  setTellVal,
  setTell,
}) {
  setTell(`+55 ${DDD} ${tellVal}`)

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

        <div className={styles.divDDDTell}>
          <div className={styles.divDDD}>
            <label htmlFor="DDD">DDD:</label>
            <input
              type="number"
              id="DDD"
              name="DDD"
              placeholder="12"
              minLength="2"
              maxLength="2"
              pattern="[0-9]{2}"
              title="O DDD deve conter 2 dígitos numéricos."
              value={DDD}
              onChange={(ev) => {
                setDDD(ev.target.value)
              }}
              required
            />
          </div>

          <div className={styles.divTell}>
            <label htmlFor="tellVal">Telefone:</label>
            <input
              type="number"
              id="tellVal"
              name="tellVal"
              placeholder="Telefone do usuário..."
              minLength="3"
              value={tellVal}
              maxLength="9"
              pattern="[0-9]{9}"
              title="O telefone deve conter 9 dígitos numéricos."
              onChange={(ev) => {
                setTellVal(ev.target.value)
              }}
              required
            />
          </div>
        </div>

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
