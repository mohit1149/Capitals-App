import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {country: 'India'}

  onChangeSearchInput = event => {
    const changeValue = event.target.value

    const filteredData = countryAndCapitalsList.find(
      eachCountry => eachCountry.id.toLowerCase() === changeValue.toLowerCase(),
    )
    this.setState({country: filteredData.country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1>Countries And Capitals</h1>
          <div className="bg-select-container">
            <select
              className="select-container"
              onChange={this.onChangeSearchInput}
            >
              {countryAndCapitalsList.map(countryAndCapitalsListDetails => (
                <option
                  key={countryAndCapitalsListDetails.id}
                  value={countryAndCapitalsListDetails.id}
                  className=""
                >
                  {countryAndCapitalsListDetails.capitalDisplayText}
                </option>
              ))}
            </select>
            <span className="span-name"> is capital of which country?</span>
            <p className="paragraph">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
