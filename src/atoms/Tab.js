import React, { Component } from 'react';
import styled from 'styled-components';

class Tab extends Component {
  render() {
    const { currentId, id, children } = this.props;

    return <StyledTab visible={currentId == id}>{children}</StyledTab>;
  }
}

const StyledTab = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export default Tab;
