import React, { Component } from 'react';
import Item from './Item.js';
import ItemSelector from './ItemSelector.js';
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
      balance: 0,
      selectedItem: null
    };
  }

  addBalance(amount) {
    this.setState({
      balance: this.state.balance + amount
    })
  }

  selectItem(code) {
    this.setState({
      selectedItem: this.state.items.find(item => item.code === code)
    });
  }

  dispenseItem() {
    if(this.state.selectedItem) {
      if (this.state.selectedItem.quantity < 1) {
        this.setState({
          errorMessage: "INSUFFICIENT QUANTITY"
        });
      } else if (this.state.selectedItem.price > this.state.balance) {
        this.setState({
          errorMessage: "INSUFFICIENT BALANCE"
        });
      } else {
        this.state.selectedItem.quantity--;
        this.setState({
          balance: this.state.balance - this.state.selectedItem.price,
          errorMessage: ""
        });
      }
    }
  }

  render() {
    let itemsComponents = this.state.items.map((item, index) => <Item item={item} key={index} />)

    let selectedItem = "";
    if(this.state.selectedItem) {
      selectedItem = (
        <div>SELECTED: {this.state.selectedItem.name}
          <button onClick={(e) => this.dispenseItem()}>DISPENSE</button>
        </div>);
    }
    return (
      <div className="App">
        <p className="display -sm-width">{this.state.balance || "INSERT COIN"}</p>
        <button className="button -yellow" onClick={(e) => this.addBalance(5)}>05c</button>
        <button className="button -blue" onClick={(e) => this.addBalance(10)}>10c</button>
        <button className="button -green" onClick={(e) => this.addBalance(25)}>25c</button>
        <ItemSelector onSelectionTyped={this.selectItem.bind(this)} />
        {selectedItem}
        {this.state.errorMessage}
        {itemsComponents}
      </div>
    );
  }
}

export default App;
