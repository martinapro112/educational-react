//smart/container/stateful component
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import TheoreticalBasis from './TheoreticalBasis';

class App extends Component {
	state = {
		persons: [
	    { name: 'Martina', height: 1.65 },
	    { name: 'Vladimir', height: 2.50 }
    ],
    currentPerson: 0
  }

  switchPersonHandler = (message) => {
    this.setState({ currentPerson: this.state.currentPerson ? 0 : 1 }); // merges the old and new state
    console.log(message);
    return;
  }
	
	render() {
		return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to an educational React app</h2>
        </div>
        <div className="App-content">
          <p className="App-content-title">Basic structures: smart and dumb component, state + props, children, handler</p>
          <Person
            height={ this.state.persons[this.state.currentPerson].height }
            name={ this.state.persons[this.state.currentPerson].name }
            click={ this.switchPersonHandler }
          >
            these are the children
          </Person>
          <button onClick={ this.switchPersonHandler }>switch person</button>
        </div>
        <div className="App-content">
          <TheoreticalBasis />
        </div>
      </div>);
    //OR onClick={this.switchPersonHandler.bind(this, 'Hello');}
    //OR onClick={() => return { console.log('Hello');}}
    //OR onClick={() => this.switchPersonHandler('Hello');}
  }
}

export default App;