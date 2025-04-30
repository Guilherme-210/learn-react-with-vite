import { useState } from "react"
import styles from "../../style.module.css"

export default function ToDoInput({ submitButton, addTask, setDataBases }) {
  const [newTask, setNewTask] = useState("")

  function handleSubmit() {
    if (newTask.trim() !== "") {
      addTask(newTask)
      setNewTask("")
    }
  }

  return (
    <div className={styles.divFlexRow}>
      <div className={styles.divContent}>
        <div className={styles.divFlexRow.divContent}>
          <label htmlFor="inputPush">Qual é a sua prôxima tarefa?</label>
          <input
            type="text"
            id="inputPush"
            value={newTask}
            onChange={(ev) => setNewTask(ev.target.value)}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                handleSubmit()
              }
            }}
          />
          <button id="submit" onClick={handleSubmit}>
            {submitButton}
          </button>
          <button id="reset" onClick={() => setNewTask("")}>
            Resetar
          </button>
        </div>
      </div>
      <div>
        <button
          className={styles.resetSistem}
          id="resetSisten"
          onClick={() => {
            setNewTask("")
            setDataBases()
          }}
        >
          Resetar Lista
        </button>
      </div>
    </div>
  )
}
