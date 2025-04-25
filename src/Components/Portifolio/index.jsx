import ButtonLink from "../ComponentsButtons/ButtonLink/index.jsx"
import "./style.css"

export default function Profile({ Perfil }) {
  return (
    <>
      <div className="divProfile">
        <div className="image">
          <img
            className="profileImage"
            src={Perfil.Avatar}
            alt={Perfil.AvatarAlt}
          />
          <h2>{Perfil.Name}</h2>
        </div>

        <div className="DivContent">
          <p>{Perfil.Bio}</p>
          <p>{Perfil.Email}</p>
          <p>{Perfil.Phone}</p>
        </div>

        <div className="divButtons">
          <ButtonLink
            className="prifileButtons"
            Content="GitHub"
            Id={1}
            Href={Perfil.GithubURL}
            Title="GitHub desse arquivo"
          />
          <ButtonLink
            className="prifileButtons"
            Content="Linkedin"
            Id={2}
            Href={Perfil.LinkedinURL}
            Title="Linkedin do criador"
          />
          <ButtonLink
            className="prifileButtons"
            Content="Twitter"
            Id={3}
            Href={Perfil.TwitterURL}
            Title="Twitter do criador"
          />
        </div>
      </div>
    </>
  )
}
