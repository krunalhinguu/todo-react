import React, { Component } from "react";
import ListItems from "./Components/ListItems/ListItems.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faTrash);

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (event) => {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text) {
      console.log("inside if");
      const items = [...this.state.items, newItem];
      this.setState({
        items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    console.log("Item deleted:", key);
    const filteredItems = this.state.items.filter((item) => item !== key);
    this.setState({
      items: filteredItems,
    });
  };

  updateItem = (text, key) => {
    const items = [...this.state.items];
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="app">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
        />
      </div>
    );
  }
}

export default App;
