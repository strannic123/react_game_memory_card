import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Table from "./Table";
import makeDesk from "./utils/makeDesk";


const initialState = () => {
  const desk = makeDesk();
  return {
    desk
  };
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Table />
      </div>

    )
  }
}

export default App;
