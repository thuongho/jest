import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render() {
    // data-test attribute so that everyone knows it is for testing and not to change it
    return (
      <div data-test='component-app'>
        {this.state.counter >= 0 ? (
          <h1 data-test='counter-display'>
            Displays the count {this.state.counter}
          </h1>
        ) : (
          <div data-test='error-message'>Counter cannot go below 0</div>
        )}
        <button
          data-test='increment-button'
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment counter
        </button>
        <button
          data-test='decrement-button'
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
