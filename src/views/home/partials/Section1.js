import React, { Component } from 'react';
import styled from 'styled-components';
import { general } from 'helpers/images';
import LayeredImage from 'atoms/LayeredImage';

const IMAGES_DATA = [{ src: general.search, title: 'Image title 1' }];

class Section1 extends Component {
  render() {
    return (
      <div>
        section1
        <Grid>
          <LayeredImage />
        </Grid>
      </div>
    );
  }
}

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100px 100px 100px;
`;

export default Section1;
