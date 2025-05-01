import { useState } from "react"
import styles from "../../style.module.css"
import Button from "../../../../../Components/ComponentsButtons/Button"

export default function ToDoInput({
  submitButton,
  addTask,
  setDataBases,
}) {
  const [newTask, setNewTask] = useState("")

  function handleSubmit() {
    if (newTask.trim() !== "") {
      addTask(newTask)
      setNewTask("")
      console.log("Tarefa adicionada com sucesso!") // Feedback visual
    } else {
      console.log("Por favor, insira uma tarefa válida.") // Mensagem de erro
    }
  }

  return (
    <div className={styles.divFlexRow}>
        <div className={styles.formWrapper}>
          <label htmlFor="inputPush">Qual é a sua próxima tarefa?</label>
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
          <Button
            ClassName="followButton"
            id="submit"
            onClick={handleSubmit}
            Content={submitButton}
          />
          <Button
            ClassName="followButton"
            id="reset"
            onClick={() => setNewTask("")}
            Content="Resetar"
          />
      </div>

      <div className={styles.divContent}>
        <button
          className={styles.resetSistem}
          id="resetSystem"
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
