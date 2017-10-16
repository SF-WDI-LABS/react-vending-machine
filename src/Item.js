import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <h4>{this.props.item.name}</h4>
    )
  }
}

export default Item;
