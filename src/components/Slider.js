import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';

import 'swiper/css/swiper.css';

import H1 from 'styledComponents/H1';

const params = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  centeredSlides: true
};

class Slider extends Component {
  render() {
    const { slides } = this.props;

    return (
      <React.Fragment>
        {slides && slides.length > 0 ? (
          <Swiper {...params}>
            {slides.map((val, key) => {
              return (
                <StyledSlide key={key}>
                  <H1>{val.title}</H1>
                  <div>{val.subtitle}</div>
                </StyledSlide>
              );
            })}
          </Swiper>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}

const StyledSlide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export default Slider;
