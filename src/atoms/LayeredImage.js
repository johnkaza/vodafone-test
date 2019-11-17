import React, { Component } from 'react';
import styled from 'styled-components';

class LayeredImage extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <ImageWrapper>
        <img src={src} alt={alt}></img>
        <ImageLayer></ImageLayer>
      </ImageWrapper>
    );
  }
}

const ImageWrapper = styled.div``;

const ImageLayer = styled.div``;

export default LayeredImage;
