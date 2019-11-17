import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from 'atoms/Navbar';
import Image from 'atoms/Image';

import Slider from '../../components/Slider';

import Button from 'styledComponents/Button';
import TinyContainer from 'styledComponents/TinyContainer';

import { slugifyText } from 'helpers/general';
import { HeaderColors } from 'helpers/theme';
import { general } from 'helpers/images';

import { getMenu } from './_actions';

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
  state = {
    menu: []
  };

  componentDidMount() {
    this.getMenu();
  }

  getMenu = async () => {
    const response = await getMenu({});

    if (response) {
      let data = response.data;

      let menu = [];
      data.map(val => {
        console.log(slugifyText(val.title), 'slug');

        menu = [
          ...menu,
          {
            ...val,
            path: slugifyText(val.title)
          }
        ];
      });

      this.setState({
        ...this.state,
        menu: menu
      });
    }
  };

  render() {
    const { menu } = this.state;

    return (
      <StyledHeader>
        <TinyContainer>
          <StyledNavbar>
            <Navbar links={menu} />
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
