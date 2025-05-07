import styles from "../style.module.css"

export default function CommentsList({ comments, deleteComment }) {
  return (
    <div className={styles.divComments}>
      <h2>Lista de Comentários</h2>
      <div className={styles.divList}>
        {comments.length === 0 ? (
          <div className={styles.comment}>
            <p>Nenhum comentário encontrado.</p>
            <p>Seja o primeiro a comentar!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} id={comment.id} className={styles.comment}>
              <h2>{comment.name}</h2>

              <div className={styles.divContact}>
                <a
                  href={`mailto:${comment.email}`}
                  target="_blank"
                  rel="noreferrer"
                  title={`Enviar email para ${comment.email}`}
                >
                  <ion-icon name="mail-outline" />
                </a>

                <a
                  href={`tel: ${comment.tell}`}
                  title={`Ligar para: ${comment.tell}`}
                >
                  <ion-icon name="call-outline"></ion-icon>{comment.tell}
                </a>
              </div>

              <p>{comment.comment}</p>
              <button
                onClick={() => deleteComment(comment.id)}
                title={`Apagar comentário de ${comment.name}`}
              >
                Apagar comentário
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
