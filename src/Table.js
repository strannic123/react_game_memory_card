import React, {Component} from 'react';
import Card from "./Card";
import "./Table.css"

class Table extends Component {
  render() {
    const cards = [1,2,3,4]
    return (
      <div className="table">
        {
          cards.map((card) =>
            <Card></Card>)
        }
      </div>
    );
  }
}

export default Table;