import React, { Component } from 'react';
import styled from 'styled-components';
import { navBarColors } from 'helpers/theme';

class Navbar extends Component {
  isActiveLink = path => window.location.pathname.indexOf(path) !== -1;

  render() {
    const { links } = this.props;
    return (
      <StyledList>
        {links &&
          links.map((val, key) => {
            return (
              <StyledLi key={key}>
                <StyledA
                  className={this.isActiveLink(val.path) ? 'active' : ''}
                  href={'/' + val.path}
                >
                  {val.title}
                </StyledA>
              </StyledLi>
            );
          })}
      </StyledList>
    );
  }
}

const StyledList = styled.ul`
  display: inline-block;
  list-style-type: none;
  padding: 0;
`;

const StyledLi = styled.li`
  padding: 8px;
  display: inline-block;
  width: auto;
`;

const StyledA = styled.a`
  color: white;
  position: relative;
  text-decoration: none;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 8px;
    height: 8px;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -16px;
    border-radius: 50%;
    background-color: ${navBarColors.linkHoverColor};
    visibililty: hidden;
    opacity: 0;
    transition: opacity 0.4s ease, background-color 0.4s ease;
  }

  &:hover {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }

  &.active {
    &::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default Navbar;
