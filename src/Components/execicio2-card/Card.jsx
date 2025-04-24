export default function Card({ ImgFilme, TitleFilme, DescriptionFilme, Alt }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={ImgFilme} alt={Alt} />
      </div>
      <div className="card-content">
        <h2>{TitleFilme}</h2>
        <p>{DescriptionFilme}</p>
        <button>Comprar agora</button>
      </div>
    </div>
  )
}
