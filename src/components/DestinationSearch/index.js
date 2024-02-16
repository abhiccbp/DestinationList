import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchValue: ' '}

  onClickSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue} = this.state
    const {destinationsList} = this.props
    const result = destinationsList.filter(each =>
      each.name.includes(searchValue),
    )
    return (
      <div className="main">
        <div className="container1">
          <h1>Destination Search</h1>
          <div className="seachContainer">
            <input
              className="input"
              onChange={this.onClickSearch}
              type="search"
            />
            <img
              alt="search icon"
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="ulContainer">
            {result.map(each => (
              <DestinationItem destinationDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
