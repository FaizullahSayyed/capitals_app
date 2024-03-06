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
  state = {selectedCountry: countryAndCapitalsList[0].id}

  findCountry = () => {
    const {selectedCountry} = this.state
    const foundCountry = countryAndCapitalsList.find(
      country => country.id === selectedCountry,
    )
    // console.log(foundCountry)
    return foundCountry.country
  }

  updateSelectedCountry = event => {
    const foundCountry = countryAndCapitalsList.find(
      c => c.id === event.target.value,
    )
    console.log(event.target.value)
    this.setState({selectedCountry: foundCountry.id})
  }

  render() {
    const selectedCountryName = this.findCountry()
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="dropdown-container">
            <select className="dropdown" onChange={this.updateSelectedCountry}>
              {countryAndCapitalsList.map(countryDetails => (
                <option key={countryDetails.id} value={countryDetails.id}>
                  {countryDetails.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of which country?</p>
          </div>
          <h1 className="country-name">{selectedCountryName}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
