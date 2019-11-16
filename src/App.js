import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id="app-container" className="container">
        {children}
      </div>
    );
  }
}

export default App;
