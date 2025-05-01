import { useState } from "react"

import styles from "./style.module.css"
import ToDoInput from "./Components/ToDoInput"
import ListToDo from "./Components/ListToDo"

export default function ToDoListComArray() {
  const [submitButton, setSubmitButton] = useState("Submit")
  const [dataTasks, setDataTasks] = useState([])
  const [dataDellTasks, setDataDellTasks] = useState([])
  const [dataDoneTasks, setDataDoneTasks] = useState([])

  function setDataBases() {
    setDataTasks([])
    setDataDellTasks([])
    setDataDoneTasks([])
  }

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      position: dataTasks.length + 1,
      task: taskText,
      checked: false,
    }

    setDataTasks((ev) => [...ev, newTask])
  }

  function toggleCheckbox(id) {
    setDataTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    )
  }

  function dellTasks(id) {
    const taskToDelete = dataTasks.find((t) => t.id === id)
    if (!taskToDelete) return

    let updatedTasks = dataTasks.filter((t) => t.id !== id)
    setDataTasks(updatedTasks)
    setDataDellTasks((ev) => [...ev, taskToDelete])
  }

  function doneTasks(id) {
    const taskToDone = dataTasks.find((t) => t.id === id)
    if (!taskToDone) return

    const updatedTasks = dataTasks.filter((t) => t.id !== id)
    setDataTasks(updatedTasks)

    setDataDoneTasks((ev) => [...ev, taskToDone])
  }

  return (
    <main>
      <section className={`${styles.divFlexColumn} ${styles.sectionHeader}`}>
        <ToDoInput
          addTask={addTask}
          submitButton={submitButton}
          setSubmitButton={setSubmitButton}
          styles={styles}
          setDataBases={setDataBases}
        />
      </section>

      <section className={styles.sectionContent}>
        <ListToDo
          Title={"A fazer"}
          doneTasks={doneTasks}
          dellTasks={dellTasks}
          toggleCheckbox={toggleCheckbox}
          styles={styles}
          ToDoList={dataTasks}
        />
        <ListToDo
          Title={"Concluidos"}
          doneTasks={doneTasks}
          dellTasks={dellTasks}
          styles={styles}
          ToDoList={dataDoneTasks}
        />
        <ListToDo
          Title={"Cancelados"}
          doneTasks={doneTasks}
          dellTasks={dellTasks}
          styles={styles}
          ToDoList={dataDellTasks}
        />
      </section>
    </main>
  )
}
