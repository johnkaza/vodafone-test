import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { src } = this.props;
    return <img src={src}></img>;
  }
}

export default Image;
