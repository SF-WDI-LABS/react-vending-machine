import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Coca Cola",
          price: 50,
          quantity: 10
        }, {
          name: "Sprite",
          price: 50,
          quantity: 10
        }, {
          name: "Mr. Pibb",
          price: 75,
          quantity: 10
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <p className="display -sm-width">INSERT COIN</p>
        <button className="button -yellow">05c</button>
        <button className="button -blue">10c</button>
        <button className="button -green">25c</button>
      </div>
    );
  }
}

export default App;
