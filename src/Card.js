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
      <div className="card" onClick={this.props.selectCard}>
        <ReactCardFlip isFlipped={this.props.cardComparison || this.props.wasGuessed} flipDirection="vertical">
          <div className="front-card" onClick={this.handleClick}>

            {/*<button onClick={this.handleClick}>Click to flip</button>*/}
          </div>

          <div className="back-card" onClick={this.handleClick}>
            <i className={`fa ${this.props.icon} fa-3x `}></i>
            {/*<button onClick={this.handleClick}>Click to back</button>*/}

          </div>
        </ReactCardFlip>

      </div>
    );
  }
}

export default Card;