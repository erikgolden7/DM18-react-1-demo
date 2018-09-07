import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      list: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = e => this.setState({ name: e.target.value });

  handleClick() {
    const { list, name } = this.state;

    let newList = list.slice();
    // newList = ['Erik']
    newList.push(name);

    this.setState({ list: newList, name: '' });
  }

  render() {
    console.log('Name:', this.state.name);
    console.log('List:', this.state.list);

    let people = this.state.list.map((e, i, arr) => {
      return <li>{e}</li>;
    });

    return (
      <div>
        <h1>Welcome to my app</h1>
        <List />
        <p className="text">{this.state.name}</p>
        <input
          placeholder="Enter your name..."
          onChange={event => this.handleChange(event)}
          value={this.state.name}
        />
        <button onClick={this.handleClick}> Submit </button>
        <ul>{people}</ul>
      </div>
    );
  }
}

export default App;
