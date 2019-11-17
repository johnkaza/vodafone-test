import React, { PureComponent } from 'react';

class Icon extends PureComponent {
  render() {
    const { path } = this.props;

    return <img src={path}></img>;
  }
}
