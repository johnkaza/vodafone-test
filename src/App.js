import React, { Component } from 'react';

class App extends Component {
  render() {
    const { children } = this.props;

    return <div id="app-container">{children}</div>;
  }
}

export default App;
