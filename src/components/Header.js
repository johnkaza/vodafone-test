import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from 'atoms/Navbar';
import Image from 'atoms/Image';

import Slider from './Slider';

import Button from 'styledComponents/Button';
import TinyContainer from 'styledComponents/TinyContainer';

import { navbarLinks } from 'helpers/general';
import { HeaderColors } from 'helpers/theme';
import { general } from 'helpers/images';

const slides = [
  {
    title: 'Slide 1',
    subtitle: `text for slide 1`
  },
  {
    title: 'Slide 2',
    subtitle: `text for slide 2`
  },
  {
    title: 'Slide 3',
    subtitle: `text for slide 3`
  }
];

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <TinyContainer>
          <StyledNavbar>
            <Navbar links={navbarLinks} />
            <Button>
              <Image src={general.search}></Image>
            </Button>
          </StyledNavbar>
        </TinyContainer>
        <Slider slides={slides} />
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  height: 304px;
  background-color: ${HeaderColors.bg};
  color: white;
`;

const StyledNavbar = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default Header;
