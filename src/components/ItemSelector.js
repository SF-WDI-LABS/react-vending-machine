import React, { Component } from 'react';

class ItemSelector extends Component {
  inputChanged(event) {
    console.log("they typed", event.target.value);
    // tell the App component that we got some data
    this.props.onSelectionTyped(event.target.value);
  }
  render() {
    return (
      <div>
        <label htmlFor="selector">SELECT ITEM:</label><input type="text" id="selector" maxLength="2" onInput={(e) => this.inputChanged(e)} />
      </div>
    );
  }
}

export default ItemSelector;
