import { useState } from "react"
import styles from "./ToDoList.module.css"

export default function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const storageTasks = localStorage.getItem("obc-tasks")
    if (!storageTasks) return []
    return JSON.parse(storageTasks)
  })
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
      <section className={styles.content}>
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

          <div className={styles.checkboxContainer}>
            <div className={styles.checkboxDescriptionContainer}>
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
              <div className={styles.textDescriptionContainer}>
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
          </div>

          <button type="submit" className={styles.submitButton}>
            Adicionar
          </button>
        </form>
      </section>

      <section className={styles.contentTasks}>
        {tasks.length === 0 ? (
          <div>
            <div className={styles.TitleNoTasksContainer}>
              <h2 className={styles.title}>Lista de Tarefas</h2>
              <hr />
              <p className={styles.noTasks}>Nenhuma tarefa encontrada.</p>
            </div>
          </div>
        ) : (
          <div className={styles.tasksFoundContainer}>
            <div>
              <div className={styles.titleTasksFoundContainer}>
                <h2 className={styles.title}>Lista de Tarefas</h2>
                <p className={styles.tasksFound}>
                  {tasks.length === 1
                    ? "1 tarefa encontrada."
                    : `${tasks.length} tarefas encontradas.`}
                </p>
              </div>
            </div>

            <hr />

            <div className={styles.tasksContainer}>
              <ul className={styles.ulList}>
                {tasks.map((task) => (
                  <li key={task.id} className={styles.liList}>
                    <div className={styles.taskContainer}>
                      <span>{task.title}</span>
                    </div>

                    <div className={styles.descriptionContainer}>
                      {task.description && (
                        <span>
                          <p className={styles.description}>
                            {task.description}
                          </p>
                        </span>
                      )}
                    </div>

                    <div className={styles.buttonContainer}>
                      <button className={styles.buttonEdit}>
                        <ion-icon name="pencil-outline"></ion-icon>
                      </button>
                      <button
                        className={styles.buttonRemove}
                        onClick={() => {
                          setTasks((state) => {
                            const newState = state.filter(
                              (t) => t.id !== task.id
                            )
                            localStorage.setItem(
                              "obc-tasks",
                              JSON.stringify(newState)
                            )
                            return newState
                          })
                        }}
                      >
                        <ion-icon name="trash-outline"></ion-icon>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
