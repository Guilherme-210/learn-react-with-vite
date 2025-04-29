export default function InputPasswordSize({ passwordSize, setPasswordSize }) {
  return (
    <div className="styles.divFlexRow">
      <label htmlFor="passwordSize">Tamanho da senha:</label>
      <input
        id="passwordSize"
        name="passwordSize"
        type="number"
        placeholder="Quantos caracteres? (De 1 a 100)"
        min={1}
        value={passwordSize}
        onChange={(ev) => setPasswordSize(Number(ev.target.value))}
      />
    </div>
  )
}