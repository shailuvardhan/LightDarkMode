import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onClickedButton = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const text = isDark ? 'Light Mode' : 'Dark Mode'
    const property = isDark ? 'dark-mode' : 'light-mode'

    return (
      <div className="bg-container">
        <div className={`card ${property}`}>
          <h1 className={`${property}`}>Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.onClickedButton}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
