import Button from "../Button"
import "./style.css"

export default function Profile({
  Avatar,
  AvatarAlt,
  Name,
  Bio,
  Phone,
  Email,
  GithubURL,
  LinkedinURL,
  TwitterURL,
}) {
  return (
    <>
      <div className="divProfile">
        <div className="image">
          <img className="profileImage" src={Avatar} alt={AvatarAlt} />
          <h2>{Name}</h2>
        </div>

        <div className="DivContent">
          <p>{Bio}</p>
          <p>{Phone}</p>
          <p>{Email}</p>
        </div>

        <div className="divButtons">
          <Button
            Content="GitHub"
            Id={1}
            Href={GithubURL}
            Title="GitHub desse arquivo"
          />
          <Button
            Content="Linkedin"
            Id={2}
            Href={LinkedinURL}
            Title="Linkedin do criador"
          />
          <Button
            Content="Twitter"
            Id={3}
            Href={TwitterURL}
            Title="Twitter do criador"
          />
        </div>
      </div>
    </>
  )
}
