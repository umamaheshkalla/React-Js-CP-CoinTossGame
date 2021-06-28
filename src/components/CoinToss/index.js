import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    activeImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    totalCount: 0,
    heads: 0,
    tails: 0,
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState({
        activeImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
    } else {
      this.setState({
        activeImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })

      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
    }
  }

  render() {
    const {activeImage, totalCount, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img
            alt="toss result"
            className="head-tail-image "
            src={activeImage}
          />
          <button className="button" onClick={this.onTossCoin} type="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="counts">Total:{totalCount}</p>
            <p className="counts">Heads:{heads}</p>
            <p className="counts">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
