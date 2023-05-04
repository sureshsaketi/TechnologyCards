import './index.css'

const TechnologyCard = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}

export default TechnologyCard
