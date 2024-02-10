import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {letters: ''}

  onCountLetters = event => {
    const {value} = event.target
    this.setState({letters: value})
  }

  render() {
    const {letters} = this.state
    return (
      <div className="appContainer">
        <div className="imgcontainer">
          <img
            className="imgCalculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="contentContainer">
          <h1 className="head">Calculate the Letters you enter</h1>
          <div>
            <div className='inputDiv'>
              <label className="label" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="text"
              className="inputel"
              onChange={this.onCountLetters}
              value={letters}
              id="phraseText"
              placeholder="Enter the phrase"
            />
            </div>
            <p className="calculatebtn">No.of letters: {letters.length}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
