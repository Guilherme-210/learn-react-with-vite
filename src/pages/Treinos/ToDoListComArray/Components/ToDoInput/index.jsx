export default function ToDoInput({ submitButton, styles }) {
  /*setSubmitButton, ToDoList,*/

  return (
    <div className={`${styles.divFlexRow} ${styles.divContent}`}>
      <div className={styles.divFlexColumn}>
        <label htmlFor="inputPush">Qual e a sua proxima tarefa?</label>
        <input type="text" id="inputPush" />
      </div>
      <button id="submit">{submitButton}</button>
      <button id="reset">Resetar</button>
    </div>
  )
}
