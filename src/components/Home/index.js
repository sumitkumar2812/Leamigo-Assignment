import {Component} from 'react'

import './index.css'

const dummyData = [
  {id: 1, name: 'Car 1', available: true},
  {id: 2, name: 'Car 2', available: false},
  {id: 3, name: 'Car 3', available: true},
  {id: 4, name: 'Car 4', available: false},
  {id: 5, name: 'Car 5', available: true},
  {id: 6, name: 'Car 6', available: false},
  {id: 7, name: 'Car 7', available: true},
  {id: 8, name: 'Car 8', available: false},
  {id: 9, name: 'Car 9', available: true},
  {id: 10, name: 'Car 10', available: true},
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pointA: '',
      pointB: '',
      date: '',
      vehicles: [],
    }
  }

  handleSearch = () => {
    // Use the dummy data directly
    const {pointA, pointB, date} = this.state
    if (!pointA || !pointB || !date) {
      alert('Please fill in all the fields')
    } else {
      this.setState({vehicles: dummyData.filter(vehicle => vehicle.available)})
    }
  }

  render() {
    const {pointA, pointB, date, vehicles} = this.state
    return (
      <div className="container1">
        <h1 className="main-heading">Airport Transfer Booking</h1>
        <div className="container2">
          <div className="form-group">
            <label className="point-headings">
              Point A:
              <input
                type="text"
                value={pointA}
                onChange={e => this.setState({pointA: e.target.value})}
              />
            </label>
          </div>
          <img
            className="arrow-img"
            src="https://cdn-icons-png.flaticon.com/512/66/66831.png"
            alt="arrow"
          />

          <div className="form-group">
            <label className="point-headings">
              Point B:
              <input
                type="text"
                value={pointB}
                onChange={e => this.setState({pointB: e.target.value})}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="point-headings">
              Date:
              <input
                type="date"
                value={date}
                onChange={e => this.setState({date: e.target.value})}
              />
            </label>
          </div>
        </div>
        <div className="button-container">
          <button className="btn" type="button" onClick={this.handleSearch}>
            Search
          </button>
          <h2 className="available">Available Vehicles</h2>
          <ul className="vehicles-list">
            {vehicles.map(vehicle => (
              <li className="list-bar" key={vehicle.id}>
                {vehicle.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
