import { useState } from "react"
import styles from "../../style.module.css"

export default function ToDoInput({ submitButton, addTask }) {
  const [newTask, setNewTask] = useState("")

    function handleSubmit() {
      if (newTask.trim() !== "") {
        addTask(newTask)
        setNewTask("")
      }
    }

  return (
    <div className={`${styles.divFlexRow} ${styles.divContent}`}>
      <div className={styles.divFlexColumn}>
        <label htmlFor="inputPush">Qual e a sua proxima tarefa?</label>
        <input
          type="text"
          id="inputPush"
          value={newTask}
          onChange={(ev) => setNewTask(ev.target.value)}
        />
      </div>
      <button id="submit" onClick={handleSubmit}>
        {submitButton}
      </button>
      <button id="reset" onClick={() => setNewTask("")}>
        Resetar
      </button>
    </div>
  )
}
