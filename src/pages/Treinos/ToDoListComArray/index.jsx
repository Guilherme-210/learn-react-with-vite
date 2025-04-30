import { useState } from "react"

import styles from "./style.module.css"
import ToDoInput from "./Components/ToDoInput/index.jsx"
import ListToDo from "./Components/ListToDo/index.jsx"

import {
  ToDoList,
  DellToDoList,
  DoneToDoList,
} from "../../../data/ToDoListsDatabases/index.js"

export default function ToDoListComArray() {
  const [submitButton, setSubmitButton] = useState("Submit")

  return (
    <>
      <main>
        <section className={`${styles.divFlexColumn} ${styles.sectionHeader}`}>
          <ToDoInput
            submitButton={submitButton}
            setSubmitButton={setSubmitButton}
            ToDoList={ToDoList}
            styles={styles}
          />
        </section>
        <section className={styles.sectionContent}>
          <ListToDo Title={"A fazer"} styles={styles} ToDoList={ToDoList} />
          <ListToDo Title={"Concluidos"} styles={styles} ToDoList={DoneToDoList} />
          <ListToDo Title={"Cancelados"} styles={styles} ToDoList={DellToDoList} />
        </section>
      </main>
    </>
  )
}
