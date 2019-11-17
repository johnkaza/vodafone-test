import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'helpers/theme';
import history from 'utils/history';

import Button from 'styledComponents/Button';
import Image from 'atoms/Image';
import Input from 'atoms/Input';
import ListDropdown from 'atoms/ListDropdown';

import { general } from 'helpers/images';
import { slugifyText } from 'helpers/general';
import { getRoutes } from './_actions';

const INITIAL_SEARCH_VALUES = {
  list: [],
  selectedRoute: false,
  route: '',
  searchText: ''
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_SEARCH_VALUES;

    this.onFocus = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelectRoute = this.onSelectRoute.bind(this);
  }

  onFocus(e) {
    this.getRoutes();
  }

  onSelectRoute(val) {
    this.setState({
      ...this.state,
      list: [],
      selectedRoute: true,
      route: val,
      searchText: val.title
    });
  }

  getRoutes = async val => {
    const response = await getRoutes({ search: val });

    if (response) {
      this.setState({
        ...this.state,
        list: response.data
      });
    }
  };

  onChange(e) {
    const val = e.target.value;

    this.setState(
      {
        ...this.state,
        list: [],
        selectedRoute: false,
        route: '',
        searchText: val
      },
      () => {
        this.getRoutes(val);
      }
    );
  }

  goToRoute(val) {
    const { onClose } = this.props;

    this.setState(INITIAL_SEARCH_VALUES, () => {
      onClose();
      history.push('/' + slugifyText(val.title));
    });
  }

  render() {
    const { opened, onClose } = this.props;
    const { list, selectedRoute, searchText, route } = this.state;

    return (
      <SearchWrapper opened={opened}>
        <CloseWrapper>
          <Button onClick={onClose}>
            <Image src={general.close}></Image>
          </Button>
        </CloseWrapper>
        <SearchSectionWrapper>
          <SearchInputWrapper>
            <Input
              type="text"
              name="search"
              id="search"
              placeholder={'Search'}
              InputCss={InputCss}
              onChange={this.onChange}
              onFocus={this.onFocus}
              value={searchText}
            />
            <ListDropdown list={list} onClick={this.onSelectRoute} />
          </SearchInputWrapper>
          <Button disabled={!selectedRoute} onClick={() => this.goToRoute(route)}>
            <Image src={general.goTo}></Image>
          </Button>
        </SearchSectionWrapper>
      </SearchWrapper>
    );
  }
}

const InputCss = css`
  background-color: ${colors.shark};
  border-bottom: 1px solid ${colors.mineShaft};
  color: ${colors.white};
`;

const SearchWrapper = styled.div`
  z-index: 99999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${colors.shark};

  display: ${props => (props.opened && props.opened == true ? 'block' : 'none')};
`;

const CloseWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const SearchSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 70%;
  margin: 0 auto;
`;

const SearchInputWrapper = styled.div`
  width: 100%;
`;

export default Search;
