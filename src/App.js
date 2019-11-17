import React, { Component } from 'react';
import GlobalStyles from 'styledComponents/Container';
import './App.css';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id="app-container">
        <GlobalStyles />
        {children}
      </div>
    );
  }
}

export default App;
