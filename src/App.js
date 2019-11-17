import React, { Component } from 'react';
import GlobalStyles from 'styledComponents/Container';
import './App.css';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id="app-container">
        {children}
        <GlobalStyles />
      </div>
    );
  }
}

export default App;
