import styles from "./style.module.css"

const themesList = [
  { name: "Ação", color: "action" },
  { name: "Aventura", color: "adventure" },
  { name: "Terror", color: "horror" },
  { name: "RPG", color: "rpg" },
  { name: "Corrida", color: "racing" },
  { name: "Esportes", color: "sports" },
]

export default function CheckboxThemes({
  selectedThemes,
  setSelectedThemes,
  placeholder,
}) {
  const toggleTheme = (theme) => {
    if (selectedThemes.includes(theme)) {
      setSelectedThemes(selectedThemes.filter((t) => t !== theme))
    } else {
      setSelectedThemes([...selectedThemes, theme])
    }
  }

  return (
    <div>
      <p>Themas</p>
      <div className={styles.containerCheckbox}>
        {themesList.map((theme) => (
          <label
            key={theme.name}
            className={`${styles.checkboxLabel} ${
              selectedThemes.includes(theme.name) ? styles[theme.color] : ""
            }`}
          >
            <input
              type="checkbox"
              value={theme.name}
              checked={selectedThemes.includes(theme.name)}
              onChange={() => toggleTheme(theme.name)}
              placeholder={placeholder}
            />
            {theme.name}
          </label>
        ))}
      </div>
    </div>
  )
}
