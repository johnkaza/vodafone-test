import React, { Component } from 'react';
import styled from 'styled-components';

class LayeredImage extends Component {
  render() {
    const { src } = this.props;
    return (
      <ImageWrapper>
        <img src={src}></img>
        <ImageLayer></ImageLayer>
      </ImageWrapper>
    );
  }
}

const ImageWrapper = styled.div``;

const ImageLayer = styled.div``;

export default LayeredImage;
