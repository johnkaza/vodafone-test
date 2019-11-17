import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';

import 'swiper/css/swiper.css';

import StyledH1 from 'styledComponents/StyledH1';

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
      <Swiper {...params}>
        {slides.map((val, key) => {
          return (
            <StyledSlide key={key}>
              <StyledH1>{val.title}</StyledH1>
              <div>{val.subtitle}</div>
            </StyledSlide>
          );
        })}
      </Swiper>
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
