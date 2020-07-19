import React, {Component} from 'react';
import Card from "./Card";
import "./Table.css"

class Table extends Component {
  render() {

    return (
      <div className="table">
        {
          this.props.desk.map((card) =>
            <Card icon={card.icon} />)
        }
      </div>
    );
  }
}

export default Table;