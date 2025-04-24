import Button from "../Button";


export default function Card({ ImgFilme, TitleFilme, DescriptionFilme, Alt, index }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={ImgFilme} alt={Alt} />
      </div>
      <div className="card-content">
        <h2>{TitleFilme}</h2>
        <p>{DescriptionFilme}</p>
        <Button
          Href="#"
          Content="Comprar agora"
          Id={index}
          Title="Não faz nada!"
        />
        <Button
          Href="#"
          Content="Saiba mais Wikipedia"
          Id={index + 100}
          // Title="Não faz nada!"
        />
      </div>
    </div>
  )
}
