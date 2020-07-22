import React, {Component} from 'react';
import Card from "./Card";
import "./Table.css"

class Table extends Component {
  render() {

    return (
      <div className="table">
        {
          this.props.desk.map((card, index) => {
            const cardComparison = this.props.cardSelected.indexOf(card) > -1;
            return <Card
              key={index}
              icon={card.icon}
              cardComparison={cardComparison}
              selectCard={() => this.props.selectCard(card)}
              wasGuessed={card.wasGuessed}


            />
          })
        }
      </div>
    );
  }
}

export default Table;