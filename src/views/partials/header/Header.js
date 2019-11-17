import React, { Component } from 'react';
import styled from 'styled-components';

import Navbar from 'atoms/Navbar';
import Image from 'atoms/Image';

import Slider from 'components/Slider';

import Button from 'styledComponents/Button';
import TinyContainer from 'styledComponents/TinyContainer';
import Search from '../search/Search';

import { slugifyText } from 'helpers/general';
import { HeaderColors } from 'helpers/theme';
import { general } from 'helpers/images';

import { getMenu, getSlider } from './_actions';

class Header extends Component {
  state = {
    menu: [],
    slides: [],
    searchOpened: false
  };

  componentDidMount() {
    this.getMenu();
    this.getSlider();
  }

  getSlider = async () => {
    const response = await getSlider({});

    if (response) {
      this.setState({
        ...this.state,
        slides: response.data
      });
    }
  };

  getMenu = async () => {
    const response = await getMenu({});

    if (response) {
      let data = response.data;

      let menu = [];
      data.map(val => {
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

  toggleSearch() {
    const { searchOpened } = this.state;

    this.setState({
      ...this.state,
      searchOpened: !searchOpened
    });
  }

  render() {
    const { menu, slides, searchOpened } = this.state;

    return (
      <StyledHeader>
        <Search opened={searchOpened} onClose={() => this.toggleSearch()} />
        <TinyContainer>
          <StyledNavbar>
            <Navbar links={menu} />
            <Button onClick={() => this.toggleSearch()}>
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
