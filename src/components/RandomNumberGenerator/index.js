// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerateNum = () => {
    const num = Math.ceil(Math.random(1) * 100)
    this.setState({
      randomNumber: num,
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="details">
            Generate a Random Number in the Range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.onGenerateNum}>
            Generate
          </button>
          <p className="count">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
