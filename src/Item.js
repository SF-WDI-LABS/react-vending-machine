import React, { Component } from 'react';
import "./Item.css"

class Item extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.item.name} ({this.props.item.code})</h4>
        <div>{this.props.item.price} ({this.props.item.quantity} left)</div>
      </div>
    )
  }
}

export default Item;
