import React, { Component } from 'react';
import styled from 'styled-components';
import LayeredImage from 'atoms/LayeredImage';

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
