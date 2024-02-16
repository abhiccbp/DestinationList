import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="liCont">
      <img alt={name} className="img" src={imgUrl} />
      <p className="para">{name}</p>
    </li>
  )
}
export default DestinationItem
