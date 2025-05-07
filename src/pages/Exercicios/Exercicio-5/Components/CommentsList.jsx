import styles from "../style.module.css"

export default function CommentsList({ comments, deleteComment }) {
  return (
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
            <div key={comment.id} id={comment.id} className={styles.comment}>
              <h2>{comment.name}</h2>
              <a href={`mailto:${comment.email}`}>{comment.email}</a>
              <p>{comment.comment}</p>
              <button onClick={() => deleteComment(comment.id)}>
                Apagar comentário
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
