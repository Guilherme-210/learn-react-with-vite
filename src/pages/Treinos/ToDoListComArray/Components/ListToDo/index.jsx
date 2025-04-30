export default function ListToDo({ ToDoList, styles, Title }) {
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
                  <label htmlFor={idInput}>
                    {ToDo.id}: {ToDo.tesk}
                  </label>
                  <span>
                    <input id={idInput} type="checkbox" />
                  </span>
                  <span>
                    <button id="deleteItem">Deletar</button>
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
