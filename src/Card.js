import React, {Component} from 'react';
import "./Card.css"

class Card extends Component {
  render() {
    return (
      <div className="card">
        <i className={`fa ${this.props.icon} fa-4x`}></i>
      </div>
    );
  }
}

export default Card;