import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CounterApp extends Component {
  state = {textInput: '', characterList: []}

  onChangeInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {textInput} = this.state
    const inputData = {
      id: uuidv4(),
      character: textInput,
      characterLength: textInput.length,
    }
    this.setState(prevstate => ({
      characterList: [...prevstate.characterList, inputData],
      textInput: '',
    }))
  }

  render() {
    const {textInput, characterList} = this.state
    console.log(characterList)
    return (
      <div className="app-container">
        <div className="left-container">
          <h1 className="heading">
            Count the Characters like a <br /> Boss...
          </h1>
          {characterList <= 0 ? (
            <div className="no-character-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="no-user-img"
                alt="no user inputs"
              />
            </div>
          ) : (
            <ul className="character-counter-container">
              {characterList.map(item => (
                <li key={item.id}>
                  <p className="char-count">
                    {item.character} : {item.characterLength}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="right-container">
          <h2 className="desc">Character Counter</h2>
          <form className="input-container" onSubmit={this.onClickSubmit}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              value={textInput}
              className="text-input"
              onChange={this.onChangeInput}
            />
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default CounterApp
