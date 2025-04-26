import {
  PerfilBio,
  PerfilImage,
  PerfilButtons,
} from "./Components/PerfilBio.jsx"
import styles from "./style.module.css"

export default function Profile({ Perfil }) {
  return (
    <>
      <div className={styles.divProfile}>
        <PerfilImage Perfil={Perfil} />

        <PerfilBio Perfil={Perfil} />

        <PerfilButtons Perfil={Perfil} />
      </div>
    </>
  )
}
