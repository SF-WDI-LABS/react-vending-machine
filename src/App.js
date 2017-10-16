import React, { Component } from 'react';
import Item from './components/Item'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Coca Cola",
          price: 50,
          quantity: 10,
          code: "A1"
        }, {
          name: "Sprite",
          price: 50,
          quantity: 10,
          code: "B2"
        }, {
          name: "Mr. Pibb",
          price: 75,
          quantity: 10,
          code: "C3"
        }
      ],
      balance: 0
    };
  }

  addBalance(event, amount) {
    event.preventDefault();
    this.setState({
      balance: this.state.balance + amount
    });
  }

  render() {
    let itemElements = this.state.items.map((e,i) => <Item data={e} key={i} />)
    return (
      <div className="App">
        <p className="display -sm-width">{this.state.balance}</p>
        <button className="button -yellow" onClick={(e) => this.addBalance(e, 5)}>05c</button>
        <button className="button -blue" onClick={(e) => this.addBalance(e, 10)}>10c</button>
        <button className="button -green" onClick={(e) => this.addBalance(e, 25)}>25c</button>
        {itemElements}
      </div>
    );
  }
}

export default App;
