import React, {Component} from "react";
import "./Header.css"

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">React каточки памяти</div>
        <div>
          <button className="button-restart" onClick={this.props.reset}>
            Начать с начала
          </button>
        </div>
        <div className="title">
          Попытки: {this.props.numStep}
        </div>
      </header>
    )
  }
}