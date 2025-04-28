import Button from "../../ComponentsButtons/Button"
import ButtonLink from "../../ComponentsButtons/ButtonLink"

import styles from "./style.module.css"

export function PerfilImage({ Perfil }) {
  return (
    <div className={styles.DivImage}>
      <img
        className={styles.Image}
        src={Perfil.Avatar}
        alt={Perfil.AvatarAlt}
      />
      <Title>
        {Perfil.Name}
        <Button
          Content="Seguir"
          ClassName="followButton"
          Title={`Seguir ${Perfil.Name}`}
          Id={`followButton${Perfil.Name}`}
        />
      </Title>
    </div>
  )
}

export function Title({ children }) {
  return <h2>{children}</h2>
}

export function PerfilBio({ Perfil }) {
  return (
    <div className={styles.DivContent}>
      <p>{Perfil.Bio}</p>
      <p>{Perfil.Email}</p>
      <p>{Perfil.Phone}</p>
    </div>
  )
}

export function PerfilButtons({ Perfil }) {
  return (
    <div className={styles.divButtons}>
      <ButtonLink
        ClassName="prifileButtons"
        Content="GitHub"
        Id={1}
        Href={Perfil.GithubURL}
        Title="GitHub desse arquivo"
      />
      <ButtonLink
        ClassName="prifileButtons"
        Content="Linkedin"
        Id={2}
        Href={Perfil.LinkedinURL}
        Title="Linkedin do criador"
      />
      <ButtonLink
        ClassName="prifileButtons"
        Content="Twitter"
        Id={3}
        Href={Perfil.TwitterURL}
        Title="Twitter do criador"
      />
    </div>
  )
}
