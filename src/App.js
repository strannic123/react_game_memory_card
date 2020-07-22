import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Table from "./Table";
import makeDesk from "./utils/makeDesk";


const initialState = () => {
  const desk = makeDesk();
  return {
    desk,
    cardSelected: [],
    comparison: false,
    numStep: 0
  };
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  render() {
    return (
      <div className="App">
        <Header
          numStep={this.state.numStep}
          reset={() => this.reset()}
        />
        <Table
          desk={this.state.desk}
          cardSelected={this.state.cardSelected}
          selectCard={(card) => this.selectCard(card)}
        />
      </div>

    )
  }
  selectCard(card) {
    if(
      this.state.comparison || this.state.cardSelected.indexOf(card) > -1 ||
      card.wasGuessed
    ) {
      return;
    }
    const cardSelected = [...this.state.cardSelected, card]
    this.setState({
      cardSelected
    })
    if (cardSelected.length === 2){
      this.compareTwoCards(cardSelected);
    }
    }
  compareTwoCards(cardSelected){
    this.setState({comparison: true})

    setTimeout(() =>{
      const [firstCard, secondCard] = cardSelected;
      let desk = this.state.desk;

      if (firstCard.icon === secondCard.icon) {
        desk = desk.map((card) => {
          if (card.icon !== secondCard.icon) {
            return card;
          }

          return {...card, wasGuessed: true};
        })
      }
      this.whenWon(desk);
      this.setState({
        cardSelected: [],
        desk,
        comparison: false,
        numStep: this.state.numStep +1
      })

    }, 1000)
  };
  whenWon(desk) {

    if (
      desk.filter(card => !card.wasGuessed).length === 0
    ) {
      alert(`Тебе понадобилось ${this.state.numStep} попыток!`);
    }
      }

  reset() {
    this.setState(
      initialState()
    );
  }

}

export default App;
