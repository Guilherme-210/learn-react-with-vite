import { useState } from "react"
import styles from "./ToDoList.module.css"

export default function ToDoList() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [descriptionValue, setDescriptionValue] = useState("")
  const [inputStyle, setInputStyle] = useState(styles.input)
  const [descriptionStyle, setDescriptionStyle] = useState(styles.input)
  const [showDescription, setShowDescription] = useState(false)

  function handleSubmit(ev) {
    ev.preventDefault()

    console.log("Adicionando tarefa...")
    if (inputValue.trim() === "") {
      console.error("Digite uma tarefa!")
      setInputStyle(styles.inputError)
      setTimeout(() => {
        setInputStyle(styles.input)
      }, 1000 * 3)
      return
    }
    setInputStyle(styles.inputCheckd)
    setTimeout(() => {
      setInputStyle(styles.input)
    }, 1000 * 3)

    if (showDescription) {
      if (descriptionValue.trim() === "") {
        console.error("Digite uma descrição!")
        setDescriptionStyle(styles.inputError)
        setTimeout(() => {
          setDescriptionStyle(styles.input)
        }, 1000 * 3)
        return
      }
      setDescriptionStyle(styles.inputCheckd)
      setTimeout(() => {
        setDescriptionStyle(styles.input)
      }, 1000 * 3)
    }

    const task = {
      id: Date.now(),
      title: inputValue,
      description: showDescription ? descriptionValue : showDescription,
    }

    setTasks((state) => {
      const newState = [task, ...state]
      localStorage.setItem("obc-tasks", JSON.stringify(newState))
      return newState
    })

    console.log("Tarefa adicionada com sucesso:", task)
    console.log("Tarefas:", tasks)

    setInputValue("")
    setDescriptionValue("")
    setShowDescription(false)
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>To-Do List</h2>
        <p>Esta é uma lista de tarefas simples.</p>
        <p>Você pode adicionar, remover e marcar tarefas como concluídas.</p>
        <p>Divirta-se!</p>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <h3>Adicionar tarefa</h3>
            <label htmlFor="input">Digite uma tarefa: </label>
            <input
              type="text"
              id="input"
              name="input"
              className={inputStyle}
              placeholder="Digite uma tarefa..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className={styles.descriptionContainer}>
            <label htmlFor="checkboxDescription">
              Gostaria de adicionar uma descrição?{" "}
              <input
                type="checkbox"
                id="checkboxDescription"
                name="checkboxDescription"
                className={styles.checkboxDescription}
                checked={showDescription}
                onChange={(e) => setShowDescription(e.target.checked)}
              />
            </label>
          </div>

          {showDescription && (
            <div className={styles.descriptionContainer}>
              <label htmlFor="description">Descrição: </label>
              <input
                type="text"
                id="description"
                name="description"
                className={descriptionStyle}
                placeholder="Digite uma descrição..."
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
              />
            </div>
          )}

          <button type="submit" className={styles.buttonStyle}>
            Adicionar
          </button>
        </form>
      </div>

      <div className={styles.content}>
        <h3>Tarefas</h3>
        <ul className={styles.ulList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.liList}>
              <span>{task.title}</span>
              {task.description && (
                <p className={styles.description}>{task.description}</p>
              )}
              <button
                className={styles.buttonRemove}
                onClick={() => {
                  setTasks((state) => {
                    const newState = state.filter((t) => t.id !== task.id)
                    localStorage.setItem("obc-tasks", JSON.stringify(newState))
                    return newState
                  })
                }}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
