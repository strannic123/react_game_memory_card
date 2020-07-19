import React, {Component} from 'react';
import "./Card.css"
import ReactCardFlip from 'react-card-flip';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="card">
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div className="front-card">

            <button onClick={this.handleClick}>Click to flip</button>
          </div>

          <div className="back-card">
            <i className={`fa ${this.props.icon} fa-4x `}></i>
            <button onClick={this.handleClick}>Click to back</button>

          </div>
        </ReactCardFlip>

      </div>
    );
  }
}

export default Card;