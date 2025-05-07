import { useState } from "react"
import CommentsList from "./Components/CommentsList.jsx"
import FormComments from "./Components/FormComments.jsx"
import ContentExplanation from "./Components/ContentExplanation.jsx"

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
    console.log("Deletando comentário!")
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
      comment: comment,
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
        <ContentExplanation />
      </div>

      <div className={styles.contentForm}>
        <FormComments
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          comment={comment}
          setComment={setComment}
          handleSubmit={handleSubmit}
        />

        <CommentsList
          comments={comments}
          setComments={setComments}
          deleteComment={deleteComment}
        />
      </div>
    </main>
  )
}
