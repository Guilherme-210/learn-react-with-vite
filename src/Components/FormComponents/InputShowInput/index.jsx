import styles from "../style.module.css"

export default function ShowInput({ showInput, setShowInput }) {
  return (
    <div className="styles.divFlexRow">
      <label htmlFor="showInput" className={styles.LabelCheckbox}>
        Deseja customizar o tamanho da sua senha?
      </label>
      <input
        id="showInput"
        type="checkbox"
        value={showInput}
        className={styles.CheckboxSwich}
        onChange={() => setShowInput((currentState) => !currentState)}
      />
    </div>
  )
}
