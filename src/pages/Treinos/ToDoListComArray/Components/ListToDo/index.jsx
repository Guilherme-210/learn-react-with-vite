export default function ListToDo({
  ToDoList,
  styles,
  Title,
  dellTasks,
  doneTasks,
}) {
  return (
    <div className={styles.divFlexColumn}>
      <div className={styles.divContentList}>
        <h2>{Title}</h2>
        <ul className={styles.ulList}>
          {ToDoList.map((ToDo, index) => {
            const idInput = `itenList_${Title}_${index}_${ToDo.id}`

            return (
              <div key={index}>
                <li className={`${styles.divFlexRow}`}>
                  <label htmlFor={idInput} id={ToDo.id}>
                    {ToDo.position}: {ToDo.task}
                  </label>
                  <span>
                    <input
                      id={idInput}
                      type="checkbox"
                      onClick={() => doneTasks(ToDo.id)}
                    />
                  </span>
                  <span>
                    <button
                      onClick={() => dellTasks(ToDo.id)}
                      id={`deleteItem${ToDo.id}`}
                    >
                      Deletar
                    </button>
                  </span>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
